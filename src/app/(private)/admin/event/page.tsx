"use client";

import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminSection from "@/core/components/admin/organisms/admin-section";
import AdminDescriptionSection from "@/core/components/admin/organisms/admin-description-section";

import AdminUpload from "@/core/components/admin/molecules/admin-upload";
import AdminField from "@/core/components/admin/molecules/admin-field";
import AdminFieldRow from "@/core/components/admin/molecules/admin-field-row";

import AdminInput from "@/core/components/admin/atoms/admin-input";
import AdminSelect from "@/core/components/admin/atoms/admin-select";
import AdminDatePicker from "@/core/components/admin/atoms/admin-date-picker";

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

  const createEvent = useMutation({
    mutationFn: async (data: EventFormValues) => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully submitted!", data);
      alert("Berhasil menyimpan data event!");
      form.reset();
    },
    onError: (error) => {
      console.error("Failed to submit", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    },
  });

  const onSubmit = (data: EventFormValues) => {
    createEvent.mutate(data);
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
                      options={[
                        {
                          label: "HUAL",
                          value: "hual",
                        },
                        {
                          label: "KEAGAMAAN",
                          value: "KEAGAMAAN",
                        },
                        {
                          label: "KOMINKRAF",
                          value: "KOMINKRAF",
                        },
                        {
                          label: "MBA",
                          value: "MBA",
                        },
                        {
                          label: "PKM",
                          value: "PKM",
                        },
                        {
                          label: "PPM",
                          value: "PPM",
                        },
                        {
                          label: "SOSMAS",
                          value: "SOSMAS",
                        },
                      ]}
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
                isSubmitting={createEvent.isPending}
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
    </AdminContent>
  );
}