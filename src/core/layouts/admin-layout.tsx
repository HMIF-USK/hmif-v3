import type { ReactNode } from 'react';

import AdminSidebar from '@/core/components/admin/organisms/admin-sidebar';
import { adminNavItems } from '@/configs/admin-nav.config';
import { canManageAchievement } from '@/services/achievement/achievement.action';
import { canManageInformaticClub } from '@/services/informatic-club/informatic-club.action';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // Menu yang tidak boleh diakses departemen ini tidak dirender sama sekali.
  const [achievement, informaticClub] = await Promise.all([
    canManageAchievement(),
    canManageInformaticClub(),
  ]);

  const permission: Record<string, boolean> = { achievement, 'informatic-club': informaticClub };
  const navItems = adminNavItems.filter((item) => !('requires' in item) || permission[item.requires]);

  return (
    <div className="grid-backdrop relative flex h-screen overflow-hidden bg-background">
      {/* Aksen sama seperti halaman login */}
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 size-96 rounded-full bg-brand/20 blur-3xl" />

      <aside className="sticky top-0 z-10 hidden h-screen shrink-0 p-8 lg:block">
        <AdminSidebar items={navItems} />
      </aside>

      <main className="relative flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
