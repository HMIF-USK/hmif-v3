'use client';
import Star from '@/components/svg/events/start';
import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowRight } from 'lucide-react';
import GridEvents from '@/components/svg/events/grid-event';
import { IArticle } from '@/types/article.types';
import { events } from '@/data/event-list';
import Link from 'next/link';
import Image from 'next/image';
const Events: React.FC = () => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: true,
  });

  const [slidePerView, setSlidePerView] = useState<number>(isMobile ? 1 : 3);

  const swiperEventStyle: CustomCSSProperties = !isMobile
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

  useEffect(() => {
    setSlidePerView(isMobile ? 1 : 3);
  }, [isMobile]);

  return (
    <main className="w-screen bg-transparent">
      <div className="relative z-0 min-h-screen w-full flex flex-col gap-20 items-center justify-center overflow-hidden py-10 bg-transparent">
        <div className=" w-[80%] h-[50vh] absolute z-[-9] bg-brand rounded-full -rotate-x-[10deg] opacity-[0.2] blur-3xl bottom-0"></div>
        <div className="w-full absolute z-[-10] bottom-0">
          <GridEvents />
        </div>
        <div className=" flex flex-col items-center">
          <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-brand-deep to-brand-muted border border-foreground/20 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 shadow-md">
            {' '}
            <Star />
            <h1 className="font-bold text-foreground text-xs sm:text-sm md:text-base">
              THE LATEST
            </h1>{' '}
          </div>

          <h1 className="mt-2 sm:mt-4 md:mt-6 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight text-center">
            EVENT
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <div className=" w-[90%] md:w-[130%] xl:w-[90%]">
            <Swiper
              style={swiperEventStyle}
              navigation
              className="w-full flex justify-center"
              spaceBetween={0}
              slidesPerView={slidePerView}
              loop={true}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => (
                setCurrentIndex(swiper.realIndex === events.length - 1 ? -1 : swiper.realIndex),
                console.log(swiper.realIndex)
              )}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation, Pagination]}
              slidesPerGroup={1}
            >
              {events.map((event: IArticle, i: number) => {
                return (
                  <SwiperSlide key={i} className="mb-14 px-4 sm:px-6 lg:px-3">
                    <div
                      className={`w-full h-[400px] lg:h-[550px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start ${currentIndex + 1 !== i ? 'md:scale-[0.8]' : 'md:scale-x-[1.1]'} duration-300 border-[0.5px] border-foreground/20 group`}
                    >
                      <div className=" w-full text-foreground">
                        <h1 className=" mb-2 text-3xl font-bold">{event.singkatanTitle}</h1>
                        <p className=" text-lg line-clamp-1">{event.title}</p>
                      </div>

                      <div className=" w-full h-[50%] overflow-hidden rounded-2xl relative z-0">
                        <div className="w-full h-full  bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent absolute z-[1]"></div>
                        <Image
                          src={event.imgUrl}
                          alt={event.title}
                          fill
                          className="w-full h-full object-cover group-hover:scale-[1.1] duration-300"
                        />
                      </div>

                      <Link
                        href={`/event/${event.slug}`}
                        className=" bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
                      >
                        <span>Selengkapnya</span>
                        <ArrowRight />
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Events;
