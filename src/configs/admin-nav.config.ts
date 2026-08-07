export const adminNavItems = [
  { id: 'dashboard', label: 'KEGIATAN', href: '/admin/dashboard' },
  { id: 'achievements', label: 'ACHIEVEMENTS', href: '/admin/achievements' },
  { id: 'events', label: 'EVENTS', href: '/admin/event' },
  { id: 'departments', label: 'DEPARTEMEN', href: '/admin/department' },
] as const;

export type AdminMenuId = (typeof adminNavItems)[number]['id'];
