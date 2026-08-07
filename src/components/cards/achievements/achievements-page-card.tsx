'use client';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import { IArticle } from '@/types/article.types';
import Link from 'next/link';
interface IAchievementPageCard {
  achievement: IArticle;
  index: number;
}
const AchievementPageCard: React.FC<IAchievementPageCard> = ({ achievement, index }) => {
  const isMobile: boolean = useIsMobile();
  // const [isActive, setIsActive] = useState<boolean>(false);
  const swiperAchievementCard: CustomCSSProperties = !isMobile
    ? {
        '--swiper-pagination-color': '#393054',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
        '--swiper-navigation-size': '45px',
        '--swiper-navigation-color': '#ffffff',
        '--swiper-navigation-sides-offset': '0px',
      }
    : {
        '--swiper-pagination-color': '#393054',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
        '--swiper-navigation-size': '45px',
        '--swiper-navigation-color': 'transparent',
        '--swiper-navigation-sides-offset': '0px',
      };

  return (
    <div
      // href={`/achievement/${achievement.slug}`}
      className={`w-full group h-auto transition-all duration-300 flex flex-col gap-10 justify-center  rounded-2xl p-5 lg:p-10 bg-gradient-to-r from-surface-strong/20 via-surface-strong/20 to-surface-strong/80 backdrop-blur-[3px] group`}
    >
      <div
        className={`flex flex-col-reverse gap-5 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}  lg:justify-between items-start`}
      >
        <div className=" w-full lg:w-[51%] h-full flex flex-col gap-8">
          <h1 className=" text-left text-2xl lg:text-4xl font-semibold">{achievement.title}</h1>
          <p className=" text-justify text-base line-clamp-[9] lg:text-lg font-light lg:line-clamp-[12] w-full">
            {achievement.deskripsi.map((item: string) => item)}
          </p>
        </div>
        <div className=" w-full lg:w-[45%] h-full flex items-center justify-center relative">
          <Link
            href={`/achievement/${achievement.slug}`}
            className="flex absolute z-[2] right-0 bottom-0 w-[30px] h-[30px] md:w-[60px] md:h-[60px]  items-center justify-center rounded-full bg-transparent group-hover:bg-gradient-to-r from-brand-soft via-brand to-brand group-hover:border-[1px] group-hover:border-white duration-300"
          >
            <div className={` duration-300 group-hover:rotate-[45deg]`}>
              <ArrowUpRight size={isMobile ? 20 : 30} />
            </div>
          </Link>
          <svg
            className="w-full h-auto"
            viewBox="0 0 555 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id={`clip-${index}`}>
                <path d="M10 0H545C550.523 0 555 4.47716 555 10V249.005C555 251.497 554.07 253.898 552.392 255.74L442.159 376.735C440.264 378.815 437.58 380 434.767 380H10C4.47717 380 0 375.523 0 370V10C0 4.47715 4.47717 0 10 0Z" />
              </clipPath>
            </defs>

            {/* Gambar di-clipping agar mengikuti bentuk path */}
            <image
              href={achievement.imgUrl} // props gambar
              width="555"
              height="380"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#clip-${index})`}
            />

            {/* Optional: Border / stroke shape */}
            <path
              d="M10 0H545C550.523 0 555 4.47716 555 10V249.005C555 251.497 554.07 253.898 552.392 255.74L442.159 376.735C440.264 378.815 437.58 380 434.767 380H10C4.47717 380 0 375.523 0 370V10C0 4.47715 4.47717 0 10 0Z"
              fill="none"
              stroke="#ADA0D5"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      {/* <div className=" w-full flex flex-col justify-center items-center gap-5">
        <div
          className={`w-[100%] lg:hidden duration-300 ${isActive ? 'h-[280px] md:h-[380px] opacity-[1]' : 'h-0 opacity-0'}`}
        >
          <Swiper
            style={swiperAchievementCard}
            navigation
            className="w-full h-full flex justify-center"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            slidesPerGroup={1}
          >
            {Array.from({ length: 3 }).map((achievement: any, i: number) => {
              return (
                <SwiperSlide key={i} className="mb-14 px-4">
                  <div className=" w-full h-full bg-muted rounded-lg "></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className={`w-full hidden lg:grid duration-300 ${isActive ? 'h-[280px] md:h-[380px] opacity-[1]' : 'h-0 opacity-0'} overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}
        >
          {Array.from({ length: 3 }).map((_, i: number) => {
            return <div className=" w-full  bg-muted rounded-lg"></div>;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default AchievementPageCard;
