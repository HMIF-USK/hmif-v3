'use client';
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

const InformaticsClub: React.FC = () => {
  const swiperEventStyle: CustomCSSProperties = {
    '--swiper-pagination-color': '#393054',
    '--swiper-pagination-bullet-inactive-color': '#fff',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-horizontal-gap': '6px',
    '--swiper-navigation-size': '45px',
    '--swiper-navigation-color': 'transparent',
    '--swiper-navigation-sides-offset': '0px',
  };

  const InformaticsClub: IInformaticsClub[] = [
    {
      division: 'SOFTWARE ENGINEERING',
      description:
        "Whatever you've got a design ready to go or need us to whip one up, we'll tackle the development part with unmatched expertiseand precision",
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
    <div className="w-full min-h-screen relative z-0 py-20  lg:overflow-hidden flex justify-center items-center mt-10">
      {/* desktop */}
      <div className=" xl:w-[150px] absolute w-[40px] z-[-1] top-[15%] xl:top-[10%] left-[10%]">
        <LetterI />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] top-[30%] xl:top-[25%] left-[26%]">
        <LetterN />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] top-[6%] xl:top-[1%] left-[50%]">
        <LetterF />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] top-[28%] right-[23%]">
        <LetterO />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] top-[10%] right-[5%]">
        <LetterR />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[-2] bottom-[25%] left-[10%] xl:bottom-0 xl:left-[20%]">
        <LetterC />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-2] bottom-[32%] xl:bottom-[7%] left-[36%]">
        <LetterL />
      </div>

      <div className=" xl:w-[230px] absolute w-[50px] z-[-1] xl:z-[2] bottom-[20%] right-[30%] xl:bottom-[2%] xl:right-[37%]">
        <LetterU />
      </div>
      <div className=" xl:w-[230px] absolute w-[50px] z-[-2] bottom-[35%] right-[10%] xl:bottom-[0%] xl:right-[22%]">
        <LetterB />
      </div>

      <div className=" absolute z-[1] w-[450px] left-[50%] -translate-x-[50%] top-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardOneInformaticsClub />
      </div>
      <div className=" absolute z-[1] w-[450px] left-[5%] bottom-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardTwoInformaticsClub />
      </div>
      <div className=" absolute z-[1] w-[450px] right-[5%] bottom-[10%] hidden xl:block duration-500 hover:scale-[1.05]">
        <CardThreeInformaticsClub />
      </div>

      {/* end of desktop */}

      {/* mobile */}
      <div className="w-full flex justify-center  xl:hidden">
        <div className=" w-[90%] flex flex-col md:grid md:grid-cols-2 gap-10 px-4">
          {InformaticsClub.map((item: IInformaticsClub, i: number) => {
            return (
              <div
                className={`w-full  ${i === 2 ? 'md:col-span-2' : ''} bg-surface/30 backdrop-blur-[5px] rounded-2xl p-5 flex flex-col justify-between items-start  duration-300 border-[0.5px] border-foreground/20 gap-5`}
              >
                <h1 className=" mb-1 text-xl font-nasalization font-bold">{item.division}</h1>
                <p className=" text-base">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* end of mobile */}
    </div>
  );
};

export default InformaticsClub;