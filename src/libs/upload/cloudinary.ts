import { env } from '@/configs/env.config';

/**
 * Unsigned upload langsung dari browser ke Cloudinary — backend cuma menyimpan URL-nya,
 * jadi tidak perlu endpoint upload sendiri. Preset-nya harus bermode "unsigned".
 */
export async function uploadImage(file: File): Promise<string> {
  const body = new FormData();

  body.append('file', file);
  body.append('upload_preset', env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    { method: 'POST', body },
  );

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json?.error?.message || 'Gagal mengunggah gambar');
  }

  return json.secure_url as string;
}
