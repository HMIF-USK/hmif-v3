export interface IArticle {
  slug: string;
  imgUrl: string;
  title: string;
  singkatanTitle: string;
  kategori: 'event' | 'achievement';
  penyelenggara: string[];
  tanggal: string;
  lokasi: string;
  waktu: string;
  /** Tingkat pencapaian (nasional, provinsi, ...) — hanya ada pada data achievement dari API */
  tingkat?: string;
  deskripsi: string[];
}
