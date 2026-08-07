import { env } from '@/configs/env.config';

/**
 * Backend hanya menyimpan URL gambar (tabel fotoProker/fotoAchievement/fotoActivity),
 * tidak menerima file. Jadi file diunggah langsung dari browser ke Cloudinary
 * lewat unsigned upload preset, lalu URL-nya yang dikirim ke API.
 */
export async function uploadImage(file: File): Promise<string> {
  const body = new FormData();
  body.append('file', file);
  body.append('upload_preset', env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: 'POST', body }
  );

  const json = await res.json().catch(() => undefined);

  if (!res.ok || !json?.secure_url) {
    throw new Error(json?.error?.message || 'Gagal mengunggah gambar ke Cloudinary');
  }

  return json.secure_url as string;
}

/** Gabungkan tanggal (yyyy-MM-dd) dan jam (HH:mm) jadi ISO string untuk backend. */
export function toIsoDate(date: string, time?: string): string {
  const parsed = new Date(time ? `${date}T${time}` : date);

  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Tanggal tidak valid: ${date} ${time ?? ''}`.trim());
  }

  return parsed.toISOString();
}
