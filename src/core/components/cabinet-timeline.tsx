'use client';

import { cn } from '@/utils/classname';
import type { ICabinet } from '@/data/cabinet-list';

type CabinetTimelineProps = {
  cabinets: ICabinet[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function CabinetTimeline({ cabinets, activeId, onSelect }: CabinetTimelineProps) {
  return (
    <nav aria-label="Timeline kepengurusan" className="w-full max-w-4xl px-4">
      <ul className="flex items-center justify-center gap-0 overflow-x-auto pb-2">
        {cabinets.map((cabinet, i) => {
          const isActive = cabinet.id === activeId;

          return (
            <li key={cabinet.id} className="flex shrink-0 items-center">
              {i > 0 && (
                <span
                  aria-hidden
                  className="h-0.5 w-8 shrink-0 bg-gradient-to-r from-brand-deep to-brand-soft sm:w-16 md:w-24"
                />
              )}

              <button
                type="button"
                onClick={() => onSelect(cabinet.id)}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                  'group flex flex-col items-center gap-2 rounded-2xl px-3 py-2 transition-colors',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft'
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'size-3 rounded-full border-2 transition-all',
                    isActive
                      ? 'scale-125 border-brand-soft bg-brand-soft shadow-[0_0_12px_3px_var(--brandMuted)]'
                      : 'border-foreground/30 bg-transparent group-hover:border-brand-soft'
                  )}
                />

                <span
                  className={cn(
                    'whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition-all sm:px-4 sm:text-sm',
                    isActive
                      ? 'border-foreground/20 bg-gradient-to-b from-brand-deep to-brand-muted font-bold text-foreground shadow-md'
                      : 'border-foreground/15 bg-foreground/5 text-muted-foreground hover:border-foreground/30 hover:text-foreground'
                  )}
                >
                  Kabinet {cabinet.name} Tahun {cabinet.year}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
