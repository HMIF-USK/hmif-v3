'use client';

import { Globe, Monitor, Database } from 'lucide-react';

export default function DivisionSection() {
  const divisions = [
    {
      title: 'INTERNET\nOF\nTHINGS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Globe,
      iconSize: 62,
    },
    {
      title: 'REKAYASA\nPERANGKAT\nLUNAK',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Monitor,
      iconSize: 58,
    },
    {
      title: 'DATA\nMINING',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: Database,
      iconSize: 54,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#4E0F8F] via-[#32095A] to-[#180522] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80">
          ✦ Division
        </div>

        {/* Header */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          What We Do?
        </h1>

        <p className="mt-4 max-w-xl text-white/75 text-lg">
          Three specialized divisions covering the full spectrum
          of modern technology.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {divisions.map((division) => {
            const Icon = division.icon;

            return (
              <div
                key={division.title}
                className="
                  relative
                  h-[420px]
                  rounded-[24px]
                  border border-white/10
                  bg-gradient-to-b
                  from-white/10
                  to-white/[0.03]
                  backdrop-blur-md
                  p-6
                  overflow-hidden
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />

                <div className="relative flex h-full flex-col">
                  {/* Title */}
                  <h3 className="whitespace-pre-line text-[42px] font-black leading-[0.9] tracking-tight">
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-6 text-sm leading-relaxed text-white/70">
                    {division.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        Embedded System
                      </span>

                      <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        Embedded System
                      </span>

                      <span className="w-fit rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                        Embedded System
                      </span>
                    </div>

                    <div className="flex items-end justify-end pb-1 pr-1">
                      <Icon
                        size={division.iconSize}
                        strokeWidth={1.5}
                        className="text-white/45"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}