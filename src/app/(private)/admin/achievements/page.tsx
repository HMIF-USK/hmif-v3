"use client";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import {
  EmptyState,
  ManageHeader,
} from "@/core/components/admin/molecules/admin-manage-header";
import AchievementForm, {
  joinAchiever,
  type AchievementFormValues,
} from "@/core/components/admin/organisms/achievement-form";
import {
  useCanManageAchievement,
  useCreateAchievement,
} from "@/services/achievement/achievement.mutation";

export default function AchievementPage() {
  const { data: canManage } = useCanManageAchievement();
  const createAchievement = useCreateAchievement();

  const onSubmit = async (data: AchievementFormValues, imageUrl: string) => {
    await createAchievement.mutateAsync({
      title: data.namaKegiatan,
      description: data.description,
      location: data.lokasiEvent,
      achiever_name: joinAchiever(data.penyelenggara, data.detailPenyelenggara),
      achievement_date: new Date(data.tanggalMulai).toISOString(),
      achievement_end_date: new Date(data.tanggalSelesai).toISOString(),
      level: data.tingkat,
      foto_urls: [imageUrl],
    });

    alert("Berhasil menyimpan data pencapaian!");
  };

  // Backend membatasi POST /achievements ke role mba & superUser.
  if (canManage === false) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader title="Achievements" />
        <EmptyState text="Hanya departemen MBA yang dapat mengunggah achievement." />
      </AdminContent>
    );
  }

  return (
    <AdminContent>
      <AchievementForm onSubmit={onSubmit} isSubmitting={createAchievement.isPending} />
    </AdminContent>
  );
}
