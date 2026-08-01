import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const dashboardSchema = z.object({
  image: z
    .any()
    .refine((file) => file instanceof File, "Gambar wajib diunggah")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Ukuran maksimal gambar adalah 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya format .jpg, .jpeg, .png, and .webp yang didukung"
    ),
  namaKegiatan: z.string().min(1, "Nama kegiatan wajib diisi"),
  departemen: z.string().min(1, "Departemen wajib dipilih"),
});

export type DashboardFormValues = z.infer<typeof dashboardSchema>;