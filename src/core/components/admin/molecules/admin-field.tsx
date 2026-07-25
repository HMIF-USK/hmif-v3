import clsx from "clsx";

type AdminFieldProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  error?: string;
};

export default function AdminField({
  label,
  children,
  className,
  required,
  error,
}: AdminFieldProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {/* Label */}
      <label className="text-[15px] font-bold text-[#E4D1FF] capitalize tracking-wide">
        {label}
      </label>

      {/* Control wrapper */}
      <div className="w-full">
        {children}
      </div>

      {/* Error message */}
      {error && (
        <span className="text-sm font-medium text-red-400 mt-1">
          {error}
        </span>
      )}
    </div>
  );
}