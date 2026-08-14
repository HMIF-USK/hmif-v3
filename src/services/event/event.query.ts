import { useQuery } from '@tanstack/react-query';
import { apiPublicRequest } from '@/libs/api/client';
import { formatArticleDate, formatArticleTime } from '@/utils/date.format';
import type { IArticle } from '@/types/article.types';
import type { TEventResponse } from './event.type';

const FALLBACK_IMAGE = '/images/HMIF-No-BG.png';

/** Menyamakan bentuk Proker dari backend dengan IArticle yang dipakai kartu & halaman detail */
export const toArticle = (item: TEventResponse): IArticle => ({
  slug: item.id,
  imgUrl: item.fotoProkers?.[0]?.url ?? FALLBACK_IMAGE,
  title: item.name,
  singkatanTitle: item.name,
  kategori: 'event',
  // UI menampilkannya dua baris: singkatan departemen lalu kepanjangannya
  penyelenggara: item.departement
    ? [item.departement.name, item.departement.description ?? '']
    : [],
  tanggal:
    formatArticleDate(item.event_start) === formatArticleDate(item.event_end)
      ? formatArticleDate(item.event_start)
      : `${formatArticleDate(item.event_start)} - ${formatArticleDate(item.event_end)}`,
  lokasi: item.location,
  waktu: `${formatArticleTime(item.event_start)} - ${formatArticleTime(item.event_end)} WIB`,
  deskripsi: [item.description],
});

export const useEvents = (enabled = true) =>
  useQuery({
    queryKey: ['events'],
    enabled,
    queryFn: async () => {
      const data = await apiPublicRequest<TEventResponse[]>('/events');

      return (data ?? []).map(toArticle);
    },
  });

export const useEventById = (id?: string, enabled = true) =>
  useQuery({
    queryKey: ['events', id],
    enabled: enabled && !!id,
    queryFn: async () => {
      const data = await apiPublicRequest<TEventResponse>(`/events/${id}`);

      return data ? toArticle(data) : undefined;
    },
  });
