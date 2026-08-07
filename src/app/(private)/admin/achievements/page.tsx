"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminSection from "@/core/components/admin/organisms/admin-section";
import AdminDescriptionSection from "@/core/components/admin/organisms/admin-description-section";

import AdminUpload from "@/core/components/admin/molecules/admin-upload";
import AdminField from "@/core/components/admin/molecules/admin-field";
import AdminFieldRow from "@/core/components/admin/molecules/admin-field-row";

import AdminInput from "@/core/components/admin/atoms/admin-input";
import AdminSelect from "@/core/components/admin/atoms/admin-select";
import AdminDatePicker from "@/core/components/admin/atoms/admin-date-picker";

import AdminList from "@/core/components/admin/organisms/admin-list";

import {
  useAchievements,
  useCreateAchievement,
  useDeleteAchievement,
  useUpdateAchievement,
} from "@/services/hmif/hmif.query";
import { toIsoDate, uploadImage } from "@/utils/cloudinary.util";

import { achievementSchema, AchievementFormValues } from "./schema";

export default function AchievementPage() {
  const form = useForm<AchievementFormValues>({
    resolver: zodResolver(achievementSchema),
    defaultValues: {
      namaKegiatan: "",
      penyelenggara: "",
      detailPenyelenggara: "",
      lokasiEvent: "",
      tingkat: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      description: "",
    },
  });

  const imageFile = form.watch("image");

  const preview = useMemo(() => {
    if (!imageFile || !(imageFile instanceof File)) return undefined;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const { data: achievements = [], isLoading, error } = useAchievements();

  const createAchievement = useCreateAchievement();
  const updateAchievement = useUpdateAchievement();
  const deleteAchievement = useDeleteAchievement();

  const isMutating =
    createAchievement.isPending ||
    updateAchievement.isPending ||
    deleteAchievement.isPending;

  const buildPayload = async (data: AchievementFormValues) => {
    // ponytail: tabel Achievement tidak punya kolom tingkat/detail penyelenggara
    // dan hanya punya satu tanggal, jadi keduanya ikut sebagai baris deskripsi.
    // Upgrade path: tambah kolom di prisma/schema.prisma kalau perlu difilter.
    const description = [
      data.description,
      data.tingkat && `Tingkat: ${data.tingkat}`,
      data.detailPenyelenggara && `Detail penyelenggara: ${data.detailPenyelenggara}`,
      data.tanggalSelesai && `Selesai: ${data.tanggalSelesai}`,
    ]
      .filter(Boolean)
      .join("\n");

    return {
      title: data.namaKegiatan,
      achiever_name: data.penyelenggara,
      location: data.lokasiEvent,
      achievement_date: toIsoDate(data.tanggalMulai),
      description,
      foto_urls: data.image instanceof File ? [await uploadImage(data.image)] : [],
    };
  };

  const onSubmit = async (data: AchievementFormValues) => {
    try {
      const payload = await buildPayload(data);

      if (editingId) {
        await updateAchievement.mutateAsync({ id: editingId, payload });
        setEditingId(null);
      } else {
        await createAchievement.mutateAsync(payload);
      }

      form.reset();
      alert("Berhasil menyimpan data pencapaian!");
    } catch (err) {
      alert((err as Error).message || "Terjadi kesalahan saat menyimpan data.");
    }
  };

  const handleEdit = (id: string) => {
    const achievement = achievements.find((item) => item.id === id);
    if (!achievement) return;

    setEditingId(id);
    form.reset({
      namaKegiatan: achievement.title,
      penyelenggara: achievement.achiever_name,
      detailPenyelenggara: "",
      lokasiEvent: achievement.location,
      tingkat: "",
      tanggalMulai: achievement.achievement_date.slice(0, 10),
      tanggalSelesai: achievement.achievement_date.slice(0, 10),
      description: achievement.description,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AdminContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Controller
            control={form.control}
            name="image"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <AdminUpload
                  title="Achievement"
                  preview={preview}
                  onChange={field.onChange}
                />
                {fieldState.error && (
                  <span className="text-sm font-medium text-red-400">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />

          <AdminSection title="Keterangan">
            <div className="space-y-8">
              <AdminField
                label="Nama Kegiatan"
                required
                error={form.formState.errors.namaKegiatan?.message}
              >
                <AdminInput
                  placeholder="Masukkan nama kegiatan"
                  {...form.register("namaKegiatan")}
                />
              </AdminField>

              <AdminFieldRow>
                <AdminField
                  label="Penyelenggara"
                  required
                  error={form.formState.errors.penyelenggara?.message}
                >
                  <AdminInput
                    placeholder="Masukkan penyelenggara"
                    {...form.register("penyelenggara")}
                  />
                </AdminField>

                <AdminField
                  label="Detail Penyelenggara"
                  error={form.formState.errors.detailPenyelenggara?.message}
                >
                  <AdminInput
                    placeholder="Masukkan detail penyelenggara"
                    {...form.register("detailPenyelenggara")}
                  />
                </AdminField>
              </AdminFieldRow>

              <AdminFieldRow>
                <AdminField
                  label="Lokasi Event"
                  required
                  error={form.formState.errors.lokasiEvent?.message}
                >
                  <AdminInput
                    placeholder="Masukkan lokasi event"
                    {...form.register("lokasiEvent")}
                  />
                </AdminField>

                <AdminField
                  label="Tingkat"
                  required
                  error={form.formState.errors.tingkat?.message}
                >
                  <Controller
                    control={form.control}
                    name="tingkat"
                    render={({ field }) => (
                      <AdminSelect
                        placeholder="Pilih tingkat"
                        value={field.value}
                        onValueChange={field.onChange}
                        options={[
                          { label: "Internasional", value: "internasional" },
                          { label: "Nasional", value: "nasional" },
                          { label: "Provinsi", value: "provinsi" },
                          { label: "Kabupaten/Kota", value: "kabupaten" },
                          { label: "Universitas", value: "universitas" },
                        ]}
                      />
                    )}
                  />
                </AdminField>
              </AdminFieldRow>

              <AdminFieldRow>
                <AdminField
                  label="Tanggal Mulai"
                  required
                  error={form.formState.errors.tanggalMulai?.message}
                >
                  <Controller
                    control={form.control}
                    name="tanggalMulai"
                    render={({ field }) => (
                      <AdminDatePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </AdminField>

                <AdminField
                  label="Tanggal Selesai"
                  required
                  error={form.formState.errors.tanggalSelesai?.message}
                >
                  <Controller
                    control={form.control}
                    name="tanggalSelesai"
                    render={({ field }) => (
                      <AdminDatePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </AdminField>
              </AdminFieldRow>
            </div>
          </AdminSection>

          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <AdminDescriptionSection
                  value={field.value}
                  placeholder="Masukkan deskripsi kegiatan..."
                  onChange={field.onChange}
                  isSubmitting={isMutating}
                />
                {fieldState.error && (
                  <span className="text-sm font-medium text-red-400 px-4">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </form>

        <AdminList
          title={editingId ? "Daftar Prestasi (mode edit)" : "Daftar Prestasi"}
          items={achievements.map((achievement) => ({
            id: achievement.id,
            title: achievement.title,
            subtitle: `${achievement.achiever_name} · ${achievement.location}`,
          }))}
          isLoading={isLoading}
          error={error}
          editingId={editingId}
          isMutating={isMutating}
          onEdit={handleEdit}
          onDelete={(id) => deleteAchievement.mutate(id)}
        />
      </AdminContent>
    </>
  );
}