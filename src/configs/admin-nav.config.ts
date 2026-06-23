export const adminNavItems = [
  {
    id: "dashboard",
    label: "DASHBOARD",
  },
  {
    id: "achievements",
    label: "ACHIEVEMENTS",
  },
  {
    id: "events",
    label: "EVENTS",
  },
] as const;

export type AdminMenuId = (typeof adminNavItems)[number]["id"];