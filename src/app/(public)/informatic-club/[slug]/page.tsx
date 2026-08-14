import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';

import NavLayout from '@/core/layouts/nav.layout';
import { getActivityById } from '@/services/informatic-club/informatic-club.action';
import { accentOf } from '@/services/informatic-club/informatic-club.type';
import { formatArticleDate, formatArticleTime } from '@/utils/date.format';

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DetailInformaticClubPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const activity = await getActivityById(slug);

  if (!activity) notFound();

  const accent = accentOf(activity.division);
  const photo = activity.fotoActivities?.[0]?.url;
  const waktu = `${formatArticleTime(activity.event_start)} - ${formatArticleTime(activity.event_end)} WIB`;

  return (
    <NavLayout>
      <article className="relative min-h-screen w-full overflow-hidden bg-background pb-24 pt-32 text-white">
        {/* Aksen halaman mengikuti warna bidangnya */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 size-[560px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
          style={{ backgroundColor: accent }}
        />

        <div className="relative mx-auto w-full max-w-4xl px-6">
          <Link
            href="/informatic-club"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/35 hover:text-white"
          >
            <ArrowLeft size={16} />
            Kembali
          </Link>

          <span
            className="mt-8 block w-fit rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{ color: accent, borderColor: `${accent}55`, backgroundColor: `${accent}1a` }}
          >
            {activity.division}
          </span>

          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{activity.title}</h1>

          {photo && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={activity.title}
                className="aspect-16/9 w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoTile
              accent={accent}
              icon={<CalendarDays size={18} />}
              label="Tanggal Pertemuan"
              value={formatArticleDate(activity.event_start)}
            />
            <InfoTile
              accent={accent}
              icon={<Clock size={18} />}
              label="Waktu"
              value={waktu}
            />
          </div>

          <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[5px] md:p-8">
            <h2 className="text-lg font-bold">Deskripsi</h2>
            {/* Deskripsi ditulis bebas di form admin, baris kosong dipakai sebagai pemisah paragraf */}
            {activity.description
              .split(/\n+/)
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index} className="mt-4 leading-relaxed text-white/70">
                  {paragraph}
                </p>
              ))}
          </section>
        </div>
      </article>
    </NavLayout>
  );
}

function InfoTile({
  accent,
  icon,
  label,
  value,
}: {
  accent: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-[5px]">
      <span
        className="grid size-11 shrink-0 place-items-center rounded-xl"
        style={{ color: accent, backgroundColor: `${accent}1a` }}
      >
        {icon}
      </span>

      <div>
        <p className="text-xs uppercase tracking-wide text-white/45">{label}</p>
        <p className="mt-1 font-semibold">{value}</p>
      </div>
    </div>
  );
}
