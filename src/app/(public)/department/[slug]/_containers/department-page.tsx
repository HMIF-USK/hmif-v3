'use client';

import NavLayout from '@/core/layouts/nav.layout';
import { useParams } from 'next/navigation';
import GlassElement from '@/components/svg/department/glass-element';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { CustomCSSProperties } from '@/types/customCSSProperties';
import { useIsMobile } from '@/hooks/use-mobile';

import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import GlassElementDivisionOne from '@/components/svg/department/glass-element-division-one';
import GlassElementDivisionTwo from '@/components/svg/department/glass-element-division-two';
import ProkerElement from '@/components/svg/department/proker-element';
import { getDepartmentBySlug, getRequiredPhotoSlots } from '@/data/department-list';
import { useDepartmentBySlug } from '@/services/department/department.query';
import NotFound from '@/core/components/not-found';
import Image from 'next/image';

const ContainerDepartment: React.FC = () => {
  const { slug } = useParams();
  const staticDepartment = getDepartmentBySlug(slug as string);
  const { data: apiDepartment } = useDepartmentBySlug(slug as string);

  const requiredSlots = getRequiredPhotoSlots(slug as string);
  const apiPhotos = apiDepartment?.fotoDepartements || [];
  const staticPhotos = staticDepartment?.photos?.desktop || [];

  const formattedPhotos = requiredSlots.map((slot, idx) => {
    // 1. Exact match
    let foundApi = apiPhotos.find(
      (p) => p.namaFoto.toUpperCase().trim() === slot.toUpperCase().trim()
    );

    // 2. Partial match
    if (!foundApi) {
      foundApi = apiPhotos.find(
        (p) =>
          p.namaFoto.toUpperCase().includes(slot.toUpperCase()) ||
          slot.toUpperCase().includes(p.namaFoto.toUpperCase())
      );
    }

    // 3. Index match
    if (!foundApi && apiPhotos[idx] && apiPhotos[idx].url) {
      foundApi = apiPhotos[idx];
    }

    if (foundApi && foundApi.url) {
      return { title: foundApi.namaFoto || slot, imgUrl: foundApi.url };
    }

    // Static fallback
    const foundStatic =
      staticPhotos.find(
        (p: any) => p.title.toUpperCase().trim() === slot.toUpperCase().trim()
      ) || staticPhotos[idx];

    return {
      title: slot,
      imgUrl: foundStatic?.imgUrl || '/images/HMIF-No-BG.png',
    };
  });

  const activePhotos = {
    desktop: formattedPhotos,
    mobile: formattedPhotos,
  };

  const department = staticDepartment
    ? {
        ...staticDepartment,
        departmentName: apiDepartment?.name || staticDepartment.departmentName,
        shortDesc: apiDepartment?.description || staticDepartment.shortDesc,
        photos: activePhotos,
      }
    : null;
  const isMobile = useIsMobile();
  const [slidePerView, setSlidePerView] = useState<number>(isMobile ? 3 : 5);
  const [currentIndexMobile, setCurrentIndexMobile] = useState<number>(2);
  const [prokerIndexActive, setProkerIndexActive] = useState<number | null>(null);
  const swiperEventStyle: CustomCSSProperties = !isMobile
    ? {
        '--swiper-pagination-color': '#393054',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
        '--swiper-navigation-size': '45px',
        '--swiper-navigation-color': '#ffffff',
        '--swiper-navigation-sides-offset': '60px',
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

  const styleImgHeader5Cards: { className: string }[] = [
    {
      className:
        'absolute z-[8] scale-[0.75] lg:scale-[0.8] left-[10%] translate-y-[20px] -rotate-[5deg]',
    },
    {
      className: 'absolute z-[9] left-[24%] scale-[0.9] -rotate-[3deg]',
    },
    {
      className: 'absolute z-[10]',
    },
    {
      className: 'absolute z-[9] right-[24%] scale-[0.9] rotate-[3deg]',
    },
    {
      className:
        'absolute z-[8] scale-[0.75] lg:scale-[0.8] right-[10%] translate-y-[20px] rotate-[5deg]',
    },
  ];

  const styleImgHeader3Cards: { className: string }[] = [
    {
      className: 'absolute z-[9] left-[18%] scale-[0.9] -rotate-[4deg]',
    },
    {
      className: 'absolute z-[10]',
    },
    {
      className: 'absolute z-[9] right-[18%] scale-[0.9] rotate-[4deg]',
    },
  ];

  const styleImgHeader =
    formattedPhotos.length === 3 ? styleImgHeader3Cards : styleImgHeader5Cards;

  useEffect(() => {
    setSlidePerView(isMobile ? 3 : 7);
  }, [isMobile]);

  if (!department) {
    return <NotFound />;
  }
  return (
    <NavLayout>
      <main className={`w-screen text-white bg-background`}>
        <div className="w-full min-h-screen flex flex-col items-center xl:pt-[12vh] py-14 xl:pb-20 overflow-hidden gap-10 lg:gap-20 relative z-0 ">
          <div className="absolute z-[-5] w-full max-w-[100vw] top-0 lg:top-[25vh] rotate-x-[180deg]">
            <svg
              className="w-full h-auto"
              viewBox="0 0 1512 586"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <g filter="url(#filter0_f_0_57)">
                <path
                  d="M-46.0004 219.53C-43.9331 131.828 272.806 198.074 697.379 204.742C1121.95 211.409 1473.07 152.328 1471 240.03C1468.93 327.732 1140.57 471.698 715.999 465.03C291.426 458.362 -48.0677 307.232 -46.0004 219.53Z"
                  fill="url(#paint0_linear_0_57)"
                  fill-opacity="0.8"
                />
              </g>
              <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_0_57)">
                <path
                  d="M9.49982 235.262C10.3258 200.221 292.906 296.013 676 302.03C1059.09 308.046 1389.83 220.989 1389 256.03C1388.17 291.07 1070.09 426.546 687 420.53C303.906 414.513 8.67386 270.302 9.49982 235.262Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </g>
              <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_0_57)">
                <path
                  d="M9.49982 276.262C10.3258 241.221 292.906 337.013 676 343.03C1059.09 349.046 1389.83 261.989 1389 297.03C1388.17 332.07 1070.09 467.546 687 461.53C303.906 455.513 8.67386 311.302 9.49982 276.262Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </g>
              <path
                d="M1507.5 -90.5V266.818C1317.5 365.764 1048.21 427.56 749.498 427.56C451.315 427.56 182.443 365.981 -7.5 267.34V-90.5H1507.5Z"
                fill="url(#paint1_linear_0_57)"
                stroke="url(#paint2_linear_0_57)"
                stroke-width="3"
              />
              <g opacity="0.87" filter="url(#filter3_f_0_57)">
                <path
                  d="M726.919 387.469C909.359 393.787 1056.99 363.469 1056 392.03C1055.01 420.59 905.778 497.213 723.337 490.895C540.897 484.578 393.511 416.09 394.5 387.53C395.489 358.969 544.479 381.151 726.919 387.469Z"
                  fill="url(#paint3_linear_0_57)"
                />
              </g>
              <g
                style={{ mixBlendMode: 'plus-lighter' }}
                opacity="0.87"
                filter="url(#filter4_f_0_57)"
              >
                <path
                  d="M728.827 411.023C1074.8 423.005 1337.21 316.089 1337 322.03C1336.79 327.971 1074.06 444.519 728.082 432.538C382.104 420.557 83.7943 327.971 84 322.03C84.2058 316.089 382.849 399.042 728.827 411.023Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_0_57"
                  x="-146.51"
                  y="73.9985"
                  width="1718.02"
                  height="491.755"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="50.25" result="effect1_foregroundBlur_0_57" />
                </filter>
                <filter
                  id="filter1_f_0_57"
                  x="-23.1019"
                  y="194.976"
                  width="1444.7"
                  height="258.348"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="16.3" result="effect1_foregroundBlur_0_57" />
                </filter>
                <filter
                  id="filter2_f_0_57"
                  x="-23.1019"
                  y="235.976"
                  width="1444.7"
                  height="258.348"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="16.3" result="effect1_foregroundBlur_0_57" />
                </filter>
                <filter
                  id="filter3_f_0_57"
                  x="300.195"
                  y="278.993"
                  width="850.11"
                  height="306.571"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="47.15" result="effect1_foregroundBlur_0_57" />
                </filter>
                <filter
                  id="filter4_f_0_57"
                  x="15.5999"
                  y="253.326"
                  width="1389.8"
                  height="248.476"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur stdDeviation="34.2" result="effect1_foregroundBlur_0_57" />
                </filter>
                <linearGradient
                  id="paint0_linear_0_57"
                  x1="209.73"
                  y1="365.283"
                  x2="1023.07"
                  y2="-117.572"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#AE00FF" />
                  <stop offset="0.825" stop-color="#E19FFF" />
                  <stop offset="1" stop-color="#5E00FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_57"
                  x1="750"
                  y1="80.5298"
                  x2="750"
                  y2="429.06"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0E0A17" />
                  <stop offset="1" stop-color="#1A0046" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_57"
                  x1="-9.00001"
                  y1="138.53"
                  x2="1509"
                  y2="144.53"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#140E24" />
                  <stop offset="0.5" stop-color="#E19FFF" />
                  <stop offset="1" stop-color="#140E24" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_57"
                  x1="942.215"
                  y1="369.173"
                  x2="901.799"
                  y2="538.394"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C60786" />
                  <stop offset="1" stop-color="#8400FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className=" flex flex-col items-center ">
            <h1 className="mt-2 sm:mt-4  text-5xl sm:text-8xl tracking-[2px] lg:text-[13rem] font-extrabold bg-gradient-to-b from-white to-muted-foreground bg-clip-text text-transparent leading-tight text-center uppercase">
              {department.departmentName}
            </h1>
          </div>
          {/* Glass Element */}
          <div className="absolute z-[1] top-[4%] lg:top-[7%] w-[200px] sm:w-[300px] lg:w-[700px] animate-logo">
            <GlassElement />
          </div>
          {/* Glass Element */}
          <div className="w-full flex justify-center overflow-hidden">
            <div className="hidden  w-full sm:flex items-center justify-center relative h-[220px] lg:h-[400px]">
              {department.photos.desktop.map((item: any, i: number) => {
                return (
                  <div
                    className={`w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] ${styleImgHeader[i]?.className}  rounded-2xl border-[1px] border-border overflow-hidden group`}
                  >
                    <Image
                      src={item.imgUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.1] duration-300"
                    />
                    <div className=" w-full h-full absolute inset-0 z-[11] bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-black/30 p-5 flex items-end justify-center font-nasalization text-2xl uppercase">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" w-[240%] sm:hidden ">
              <Swiper
                style={swiperEventStyle}
                navigation
                className="w-full flex justify-center !h-auto"
                spaceBetween={0}
                slidesPerView={slidePerView}
                loop={true}
                // initialSlide={currentIndexMobile}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => (
                  setCurrentIndexMobile(swiper.realIndex === 4 ? -1 : swiper.realIndex),
                  console.log(swiper.realIndex)
                )}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation, Pagination]}
                slidesPerGroup={1}
              >
                {department.photos.mobile.map((item: any, i: number) => {
                  return (
                    <SwiperSlide key={i} className={`mb-14 px-2 sm:px-6 lg:px-3 !h-auto`}>
                      <div
                        className={`w-full h-[300px]  overflow-hidden backdrop-blur-[2px] rounded-2xl p-5 flex flex-col justify-between items-start ${currentIndexMobile + 1 !== i ? 'scale-y-[0.8]' : 'scale-[1]'} duration-300 border-[0.5px] border-white/20`}
                      >
                        <Image src={item.imgUrl} alt={item.title} fill className="object-cover" />
                        <div className=" w-full h-full uppercase absolute inset-0 z-[11] bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-black/30 p-5 flex items-end justify-center font-nasalization text-lg">
                          <h1>{item.title}</h1>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {department.division && (
            <>
              <div className=" flex flex-col justify-center items-center w-full relative ">
                <div className=" absolute z-[-1] w-full top-[35%] h-[20px] lg:h-[100px] blur-2xl bg-gradient-to-b from-transparent via-brand-soft/30 to-transparent"></div>
                <h1 className="mt-2 sm:mt-4  text-5xl sm:text-7xl tracking-[2px] lg:text-[12rem] font-extrabold bg-gradient-to-b from-white to-muted-foreground bg-clip-text text-transparent leading-tight text-center uppercase">
                  DIVISI
                </h1>
              </div>

              <div className=" w-full  relative flex flex-col justify-center gap-20">
                <div className=" absolute z-[-1] w-[150px] md:w-[200px] lg:w-[500px] top-0 right-[0%] animate-logo-6s">
                  <GlassElementDivisionOne />
                </div>

                <div className=" absolute z-[-1] w-[150px] md:w-[200px] lg:w-[500px] bottom-[10%] left-0 animate-logo-10s">
                  <GlassElementDivisionTwo />
                </div>

                {department.division.map((item: string, i: number) => {
                  return (
                    <div
                      className={`w-full h-[100px]  lg:h-[200px] flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} overflow-hidden`}
                    >
                      <div
                        className={`w-[90%] lg:w-[70%] h-full flex items-center bg-gradient-to-r ${i % 2 === 0 ? 'from-surface-strong to-brand-soft rounded-r-2xl' : 'from-brand-deep to-brand rounded-l-2xl'}`}
                      >
                        <Marquee
                          direction={i % 2 === 0 ? 'right' : 'left'}
                          className={`w-full h-full flex -mt-1 overflow-hidden ${i % 2 === 0 ? 'rounded-r-2xl' : 'rounded-l-2xl'}`}
                        >
                          <h1
                            style={{
                              WebkitTextStroke: '2px #ffffff',
                              WebkitTextFillColor: 'transparent',
                            }}
                            className={` uppercase font-extrabold  text-transparent text-[150px] lg:text-[400px] mr-10`}
                          >
                            {item}
                          </h1>
                        </Marquee>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="w-[87%] xl:w-[85%] h-[1px] bg-gradient-to-r from-transparent rounded-full via-brand-soft to-transparent my-20"></div>
          <div className=" flex flex-col gap-20 items-center w-full relative">
            {/* glass element */}
            <div className=" absolute z-[-2] w-[300px] lg:w-[700px] -left-[10%] lg:-left-[5%] top-[400px] lg:top-[500px] animate-logo-10s">
              <ProkerElement />
            </div>

            {/* glass element */}

            <div className=" flex flex-col justify-center items-center w-full relative ">
              <div className=" absolute z-[-1] w-full top-[35%] h-[20px] lg:h-[100px] blur-2xl bg-gradient-to-b from-transparent via-brand-soft/30 to-transparent"></div>
              <div className=" relative flex items-center justify-center">
                <div className=" absolute z-[1] ">
                  <h1 className=" font-bold tracking-[8px] lg:tracking-[25px] mt-2 pl-2 md:mt-5 lg:pl-5 bg-brand-muted text-xs lg:text-4xl text-center">
                    PROGRAM KERJA
                  </h1>
                </div>
                <h1 className="mt-2 sm:mt-4  text-6xl sm:text-7xl tracking-[2px] lg:text-[12rem] font-extrabold bg-gradient-to-b from-white to-muted-foreground bg-clip-text text-transparent leading-tight text-center uppercase">
                  PROKER
                </h1>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-10">
              {/* Main flex container for two columns - stacks vertically on small screens, horizontal on medium and up */}
              <div className="w-full lg:w-1/2 px-4 lg:px-32 flex-shrink-0">
                {/* Left column for the heading - full width on small, half on medium and up */}
                <h1 className="font-bold text-5xl lg:text-7xl text-center lg:text-left">
                  What Makes Us Different?
                </h1>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-10 px-4 md:px-10 lg:px-0">
                {/* Right column, stacked vertically with flex-col - full width on small, half on medium and up */}
                {department.work.map((item: any, i) => {
                  return (
                    <div
                      key={i}
                      // Each item explicitly controls its height and expansion, now with responsive heights
                      // Base height for mobile: h-[120px] and expands to hover:h-[300px]
                      // Medium screen and up: h-[150px] and expands to hover:h-[350px]
                      className={`group w-full transition-all duration-[0.5s] flex justify-between items-start pr-4 lg:pr-32
                      h-[120px] hover:h-[300px] md:h-[150px] md:hover:h-[350px] relative`}
                    >
                      <div className=" w-[30px] lg:w-[50px] h-full flex flex-col relative">
                        {/* Timeline line */}
                        <div
                          className={`w-[1px] ${i !== department.work.length - 1 ? 'h-[135%] md:h-[130%] md:hover:h-[120%]' : 'h-[100%] md:hover:h-[90%]'}  left-[50%] -translate-x-[50%] border-r-[1px] border-white group-hover:border-purple-500 absolute z-[-1]`}
                        ></div>

                        {/* Icon container */}
                        <div className="w-full h-[30px] lg:h-[50px] p-2 bg-white duration-[0.5s] group-hover:bg-gradient-to-br from-brand via-brand to-black rounded-md">
                          <svg
                            className="w-full h-auto hidden group-hover:block"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 9V7H14"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.778 3H18.222C19.204 3 20 3.895 20 5V19C20 20.105 19.204 21 20 21H5.778C4.796 21 4 20.105 4 19V5C4 3.895 4.796 3 5.778 3Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 13.5H16"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 17H12"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 7L13 10L10.286 8L8 10"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <svg
                            className="w-full h-auto block group-hover:hidden"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 9V7H14"
                              stroke="#873AE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.778 3H18.222C19.204 3 20 3.895 20 5V19C20 20.105 19.204 21 20 21H5.778C4.796 21 4 20.105 4 19V5C4 3.895 4.796 3 5.778 3Z"
                              stroke="#873AE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 13.5H16"
                              stroke="#873AE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 17H12"
                              stroke="#873AE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 7L13 10L10.286 8L8 10"
                              stroke="#873AE3"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        className={`w-[85%] p-4 lg:p-10 bg-gray-500/30 backdrop-blur-[10px] group-hover:bg-gradient-to-br from-brand via-brand/80 to-black/26 rounded-md flex flex-col justify-start gap-5 transition-all duration-[0.5s] hover:shadow-lg cursor-pointer `}
                      >
                        <h1 className="font-bold text-2xl lg:text-4xl  font-nasalization">
                          {/* Dynamic content */}
                          {item.workName}
                        </h1>

                        <div
                          className={`text-left text-base lg:text-xl overflow-hidden transition-all duration-[0.5s] group-hover:max-h-[200px] group-hover:opacity-100 max-h-0 opacity-0 `}
                        >
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute z-[-5] w-full max-w-[100vw] bottom-0">
              <svg
                className="w-full h-auto"
                viewBox="0 0 1512 586"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <g filter="url(#filter0_f_0_57)">
                  <path
                    d="M-46.0004 219.53C-43.9331 131.828 272.806 198.074 697.379 204.742C1121.95 211.409 1473.07 152.328 1471 240.03C1468.93 327.732 1140.57 471.698 715.999 465.03C291.426 458.362 -48.0677 307.232 -46.0004 219.53Z"
                    fill="url(#paint0_linear_0_57)"
                    fill-opacity="0.8"
                  />
                </g>
                <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_0_57)">
                  <path
                    d="M9.49982 235.262C10.3258 200.221 292.906 296.013 676 302.03C1059.09 308.046 1389.83 220.989 1389 256.03C1388.17 291.07 1070.09 426.546 687 420.53C303.906 414.513 8.67386 270.302 9.49982 235.262Z"
                    fill="white"
                    fill-opacity="0.8"
                  />
                </g>
                <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_0_57)">
                  <path
                    d="M9.49982 276.262C10.3258 241.221 292.906 337.013 676 343.03C1059.09 349.046 1389.83 261.989 1389 297.03C1388.17 332.07 1070.09 467.546 687 461.53C303.906 455.513 8.67386 311.302 9.49982 276.262Z"
                    fill="white"
                    fill-opacity="0.8"
                  />
                </g>
                <path
                  d="M1507.5 -90.5V266.818C1317.5 365.764 1048.21 427.56 749.498 427.56C451.315 427.56 182.443 365.981 -7.5 267.34V-90.5H1507.5Z"
                  fill="url(#paint1_linear_0_57)"
                  stroke="url(#paint2_linear_0_57)"
                  stroke-width="3"
                />
                <g opacity="0.87" filter="url(#filter3_f_0_57)">
                  <path
                    d="M726.919 387.469C909.359 393.787 1056.99 363.469 1056 392.03C1055.01 420.59 905.778 497.213 723.337 490.895C540.897 484.578 393.511 416.09 394.5 387.53C395.489 358.969 544.479 381.151 726.919 387.469Z"
                    fill="url(#paint3_linear_0_57)"
                  />
                </g>
                <g
                  style={{ mixBlendMode: 'plus-lighter' }}
                  opacity="0.87"
                  filter="url(#filter4_f_0_57)"
                >
                  <path
                    d="M728.827 411.023C1074.8 423.005 1337.21 316.089 1337 322.03C1336.79 327.971 1074.06 444.519 728.082 432.538C382.104 420.557 83.7943 327.971 84 322.03C84.2058 316.089 382.849 399.042 728.827 411.023Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_0_57"
                    x="-146.51"
                    y="73.9985"
                    width="1718.02"
                    height="491.755"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="50.25" result="effect1_foregroundBlur_0_57" />
                  </filter>
                  <filter
                    id="filter1_f_0_57"
                    x="-23.1019"
                    y="194.976"
                    width="1444.7"
                    height="258.348"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="16.3" result="effect1_foregroundBlur_0_57" />
                  </filter>
                  <filter
                    id="filter2_f_0_57"
                    x="-23.1019"
                    y="235.976"
                    width="1444.7"
                    height="258.348"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="16.3" result="effect1_foregroundBlur_0_57" />
                  </filter>
                  <filter
                    id="filter3_f_0_57"
                    x="300.195"
                    y="278.993"
                    width="850.11"
                    height="306.571"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="47.15" result="effect1_foregroundBlur_0_57" />
                  </filter>
                  <filter
                    id="filter4_f_0_57"
                    x="15.5999"
                    y="253.326"
                    width="1389.8"
                    height="248.476"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur stdDeviation="34.2" result="effect1_foregroundBlur_0_57" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_0_57"
                    x1="209.73"
                    y1="365.283"
                    x2="1023.07"
                    y2="-117.572"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AE00FF" />
                    <stop offset="0.825" stop-color="#E19FFF" />
                    <stop offset="1" stop-color="#5E00FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_57"
                    x1="750"
                    y1="80.5298"
                    x2="750"
                    y2="429.06"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0E0A17" />
                    <stop offset="1" stop-color="#1A0046" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_57"
                    x1="-9.00001"
                    y1="138.53"
                    x2="1509"
                    y2="144.53"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#140E24" />
                    <stop offset="0.5" stop-color="#E19FFF" />
                    <stop offset="1" stop-color="#140E24" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_57"
                    x1="942.215"
                    y1="369.173"
                    x2="901.799"
                    y2="538.394"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C60786" />
                    <stop offset="1" stop-color="#8400FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-[87%] xl:w-[85%] h-[1px] bg-gradient-to-r from-transparent rounded-full via-brand-soft to-transparent my-20"></div>
          <div className="w-full px-5 lg:px-32">
            {/* Left column for the heading - full width on small, half on medium and up */}
            <h1 className="font-bold w-full lg:w-1/2 text-3xl lg:text-7xl text-center lg:text-left">
              Showcasing Creativity, Inspiring Possibilities
            </h1>
          </div>
          <div className="w-full px-5 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {department.photos.mobile.map((item: any, i: number) => {
              return (
                <div className=" w-full flex items-center justify-center min-h-[300px] lg:min-h-[600px] rounded-lg overflow-hidden relative z-0 group">
                  <Image
                    src={item.imgUrl}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-[1.1] duration-300 absolute z-[-2]"
                  />
                  <div className=" w-full h-full flex flex-col justify-end p-5 lg:p-10 bg-gradient-to-t from-brand-deep/80 via-brand-deep/20 to-black/30">
                    <div className="w-full flex items-center justify-between">
                      <h1 className=" text-white text-2xl lg:text-5xl font-light font-nasalization uppercase">
                        {item.title}
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </NavLayout>
  );
};

export default ContainerDepartment;
