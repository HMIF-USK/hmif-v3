"use client";

import { useState } from "react";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminPostCard from "@/core/components/admin/molecules/admin-post-card";
import {
  EmptyState,
  ManageHeader,
} from "@/core/components/admin/molecules/admin-manage-header";
import EventForm, {
  fromISO,
  toISO,
  type EventFormValues,
} from "@/core/components/admin/organisms/event-form";

import { useDeleteEvent, useMyEvents, useUpdateEvent } from "@/services/event/event.mutation";
import type { TEventResponse } from "@/services/event/event.type";

const STATUS_LABEL: Record<string, string> = {
  ComingSoon: "Coming Soon",
  OnGoing: "On Going",
  Completed: "Completed",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

const toFormValues = (event: TEventResponse): EventFormValues => {
  const start = fromISO(event.event_start);
  const end = fromISO(event.event_end);

  return {
    namaKegiatan: event.name,
    penyelenggara: event.departement_id,
    lokasiEvent: event.location,
    tanggalMulai: start.date,
    tanggalSelesai: end.date,
    waktuMulai: start.time,
    waktuSelesai: end.time,
    status: event.status,
    description: event.description,
  };
};

export default function ManageEventPage() {
  const [editing, setEditing] = useState<TEventResponse | null>(null);

  const { data: events = [], isLoading } = useMyEvents();
  const updateEvent = useUpdateEvent();
  const deleteEvent = useDeleteEvent();

  const onSubmit = async (data: EventFormValues, imageUrl: string) => {
    await updateEvent.mutateAsync({
      id: editing!.id,
      name: data.namaKegiatan,
      description: data.description,
      location: data.lokasiEvent,
      event_start: toISO(data.tanggalMulai, data.waktuMulai),
      event_end: toISO(data.tanggalSelesai, data.waktuSelesai),
      status: data.status,
      photos: [imageUrl],
    });

    alert("Perubahan event berhasil disimpan!");
    setEditing(null);
  };

  const onDelete = async (event: TEventResponse) => {
    if (!confirm(`Hapus event "${event.name}"? Tindakan ini tidak bisa dibatalkan.`)) return;

    try {
      await deleteEvent.mutateAsync(event.id);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Gagal menghapus event.");
    }
  };

  if (editing) {
    return (
      <AdminContent className="space-y-8">
        <ManageHeader
          title={`Edit: ${editing.name}`}
          action={{ label: "← Kembali", onClick: () => setEditing(null) }}
        />

        <EventForm
          mode="edit"
          key={editing.id}
          defaultValues={toFormValues(editing)}
          existingImageUrl={editing.fotoProkers?.[0]?.url}
          submitLabel="Simpan"
          isSubmitting={updateEvent.isPending}
          onSubmit={onSubmit}
        />
      </AdminContent>
    );
  }

  return (
    <AdminContent className="space-y-8">
      <ManageHeader title="Kelola Event" />

      {isLoading && <EmptyState text="Memuat event..." />}

      {!isLoading && events.length === 0 && (
        <EmptyState text="Belum ada event yang diunggah." />
      )}

      <div className="space-y-5">
        {events.map((event) => (
          <AdminPostCard
            key={event.id}
            imageUrl={event.fotoProkers?.[0]?.url}
            title={event.name}
            subtitle={event.departement?.name}
            badge={STATUS_LABEL[event.status] ?? event.status}
            meta={[
              `${formatDate(event.event_start)} – ${formatDate(event.event_end)}`,
              event.location,
            ]}
            onEdit={() => setEditing(event)}
            onDelete={() => onDelete(event)}
            isDeleting={deleteEvent.isPending}
          />
        ))}
      </div>
    </AdminContent>
  );
}
