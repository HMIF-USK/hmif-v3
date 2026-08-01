"use client";

import { useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import uploadIcon from "@/app/(private)/admin/images/upload-icon.png";

type AdminUploadProps = {
  preview?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
  title?: string;
};

export default function AdminUpload({
  preview,
  accept = "image/*",
  onChange,
  title,
}: AdminUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      onChange?.(null);
      return;
    }

    onChange?.(file);
  };

  return (
    <div className="relative w-full">
      <input
        hidden
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
      />

      {/* Tab Label */}
      {title && (
        <div className="relative h-[45px] w-fit min-w-[200px] z-10 pointer-events-none">
          {/* Border Outer Layer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#E19FFF",
              clipPath:
                "polygon(0 0, calc(100% - 39px) 0, 100% 16px, 100% 100%, 0 100%)",
            }}
          />

          {/* Background Inner Layer */}
          <div
            className="absolute top-[2px] left-[2px] right-[2px] bottom-0"
            style={{
              background:
                "linear-gradient(180deg, #5033B7 0%, #7E73A4 100%)",
              clipPath:
                "polygon(0 0, calc(100% - 38px) 0, 100% 15px, 100% 100%, 0 100%)",
            }}
          />

          {/* Content Layer */}
          <div className="relative z-10 flex h-full items-center justify-start pl-6 pr-6 font-poppins font-semibold text-white text-[20px] tracking-wide">
            {title}
          </div>
        </div>
      )}

      {/* Main Upload Box */}
      <div
        onClick={handleClick}
        className={clsx(
          `
          relative
          h-[370px]
          w-full
          cursor-pointer
          overflow-hidden
          border
          backdrop-blur-[6.5px]
          transition-all
          duration-300
          hover:brightness-110
          `,
          title
            ? "-mt-[2px] rounded-tr-[20px] rounded-b-[20px] rounded-tl-none"
            : "rounded-[20px]"
        )}
        style={{
          borderColor: "#E19FFF",
          background: "rgba(255,255,255,.08)",
        }}
      >
        {preview ? (
          <div className="group relative h-full w-full">
            <img
              src={preview}
              alt=""
              className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-50"
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div
                className="rounded-3xl border p-[10px]"
                style={{
                  borderColor: "#7300FF",
                  background: "rgba(115,0,255,0.28)",
                }}
              >
                <div
                  className="rounded-2xl px-8 py-3"
                  style={{
                    background: "rgba(115,0,255,0.40)",
                  }}
                >
                  <p className="flex items-center gap-2 font-poppins font-semibold text-[20px] text-white">
                    Ganti Gambar
                    <span className="text-2xl">↗</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
            "
          >
            <div
              className="
                flex
                items-center
                justify-center
                rounded-3xl
                p-[10px]
              "
            >
              <img
                src={uploadIcon.src}
                alt="Upload"
                className="h-30 w-30 object-contain"
              />
            </div>

            <div
              className="
                mt-8
                rounded-3xl
                border
                p-[10px]
              "
              style={{
                borderColor: "#7300FF",
                background: "rgba(115,0,255,0.28)",
              }}
            >
              <div
                className="
                  rounded-2xl
                  px-8
                  py-3
                "
                style={{
                  background: "rgba(115,0,255,0.40)",
                }}
              >
                <p
                  className="
                    flex
                    items-center
                    gap-2
                    font-poppins
                    font-semibold
                    text-[20px]
                    text-white
                  "
                >
                  Upload Gambar Disini
                  <span className="text-2xl">↗</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}