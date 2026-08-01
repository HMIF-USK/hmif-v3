import { ReactNode } from "react";
import clsx from "clsx";

type AdminSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function AdminSection({
  title,
  children,
  className,
}: AdminSectionProps) {
  return (
    <section
      className={clsx(
        `
        relative
        w-full
        overflow-hidden
        rounded-[20px]
        border
        backdrop-blur-[6.5px]
        `,
        className
      )}
      style={{
        borderColor: "#E19FFF",
        background: "linear-gradient(180deg, #873AE3 37%, #4A207D 100%)",
      }}
    >
      {/* Highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 35%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
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
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
}