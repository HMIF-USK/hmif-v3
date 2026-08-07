import { format } from 'date-fns';
import { id as localeId } from 'date-fns/locale';
import type { IArticle } from '@/types/article.types';
import type { ProkerStatus, TAchievement, TEvent, TProker } from './hmif.type';

const PLACEHOLDER_IMAGE = '/images/HMIF-No-BG.png';

const toDate = (value?: string) => {
  const date = value ? new Date(value) : null;
  return date && !Number.isNaN(date.getTime()) ? date : null;
};

export const formatTanggal = (value?: string) => {
  const date = toDate(value);
  return date ? format(date, 'EEEE, dd MMMM yyyy', { locale: localeId }) : '-';
};

export const formatWaktu = (start?: string, end?: string) => {
  const from = toDate(start);
  const to = toDate(end);
  if (!from) return '-';
  const jam = (d: Date) => format(d, 'HH.mm');
  return to && to.getTime() !== from.getTime()
    ? `${jam(from)} - ${jam(to)} WIB`
    : `${jam(from)} WIB`;
};

/** Backend menyimpan deskripsi sebagai satu string; UI menampilkannya per paragraf. */
const toParagraphs = (description?: string) =>
  (description ?? '')
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

/** Kata pertama judul, dipakai UI sebagai label pendek. */
const toSingkatan = (title: string) => title.trim().split(/\s+/)[0] ?? title;

export const achievementToArticle = (achievement: TAchievement): IArticle => ({
  slug: achievement.id,
  imgUrl: achievement.fotoAchievements?.[0]?.url || PLACEHOLDER_IMAGE,
  title: achievement.title,
  singkatanTitle: toSingkatan(achievement.title),
  kategori: 'achievement',
  penyelenggara: [achievement.achiever_name].filter(Boolean),
  tanggal: formatTanggal(achievement.achievement_date),
  lokasi: achievement.location || '-',
  waktu: formatWaktu(achievement.achievement_date),
  deskripsi: toParagraphs(achievement.description),
});

export const eventToArticle = (event: TEvent): IArticle => ({
  slug: event.id,
  imgUrl: PLACEHOLDER_IMAGE,
  title: event.name,
  singkatanTitle: toSingkatan(event.name),
  kategori: 'event',
  penyelenggara: ['HMIF USK'],
  tanggal: formatTanggal(event.event_start),
  lokasi: event.location || '-',
  waktu: formatWaktu(event.event_start, event.event_end),
  deskripsi: toParagraphs(event.description),
});

/** GET /prokers membawa foto + departemen, jadi lebih kaya dari GET /events. */
export const prokerToArticle = (proker: TProker): IArticle => ({
  slug: proker.id,
  imgUrl: proker.fotoProkers?.[0]?.url || PLACEHOLDER_IMAGE,
  title: proker.name,
  singkatanTitle: toSingkatan(proker.name),
  kategori: 'event',
  penyelenggara: [proker.departement?.name || 'HMIF USK'],
  tanggal: formatTanggal(proker.event_start),
  lokasi: proker.location || '-',
  waktu: formatWaktu(proker.event_start, proker.event_end),
  deskripsi: toParagraphs(proker.description),
});

/** Backend memakai status untuk memfilter GET /events, jadi turunkan dari rentang tanggalnya. */
export const prokerStatusFromRange = (start: string, end: string): ProkerStatus => {
  const now = Date.now();

  if (new Date(end).getTime() < now) return 'Completed';
  if (new Date(start).getTime() <= now) return 'OnGoing';
  return 'ComingSoon';
};

/** Placeholder untuk slot dekoratif yang mengindeks array secara tetap. */
export const emptyArticle = (kategori: IArticle['kategori'] = 'achievement'): IArticle => ({
  slug: '',
  imgUrl: PLACEHOLDER_IMAGE,
  title: 'Belum ada data',
  singkatanTitle: '-',
  kategori,
  penyelenggara: [],
  tanggal: '-',
  lokasi: '-',
  waktu: '-',
  deskripsi: [],
});
