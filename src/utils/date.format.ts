/** Format tanggal panjang untuk kartu & halaman detail, mis. "Kamis, 20 Maret 2025". */
export const formatArticleDate = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '-';

  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

/** Jam lokal, mis. "08.00". */
export const formatArticleTime = (value: string) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '-';

  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};
