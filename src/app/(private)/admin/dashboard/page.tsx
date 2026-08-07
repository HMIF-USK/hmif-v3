'use client';

import { useMemo, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import AdminContent from '@/core/components/admin/organisms/admin-content';
import AdminUpload from '@/core/components/admin/molecules/admin-upload';
import AdminField from '@/core/components/admin/molecules/admin-field';
import AdminInput from '@/core/components/admin/atoms/admin-input';
import AdminSelect from '@/core/components/admin/atoms/admin-select';

import AdminTextarea from '@/core/components/admin/atoms/admin-textarea';
import AdminList from '@/core/components/admin/organisms/admin-list';

import {
  useActivities,
  useCreateActivity,
  useDeleteActivity,
  useUpdateActivity,
} from '@/services/hmif/hmif.query';
import { prokerStatusFromRange } from '@/services/hmif/hmif.mapper';
import { toIsoDate, uploadImage } from '@/utils/cloudinary.util';
import { getMe } from '@/services/auth/auth.store';

import { dashboardSchema, DashboardFormValues } from './schema';

export default function DashboardPage() {
  const form = useForm<DashboardFormValues>({
    resolver: zodResolver(dashboardSchema),
    defaultValues: {
      namaKegiatan: '',
      departemen: 'ppm',
      lokasi: '',
      tanggalMulai: '',
      tanggalSelesai: '',
      description: '',
    },
  });

  const imageFile = form.watch('image');

  const preview = useMemo(() => {
    if (!imageFile || !(imageFile instanceof File)) return undefined;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const { data: me } = useQuery({ queryKey: ['me'], queryFn: () => getMe() });
  const { data: activities = [], isLoading, error } = useActivities();

  const createActivity = useCreateActivity();
  const updateActivity = useUpdateActivity();
  const deleteActivity = useDeleteActivity();

  const isMutating =
    createActivity.isPending || updateActivity.isPending || deleteActivity.isPending;

  const buildPayload = async (data: DashboardFormValues) => {
    const event_start = toIsoDate(data.tanggalMulai);
    const event_end = toIsoDate(data.tanggalSelesai);

    return {
      title: data.namaKegiatan,
      description: data.description,
      division: data.departemen,
      location: data.lokasi,
      status: prokerStatusFromRange(event_start, event_end),
      event_start,
      event_end,
      created_by_user_id: me?.id ?? '',
      photos: data.image instanceof File ? [await uploadImage(data.image)] : [],
    };
  };

  const onSubmit = async (data: DashboardFormValues) => {
    if (!me?.id) {
      alert('Sesi tidak ditemukan, silakan login ulang.');
      return;
    }

    try {
      const payload = await buildPayload(data);

      if (editingId) {
        await updateActivity.mutateAsync({ id: editingId, payload });
        setEditingId(null);
      } else {
        await createActivity.mutateAsync(payload);
      }

      form.reset({ namaKegiatan: '', departemen: 'ppm', lokasi: '', tanggalMulai: '', tanggalSelesai: '', description: '' });
      alert('Berhasil menyimpan data kegiatan!');
    } catch (err) {
      alert((err as Error).message || 'Terjadi kesalahan saat menyimpan data.');
    }
  };

  const handleEdit = (id: string) => {
    const activity = activities.find((item) => item.id === id);
    if (!activity) return;

    setEditingId(id);
    form.reset({
      namaKegiatan: activity.title,
      departemen: activity.division,
      lokasi: activity.location,
      tanggalMulai: activity.event_start.slice(0, 10),
      tanggalSelesai: activity.event_end.slice(0, 10),
      description: activity.description,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const bgGradient = 'linear-gradient(180deg, #873AE3 0px, #4A207D 500px)';
  const highlightGradient =
    'linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0) 150px)';

  return (
    <AdminContent>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* SECTION UPLOAD IMAGE */}
        <Controller
          control={form.control}
          name="image"
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-2">
              <AdminUpload title="Dokumentasi" preview={preview} onChange={field.onChange} />
              {fieldState.error && (
                <span className="text-sm font-medium text-red-400">{fieldState.error.message}</span>
              )}
            </div>
          )}
        />

        {/* SECTION KETERANGAN DENGAN NOTCHED BACKGROUND & TOMBOL SUBMIT */}
        <section className="relative w-full overflow-visible rounded-[20px]">
          {/* BACKGROUND DIVS */}
          <div
            className="absolute top-0 left-0 right-[240px] bottom-0 rounded-l-[20px] rounded-br-[20px] pointer-events-none"
            style={{ background: bgGradient }}
          />

          <div
            className="absolute top-0 right-0 w-[240px] bottom-[96px] rounded-tr-[20px] rounded-br-[20px] pointer-events-none"
            style={{ background: bgGradient }}
          />

          <div
            className="absolute top-0 bottom-[76px] right-[220px] w-[21px] pointer-events-none"
            style={{
              background: bgGradient,
              WebkitMaskImage:
                'radial-gradient(circle at bottom right, transparent 19px, black 19.5px)',
              WebkitMaskPosition: 'bottom',
              WebkitMaskSize: '21px 21px',
              WebkitMaskRepeat: 'no-repeat',
              maskImage: 'radial-gradient(circle at bottom right, transparent 19px, black 19.5px)',
              maskPosition: 'bottom',
              maskSize: '21px 21px',
              maskRepeat: 'no-repeat',
            }}
          />

          {/* BORDER DIVS */}
          <div
            className="absolute top-0 left-0 right-[260px] bottom-0 rounded-l-[20px] border-t border-l border-b pointer-events-none"
            style={{ borderColor: '#E19FFF' }}
          />
          <div
            className="absolute top-0 right-0 w-[260px] bottom-[116px] rounded-tr-[20px] border-t border-r pointer-events-none"
            style={{ borderColor: '#E19FFF' }}
          />
          <div
            className="absolute right-0 bottom-[96px] w-[20px] h-[20px] rounded-br-[20px] border-r border-b pointer-events-none"
            style={{ borderColor: '#E19FFF' }}
          />
          <div
            className="absolute right-[240px] bottom-0 w-[20px] h-[20px] rounded-br-[20px] border-r border-b pointer-events-none"
            style={{ borderColor: '#E19FFF' }}
          />
          <div
            className="absolute right-[20px] bottom-[20px] w-[220px] h-[76px] rounded-tl-[20px] border-t border-l pointer-events-none"
            style={{ borderColor: '#E19FFF' }}
          />

          {/* HIGHLIGHT OVERLAYS */}
          <div
            className="absolute top-0 left-0 right-[240px] bottom-0 rounded-l-[20px] rounded-br-[20px] pointer-events-none"
            style={{ background: highlightGradient }}
          />
          <div
            className="absolute top-0 right-0 w-[240px] bottom-[96px] rounded-tr-[20px] rounded-br-[20px] pointer-events-none"
            style={{ background: highlightGradient }}
          />

          {/* CONTENT KETERANGAN */}
          <div className="relative z-10 p-8 pb-32">
            {/* Label menggunakan font Poppins, ukuran 20px, dan ketebalan semibold */}
            <div className="space-y-8 [&_label]:font-poppins [&_label]:text-[20px] [&_label]:font-semibold [&_label]:text-[#C7A8ED] [&_input]:!rounded-[7px] [&_input]:!bg-transparent [&_button]:!rounded-[7px]">
              <AdminField
                label="Nama Kegiatan"
                required
                error={form.formState.errors.namaKegiatan?.message}
              >
                <AdminInput
                  className="bg-transparent"
                  placeholder="Scrum Web Dev 1"
                  {...form.register('namaKegiatan')}
                />
              </AdminField>

              <AdminField
                label="Departemen"
                required
                error={form.formState.errors.departemen?.message}
              >
                <Controller
                  control={form.control}
                  name="departemen"
                  render={({ field }) => (
                    <AdminSelect
                      placeholder="Pilih departemen"
                      value={field.value}
                      onValueChange={field.onChange}
                      options={[
                        { label: 'DPH', value: 'dph' },
                        { label: 'PPM', value: 'ppm' },
                        { label: 'KOMINKRAF', value: 'kominkraf' },
                        { label: 'PKM', value: 'pkm' },
                        { label: 'SOSMAS', value: 'sosmas' },
                        { label: 'HUAL', value: 'hual' },
                        { label: 'MBA', value: 'mba' },
                        { label: 'KEAGAMAAN', value: 'keagamaan' },
                        { label: 'ADM', value: 'adm' },
                      ]}
                    />
                  )}
                />
              </AdminField>

              <AdminField label="Lokasi" required error={form.formState.errors.lokasi?.message}>
                <AdminInput
                  className="bg-transparent"
                  placeholder="Ruang Seminar FMIPA"
                  {...form.register('lokasi')}
                />
              </AdminField>

              <AdminField
                label="Tanggal Mulai"
                required
                error={form.formState.errors.tanggalMulai?.message}
              >
                <AdminInput className="bg-transparent" type="date" {...form.register('tanggalMulai')} />
              </AdminField>

              <AdminField
                label="Tanggal Selesai"
                required
                error={form.formState.errors.tanggalSelesai?.message}
              >
                <AdminInput
                  className="bg-transparent"
                  type="date"
                  {...form.register('tanggalSelesai')}
                />
              </AdminField>

              <AdminField
                label="Deskripsi"
                required
                error={form.formState.errors.description?.message}
              >
                <AdminTextarea
                  placeholder="Deskripsi kegiatan..."
                  {...form.register('description')}
                />
              </AdminField>
            </div>
          </div>

          {/* SUBMIT BUTTON CONTAINER */}
          <div className="absolute bottom-0 right-0 h-24 w-[240px] flex items-center justify-center z-20">
            <button
              type="submit"
              disabled={isMutating}
              className={clsx(`
                w-[220px]
                h-[70px]
                font-bold
                text-[25px]
                tracking-wide
                transition-all
                duration-200
                hover:scale-105
                hover:brightness-110
                hover:shadow-[0_8px_20px_rgba(200,167,239,0.3)]
                hover:-translate-y-1
                active:scale-95
                active:translate-y-0
                active:shadow-none
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:scale-100
                disabled:hover:brightness-100
                disabled:hover:translate-y-0
                disabled:hover:shadow-none
              `)}
              style={{
                background: '#C8A7EF',
                color: '#7300FF',
                borderRadius: '18px 8px 18px 8px',
              }}
            >
              {isMutating ? 'Menyimpan...' : editingId ? 'Update' : 'Submit'}
            </button>
          </div>
        </section>
      </form>

      <AdminList
        title={editingId ? 'Daftar Kegiatan (mode edit)' : 'Daftar Kegiatan'}
        items={activities.map((activity) => ({
          id: activity.id,
          title: activity.title,
          subtitle: `${activity.division.toUpperCase()} · ${activity.location}`,
        }))}
        isLoading={isLoading}
        error={error}
        editingId={editingId}
        isMutating={isMutating}
        onEdit={handleEdit}
        onDelete={(id) => deleteActivity.mutate(id)}
      />
    </AdminContent>
  );
}
