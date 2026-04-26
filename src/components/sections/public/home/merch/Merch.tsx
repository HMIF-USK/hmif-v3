'use client';

import Marquee from 'react-fast-marquee';
import Water from '@/components/svg/merch/water';
import Cilinder from '@/components/svg/merch/cilinder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';
import BackgroundMerch from './background';
const Merch: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidePerView, setSlidePerView] = useState<number>(isMobile ? 1 : 3);

  const swiperEventStyle: CustomCSSProperties = !isMobile
    ? {
        '--swiper-pagination-color': '#393054',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
        '--swiper-navigation-size': '45px',
        '--swiper-navigation-color': '#ffffff',
        '--swiper-navigation-sides-offset': '15%',
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

  useEffect(() => {
    setSlidePerView(isMobile ? 1 : 3);
  }, [isMobile]);
  return (
    <div className=" w-screen  flex flex-col items-center gap-20 relative z-0 overflow-x-hidden">
      {/* <div className=" w-full absolute z-[-10] -bottom-[0%]">
        <BackgroundMerch />
      </div> */}

      <div className=" w-full flex flex-col relative z-0 bg-gradient-to-b from-brand-deep via-surface-strong to-surface-strong h-[150px] md:h-[300px] lg:h-[450px] overflow-hidden">
        <div className="absolute z-[-8] w-[70px] md:w-[150px] lg:w-[250px] right-4 top-5 md:top-10 animate-logo-10s">
          <Water />
        </div>

        <div className="absolute z-[0] w-[70px] md:w-[150px] lg:w-[250px] left-5 bottom-3 animate-logo-6s">
          <Water />
        </div>

        <div className="absolute z-[-7] w-[130px] md:w-[250px] lg:w-[350px] top-[50%] left-[50%] translate-[-50%] animate-logo">
          <Cilinder />
        </div>

        <div className=" absolute z-[-10] w-full inset-0 overflow-hidden">
          <Marquee direction="right" className="overflow-hidden">
            <h1 className="text-6xl md:text-[9rem] lg:text-[10rem] font-extrabold tracking-[6px] ml-5 md:ml-10">
              INFORMATICS CLUB
            </h1>
            <h1 className="text-6xl md:text-[9rem] lg:text-[10rem] font-extrabold tracking-[6px] ml-5 md:ml-10">
              INFORMATICS CLUB
            </h1>
          </Marquee>
        </div>
        <div className=" absolute z-[-1] w-full bottom-0 left-0 overflow-hidden">
          <Marquee direction="left" className="overflow-hidden">
            <h1 className="text-6xl md:text-[10rem] font-extrabold tracking-[6px] ml-5 md:ml-10">
              INFORMATICS CLUB
            </h1>
            <h1 className="text-6xl md:text-[10rem] font-extrabold tracking-[6px] ml-5 md:ml-10">
              INFORMATICS CLUB
            </h1>
          </Marquee>
        </div>
      </div>

      {/* <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[130%]">
          <Swiper
            style={swiperEventStyle}
            navigation
            className="w-full flex justify-center"
            spaceBetween={0}
            slidesPerView={slidePerView}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => (
              setCurrentIndex(swiper.realIndex === 5 ? -1 : swiper.realIndex),
              console.log(swiper.realIndex)
            )}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            slidesPerGroup={1}
          >
            {Array.from({ length: 6 }).map((achievement: any, i: number) => {
              return (
                <SwiperSlide key={i} className="mb-14 px-4 sm:px-6 lg:px-3">
                  <div className="w-full flex justify-center">
                    <div
                      className={`w-full h-[400px] lg:h-[650px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start ${currentIndex + 1 !== i ? 'md:scale-[0.8]' : 'md:scale-x-[1.1]'} duration-300 border-[0.5px] border-foreground/20`}
                    >
                      <div className=" w-full text-foreground">
                        <h1 className=" mb-1 text-3xl font-bold">Detik</h1>
                        <p className=" text-xl">Dedikasi Informatika</p>
                      </div>

                      <div className=" w-full h-[50%] bg-surface rounded-2xl"></div>

                      <div className=" bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground">
                        <span>Selengkapnya</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div> */}
    </div>
  );
};

export default Merch;
