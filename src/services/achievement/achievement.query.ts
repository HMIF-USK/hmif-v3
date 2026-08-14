import { useQuery } from '@tanstack/react-query';
import { apiPublicRequest } from '@/libs/api/client';
import type { IArticle } from '@/types/article.types';
import { formatArticleDate } from '@/utils/date.format';
import type { TAchievementResponse } from './achievement.type';

const FALLBACK_IMAGE = '/images/HMIF-No-BG.png';

/** Menyamakan bentuk data backend dengan IArticle yang dipakai kartu & halaman detail */
export const toArticle = (item: TAchievementResponse): IArticle => ({
  slug: item.id,
  imgUrl: item.fotoAchievements?.[0]?.url ?? FALLBACK_IMAGE,
  title: item.title,
  singkatanTitle: item.title,
  kategori: 'achievement',
  // Backend menyimpannya sebagai satu kolom "NAMA - detail", UI menampilkannya dua baris
  penyelenggara: item.achiever_name.split(' - '),
  tanggal: item.achievement_end_date
    ? `${formatArticleDate(item.achievement_date)} - ${formatArticleDate(item.achievement_end_date)}`
    : formatArticleDate(item.achievement_date),
  lokasi: item.location,
  waktu: '-',
  tingkat: item.level ?? undefined,
  deskripsi: [item.description],
});

export const useAchievements = (enabled = true) =>
  useQuery({
    queryKey: ['achievements'],
    enabled,
    queryFn: async () => {
      const data = await apiPublicRequest<TAchievementResponse[]>('/achievements');

      return (data ?? []).map(toArticle);
    },
  });

/** Halaman kelola butuh field mentahnya untuk mengisi ulang form, bukan bentuk IArticle. */
export const useRawAchievements = () =>
  useQuery({
    queryKey: ['achievements', 'raw'],
    queryFn: async () => (await apiPublicRequest<TAchievementResponse[]>('/achievements')) ?? [],
  });

export const useAchievementById = (id?: string, enabled = true) =>
  useQuery({
    queryKey: ['achievements', id],
    enabled: enabled && !!id,
    queryFn: async () => {
      const data = await apiPublicRequest<TAchievementResponse>(`/achievements/${id}`);

      return data ? toArticle(data) : undefined;
    },
  });
