import AdminTextarea from "../atoms/admin-textarea";

type AdminDescriptionSectionProps = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
};

export default function AdminDescriptionSection({
  value,
  placeholder,
  onChange,
  onSubmit,
}: AdminDescriptionSectionProps) {
  return (
    <section
      className="
        relative
        overflow-visible
        rounded-[20px]
        border
        backdrop-blur-[6.5px]
        shadow-[0_10px_13.6px_rgba(0,0,0,0.25)]
      "
      style={{
        borderColor: "#E19FFF",
        background:
          "linear-gradient(180deg,#873AE3 37%,#4A207D 100%)",
      }}
    >
      {/* Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0) 35%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 pb-28">
        <h2 className="
    bg-gradient-to-b
    from-white/70
    to-[rgba(119,51,200,0.8)]

    bg-clip-text
    text-transparent
    font-bold

    uppercase
    text-[48px]
  ">
          Deskripsi
        </h2>

        <AdminTextarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className="
            min-h-[260px]
            rounded-[16px]
          "
        />
      </div>

      {/* Notch */}
      <div
        className="
          absolute
          bottom-0
          right-0

          h-24
          w-[240px]

          rounded-tl-[20px]
          rounded-br-[20px]

          border-l
          border-t

          backdrop-blur-[6.5px]
        "
        style={{
          borderColor: "#E19FFF",
        }}
      >
        <button
          onClick={onSubmit}
          className="
            absolute
            bottom-5
            right-5

            h-[60px]
            w-[180px]

            rounded-[14px]

            border

            font-poppins
            text-xl
            font-semibold

            transition-all

            hover:brightness-110
            active:scale-95
          "
          style={{
            background: "#C8A7EF",
            color: "#7300FF",
            borderColor: "#E19FFF",
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}