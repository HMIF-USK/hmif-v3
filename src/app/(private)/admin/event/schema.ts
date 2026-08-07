import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const eventSchema = z.object({
  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, "Berkas gambar tidak valid")
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "Ukuran maksimal gambar adalah 5MB"
    )
    .refine(
      (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Hanya format .jpg, .jpeg, .png, dan .webp yang didukung"
    ),

  namaKegiatan: z.string().min(1, "Nama event wajib diisi"),

  penyelenggara: z.string().min(1, "Penyelenggara wajib diisi"),

  lokasiEvent: z.string().min(1, "Lokasi event wajib diisi"),

  tanggalMulai: z.string().min(1, "Tanggal mulai wajib diisi"),

  tanggalSelesai: z.string().min(1, "Tanggal selesai wajib diisi"),

  waktuMulai: z.string().min(1, "Waktu mulai wajib diisi"),

  waktuSelesai: z.string().min(1, "Waktu selesai wajib diisi"),

  description: z.string().min(1, "Deskripsi event wajib diisi"),
});

export type EventFormValues = z.infer<typeof eventSchema>;