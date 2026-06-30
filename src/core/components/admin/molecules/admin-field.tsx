import clsx from "clsx";

type AdminFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
};

export default function AdminField({
  label,
  children,
  className,
  required,
}: AdminFieldProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {/* Label */}
      <label className="text-sm font-semibold text-violet-100 uppercase tracking-wide">
        {label}
      </label>

      {/* Control wrapper */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}