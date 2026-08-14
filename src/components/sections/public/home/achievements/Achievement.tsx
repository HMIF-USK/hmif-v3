'use client';
import BackgroundAchievement, { ACHIEVEMENT_CARD_SLOTS } from './background';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import { useAchievements } from '@/services/achievement/achievement.query';
import Star from '@/components/svg/events/start';
import { IArticle } from '@/types/article.types';
import Link from 'next/link';
import Image from 'next/image';

const Achievements: React.FC = () => {
  // Backend mengurutkan achievement dari yang paling baru diunggah (created_at desc).
  // Jumlahnya mengikuti ring desktop supaya semua layout menampilkan kartu yang sama.
  const { data } = useAchievements();
  const achievements = (data ?? []).slice(0, ACHIEVEMENT_CARD_SLOTS.length);

  const swiperEventStyle: CustomCSSProperties = {
    '--swiper-pagination-color': '#393054',
    '--swiper-pagination-bullet-inactive-color': '#fff',
    '--swiper-pagination-bullet-inactive-opacity': '1',
    '--swiper-pagination-bullet-horizontal-gap': '6px',
    '--swiper-navigation-size': '45px',
    '--swiper-navigation-color': 'transparent',
    '--swiper-navigation-sides-offset': '0px',
  };

  return (
    <div className="relative z-0 min-h-screen w-screen flex items-center justify-center">
      <div className="w-full h-[100dvh] md:h-[200vh]">
        <div className="w-full h-full hidden sm:flex xl:hidden flex-col items-center justify-center gap-20">
          <div className=" flex flex-col items-center">
            <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-brand-deep to-brand-muted border border-foreground/20 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 shadow-md">
              {' '}
              <Star />
              <h1 className="font-bold text-foreground text-xs sm:text-sm md:text-base">
                THE LATEST
              </h1>{' '}
            </div>

            <h1 className="mt-2 sm:mt-4 md:mt-6 text-6xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight text-center">
              ACHIEVEMENTS
            </h1>
          </div>

          <div className=" w-[90%] grid grid-cols-2 gap-10">
            {achievements.map((achievement: IArticle) => {
              return (
                <div
                  key={achievement.slug}
                  className={`w-full h-[400px]  bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
                >
                  <div className=" w-full text-foreground">
                    <h1 className=" mb-1 text-3xl font-bold">{achievement.singkatanTitle}</h1>
                    <p className=" text-xl line-clamp-1">{achievement.title}</p>
                  </div>

                  <div className=" w-full h-[50%] overflow-hidden rounded-2xl relative">
                    <Image
                      src={achievement.imgUrl}
                      alt={achievement.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <Link
                    href={`/achievement/${achievement.slug}`}
                    className=" bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
                  >
                    <span>Selengkapnya</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden w-full h-full flex flex-col items-center justify-center gap-[10%]">
          <div className=" flex flex-col items-center gap-2">
            <h1 className=" text-4xl font-extrabold  text-foreground leading-tight text-center">
              Achievements
            </h1>
            <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-brand-deep/30 to-brand-muted/30 border border-foreground/20 rounded-full px-3 md:px-10 py-1 sm:py-2 md:py-3 shadow-md cursor-pointer ">
              <h1 className="font-bold text-foreground  text-sm ">Latest</h1>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className=" w-[90%] sm:hidden">
              <Swiper
                style={swiperEventStyle}
                navigation
                className="w-full flex justify-center"
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => console.log(swiper.realIndex)}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Pagination]}
                slidesPerGroup={1}
              >
                {achievements.map((achievement: IArticle, i: number) => {
                  return (
                    <SwiperSlide key={i} className="mb-14 px-4 sm:px-6 lg:px-3">
                      <div
                        className={`w-full h-[400px]  bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
                      >
                        <div className=" w-full text-foreground">
                          <h1 className=" mb-1 text-3xl font-bold">{achievement.singkatanTitle}</h1>
                          <p className=" text-xl line-clamp-1">{achievement.title}</p>
                        </div>

                        <div className=" w-full h-[50%] overflow-hidden rounded-2xl relative">
                          <Image
                            src={achievement.imgUrl}
                            alt={achievement.title}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <Link
                          href={`/achievement/${achievement.slug}`}
                          className=" bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
                        >
                          <span>Selengkapnya</span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <BackgroundAchievement />
    </div>
  );
};

export default Achievements;
