"use client";

import React, { useRef, useState } from "react";

export default function EventForm() {
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      eventName,
      organizer,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
      description,
      image,
    });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    setImage(e.target.files[0]);
  };

  return (
    <div className="flex w-full flex-1 justify-center items-start">
      <div className="w-full max-w-[940px] rounded-[18px] border border-[#9B9AB5] bg-white/10 p-5 shadow-[0_0_35px_rgba(0,0,0,.35)] backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          <div className="relative mt-8">
            <div className="absolute -top-8 left-0 z-20 h-8 w-[170px]">
              <div
                className="absolute inset-0 bg-[#B9B0E8]"
                style={{
                  clipPath:
                    "polygon(0 100%,0 0,74% 0,84% 40%,84% 100%)",
                }}
              />

              <div
                className="absolute inset-[1.5px]"
                style={{
                  clipPath:
                    "polygon(0 100%,0 0,74% 0,84% 40%,84% 100%)",
                  background:
                    "linear-gradient(90deg,#6040D8 0%,#7D6EC9 100%)",
                }}
              >
                <span
                  className="
                    absolute
                    left-[46%]
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-[16px]
                    font-bold
                    text-white
                  "
                >
                  Event
                </span>
              </div>
            </div>

            <div
              className="
                relative
                h-[400px]
                overflow-hidden
                rounded-r-[16px]
                rounded-b-[16px]
                border
                border-white/30
                bg-white/5
                backdrop-blur-sm
              "
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <svg
                    className="h-36 w-36 text-white/10"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.5 3H7C4.8 3 3 4.8 3 7V17C3 19.2 4.8 21 7 21H17C19.2 21 21 19.2 21 17V11"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M3.5 16.5L8.2 11.7C8.6 11.3 9.3 11.3 9.7 11.7L13.5 15.5L15.8 13.2C16.2 12.8 16.8 12.8 17.2 13.2L20.5 16.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />

                    <path
                      d="M18 10V2M18 2L14.5 5.5M18 2L21.5 5.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              )}

              <input
                ref={inputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={handleImage}
              />

              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="
                  absolute
                  bottom-8
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-[#A967FF]
                  bg-gradient-to-r
                  from-[#7424FF]
                  to-[#925CFF]
                  px-9
                  py-3
                  text-[15px]
                  font-semibold
                  text-white
                  shadow-[0_0_25px_rgba(130,70,255,.45)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                {image ? "Ganti Gambar ↗" : "Upload Gambar Disini ↗"}
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-[12px] border border-[#D8A8FF]/50 bg-gradient-to-r from-[#7A2CFF] via-[#8A38FF] to-[#A548FF] p-5 shadow-[0_0_25px_rgba(132,68,255,.18)]">
  <h2
    className="
      mb-5
      text-[42px]
      font-black
      uppercase
      tracking-tight
      bg-gradient-to-b
      from-[#FFF7FF]
      via-[#E9D4FF]
      to-[#A17BE6]
      bg-clip-text
      text-transparent
      drop-shadow-[0_2px_10px_rgba(255,255,255,.15)]
    "
  >
    KETERANGAN
  </h2>

  <div className="grid grid-cols-2 gap-x-6 gap-y-5">
    <div className="col-span-2 flex flex-col">
      <label className="mb-2 text-sm text-white">
        Nama Event
      </label>

      <input
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
        placeholder="Integer"
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white placeholder:text-white/40 outline-none focus:border-white"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Penyelenggara
      </label>

      <select
        value={organizer}
        onChange={(e) => setOrganizer(e.target.value)}
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white outline-none focus:border-white"
      >
        <option value="" disabled hidden>
          Departement
        </option>

        <option value="MBA" className="text-black">
          Departemen MBA
        </option>

        <option value="PPM" className="text-black">
          Departemen PPM
        </option>

        <option value="PKM" className="text-black">
          Departemen PKM
        </option>

        <option value="Agama" className="text-black">
          Departemen Agama
        </option>

        <option value="HUAL" className="text-black">
          Departemen HUAL
        </option>

        <option value="SOSMAS" className="text-black">
          Departemen SOSMAS
        </option>

        <option value="KOMINKRAF" className="text-black">
          Departemen KOMINKRAF
        </option>

        <option value="ADM" className="text-black">
          Departemen ADM
        </option>
      </select>
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Lokasi Event
      </label>

      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Aula FMIPA USK"
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white placeholder:text-white/40 outline-none focus:border-white"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Tanggal Mulai
      </label>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Tanggal Selesai
      </label>

      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Waktu Mulai
      </label>

      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white outline-none"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-2 text-sm text-white">
        Waktu Selesai
      </label>

      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="h-[44px] rounded-md border border-white/40 bg-transparent px-4 text-white outline-none"
      />
    </div>
  </div>
</div>

<div className="relative h-[250px] w-full">
  <div
    className="absolute inset-0 rounded-[20px] bg-[#C9A6FF]/40"
    style={{
      clipPath:
        "polygon(0 0,100% 0,100% 73%,89% 73%,89% 100%,0 100%)",
    }}
  />

  <div
    className="absolute inset-[1.5px] rounded-[19px] border border-[#E7C5FF]"
    style={{
      clipPath:
        "polygon(0 0,100% 0,100% 72.5%,88.8% 72.5%,88.8% 100%,0 100%)",
      background:
        "linear-gradient(90deg,#6120E8 0%,#7C32F0 45%,#A34DF7 100%)",
    }}
  >
    <div className="h-full pl-5 pr-[270px] pt-7">
  <h2
    className="
      mb-5
      text-[42px]
      font-black
      uppercase
      tracking-tight
      bg-gradient-to-b
      from-[#FFF7FF]
      via-[#E9D4FF]
      to-[#A17BE6]
      bg-clip-text
      text-transparent
      drop-shadow-[0_2px_10px_rgba(255,255,255,.15)]
    "
  >
    DESKRIPSI
  </h2>

  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Masukkan deskripsi event..."
    className="
      h-[120px]
      w-full
      resize-none
      bg-transparent
      text-[18px]
      leading-9
      text-white
      placeholder:text-white/45
      outline-none
    "
  />
</div>
</div>

  <div className="absolute bottom-0 right-0">
    <div className="rounded-br-[18px] rounded-tl-[18px] bg-[#2A2035] p-[6px]">
      <button
        type="submit"
        className="
          h-[72px]
          w-[220px]
          rounded-br-[14px]
          rounded-tl-[14px]
          bg-[#DEB1FF]
          text-[28px]
          font-black
          text-[#6125F5]
          transition
          hover:bg-[#ECCFFF]
        "
      >
        Submit
      </button>
    </div>
  </div>
</div>
</form>
</div>
</div>
  );
}