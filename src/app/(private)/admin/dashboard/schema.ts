import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const dashboardSchema = z.object({
  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Berkas gambar tidak valid")
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, "Ukuran maksimal gambar adalah 5MB")
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png, and .webp yang didukung"
    ),
  namaKegiatan: z.string().min(1, "Nama kegiatan wajib diisi"),
  departemen: z.string().min(1, "Departemen wajib dipilih"),
  lokasi: z.string().min(1, "Lokasi wajib diisi"),
  tanggalMulai: z.string().min(1, "Tanggal mulai wajib diisi"),
  tanggalSelesai: z.string().min(1, "Tanggal selesai wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
});

export type DashboardFormValues = z.infer<typeof dashboardSchema>;