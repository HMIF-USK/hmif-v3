"use client";

import AdminTextarea from "../atoms/admin-textarea";
import clsx from "clsx";

type AdminDescriptionSectionProps = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  isSubmitting?: boolean;
};

export default function AdminDescriptionSection({
  value,
  placeholder,
  onChange,
  onSubmit,
  isSubmitting,
}: AdminDescriptionSectionProps) {
  const bgGradient = "linear-gradient(180deg, #873AE3 170px, #4A207D 450px)";
  const highlightGradient =
    "linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0) 150px)";

  return (
    <section className="relative w-full overflow-visible rounded-[20px]">
      {/* BACKGROUND DIVS */}
      {/* 1. Main Left-Top-Bottom */}
      <div
        className="absolute top-0 left-0 right-[240px] bottom-0 rounded-l-[20px] rounded-br-[20px] pointer-events-none"
        style={{ background: bgGradient }}
      />

      {/* 2. Main Right-Top */}
      <div
        className="absolute top-0 right-0 w-[240px] bottom-[96px] rounded-tr-[20px] rounded-br-[20px] pointer-events-none"
        style={{ background: bgGradient }}
      />

      {/* 3. Inner corner filler (Full height for perfect gradient alignment, masked to 21x21 for seamless overlap) */}
      <div
        className="absolute top-0 bottom-[76px] right-[220px] w-[21px] pointer-events-none"
        style={{
          background: bgGradient,
          WebkitMaskImage:
            "radial-gradient(circle at bottom right, transparent 19px, black 19.5px)",
          WebkitMaskPosition: "bottom",
          WebkitMaskSize: "21px 21px",
          WebkitMaskRepeat: "no-repeat",
          maskImage:
            "radial-gradient(circle at bottom right, transparent 19px, black 19.5px)",
          maskPosition: "bottom",
          maskSize: "21px 21px",
          maskRepeat: "no-repeat",
        }}
      />

      {/* BORDER DIVS */}
      {/* 1. Main Left-Top-Bottom Border */}
      <div
        className="absolute top-0 left-0 right-[260px] bottom-0 rounded-l-[20px] border-t border-l border-b pointer-events-none"
        style={{ borderColor: "#E19FFF" }}
      />

      {/* 2. Main Right-Top Border */}
      <div
        className="absolute top-0 right-0 w-[260px] bottom-[116px] rounded-tr-[20px] border-t border-r pointer-events-none"
        style={{ borderColor: "#E19FFF" }}
      />

      {/* 3. Outer Corner at (W, H-96) */}
      <div
        className="absolute right-0 bottom-[96px] w-[20px] h-[20px] rounded-br-[20px] border-r border-b pointer-events-none"
        style={{ borderColor: "#E19FFF" }}
      />

      {/* 4. Outer Corner at (W-240, H) */}
      <div
        className="absolute right-[240px] bottom-0 w-[20px] h-[20px] rounded-br-[20px] border-r border-b pointer-events-none"
        style={{ borderColor: "#E19FFF" }}
      />

      {/* 5. Notch Inner Corner & Edges Border */}
      <div
        className="absolute right-[20px] bottom-[20px] w-[220px] h-[76px] rounded-tl-[20px] border-t border-l pointer-events-none"
        style={{ borderColor: "#E19FFF" }}
      />

      {/* HIGHLIGHT OVERLAYS */}
      <div
        className="absolute top-0 left-0 right-[240px] bottom-0 rounded-l-[20px] rounded-br-[20px] pointer-events-none"
        style={{ background: highlightGradient }}
      />
      <div
        className="absolute top-0 right-0 w-[240px] bottom-[96px] rounded-tr-[20px] rounded-br-[20px] pointer-events-none"
        style={{ background: highlightGradient }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 pb-32">
        <h2 className="bg-gradient-to-b from-white/70 to-[rgba(119,51,200,0.8)] bg-clip-text text-transparent font-bold uppercase text-[48px]">
          Deskripsi
        </h2>
        <AdminTextarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className="min-h-[260px] rounded-[16px]"
        />
      </div>

      {/* Submit Button Container */}
      <div className="absolute bottom-0 right-0 h-24 w-[240px] flex items-center justify-center z-20">
        <button
          type="submit"
          onClick={onSubmit}
          disabled={isSubmitting}
          className={clsx(`
            w-[220px]
            h-[70px]
            font-bold
            text-[25px]
            tracking-wide
            transition-all
            duration-200
            hover:scale-105
            hover:brightness-110
            hover:shadow-[0_8px_20px_rgba(200,167,239,0.3)]
            hover:-translate-y-1
            active:scale-95
            active:translate-y-0
            active:shadow-none
            disabled:opacity-50
            disabled:cursor-not-allowed
            disabled:hover:scale-100
            disabled:hover:brightness-100
            disabled:hover:translate-y-0
            disabled:hover:shadow-none
          `)}
          style={{
            background: "#C8A7EF",
            color: "#7300FF",
            borderRadius: "18px 8px 18px 8px",
          }}
        >
          {isSubmitting ? "Menyimpan..." : "Submit"}
        </button>
      </div>
    </section>
  );
}