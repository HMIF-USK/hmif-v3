"use client";

import { useRef } from "react";
import clsx from "clsx";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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

      {/* Tab Label */}
      {title && (
        <div className="absolute top-0 left-[-1px] h-[44px] min-w-[220px] z-10 pointer-events-none">
          {/* Border layer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#E19FFF",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
            }}
          />
          {/* Background layer */}
          <div
            className="absolute top-[1px] left-[1px] right-[1px] bottom-0"
            style={{
              background: "linear-gradient(135deg, #7733C8 0%, #4A207D 100%)",
              clipPath: "polygon(0 0, calc(100% - 19px) 0, 100% 19px, 100% 100%, 0 100%)",
            }}
          />
          {/* Content layer */}
          <div className="relative z-10 flex h-[42px] items-center justify-start pl-6 pr-10 font-bold text-white text-[20px] tracking-wide">
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
          title ? "rounded-tr-[20px] rounded-b-[20px] rounded-tl-none" : "rounded-[20px]"
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
                  <p className="flex items-center gap-2 font-semibold text-xl text-white">
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
            {/* OUTER BOX */}

            <div
              className="
                flex
                items-center
                justify-center

                rounded-3xl


                p-[10px]
              "
            >
              {/* INNER BOX */}

              <div>
                <img
                  src="/images/admin/upload-icon.png"
                  alt="Upload"
                  className="h-30 w-30 object-contain"
                />
              </div>
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