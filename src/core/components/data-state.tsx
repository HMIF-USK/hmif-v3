'use client';

type DataStateProps = {
  isLoading: boolean;
  error?: Error | null;
  isEmpty?: boolean;
  emptyText?: string;
};

/**
 * Placeholder seragam untuk section yang datanya datang dari API.
 * Mengembalikan null kalau data sudah siap, jadi pemanggil cukup menaruhnya
 * di atas daftar tanpa percabangan tambahan.
 */
export default function DataState({
  isLoading,
  error,
  isEmpty,
  emptyText = 'Belum ada data.',
}: DataStateProps) {
  if (!isLoading && !error && !isEmpty) return null;

  const message = isLoading ? 'Memuat data…' : error ? `Gagal memuat data: ${error.message}` : emptyText;

  return (
    <p className="w-full py-10 text-center text-base text-foreground/70" role="status">
      {message}
    </p>
  );
}
