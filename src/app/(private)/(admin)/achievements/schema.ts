import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const achievementSchema = z.object({
  image: z
    .any()
    .refine((file) => file instanceof File, "Gambar wajib diunggah")
    .refine((file) => file?.size <= MAX_FILE_SIZE, "Ukuran maksimal gambar adalah 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Hanya format .jpg, .jpeg, .png, and .webp yang didukung"
    ),
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
