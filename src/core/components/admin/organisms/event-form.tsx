"use client";

import { useEffect, useMemo } from "react";
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

import { useMyDepartments } from "@/services/event/event.mutation";
import { uploadImage } from "@/libs/upload/cloudinary";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

/** Label untuk enum prokerStatus di backend. Catatan: GET /events menyaring ComingSoon. */
const STATUS_OPTIONS = [
  { label: "Coming Soon", value: "ComingSoon" },
  { label: "On Going", value: "OnGoing" },
  { label: "Completed", value: "Completed" },
];

export const eventSchema = z.object({
  // Saat edit, gambar lama dipertahankan kalau tidak diganti — makanya boleh kosong di sini
  // dan kewajibannya diperiksa lewat `imageRequired`.
  image: z
    .any()
    .refine((file) => !file || file instanceof File, "Gambar tidak valid")
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "Ukuran maksimal gambar adalah 5MB")
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png, dan .webp yang didukung",
    )
    .optional(),
  namaKegiatan: z.string().min(1, "Nama event wajib diisi"),
  penyelenggara: z.string().min(1, "Penyelenggara wajib diisi"),
  lokasiEvent: z.string().min(1, "Lokasi event wajib diisi"),
  tanggalMulai: z.string().min(1, "Tanggal mulai wajib diisi"),
  tanggalSelesai: z.string().min(1, "Tanggal selesai wajib diisi"),
  waktuMulai: z.string().min(1, "Waktu mulai wajib diisi"),
  waktuSelesai: z.string().min(1, "Waktu selesai wajib diisi"),
  // Sama persis dengan enum prokerStatus di backend
  status: z.enum(["ComingSoon", "OnGoing", "Completed"], { message: "Status wajib dipilih" }),
  description: z.string().min(1, "Deskripsi event wajib diisi"),
});

export type EventFormValues = z.infer<typeof eventSchema>;

export const EVENT_FORM_DEFAULTS: EventFormValues = {
  namaKegiatan: "",
  penyelenggara: "",
  lokasiEvent: "",
  tanggalMulai: "",
  tanggalSelesai: "",
  waktuMulai: "",
  waktuSelesai: "",
  status: "ComingSoon",
  description: "",
};

/** Input date memberi "YYYY-MM-DD", input time memberi "HH:mm" — backend butuh satu DateTime. */
export const toISO = (date: string, time: string) => new Date(`${date}T${time}`).toISOString();

/** Kebalikan toISO: ISO dari backend (UTC) dipecah kembali ke waktu lokal untuk mengisi form. */
export const fromISO = (iso: string) => {
  const value = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    date: `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`,
    time: `${pad(value.getHours())}:${pad(value.getMinutes())}`,
  };
};

type EventFormProps = {
  defaultValues?: EventFormValues;
  /** URL gambar yang sudah tersimpan; kalau ada, unggah ulang jadi opsional. */
  existingImageUrl?: string;
  /** Mode edit tidak menampilkan pilihan departemen — backend melarang pemindahan event. */
  mode?: "create" | "edit";
  submitLabel?: string;
  isSubmitting?: boolean;
  onSubmit: (values: EventFormValues, imageUrl: string) => Promise<void> | void;
};

export default function EventForm({
  defaultValues = EVENT_FORM_DEFAULTS,
  existingImageUrl,
  mode = "create",
  submitLabel,
  isSubmitting,
  onSubmit,
}: EventFormProps) {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues,
  });

  const imageFile = form.watch("image");

  const preview = useMemo(() => {
    if (imageFile instanceof File) return URL.createObjectURL(imageFile);

    return existingImageUrl;
  }, [imageFile, existingImageUrl]);

  const { data: myDepartments } = useMyDepartments();

  const isSuperUser = myDepartments?.isSuperUser ?? false;
  const departments = useMemo(() => myDepartments?.departments ?? [], [myDepartments]);
  const showDepartmentPicker = mode === "create" && isSuperUser;

  // Akun departemen tidak punya pilihan — departemennya diisi otomatis dan
  // dropdown-nya tidak dirender. reset() mengosongkannya lagi, jadi ikut dipasang ulang.
  const ownDepartmentId = mode === "create" && !isSuperUser ? departments[0]?.id : undefined;
  const penyelenggara = form.watch("penyelenggara");

  useEffect(() => {
    if (ownDepartmentId && penyelenggara !== ownDepartmentId) {
      form.setValue("penyelenggara", ownDepartmentId);
    }
  }, [ownDepartmentId, penyelenggara, form]);

  const handleSubmit = async (values: EventFormValues) => {
    if (!(values.image instanceof File) && !existingImageUrl) {
      form.setError("image", { message: "Gambar wajib diunggah" });
      return;
    }

    try {
      const imageUrl =
        values.image instanceof File ? await uploadImage(values.image) : existingImageUrl!;

      await onSubmit(values, imageUrl);

      if (mode === "create") form.reset(EVENT_FORM_DEFAULTS);
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
            <AdminUpload title="Event" preview={preview} onChange={field.onChange} />

            {fieldState.error && (
              <span className="text-sm font-medium text-red-400">{fieldState.error.message}</span>
            )}
          </div>
        )}
      />

      <AdminSection title="Keterangan">
        <div className="space-y-8">
          <AdminField
            label="Nama Event"
            required
            error={form.formState.errors.namaKegiatan?.message}
          >
            <AdminInput placeholder="Integer" {...form.register("namaKegiatan")} />
          </AdminField>

          {/* Hanya superUser yang boleh memilih; akun departemen sudah pasti departemennya sendiri. */}
          {showDepartmentPicker && (
            <AdminField
              label="Penyelenggara"
              required
              error={form.formState.errors.penyelenggara?.message}
            >
              <Controller
                control={form.control}
                name="penyelenggara"
                render={({ field }) => (
                  <AdminSelect
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="Departement"
                    options={departments.map((department) => ({
                      label: department.name,
                      value: department.id,
                    }))}
                  />
                )}
              />
            </AdminField>
          )}

          <AdminFieldRow>
            <AdminField
              label="Lokasi Event"
              required
              error={form.formState.errors.lokasiEvent?.message}
            >
              <AdminInput placeholder="Aula FMIPA USK" {...form.register("lokasiEvent")} />
            </AdminField>

            <AdminField label="Status" required error={form.formState.errors.status?.message}>
              <Controller
                control={form.control}
                name="status"
                render={({ field }) => (
                  <AdminSelect
                    value={field.value}
                    onValueChange={field.onChange}
                    placeholder="Pilih status"
                    options={STATUS_OPTIONS}
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

          <AdminFieldRow>
            <AdminField
              label="Waktu Mulai"
              required
              error={form.formState.errors.waktuMulai?.message}
            >
              <AdminInput type="time" placeholder="00.00" {...form.register("waktuMulai")} />
            </AdminField>

            <AdminField
              label="Waktu Selesai"
              required
              error={form.formState.errors.waktuSelesai?.message}
            >
              <AdminInput type="time" placeholder="00.00" {...form.register("waktuSelesai")} />
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
              placeholder="Masukkan deskripsi event..."
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
