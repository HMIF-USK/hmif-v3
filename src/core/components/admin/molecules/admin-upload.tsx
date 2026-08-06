"use client";

import { useRef } from "react";
import clsx from "clsx";
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
    <div className={clsx("relative", title ? "pt-[42px]" : "")}>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
      />

      {/* EVENT TITLE */}
      {title && (
        <div className="absolute top-0 left-[-1px] z-10 h-[44px] w-[185px] pointer-events-none">
          {/* Border */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#E19FFF",
              clipPath:
                "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
            }}
          />

          {/* Gradient */}
          <div
            className="absolute top-[1px] left-[1px] right-[1px] bottom-0"
            style={{
              background:
                "linear-gradient(180deg, #5033B7 0%, #7E73A4 100%)",
              clipPath:
                "polygon(0 0, calc(100% - 17px) 0, 100% 17px, 100% 100%, 0 100%)",
            }}
          />

          {/* Title */}
          <div
            className="
              relative
              z-10
              flex
              h-[42px]
              items-center
              justify-center
              font-poppins
              font-bold
              text-[18px]
              text-white
            "
          >
            {title}
          </div>
        </div>
      )}

      {/* UPLOAD CONTAINER */}
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
          backdrop-blur-[2px]
          transition-all
          duration-300
          hover:brightness-110
          `,
          title
            ? "rounded-tr-[20px] rounded-b-[20px] rounded-tl-none"
            : "rounded-[20px]"
        )}
        style={{
          borderColor: "#E19FFF",
          background: "rgba(255,255,255,0.06)",
        }}
      >
        {/* PREVIEW */}
        {preview ? (
          <div className="group relative h-full w-full">
            <img
              src={preview}
              alt=""
              className="
                h-full
                w-full
                object-cover
                transition-all
                duration-300
                group-hover:brightness-50
              "
            />

            {/* CHANGE IMAGE */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
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
                  <p
                    className="
                      flex
                      items-center
                      gap-2
                      font-poppins
                      font-semibold
                      text-xl
                      text-white
                    "
                  >
                    Ganti Gambar

                    <span className="text-2xl">
                      ↗
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* EMPTY STATE */
          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
            "
          >
            {/* UPLOAD ICON */}
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

            {/* UPLOAD BUTTON */}
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
                    text-xl
                    text-white
                  "
                >
                  Upload Gambar Disini

                  <span className="text-2xl">
                    ↗
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}