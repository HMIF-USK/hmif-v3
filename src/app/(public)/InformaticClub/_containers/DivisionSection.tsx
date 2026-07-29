'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import CardOneInformaticsClub from '@/components/svg/informatics-club/card-one';
import CardTwoInformaticsClub from '@/components/svg/informatics-club/card-two';
import CardThreeInformaticsClub from '@/components/svg/informatics-club/card-three';
import LetterI from '@/components/svg/informatics-club/letter-i';
import LetterN from '@/components/svg/informatics-club/letter-n';
import LetterF from '@/components/svg/informatics-club/letter-f';
import LetterO from '@/components/svg/informatics-club/letter-o';
import LetterR from '@/components/svg/informatics-club/letter-r';
import LetterC from '@/components/svg/informatics-club/letter-c';
import LetterL from '@/components/svg/informatics-club/letter-l';
import LetterU from '@/components/svg/informatics-club/letter-u';
import LetterB from '@/components/svg/informatics-club/letter-b';

interface IInformaticsClub {
  division: string;
  description: string;
}

export default function DivisionSection() {
  const swiperEventStyle: CustomCSSProperties = {
    '--swiper-pagination-color': '#393054',
    '--swiper-pagination-bullet-inactive-color': '#fff',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-horizontal-gap': '6px',
    '--swiper-navigation-size': '45px',
    '--swiper-navigation-color': 'transparent',
    '--swiper-navigation-sides-offset': '0px',
  };

  const informaticsClubData: IInformaticsClub[] = [
    {
      division: 'SOFTWARE ENGINEERING',
      description:
        "Whatever you've got a design ready to go or need us to whip one up, we'll tackle the development part with unmatched expertise and precision",
    },
    {
      division: 'MACHINE LEARNING',
      description:
        "We're here to join forces with you, uncovering your goals, target audience, and the perfect recipe for a successful machine learning project.",
    },
    {
      division: 'INTERNET OF THINGS',
      description:
        'We blend creativity with technology to deliver innovative IoT solutions that connect devices and enhance user experiences.',
    },
  ];

  return (
    <div className="w-full text-white bg-black">
      {/* desktop */}
      <section
        className="w-full py-24 px-8"
        style={{
          background:
            'linear-gradient(180deg, #450099 0%, #14031F 90%, #000000 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A783FF]/30 bg-white/5 backdrop-blur-md px-4 py-2 text-xs text-[#E8DDFF]">
            ✦ Division
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
            What We Do?
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Three specialized divisions covering the full spectrum of modern
            technology.
          </p>
        </div>
      </section>

      <section className="w-full bg-black min-h-[1200px] relative z-0 py-20 lg:overflow-hidden flex justify-center items-center">
        <div className="xl:w-[160px] absolute w-[40px] z-[-1] top-[30%] xl:top-[1%] left-[4%]">
          <LetterI />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[-2] xl:z-[-2] top-[20%] xl:top-[30%] left-[10%]">
          <LetterN />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[-1] top-[10%] xl:top-[8%] left-[26%]">
          <LetterF />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[2] top-[2%] right-[28%]">
          <LetterO />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[-1] xl:z-[-2] top-[22%] right-[6%]">
          <LetterR />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[-1] xl:z-[-2] bottom-[5%] left-[5%] xl:bottom-[8%] xl:left-[8%]">
          <LetterC />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[2] bottom-[32%] xl:bottom-[15%] left-[28%]">
          <LetterL />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[-1] xl:z-[2] bottom-[20%] right-[30%] xl:bottom-[22%] xl:right-[32%]">
          <LetterU />
        </div>
        <div className="xl:w-[220px] absolute w-[50px] z-[2] bottom-[35%] right-[10%] xl:bottom-[6%] xl:right-[10%]">
          <LetterB />
        </div>

        <div className="absolute z-[1] w-[340px] left-[50%] -translate-x-[50%] top-[20%] hidden xl:block duration-500 hover:scale-[1.05]">
          <CardOneInformaticsClub />
        </div>
        <div className="absolute z-[1] w-[340px] left-[4%] bottom-[20%] hidden xl:block duration-500 hover:scale-[1.05]">
          <CardTwoInformaticsClub />
        </div>
        <div className="absolute z-[1] w-[355px] right-[5%] bottom-[25%] hidden xl:block duration-500 hover:scale-[1.05]">
          <CardThreeInformaticsClub />
        </div>

        {/* end of desktop */}

        {/* mobile */}
        <div className="w-full flex justify-center xl:hidden">
          <div className="w-[90%] flex flex-col md:grid md:grid-cols-2 gap-10 px-4">
            {informaticsClubData.map((item: IInformaticsClub, i: number) => {
              return (
                <div
                  key={i}
                  className={`w-full ${
                    i === 2 ? 'md:col-span-2' : ''
                  } bg-black/60 backdrop-blur-[5px] rounded-2xl p-5 flex flex-col justify-between items-start duration-300 border-[0.5px] border-white/20 gap-5`}
                >
                  <h2 className="mb-1 text-xl font-nasalization font-bold text-white">
                    {item.division}
                  </h2>
                  <p className="text-base text-white/80">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}