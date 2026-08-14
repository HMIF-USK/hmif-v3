import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react';

import { accentOf, type TActivityResponse } from '@/services/informatic-club/informatic-club.type';
import { formatArticleDate, formatArticleTime } from '@/utils/date.format';

type KnowledgeSharingSectionProps = {
  items: TActivityResponse[];
};

export default function KnowledgeSharingSection({ items }: KnowledgeSharingSectionProps) {
  return (
    <section className="w-full bg-background py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-white">
            Memoria
          </span>
        </div>

        <h2 className="text-white text-4xl font-bold leading-tight mb-10">
          Sharing Knowledge,
          <br />
          Building Experiences
        </h2>

        {items.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-white/15 py-16 text-center text-white/50">
            Belum ada kegiatan yang dipublikasikan.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ActivityCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ActivityCard({ item }: { item: TActivityResponse }) {
  const accent = accentOf(item.division);
  const photo = item.fotoActivities?.[0]?.url;

  return (
    <Link
      href={`/informatic-club/${item.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[5px] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
    >
      <span
        className="absolute inset-x-0 top-0 z-10 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      <div className="relative aspect-16/10 w-full overflow-hidden bg-white/5">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={item.title}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="size-full"
            style={{ background: `linear-gradient(135deg, ${accent}33, transparent 70%)` }}
          />
        )}

        <span
          className="absolute bottom-3 left-3 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide backdrop-blur-md"
          style={{ color: accent, borderColor: `${accent}55`, backgroundColor: `${accent}26` }}
        >
          {item.division}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-xl font-bold text-white">{item.title}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/60">
          {item.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex flex-col gap-1.5 text-xs text-white/70">
            <span className="flex items-center gap-2">
              <CalendarDays size={14} style={{ color: accent }} />
              {formatArticleDate(item.event_start)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} style={{ color: accent }} />
              {formatArticleTime(item.event_start)} - {formatArticleTime(item.event_end)} WIB
            </span>
          </div>

          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
