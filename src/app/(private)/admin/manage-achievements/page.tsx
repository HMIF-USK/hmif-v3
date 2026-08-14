"use client";

import { useState } from "react";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminPostCard from "@/core/components/admin/molecules/admin-post-card";
import {
  EmptyState,
  ManageHeader,
} from "@/core/components/admin/molecules/admin-manage-header";
import AchievementForm, {
  joinAchiever,
  splitAchiever,
  type AchievementFormValues,
} from "@/core/components/admin/organisms/achievement-form";

import {
  useCanManageAchievement,
  useDeleteAchievement,
  useUpdateAchievement,
} from "@/services/achievement/achievement.mutation";
import { useRawAchievements } from "@/services/achievement/achievement.query";
import type { TAchievementResponse } from "@/services/achievement/achievement.type";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

const toFormValues = (item: TAchievementResponse): AchievementFormValues => ({
  ...splitAchiever(item.achiever_name),
  namaKegiatan: item.title,
  lokasiEvent: item.location,
  tingkat: item.level ?? "",
  // Tanggal disimpan sebagai UTC tengah malam, jadi cukup ambil bagian tanggalnya.
  tanggalMulai: item.achievement_date.slice(0, 10),
  tanggalSelesai: (item.achievement_end_date ?? item.achievement_date).slice(0, 10),
  description: item.description,
});

export default function ManageAchievementsPage() {
  const [editing, setEditing] = useState<TAchievementResponse | null>(null);

  const { data: achievements = [], isLoading } = useRawAchievements();
  const { data: canManage } = useCanManageAchievement();
  const updateAchievement = useUpdateAchievement();
  const deleteAchievement = useDeleteAchievement();

  const onSubmit = async (data: AchievementFormValues, imageUrl: string) => {
    await updateAchievement.mutateAsync({
      id: editing!.id,
      title: data.namaKegiatan,
      description: data.description,
      location: data.lokasiEvent,
      achiever_name: joinAchiever(data.penyelenggara, data.detailPenyelenggara),
      achievement_date: new Date(data.tanggalMulai).toISOString(),
      achievement_end_date: new Date(data.tanggalSelesai).toISOString(),
      level: data.tingkat,
      foto_urls: [imageUrl],
    });

    alert("Perubahan achievement berhasil disimpan!");
    setEditing(null);
  };

  const onDelete = async (item: TAchievementResponse) => {
    if (!confirm(`Hapus achievement "${item.title}"? Tindakan ini tidak bisa dibatalkan.`)) return;

    try {
      await deleteAchievement.mutateAsync(item.id);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Gagal menghapus achievement.");
    }
  };

  // Backend membatasi PUT/DELETE ke role mba & superUser — daftarnya tetap boleh dilihat.
  if (canManage === false) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader title="Kelola Achievement" />
        <EmptyState text="Hanya departemen MBA yang dapat mengelola achievement." />
      </AdminContent>
    );
  }

  if (editing) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader
          title={`Edit: ${editing.title}`}
          action={{ label: "← Kembali", onClick: () => setEditing(null) }}
        />

        <AchievementForm
          mode="edit"
          key={editing.id}
          defaultValues={toFormValues(editing)}
          existingImageUrl={editing.fotoAchievements?.[0]?.url}
          submitLabel="Simpan"
          isSubmitting={updateAchievement.isPending}
          onSubmit={onSubmit}
        />
      </AdminContent>
    );
  }

  return (
    <AdminContent className="space-y-8">
      <ManageHeader title="Kelola Achievement" />

      {isLoading && <EmptyState text="Memuat achievement..." />}

      {!isLoading && achievements.length === 0 && (
        <EmptyState text="Belum ada achievement yang diunggah." />
      )}

      <div className="space-y-5">
        {achievements.map((item) => (
          <AdminPostCard
            key={item.id}
            imageUrl={item.fotoAchievements?.[0]?.url}
            title={item.title}
            subtitle={item.achiever_name}
            badge={item.level ?? undefined}
            meta={[
              item.achievement_end_date
                ? `${formatDate(item.achievement_date)} – ${formatDate(item.achievement_end_date)}`
                : formatDate(item.achievement_date),
              item.location,
            ]}
            onEdit={() => setEditing(item)}
            onDelete={() => onDelete(item)}
            isDeleting={deleteAchievement.isPending}
          />
        ))}
      </div>
    </AdminContent>
  );
}
