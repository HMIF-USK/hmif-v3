import type { ReactNode } from "react";
import heroBanner from "@/app/(private)/admin/images/HeroBanner.svg";
import AdminSidebar from "@/core/components/admin/organisms/admin-sidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div
      className="
        flex
        h-screen
        overflow-hidden
        bg-cover
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${heroBanner.src})`,
        backgroundPosition: "center 43%",
      }}
    >
      <aside className="sticky top-0 h-screen shrink-0 p-8">
        <AdminSidebar activeMenu="dashboard" />
      </aside>

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}