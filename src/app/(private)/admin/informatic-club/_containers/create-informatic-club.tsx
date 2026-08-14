'use client';

import InformaticClubForm, {
  type InformaticClubFormValues,
} from '@/core/components/admin/organisms/informatic-club-form';
import { toISO } from '@/core/components/admin/organisms/event-form';
import { useCreateActivity } from '@/services/informatic-club/informatic-club.mutation';

export default function CreateInformaticClub() {
  const createActivity = useCreateActivity();

  const onSubmit = async (data: InformaticClubFormValues, imageUrl: string) => {
    await createActivity.mutateAsync({
      title: data.namaKegiatan,
      description: data.deskripsi,
      division: data.bidang,
      event_start: toISO(data.tanggal, data.jamMulai),
      event_end: toISO(data.tanggal, data.jamSelesai),
      photos: [imageUrl],
    });

    alert('Berhasil menyimpan kegiatan Informatic Club!');
  };

  return <InformaticClubForm onSubmit={onSubmit} isSubmitting={createActivity.isPending} />;
}
