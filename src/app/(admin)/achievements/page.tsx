"use client";

import { useMemo, useState } from "react";

import AdminLayout from "@/core/layouts/admin-layout";
import AdminContent from "@/core/components/admin/organisms/admin-content";
import AdminSection from "@/core/components/admin/organisms/admin-section";
import AdminDescriptionSection from "@/core/components/admin/organisms/admin-description-section";

import AdminUpload from "@/core/components/admin/molecules/admin-upload";
import AdminField from "@/core/components/admin/molecules/admin-field";
import AdminFieldRow from "@/core/components/admin/molecules/admin-field-row";

import AdminInput from "@/core/components/admin/atoms/admin-input";
import AdminSelect from "@/core/components/admin/atoms/admin-select";
import AdminDatePicker from "@/core/components/admin/atoms/admin-date-picker";

export default function AchievementPage() {
  const [image, setImage] = useState<File | null>(null);

  const [description, setDescription] = useState("");

  const [namaKegiatan, setNamaKegiatan] = useState("");
  const [penyelenggara, setPenyelenggara] = useState("");
  const [detailPenyelenggara, setDetailPenyelenggara] = useState("");
  const [lokasiEvent, setLokasiEvent] = useState("");
  const [tingkat, setTingkat] = useState("");
  const [tanggalMulai, setTanggalMulai] = useState("");
  const [tanggalSelesai, setTanggalSelesai] = useState("");

  const preview = useMemo(() => {
    if (!image) return undefined;
    return URL.createObjectURL(image);
  }, [image]);

  const handleSubmit = () => {
    console.log({
      image,
      namaKegiatan,
      penyelenggara,
      detailPenyelenggara,
      lokasiEvent,
      tingkat,
      tanggalMulai,
      tanggalSelesai,
      description,
    });
  };

  return (
    <>
      <AdminContent>

        <AdminUpload
              preview={preview}
              onChange={setImage}
            />
        <AdminSection title="Keterangan" className="my-8">
          <div className="space-y-8">

            <AdminField label="Nama Kegiatan">
              <AdminInput
                placeholder="Masukkan nama kegiatan"
                value={namaKegiatan}
                onChange={(e) => setNamaKegiatan(e.target.value)}
              />
            </AdminField>

            <AdminFieldRow>
              <AdminField label="Penyelenggara">
                <AdminInput
                  placeholder="Masukkan penyelenggara"
                  value={penyelenggara}
                  onChange={(e) => setPenyelenggara(e.target.value)}
                />
              </AdminField>

              <AdminField label="Detail Penyelenggara">
                <AdminInput
                  placeholder="Masukkan detail penyelenggara"
                  value={detailPenyelenggara}
                  onChange={(e) =>
                    setDetailPenyelenggara(e.target.value)
                  }
                />
              </AdminField>
            </AdminFieldRow>

            <AdminFieldRow>
              <AdminField label="Lokasi Event">
                <AdminInput
                  placeholder="Masukkan lokasi event"
                  value={lokasiEvent}
                  onChange={(e) => setLokasiEvent(e.target.value)}
                />
              </AdminField>

              <AdminField label="Tingkat">
                <AdminSelect
                placeholder="Internasional"
  value={tingkat}
  onValueChange={setTingkat}
  options={[
    {
      label: "Internasional",
      value: "internasional",
    },
    {
      label: "Nasional",
      value: "nasional",
    },
    {
      label: "Provinsi",
      value: "provinsi",
    },
    {
      label: "Kabupaten/Kota",
      value: "kabupaten",
    },
    {
      label: "Universitas",
      value: "universitas",
    },
  ]}
/>
              </AdminField>
            </AdminFieldRow>

            <AdminFieldRow>
              <AdminField label="Tanggal Mulai">
                <AdminDatePicker
                  value={tanggalMulai}
                  onChange={setTanggalMulai}
                />
              </AdminField>

              <AdminField label="Tanggal Selesai">
                <AdminDatePicker
                  value={tanggalSelesai}
                  onChange={setTanggalSelesai}
                />
              </AdminField>
            </AdminFieldRow>

          </div>
        </AdminSection>

        <AdminDescriptionSection
          value={description}
          placeholder="Masukkan deskripsi kegiatan..."
          onChange={setDescription}
          onSubmit={handleSubmit}
        />

      </AdminContent>
    </>
  );
}