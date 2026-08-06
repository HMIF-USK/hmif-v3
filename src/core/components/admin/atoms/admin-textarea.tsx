import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type AdminTextareaProps =
  TextareaHTMLAttributes<HTMLTextAreaElement>;

const AdminTextarea = forwardRef<
  HTMLTextAreaElement,
  AdminTextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={clsx(
        `
        min-h-[180px]
        w-full

        resize-none

        rounded-xl

        border

        bg-white/10

        px-5
        py-4

        font-semibold
        text-[#E4D1FF]
        placeholder:text-[#E4D1FF]/50

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
});

AdminTextarea.displayName = "AdminTextarea";

export default AdminTextarea;