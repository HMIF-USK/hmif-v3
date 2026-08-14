/** Bidang Informatic Club. Nilainya disimpan apa adanya di kolom `division` tabel Activity. */
export const BIDANG_INFORMATIC = [
  'Rekayasa Perangkat Lunak',
  'Data Mining',
  'Jaringan dan Cyber',
] as const;

export type TBidangInformatic = (typeof BIDANG_INFORMATIC)[number];

export const isBidangInformatic = (value: string): value is TBidangInformatic =>
  (BIDANG_INFORMATIC as readonly string[]).includes(value);

/** Satu warna aksen per bidang supaya kartu & halaman detail bisa dibedakan sekilas. */
export const BIDANG_ACCENT: Record<TBidangInformatic, string> = {
  'Rekayasa Perangkat Lunak': '#A78BFA',
  'Data Mining': '#38BDF8',
  'Jaringan dan Cyber': '#34D399',
};

export const accentOf = (division: string) =>
  isBidangInformatic(division) ? BIDANG_ACCENT[division] : '#E19FFF';

/** Bentuk response GET /api/activities dari hmif-backend-v3 */
export type TActivityResponse = {
  id: string;
  title: string;
  description: string;
  division: string;
  location: string;
  status: 'ComingSoon' | 'OnGoing' | 'Completed';
  event_start: string;
  event_end: string;
  created_at: string;
  fotoActivities?: { id: string; url: string }[];
};

/**
 * Form hanya meminta satu tanggal pertemuan + jam mulai/selesai; keduanya digabung
 * jadi event_start/event_end sebelum dikirim.
 */
export type TCreateActivity = {
  title: string;
  description: string;
  division: TBidangInformatic;
  event_start: string;
  event_end: string;
  photos: string[];
};

export type TUpdateActivity = TCreateActivity & { id: string };
