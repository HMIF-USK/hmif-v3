"use client";

import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AdminSection from "./admin-section";
import AdminDescriptionSection from "./admin-description-section";
import AdminUpload from "../molecules/admin-upload";
import AdminField from "../molecules/admin-field";
import AdminFieldRow from "../molecules/admin-field-row";
import AdminInput from "../atoms/admin-input";
import AdminSelect from "../atoms/admin-select";
import AdminDatePicker from "../atoms/admin-date-picker";

import { uploadImage } from "@/libs/upload/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const TINGKAT_OPTIONS = [
  { label: "Internasional", value: "internasional" },
  { label: "Nasional", value: "nasional" },
  { label: "Provinsi", value: "provinsi" },
  { label: "Kabupaten/Kota", value: "kabupaten" },
  { label: "Universitas", value: "universitas" },
];

export const achievementSchema = z.object({
  // Saat edit, gambar lama dipertahankan kalau tidak diganti.
  image: z
    .any()
    .refine((file) => !file || file instanceof File, "Gambar tidak valid")
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "Ukuran maksimal gambar adalah 5MB")
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png, dan .webp yang didukung",
    )
    .optional(),
  namaKegiatan: z.string().min(1, "Nama kegiatan wajib diisi"),
  penyelenggara: z.string().min(1, "Penyelenggara wajib diisi"),
  detailPenyelenggara: z.string().optional(),
  lokasiEvent: z.string().min(1, "Lokasi event wajib diisi"),
  tingkat: z.string().min(1, "Tingkat wajib dipilih"),
  tanggalMulai: z.string().min(1, "Tanggal mulai wajib diisi"),
  tanggalSelesai: z.string().min(1, "Tanggal selesai wajib diisi"),
  description: z.string().min(1, "Deskripsi kegiatan wajib diisi"),
});

export type AchievementFormValues = z.infer<typeof achievementSchema>;

export const ACHIEVEMENT_FORM_DEFAULTS: AchievementFormValues = {
  namaKegiatan: "",
  penyelenggara: "",
  detailPenyelenggara: "",
  lokasiEvent: "",
  tingkat: "",
  tanggalMulai: "",
  tanggalSelesai: "",
  description: "",
};

/**
 * Backend hanya punya satu kolom `achiever_name`, sementara UI memecahnya jadi
 * dua baris. Pemisahnya " - " — dipakai bolak-balik saat simpan dan saat prefill.
 */
export const joinAchiever = (penyelenggara: string, detail?: string) =>
  detail ? `${penyelenggara} - ${detail}` : penyelenggara;

export const splitAchiever = (achieverName: string) => {
  const [penyelenggara, ...rest] = achieverName.split(" - ");

  return { penyelenggara, detailPenyelenggara: rest.join(" - ") };
};

type AchievementFormProps = {
  defaultValues?: AchievementFormValues;
  /** URL gambar yang sudah tersimpan; kalau ada, unggah ulang jadi opsional. */
  existingImageUrl?: string;
  mode?: "create" | "edit";
  submitLabel?: string;
  isSubmitting?: boolean;
  onSubmit: (values: AchievementFormValues, imageUrl: string) => Promise<void> | void;
};

export default function AchievementForm({
  defaultValues = ACHIEVEMENT_FORM_DEFAULTS,
  existingImageUrl,
  mode = "create",
  submitLabel,
  isSubmitting,
  onSubmit,
}: AchievementFormProps) {
  const form = useForm<AchievementFormValues>({
    resolver: zodResolver(achievementSchema),
    defaultValues,
  });

  const imageFile = form.watch("image");

  const preview = useMemo(() => {
    if (imageFile instanceof File) return URL.createObjectURL(imageFile);

    return existingImageUrl;
  }, [imageFile, existingImageUrl]);

  const handleSubmit = async (values: AchievementFormValues) => {
    if (!(values.image instanceof File) && !existingImageUrl) {
      form.setError("image", { message: "Gambar wajib diunggah" });
      return;
    }

    try {
      const imageUrl =
        values.image instanceof File ? await uploadImage(values.image) : existingImageUrl!;

      await onSubmit(values, imageUrl);

      if (mode === "create") form.reset(ACHIEVEMENT_FORM_DEFAULTS);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 font-poppins">
      <Controller
        control={form.control}
        name="image"
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-2">
            <AdminUpload title="Achievement" preview={preview} onChange={field.onChange} />

            {fieldState.error && (
              <span className="text-sm font-medium text-red-400">{fieldState.error.message}</span>
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
            <AdminInput placeholder="Masukkan nama kegiatan" {...form.register("namaKegiatan")} />
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
              <AdminInput placeholder="Masukkan lokasi event" {...form.register("lokasiEvent")} />
            </AdminField>

            <AdminField label="Tingkat" required error={form.formState.errors.tingkat?.message}>
              <Controller
                control={form.control}
                name="tingkat"
                render={({ field }) => (
                  <AdminSelect
                    placeholder="Pilih tingkat"
                    value={field.value}
                    onValueChange={field.onChange}
                    options={TINGKAT_OPTIONS}
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
                  <AdminDatePicker value={field.value} onChange={field.onChange} />
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
                  <AdminDatePicker value={field.value} onChange={field.onChange} />
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
