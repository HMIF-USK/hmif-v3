"use client";

import clsx from "clsx";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AdminSelectOption = {
  label: string;
  value: string;
};

type AdminSelectProps = {
  placeholder?: string;
  options: AdminSelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export default function AdminSelect({
  placeholder,
  options,
  value,
  onValueChange,
  className,
}: AdminSelectProps) {
  return (
    <Select
      value={value}
      onValueChange={onValueChange}
    >
      <SelectTrigger
        className={clsx(
          `
          min-h-[60px]
          w-full

          rounded-xl

          border

          bg-white/10

          px-5

          text-[#E4D1FF]
          placeholder:text-[#E4D1FF]/50

          focus:ring-2
          focus:ring-fuchsia-300/30
          `,
          className
        )}
        style={{
          borderColor: "#E19FFF",
        }}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}