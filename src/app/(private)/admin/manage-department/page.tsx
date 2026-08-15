'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AdminContent from '@/core/components/admin/organisms/admin-content';
import {
  EmptyState,
  ManageHeader,
} from '@/core/components/admin/molecules/admin-manage-header';
import { useDepartments } from '@/services/department/department.query';
import {
  updateDepartmentDetails,
  syncDepartmentPhotos,
  getMyDepartments,
} from '@/services/department/department.action';
import type { TDepartmentResponse } from '@/services/department/department.type';
import { departmentList, getRequiredPhotoSlots } from '@/data/department-list';
import { uploadImage } from '@/libs/upload/cloudinary';
import { Save, Image as ImageIcon, Sparkles, Building2, Upload, Loader2, ShieldCheck, Lock } from 'lucide-react';

const DEFAULT_DEPARTMENTS = departmentList.map((d) => ({
  slug: d.slug,
  name: d.departmentName,
  description: d.shortDesc,
}));

export default function ManageDepartmentPage() {
  const { data: apiDepartments = [], isLoading, refetch } = useDepartments();

  const [isSuperUser, setIsSuperUser] = useState<boolean>(true);
  const [allowedDepartments, setAllowedDepartments] = useState<typeof DEFAULT_DEPARTMENTS>(DEFAULT_DEPARTMENTS);
  const [selectedSlug, setSelectedSlug] = useState<string>('ppm');
  const [selectedDept, setSelectedDept] = useState<TDepartmentResponse | null>(null);

  // Form states
  const [description, setDescription] = useState<string>('');
  const [photos, setPhotos] = useState<{ id?: string; namaFoto: string; url: string }[]>([]);

  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [isSavingDesc, setIsSavingDesc] = useState<boolean>(false);
  const [isSavingPhotos, setIsSavingPhotos] = useState<boolean>(false);

  // Fetch current user's permitted departments
  useEffect(() => {
    async function loadPermissions() {
      const res = await getMyDepartments();
      setIsSuperUser(res.isSuperUser);

      if (res.isSuperUser) {
        setAllowedDepartments(DEFAULT_DEPARTMENTS);
      } else if (res.departments.length > 0) {
        const allowedSlugs = new Set(
          res.departments.map((d) => (d.slug || d.name).toLowerCase())
        );
        const filtered = DEFAULT_DEPARTMENTS.filter((d) =>
          allowedSlugs.has(d.slug.toLowerCase()) || allowedSlugs.has(d.name.toLowerCase())
        );
        setAllowedDepartments(filtered.length > 0 ? filtered : DEFAULT_DEPARTMENTS);
        if (filtered.length > 0) {
          setSelectedSlug(filtered[0].slug);
        }
      }
    }
    loadPermissions();
  }, []);

  // Combine API departments with static list
  const activeDepartments = DEFAULT_DEPARTMENTS.map((def) => {
    const found = apiDepartments.find(
      (d) => d.slug?.toLowerCase() === def.slug.toLowerCase() || d.name.toLowerCase() === def.name.toLowerCase()
    );
    return {
      id: found?.id || '',
      name: def.name,
      slug: def.slug,
      description: found?.description || def.description,
      user_id: found?.user_id || '',
      fotoDepartements: found?.fotoDepartements || [],
    };
  });

  useEffect(() => {
    const current = activeDepartments.find((d) => d.slug === selectedSlug);
    if (current) {
      setSelectedDept(current as TDepartmentResponse);
      setDescription(current.description || '');

      const requiredSlots = getRequiredPhotoSlots(selectedSlug);
      const apiFotoList = current.fotoDepartements || [];
      const staticData = departmentList.find((d) => d.slug === selectedSlug);
      const staticPhotos = (staticData?.photos?.desktop || []).map((p) => ({
        namaFoto: p.title,
        url: p.imgUrl,
      }));

      // Bind each template slot to existing photo or fallback
      const templatePhotos = requiredSlots.map((slot) => {
        const foundApi = apiFotoList.find(
          (p) => p.namaFoto.toUpperCase().trim() === slot.toUpperCase().trim()
        );
        if (foundApi && foundApi.url) {
          return { id: foundApi.id, namaFoto: slot, url: foundApi.url };
        }

        const foundStatic = staticPhotos.find(
          (p) => p.namaFoto.toUpperCase().trim() === slot.toUpperCase().trim()
        );
        return { namaFoto: slot, url: foundStatic?.url || '' };
      });

      setPhotos(templatePhotos);
    }
  }, [selectedSlug, apiDepartments]);

  const handleSaveDescription = async () => {
    const targetIdOrSlug = selectedDept?.id || selectedSlug;

    setIsSavingDesc(true);
    try {
      const res = await updateDepartmentDetails({
        id: targetIdOrSlug,
        description,
        slug: selectedSlug,
      });

      if (res.ok) {
        alert('Deskripsi departemen berhasil disimpan!');
        refetch();
      } else {
        alert(res.message || 'Gagal menyimpan deskripsi');
      }
    } catch {
      alert('Terjadi kesalahan saat menyimpan');
    } finally {
      setIsSavingDesc(false);
    }
  };

  const handlePhotoUrlChange = (index: number, newUrl: string) => {
    const updated = [...photos];
    updated[index] = { ...updated[index], url: newUrl };
    setPhotos(updated);
  };

  const handleFileUpload = async (index: number, file: File) => {
    setUploadingIndex(index);
    try {
      const cloudinaryUrl = await uploadImage(file);
      handlePhotoUrlChange(index, cloudinaryUrl);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Gagal mengunggah foto ke Cloudinary');
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleSavePhotos = async () => {
    const targetIdOrSlug = selectedDept?.id || selectedSlug;

    setIsSavingPhotos(true);
    try {
      const res = await syncDepartmentPhotos(
        targetIdOrSlug,
        photos.map((p) => ({ namaFoto: p.namaFoto, url: p.url }))
      );

      if (res.ok) {
        alert(`Foto-foto departemen ${selectedDept?.name || selectedSlug.toUpperCase()} berhasil disimpan dan diperbarui di publik!`);
        refetch();
      } else {
        alert(res.message || 'Gagal menyinkronkan foto departemen');
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Terjadi kesalahan saat menyimpan foto');
    } finally {
      setIsSavingPhotos(false);
    }
  };

  const requiredSlots = getRequiredPhotoSlots(selectedSlug);

  return (
    <AdminContent className="space-y-8">
      <ManageHeader title="Setting Profil & Foto Departemen" />

      {isLoading && <EmptyState text="Memuat data departemen..." />}

      {/* Select Department Tabs - Only visible for Super Admin */}
      {isSuperUser && (
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-purple-300 mr-2">
            <ShieldCheck className="size-4 text-emerald-400" />
            <span>Super Admin Access</span>
          </div>

          {allowedDepartments.map((dept) => {
            const isSelected = dept.slug === selectedSlug;
            return (
              <button
                key={dept.slug}
                type="button"
                onClick={() => setSelectedSlug(dept.slug)}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-r from-violet-600 to-purple-800 text-white shadow-lg scale-105'
                    : 'bg-white/5 text-violet-200 hover:bg-white/15'
                }`}
              >
                {dept.name}
              </button>
            );
          })}
        </div>
      )}

      {selectedDept && (
        <div className="space-y-8">
          {/* Header Info */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="size-8 text-purple-400" />
              <div>
                <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
                  Departemen {selectedDept.name}
                </h2>
                <p className="text-sm text-purple-200">
                  URL Public: <span className="font-mono text-cyan-300">/department/{selectedSlug}</span>
                  <span className="ml-4 font-bold text-amber-300">
                    ({selectedSlug === 'dph' ? 'Template 3 Cards DPH' : 'Template 5 Cards Standard'})
                  </span>
                </p>
              </div>
            </div>

            {/* Edit Description Form */}
            <div className="space-y-2 pt-2">
              <label className="block text-sm font-semibold text-violet-200">Deskripsi / Singkatan Departemen:</label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-black/30 p-4 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                placeholder="Masukkan deskripsi departemen..."
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveDescription}
                  disabled={isSavingDesc}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-2.5 font-bold text-white shadow-md hover:brightness-110 active:scale-95 disabled:opacity-50"
                >
                  <Save className="size-4" />
                  {isSavingDesc ? 'Menyimpan...' : 'Simpan Deskripsi'}
                </button>
              </div>
            </div>
          </div>

          {/* Photo Gallery Template Manager */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <ImageIcon className="size-7 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Kelola Template Foto ({requiredSlots.length} Card)</h3>
                  <p className="text-xs text-purple-300">
                    {selectedSlug === 'dph'
                      ? 'Template DPH: SEKUM & WASEKUM, BENDUM & WABENDUM, KETUA, WAKIL I, WAKIL II'
                      : 'Template Departemen: FULLTEAM, KETUA, WAKIL, SEKRETARIS, ANGGOTA'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleSavePhotos}
                disabled={isSavingPhotos || uploadingIndex !== null}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-2.5 font-bold text-white shadow-lg hover:brightness-110 active:scale-95 disabled:opacity-50"
              >
                <Sparkles className="size-4" />
                {isSavingPhotos ? 'Menyimpan Foto...' : 'Simpan Semua Foto ke API'}
              </button>
            </div>

            {/* Grid of Fixed Template Photo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {photos.map((item, index) => {
                const isUploading = uploadingIndex === index;
                return (
                  <div
                    key={item.namaFoto}
                    className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/50 p-4 transition-all hover:border-purple-400 space-y-3"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-extrabold text-purple-300 uppercase tracking-wider text-xs bg-purple-900/60 px-2.5 py-1 rounded-md">
                        CARD {index + 1}: {item.namaFoto}
                      </span>
                    </div>

                    {/* Image Preview Box */}
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
                      {isUploading ? (
                        <div className="flex flex-col items-center gap-2 text-purple-300">
                          <Loader2 className="size-8 animate-spin text-purple-400" />
                          <span className="text-xs font-semibold">Mengunggah ke Cloudinary...</span>
                        </div>
                      ) : item.url ? (
                        <Image
                          src={item.url}
                          alt={item.namaFoto}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="text-center p-4">
                          <Upload className="size-8 text-purple-400/60 mx-auto mb-1" />
                          <span className="text-xs text-purple-300/70 font-semibold">Belum ada foto ({item.namaFoto})</span>
                        </div>
                      )}
                    </div>

                    {/* URL Input */}
                    <div>
                      <label className="block text-[11px] font-semibold text-purple-200 mb-1">URL Foto (Cloudinary / Path):</label>
                      <input
                        type="text"
                        value={item.url}
                        onChange={(e) => handlePhotoUrlChange(index, e.target.value)}
                        placeholder="https://res.cloudinary.com/..."
                        className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>

                    {/* File Upload Input */}
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isUploading}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleFileUpload(index, file);
                          }
                        }}
                        className="text-[10px] text-purple-300 file:mr-2 file:rounded-md file:border-0 file:bg-purple-700/80 file:px-2.5 file:py-1 file:text-[10px] file:font-semibold file:text-white hover:file:bg-purple-600 disabled:opacity-50"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </AdminContent>
  );
}
