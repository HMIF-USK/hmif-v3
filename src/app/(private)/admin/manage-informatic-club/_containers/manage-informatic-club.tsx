'use client';

import { useState } from 'react';

import AdminContent from '@/core/components/admin/organisms/admin-content';
import AdminPostCard from '@/core/components/admin/molecules/admin-post-card';
import { EmptyState, ManageHeader } from '@/core/components/admin/molecules/admin-manage-header';
import InformaticClubForm, {
  toInformaticClubFormValues,
  type InformaticClubFormValues,
} from '@/core/components/admin/organisms/informatic-club-form';
import { toISO } from '@/core/components/admin/organisms/event-form';

import {
  useActivities,
  useDeleteActivity,
  useUpdateActivity,
} from '@/services/informatic-club/informatic-club.mutation';
import type { TActivityResponse } from '@/services/informatic-club/informatic-club.type';
import { formatArticleDate, formatArticleTime } from '@/utils/date.format';

export default function ManageInformaticClub() {
  const [editing, setEditing] = useState<TActivityResponse | null>(null);

  const { data: activities = [], isLoading } = useActivities();
  const updateActivity = useUpdateActivity();
  const deleteActivity = useDeleteActivity();

  const onSubmit = async (data: InformaticClubFormValues, imageUrl: string) => {
    await updateActivity.mutateAsync({
      id: editing!.id,
      title: data.namaKegiatan,
      description: data.deskripsi,
      division: data.bidang,
      event_start: toISO(data.tanggal, data.jamMulai),
      event_end: toISO(data.tanggal, data.jamSelesai),
      photos: [imageUrl],
    });

    alert('Perubahan kegiatan berhasil disimpan!');
    setEditing(null);
  };

  const onDelete = async (activity: TActivityResponse) => {
    if (!confirm(`Hapus kegiatan "${activity.title}"? Tindakan ini tidak bisa dibatalkan.`)) return;

    try {
      await deleteActivity.mutateAsync(activity.id);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Gagal menghapus kegiatan.');
    }
  };

  if (editing) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader
          title={`Edit: ${editing.title}`}
          action={{ label: '← Kembali', onClick: () => setEditing(null) }}
        />

        <InformaticClubForm
          mode="edit"
          key={editing.id}
          defaultValues={toInformaticClubFormValues(editing)}
          existingImageUrl={editing.fotoActivities?.[0]?.url}
          submitLabel="Simpan"
          isSubmitting={updateActivity.isPending}
          onSubmit={onSubmit}
        />
      </AdminContent>
    );
  }

  return (
    <AdminContent className="space-y-8">
      <ManageHeader title="Kelola Informatic Club" />

      {isLoading && <EmptyState text="Memuat kegiatan..." />}

      {!isLoading && activities.length === 0 && (
        <EmptyState text="Belum ada kegiatan yang diunggah." />
      )}

      <div className="space-y-5">
        {activities.map((activity) => (
          <AdminPostCard
            key={activity.id}
            imageUrl={activity.fotoActivities?.[0]?.url}
            title={activity.title}
            badge={activity.division}
            meta={[
              formatArticleDate(activity.event_start),
              `${formatArticleTime(activity.event_start)} - ${formatArticleTime(activity.event_end)} WIB`,
            ]}
            onEdit={() => setEditing(activity)}
            onDelete={() => onDelete(activity)}
            isDeleting={deleteActivity.isPending}
          />
        ))}
      </div>
    </AdminContent>
  );
}
