"use client";

import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
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

import { achievementSchema, AchievementFormValues } from "./schema";

export default function AchievementPage() {
  const form = useForm<AchievementFormValues>({
    resolver: zodResolver(achievementSchema),
    defaultValues: {
      namaKegiatan: "",
      penyelenggara: "",
      detailPenyelenggara: "",
      lokasiEvent: "",
      tingkat: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      description: "",
    },
  });

  const imageFile = form.watch("image");

  const preview = useMemo(() => {
    if (!imageFile || !(imageFile instanceof File)) return undefined;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  // Dummy mutation for backend integration
  const createAchievement = useMutation({
    mutationFn: async (data: AchievementFormValues) => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // We could use FormData here if required by the API
      // const formData = new FormData();
      // formData.append("image", data.image);
      // formData.append("namaKegiatan", data.namaKegiatan);
      // ...
      
      return data;
    },
    onSuccess: (data) => {
      console.log("Successfully submitted!", data);
      alert("Berhasil menyimpan data pencapaian!");
      form.reset();
    },
    onError: (error) => {
      console.error("Failed to submit", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    },
  });

  const onSubmit = (data: AchievementFormValues) => {
    createAchievement.mutate(data);
  };

  return (
    <>
      <AdminContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Controller
            control={form.control}
            name="image"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <AdminUpload
                  title="Achievement"
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
                label="Nama Kegiatan"
                required
                error={form.formState.errors.namaKegiatan?.message}
              >
                <AdminInput
                  placeholder="Masukkan nama kegiatan"
                  {...form.register("namaKegiatan")}
                />
              </AdminField>

              <AdminFieldRow>
                <AdminField
                  label="Penyelenggara"
                  required
                  error={form.formState.errors.penyelenggara?.message}
                >
                  <AdminInput
                    placeholder="Masukkan penyelenggara"
                    {...form.register("penyelenggara")}
                  />
                </AdminField>

                <AdminField
                  label="Detail Penyelenggara"
                  error={form.formState.errors.detailPenyelenggara?.message}
                >
                  <AdminInput
                    placeholder="Masukkan detail penyelenggara"
                    {...form.register("detailPenyelenggara")}
                  />
                </AdminField>
              </AdminFieldRow>

              <AdminFieldRow>
                <AdminField
                  label="Lokasi Event"
                  required
                  error={form.formState.errors.lokasiEvent?.message}
                >
                  <AdminInput
                    placeholder="Masukkan lokasi event"
                    {...form.register("lokasiEvent")}
                  />
                </AdminField>

                <AdminField
                  label="Tingkat"
                  required
                  error={form.formState.errors.tingkat?.message}
                >
                  <Controller
                    control={form.control}
                    name="tingkat"
                    render={({ field }) => (
                      <AdminSelect
                        placeholder="Pilih tingkat"
                        value={field.value}
                        onValueChange={field.onChange}
                        options={[
                          { label: "Internasional", value: "internasional" },
                          { label: "Nasional", value: "nasional" },
                          { label: "Provinsi", value: "provinsi" },
                          { label: "Kabupaten/Kota", value: "kabupaten" },
                          { label: "Universitas", value: "universitas" },
                        ]}
                      />
                    )}
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
            </div>
          </AdminSection>

          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <AdminDescriptionSection
                  value={field.value}
                  placeholder="Masukkan deskripsi kegiatan..."
                  onChange={field.onChange}
                  isSubmitting={createAchievement.isPending}
                />
                {fieldState.error && (
                  <span className="text-sm font-medium text-red-400 px-4">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </form>
      </AdminContent>
    </>
  );
}