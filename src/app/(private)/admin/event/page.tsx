"use client";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import EventForm, {
  toISO,
  type EventFormValues,
} from "@/core/components/admin/organisms/event-form";
import { useCreateEvent } from "@/services/event/event.mutation";

export default function EventPage() {
  const createEvent = useCreateEvent();

  const onSubmit = async (data: EventFormValues, imageUrl: string) => {
    await createEvent.mutateAsync({
      name: data.namaKegiatan,
      departement_id: data.penyelenggara,
      description: data.description,
      location: data.lokasiEvent,
      event_start: toISO(data.tanggalMulai, data.waktuMulai),
      event_end: toISO(data.tanggalSelesai, data.waktuSelesai),
      status: data.status,
      photos: [imageUrl],
    });

    alert("Berhasil menyimpan data event!");
  };

  return (
    <AdminContent>
      <EventForm onSubmit={onSubmit} isSubmitting={createEvent.isPending} />
    </AdminContent>
  );
}
