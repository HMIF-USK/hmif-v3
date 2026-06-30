"use client";

import clsx from "clsx";

type AdminDatePickerProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export default function AdminDatePicker({
  value,
  onChange,
  className,
}: AdminDatePickerProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={clsx(
        `
        h-[60px]
        w-full

        rounded-xl

        border

        bg-white/10

        px-5

        text-white

        outline-none

        backdrop-blur-[6.5px]

        transition-all

        focus:ring-2
        focus:ring-fuchsia-300/30
        `,
        className
      )}
      style={{
        borderColor: "#E19FFF",
      }}
    />
  );
}