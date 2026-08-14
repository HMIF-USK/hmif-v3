export type ICabinet = {
  id: string;
  name: string;
  /** Tahun kepengurusan, dipakai sebagai label tombol timeline */
  year: number;
  /** Tahun kalender kegiatan yang masuk ke kabinet ini (hanya untuk sumber statis) */
  eventYears: number[];
  /** `static` = daftar lokal di /src/data, `api` = diambil dari backend */
  source: 'static' | 'api';
};

export const cabinets: ICabinet[] = [
  {
    id: 'byond',
    name: 'BYOND',
    year: 2025,
    eventYears: [2024, 2025],
    source: 'static',
  },
  {
    id: 'aksara',
    name: 'AKSARA',
    year: 2026,
    eventYears: [2026],
    source: 'api',
  },
];

/** Kabinet yang aktif saat halaman pertama dibuka */
export const DEFAULT_CABINET_ID = 'aksara';

export const getCabinet = (id: string) => cabinets.find((cabinet) => cabinet.id === id);

/** Tahun kegiatan diambil dari string `tanggal`, mis. "Kamis, 20 Maret 2025" */
const getYear = (item: { tanggal: string }) => Number(item.tanggal.match(/20\d{2}/)?.[0]);

/** Menyaring event/achievement statis berdasarkan kabinet yang sedang dipilih di timeline */
export const filterByCabinet = <T extends { tanggal: string }>(items: T[], cabinetId: string) => {
  const cabinet = getCabinet(cabinetId);

  if (!cabinet) return items;

  return items.filter((item) => cabinet.eventYears.includes(getYear(item)));
};
