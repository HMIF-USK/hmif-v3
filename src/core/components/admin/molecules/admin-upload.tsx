"use client";

import { useRef } from "react";

type AdminUploadProps = {
  preview?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
};

export default function AdminUpload({
  preview,
  accept = "image/*",
  onChange,
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
    <>
      <input
        hidden
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="
          relative

          h-[370px]
          w-full

          cursor-pointer
          overflow-hidden

          rounded-[20px]

          border

          backdrop-blur-[6.5px]

          transition-all
          duration-300

          hover:brightness-110
        "
        style={{
          borderColor: "#E19FFF",
          background: "rgba(255,255,255,.08)",
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt=""
            className="
              h-full
              w-full
              object-cover
            "
          />
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

              <div
              >
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
    </>
  );
}