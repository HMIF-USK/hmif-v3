import type { ReactNode } from "react";

import AdminSidebar from "@/core/components/admin/organisms/admin-sidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div
      className="
        flex
        h-screen
        overflow-hidden

        bg-[url('/images/admin/hero-banner.svg')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen shrink-0 p-8">
        <AdminSidebar activeMenu="achievements" />
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}