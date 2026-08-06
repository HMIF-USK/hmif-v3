import type { ReactNode } from "react";
import clsx from "clsx";

type AdminContentProps = {
  children: ReactNode;
  className?: string;
};

export default function AdminContent({
  children,
  className,
}: AdminContentProps) {
  return (
    <section
      className={clsx(
        `
        relative
        min-h-full
        w-full
        rounded-[20px]

        border border-white/20

        bg-white/10

        backdrop-blur-xl

        shadow-[0_8px_32px_rgba(0,0,0,0.35)]

        p-8
        `,
        className
      )}
    >
      {children}
    </section>
  );
}