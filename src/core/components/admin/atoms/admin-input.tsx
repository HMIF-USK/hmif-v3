import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

type AdminInputProps = InputHTMLAttributes<HTMLInputElement>;

const AdminInput = forwardRef<HTMLInputElement, AdminInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          `
          h-[60px]
          w-full

          rounded-xl

          border

          bg-white/10

          px-5

          font-semibold
          text-white
          placeholder:text-white/40

          outline-none

          transition-all
          duration-200

          focus:border-fuchsia-300
          focus:ring-2
          focus:ring-fuchsia-300/30
          `,
          className
        )}
        style={{
          borderColor: "#E19FFF",
        }}
        {...props}
      />
    );
  }
);

AdminInput.displayName = "AdminInput";

export default AdminInput;