"use client";

import { useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminSection from "@/core/components/admin/organisms/admin-section";
import AdminDescriptionSection from "@/core/components/admin/organisms/admin-description-section";

import AdminUpload from "@/core/components/admin/molecules/admin-upload";
import AdminField from "@/core/components/admin/molecules/admin-field";
import AdminFieldRow from "@/core/components/admin/molecules/admin-field-row";

import AdminInput from "@/core/components/admin/atoms/admin-input";
import AdminSelect from "@/core/components/admin/atoms/admin-select";
import AdminDatePicker from "@/core/components/admin/atoms/admin-date-picker";

import AdminList from "@/core/components/admin/organisms/admin-list";

import {
  useCreateProker,
  useDeleteProker,
  useDepartments,
  useProkers,
  useUpdateProker,
} from "@/services/hmif/hmif.query";
import { toIsoDate, uploadImage } from "@/utils/cloudinary.util";
import { prokerStatusFromRange } from "@/services/hmif/hmif.mapper";

import { eventSchema, EventFormValues } from "./schema";

export default function EventPage() {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      namaKegiatan: "",
      penyelenggara: "",
      lokasiEvent: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      waktuMulai: "",
      waktuSelesai: "",
      description: "",
    },
  });

  const imageFile = form.watch("image");

  const preview = useMemo(() => {
    if (!imageFile || !(imageFile instanceof File)) return undefined;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  const [editingId, setEditingId] = useState<string | null>(null);

  const { data: departments = [] } = useDepartments();
  const { data: prokers = [], isLoading, error } = useProkers();

  const departmentOptions = useMemo(
    () => departments.map((d) => ({ label: d.name, value: d.id })),
    [departments]
  );

  const createProker = useCreateProker();
  const updateProker = useUpdateProker();
  const deleteProker = useDeleteProker();

  const isMutating =
    createProker.isPending || updateProker.isPending || deleteProker.isPending;

  const buildPayload = async (data: EventFormValues) => {
    const event_start = toIsoDate(data.tanggalMulai, data.waktuMulai);
    const event_end = toIsoDate(data.tanggalSelesai, data.waktuSelesai);

    return {
      name: data.namaKegiatan,
      departement_id: data.penyelenggara,
      description: data.description,
      location: data.lokasiEvent,
      event_start,
      event_end,
      status: prokerStatusFromRange(event_start, event_end),
      photos: data.image instanceof File ? [await uploadImage(data.image)] : [],
    };
  };

  const onSubmit = async (data: EventFormValues) => {
    try {
      const payload = await buildPayload(data);

      if (editingId) {
        await updateProker.mutateAsync({ id: editingId, payload });
        setEditingId(null);
      } else {
        await createProker.mutateAsync(payload);
      }

      form.reset();
      alert("Berhasil menyimpan data event!");
    } catch (err) {
      alert((err as Error).message || "Terjadi kesalahan saat menyimpan data.");
    }
  };

  const handleEdit = (id: string) => {
    const proker = prokers.find((item) => item.id === id);
    if (!proker) return;

    setEditingId(id);
    form.reset({
      namaKegiatan: proker.name,
      penyelenggara: proker.departement_id,
      lokasiEvent: proker.location,
      tanggalMulai: proker.event_start.slice(0, 10),
      tanggalSelesai: proker.event_end.slice(0, 10),
      waktuMulai: proker.event_start.slice(11, 16),
      waktuSelesai: proker.event_end.slice(11, 16),
      description: proker.description,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AdminContent>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 font-poppins">
        <Controller
          control={form.control}
          name="image"
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-2">
              <AdminUpload
                title="Event"
                preview={preview}
                onChange={field.onChange}
              />

              {fieldState.error && (
                <span className="text-sm font-medium text-red-400">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          )}
        />

        <AdminSection title="Keterangan">
          <div className="space-y-8">
            <AdminField
              label="Nama Event"
              required
              error={form.formState.errors.namaKegiatan?.message}
            >
              <AdminInput
                placeholder="Integer"
                {...form.register("namaKegiatan")}
              />
            </AdminField>

            <AdminFieldRow>
              <AdminField
                label="Penyelenggara"
                required
                error={form.formState.errors.penyelenggara?.message}
              >
                <Controller
                  control={form.control}
                  name="penyelenggara"
                  render={({ field }) => (
                    <AdminSelect
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Departement"
                      options={departmentOptions}
                    />
                  )}
                />
              </AdminField>

              <AdminField
                label="Lokasi Event"
                required
                error={form.formState.errors.lokasiEvent?.message}
              >
                <AdminInput
                  placeholder="Aula FMIPA USK"
                  {...form.register("lokasiEvent")}
                />
              </AdminField>
            </AdminFieldRow>

            <AdminFieldRow>
              <AdminField
                label="Tanggal Mulai"
                required
                error={form.formState.errors.tanggalMulai?.message}
              >
                <Controller
                  control={form.control}
                  name="tanggalMulai"
                  render={({ field }) => (
                    <AdminDatePicker
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </AdminField>

              <AdminField
                label="Tanggal Selesai"
                required
                error={form.formState.errors.tanggalSelesai?.message}
              >
                <Controller
                  control={form.control}
                  name="tanggalSelesai"
                  render={({ field }) => (
                    <AdminDatePicker
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </AdminField>
            </AdminFieldRow>

            <AdminFieldRow>
              <AdminField
                label="Waktu Mulai"
                required
                error={form.formState.errors.waktuMulai?.message}
              >
                <AdminInput
                  type="time"
                  placeholder="00.00"
                  {...form.register("waktuMulai")}
                />
              </AdminField>

              <AdminField
                label="Waktu Selesai"
                required
                error={form.formState.errors.waktuSelesai?.message}
              >
                <AdminInput
                  type="time"
                  placeholder="00.00"
                  {...form.register("waktuSelesai")}
                />
              </AdminField>
            </AdminFieldRow>
          </div>
        </AdminSection>

        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-2">
              <AdminDescriptionSection
                value={field.value}
                placeholder="Masukkan deskripsi event..."
                onChange={field.onChange}
                isSubmitting={isMutating}
              />

              {fieldState.error && (
                <span className="px-4 text-sm font-medium text-red-400">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          )}
        />
      </form>

      <AdminList
        title={editingId ? "Daftar Event (mode edit)" : "Daftar Event"}
        items={prokers.map((proker) => ({
          id: proker.id,
          title: proker.name,
          subtitle: `${proker.departement?.name ?? "-"} · ${proker.location}`,
        }))}
        isLoading={isLoading}
        error={error}
        editingId={editingId}
        isMutating={isMutating}
        onEdit={handleEdit}
        onDelete={(id) => deleteProker.mutate(id)}
      />
    </AdminContent>
  );
}