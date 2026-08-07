/** Query keys TanStack Query — hierarkis, spesifik di paling belakang. */
export const queryKeys = {
  achievements: {
    all: ['achievements'] as const,
    list: () => [...queryKeys.achievements.all, 'list'] as const,
    latest: (limit?: number) => [...queryKeys.achievements.all, 'latest', limit ?? null] as const,
    detail: (id: string) => [...queryKeys.achievements.all, 'detail', id] as const,
  },
  events: {
    all: ['events'] as const,
    list: () => [...queryKeys.events.all, 'list'] as const,
    detail: (id: string) => [...queryKeys.events.all, 'detail', id] as const,
  },
  prokers: {
    all: ['prokers'] as const,
    list: () => [...queryKeys.prokers.all, 'list'] as const,
    detail: (id: string) => [...queryKeys.prokers.all, 'detail', id] as const,
  },
  activities: {
    all: ['activities'] as const,
    list: (division?: string) => [...queryKeys.activities.all, 'list', division ?? null] as const,
    detail: (id: string) => [...queryKeys.activities.all, 'detail', id] as const,
  },
  departments: {
    all: ['departments'] as const,
    list: () => [...queryKeys.departments.all, 'list'] as const,
    detail: (id: string) => [...queryKeys.departments.all, 'detail', id] as const,
  },
} as const;
