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

        text-[#E4D1FF]
        placeholder:text-[#E4D1FF]/50

        outline-none

        backdrop-blur-[6.5px]

        transition-all

        focus:ring-2
        focus:ring-fuchsia-300/30
        
        [&::-webkit-calendar-picker-indicator]:opacity-0
        [&::-webkit-calendar-picker-indicator]:cursor-pointer
        `,
        className
      )}
      style={{
        borderColor: "#E19FFF",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23E4D1FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "calc(100% - 1.25rem) center",
      }}
    />
  );
}