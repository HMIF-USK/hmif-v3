"use client";

export function ManageHeader({
  title,
  action,
}: {
  title: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <h1
        className="
          bg-gradient-to-b
          from-white/70
          to-[rgba(119,51,200,0.8)]
          bg-clip-text
          font-poppins
          text-[42px]
          font-bold
          uppercase
          text-transparent
        "
      >
        {title}
      </h1>

      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="
            h-[50px]
            px-7
            font-poppins
            text-[18px]
            font-bold
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:brightness-110
            active:translate-y-0
            active:scale-95
          "
          style={{
            background: "#C8A7EF",
            color: "#7300FF",
            borderRadius: "18px 8px 18px 8px",
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div
      className="rounded-[20px] border p-10 text-center font-poppins text-[18px] text-[#E4D1FF]/70"
      style={{ borderColor: "#E19FFF", background: "rgba(255,255,255,0.06)" }}
    >
      {text}
    </div>
  );
}
