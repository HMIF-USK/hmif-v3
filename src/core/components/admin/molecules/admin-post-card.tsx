"use client";

import clsx from "clsx";

type AdminPostCardProps = {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  /** Baris kecil di bawah judul: tanggal, lokasi, status, dst. */
  meta?: string[];
  badge?: string;
  onEdit: () => void;
  onDelete: () => void;
  isDeleting?: boolean;
};

const actionClass = `
  h-[44px]
  px-6
  font-poppins
  font-bold
  text-[16px]
  transition-all
  duration-200
  hover:brightness-110
  hover:-translate-y-0.5
  active:translate-y-0
  active:scale-95
  disabled:opacity-50
  disabled:cursor-not-allowed
`;

export default function AdminPostCard({
  imageUrl,
  title,
  subtitle,
  meta = [],
  badge,
  onEdit,
  onDelete,
  isDeleting,
}: AdminPostCardProps) {
  return (
    <article
      className="
        flex
        flex-col
        gap-5
        overflow-hidden
        rounded-[20px]
        border
        p-5
        backdrop-blur-[6.5px]
        sm:flex-row
        sm:items-center
      "
      style={{
        borderColor: "#E19FFF",
        background: "linear-gradient(180deg, rgba(135,58,227,0.55) 0%, rgba(74,32,125,0.55) 100%)",
      }}
    >
      <div
        className="h-[120px] w-full shrink-0 overflow-hidden rounded-[14px] border sm:w-[180px]"
        style={{ borderColor: "#E19FFF", background: "rgba(255,255,255,0.06)" }}
      >
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        )}
      </div>

      <div className="min-w-0 flex-1 font-poppins">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="truncate text-[22px] font-bold text-[#E4D1FF]">{title}</h3>

          {badge && (
            <span
              className="rounded-full border px-3 py-1 text-[12px] font-semibold text-[#E4D1FF]"
              style={{ borderColor: "#E19FFF", background: "rgba(255,255,255,0.10)" }}
            >
              {badge}
            </span>
          )}
        </div>

        {subtitle && <p className="mt-1 truncate text-[15px] text-[#E4D1FF]/80">{subtitle}</p>}

        {meta.length > 0 && (
          <p className="mt-2 text-[14px] text-[#E4D1FF]/60">{meta.join(" · ")}</p>
        )}
      </div>

      <div className="flex shrink-0 gap-3">
        <button
          type="button"
          onClick={onEdit}
          className={clsx(actionClass)}
          style={{
            background: "#C8A7EF",
            color: "#7300FF",
            borderRadius: "18px 8px 18px 8px",
          }}
        >
          Edit
        </button>

        <button
          type="button"
          onClick={onDelete}
          disabled={isDeleting}
          className={clsx(actionClass, "border")}
          style={{
            borderColor: "#FF9FB0",
            background: "rgba(255,90,120,0.18)",
            color: "#FFD3DB",
            borderRadius: "18px 8px 18px 8px",
          }}
        >
          {isDeleting ? "Menghapus..." : "Hapus"}
        </button>
      </div>
    </article>
  );
}
