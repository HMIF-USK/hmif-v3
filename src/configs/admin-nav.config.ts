/**
 * `requires` menandai menu yang hanya relevan untuk departemen tertentu; layout admin
 * yang menyaringnya (server-side) sebelum sidebar dirender.
 */
export const adminNavItems = [
  {
    // Keluar dari panel admin ke situs publik — bukan halaman admin, jadi tidak pernah aktif.
    id: 'dashboard',
    label: 'DASHBOARD',
    href: '/',
  },
  {
    id: 'achievements',
    label: 'ACHIEVEMENTS',
    href: '/admin/achievements',
    requires: 'achievement',
  },
  {
    id: 'events',
    label: 'EVENTS',
    href: '/admin/event',
  },
  {
    id: 'informatic-club',
    label: 'INFORMATIC CLUB',
    href: '/admin/informatic-club',
    requires: 'informatic-club',
  },
  {
    id: 'manage-events',
    label: 'KELOLA EVENT',
    href: '/admin/manage-event',
  },
  {
    id: 'manage-achievements',
    label: 'KELOLA ACHIEVEMENT',
    href: '/admin/manage-achievements',
    requires: 'achievement',
  },
  {
    id: 'manage-informatic-club',
    label: 'KELOLA INFORMATIC CLUB',
    href: '/admin/manage-informatic-club',
    requires: 'informatic-club',
  },
  {
    id: 'manage-department',
    label: 'KELOLA DEPARTEMEN',
    href: '/admin/manage-department',
  },
] as const;

export type AdminNavItem = (typeof adminNavItems)[number];
export type AdminMenuId = AdminNavItem['id'];
