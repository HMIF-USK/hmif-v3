import type { ReactNode } from 'react';

import AdminSidebar from '@/core/components/admin/organisms/admin-sidebar';

import heroBanner from '@/app/(private)/admin/images/hero-banner.svg';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div
      className="flex h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBanner.src})` }}
    >
      <aside className="sticky top-0 h-screen shrink-0 p-8">
        <AdminSidebar />
      </aside>

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
