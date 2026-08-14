'use client';

import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import AdminSection from './admin-section';
import AdminDescriptionSection from './admin-description-section';
import AdminUpload from '../molecules/admin-upload';
import AdminField from '../molecules/admin-field';
import AdminFieldRow from '../molecules/admin-field-row';
import AdminInput from '../atoms/admin-input';
import AdminSelect from '../atoms/admin-select';
import AdminDatePicker from '../atoms/admin-date-picker';
import { fromISO } from './event-form';

import { uploadImage } from '@/libs/upload/cloudinary';
import {
  BIDANG_INFORMATIC,
  type TActivityResponse,
} from '@/services/informatic-club/informatic-club.type';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export const informaticClubSchema = z
  .object({
    // Saat edit, foto lama dipertahankan kalau tidak diganti — kewajibannya diperiksa saat submit.
    image: z
      .any()
      .refine((file) => !file || file instanceof File, 'Gambar tidak valid')
      .refine((file) => !file || file.size <= MAX_FILE_SIZE, 'Ukuran maksimal gambar adalah 5MB')
      .refine(
        (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
        'Hanya format .jpg, .jpeg, .png, dan .webp yang didukung',
      )
      .optional(),
    namaKegiatan: z.string().min(1, 'Nama kegiatan wajib diisi'),
    bidang: z.enum(BIDANG_INFORMATIC, { message: 'Bidang wajib dipilih' }),
    tanggal: z.string().min(1, 'Tanggal pertemuan wajib diisi'),
    jamMulai: z.string().min(1, 'Jam mulai wajib diisi'),
    jamSelesai: z.string().min(1, 'Jam selesai wajib diisi'),
    deskripsi: z.string().min(1, 'Deskripsi wajib diisi'),
  })
  // Perbandingan string "HH:mm" cukup karena keduanya di tanggal yang sama.
  .refine((value) => !value.jamMulai || !value.jamSelesai || value.jamSelesai > value.jamMulai, {
    path: ['jamSelesai'],
    message: 'Jam selesai harus setelah jam mulai',
  });

export type InformaticClubFormValues = z.infer<typeof informaticClubSchema>;

export const INFORMATIC_CLUB_DEFAULTS: InformaticClubFormValues = {
  namaKegiatan: '',
  bidang: 'Rekayasa Perangkat Lunak',
  tanggal: '',
  jamMulai: '',
  jamSelesai: '',
  deskripsi: '',
};

/** Kebalikan dari submit: response backend dipecah kembali ke isian form. */
export const toInformaticClubFormValues = (
  activity: TActivityResponse,
): InformaticClubFormValues => {
  const start = fromISO(activity.event_start);

  return {
    namaKegiatan: activity.title,
    bidang: activity.division as InformaticClubFormValues['bidang'],
    tanggal: start.date,
    jamMulai: start.time,
    jamSelesai: fromISO(activity.event_end).time,
    deskripsi: activity.description,
  };
};

type InformaticClubFormProps = {
  defaultValues?: InformaticClubFormValues;
  /** URL foto yang sudah tersimpan; kalau ada, unggah ulang jadi opsional. */
  existingImageUrl?: string;
  mode?: 'create' | 'edit';
  submitLabel?: string;
  isSubmitting?: boolean;
  onSubmit: (values: InformaticClubFormValues, imageUrl: string) => Promise<void> | void;
};

export default function InformaticClubForm({
  defaultValues = INFORMATIC_CLUB_DEFAULTS,
  existingImageUrl,
  mode = 'create',
  submitLabel,
  isSubmitting,
  onSubmit,
}: InformaticClubFormProps) {
  const form = useForm<InformaticClubFormValues>({
    resolver: zodResolver(informaticClubSchema),
    defaultValues,
  });

  const imageFile = form.watch('image');

  const preview = useMemo(() => {
    if (imageFile instanceof File) return URL.createObjectURL(imageFile);

    return existingImageUrl;
  }, [imageFile, existingImageUrl]);

  const handleSubmit = async (values: InformaticClubFormValues) => {
    if (!(values.image instanceof File) && !existingImageUrl) {
      form.setError('image', { message: 'Foto kegiatan wajib diunggah' });
      return;
    }

    try {
      const imageUrl =
        values.image instanceof File ? await uploadImage(values.image) : existingImageUrl!;

      await onSubmit(values, imageUrl);

      if (mode === 'create') form.reset(INFORMATIC_CLUB_DEFAULTS);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Terjadi kesalahan saat menyimpan data.');
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 font-poppins">
      <Controller
        control={form.control}
        name="image"
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-2">
            <AdminUpload title="Kegiatan" preview={preview} onChange={field.onChange} />

            {fieldState.error && (
              <span className="text-sm font-medium text-red-400">{fieldState.error.message}</span>
            )}
          </div>
        )}
      />

      <AdminSection title="Kegiatan">
        <div className="space-y-8">
          <AdminField
            label="Nama Kegiatan"
            required
            error={form.formState.errors.namaKegiatan?.message}
          >
            <AdminInput placeholder="Workshop React" {...form.register('namaKegiatan')} />
          </AdminField>

          <AdminFieldRow>
            <AdminField
              label="Bidang Informatic"
              required
              error={form.formState.errors.bidang?.message}
            >
              <Controller
                control={form.control}
                name="bidang"
                render={({ field }) => (
                  <AdminSelect
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="Pilih bidang"
                    options={BIDANG_INFORMATIC.map((bidang) => ({ label: bidang, value: bidang }))}
                  />
                )}
              />
            </AdminField>

            <AdminField
              label="Tanggal Pertemuan"
              required
              error={form.formState.errors.tanggal?.message}
            >
              <Controller
                control={form.control}
                name="tanggal"
                render={({ field }) => (
                  <AdminDatePicker value={field.value} onChange={field.onChange} />
                )}
              />
            </AdminField>
          </AdminFieldRow>

          <AdminFieldRow>
            <AdminField label="Jam Mulai" required error={form.formState.errors.jamMulai?.message}>
              <AdminInput type="time" {...form.register('jamMulai')} />
            </AdminField>

            <AdminField
              label="Jam Selesai"
              required
              error={form.formState.errors.jamSelesai?.message}
            >
              <AdminInput type="time" {...form.register('jamSelesai')} />
            </AdminField>
          </AdminFieldRow>
        </div>
      </AdminSection>

      <Controller
        control={form.control}
        name="deskripsi"
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-2">
            <AdminDescriptionSection
              value={field.value}
              placeholder="Masukkan deskripsi kegiatan..."
              onChange={field.onChange}
              isSubmitting={isSubmitting || form.formState.isSubmitting}
              submitLabel={submitLabel}
            />

            {fieldState.error && (
              <span className="px-4 text-sm font-medium text-red-400">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </form>
  );
}
