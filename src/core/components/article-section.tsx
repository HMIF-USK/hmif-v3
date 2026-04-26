'use client';
import { IArticle } from '@/types/article.types';
import Image from 'next/image';
import { getAchievementsExceptSlug } from '@/data/achievement-list';
import { ArrowLeft } from 'lucide-react';
import { Scan } from 'lucide-react';
import Link from 'next/link';
import NotFound from './not-found';
import { useRouter } from 'next/navigation';

interface IArticleSectionProps {
  data?: IArticle;
}
const ArticleSection: React.FC<IArticleSectionProps> = ({ data }) => {
  const navigation = useRouter();
  const nextAchievement = getAchievementsExceptSlug(data?.slug);
  if (!data) return <NotFound />;
  return (
    <main className="w-full min-h-screen lg:min-h-[200vh] flex flex-col items-center xl:pt-[200px] py-14 xl:pb-20 overflow-hidden gap-10 relative z-0 text-white">
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
          <g style={{ mixBlendMode: 'plus-lighter' }} opacity="0.87" filter="url(#filter4_f_0_57)">
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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

      <div className="absolute z-[-5] w-full max-w-[100vw] bottom-0 lg:bottom-[25vh]">
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
          <g style={{ mixBlendMode: 'plus-lighter' }} opacity="0.87" filter="url(#filter4_f_0_57)">
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
      <div className="w-[80%] lg:w-[85%] flex items-center justify-start">
        <div
          onClick={() => navigation.back()}
          className="flex items-center gap-2 bg-surface-muted/20 backdrop-blur-2xl rounded-full py-2 px-5 lg:px-8 cursor-pointer"
        >
          <ArrowLeft size={20} color="white" />
          <h1>Kembali</h1>
        </div>
      </div>

      <div className="w-[80%] lg:w-[85%] grid grid-cols-1 lg:grid-cols-3 gap-10 lg:min-h-[537px]">
        <div className="w-full h-[300px] lg:h-full  rounded-2xl lg:col-span-2 relative z-0 overflow-hidden">
          <Image
            src={data.imgUrl}
            alt={data.title}
            fill
            className="w-full h-full object-cover absolute z-[-1]"
          />
          <div className="w-full h-full p-5 lg:p-10 bg-gradient-to-t from-brand-deep via-brand-deep/20 to-transparent flex items-end justify-start">
            <h1 className="w-full font-semibold text-2xl lg:text-5xl font-nasalization">
              {data.title}
            </h1>
          </div>
        </div>
        <div className=" w-full h-full flex flex-col justify-between gap-10">
          <div className="w-full flex-col flex  p-4 lg:p-7 items-start gap-4 lg:gap-9 rounded-2xl bg-gradient-to-r from-surface-strong via-border/20 to-transparent border-1 border-surface-strong/80">
            <h1 className=" font-bold text-2xl">Penyelenggara</h1>
            <div className="flex w-full justify-between items-center">
              <div className="w-[50px] h-[50px] lg:w-[61px] lg:h-[61px] rounded-full bg-gradient-to-b from-brand-deep to-brand flex items-center justify-center">
                <Scan size={25} color="white" />
              </div>
              <div className="w-[78%] lg:w-[82%] flex flex-col items-start gap-1">
                <h1 className=" font-bold text-xl lg:text-3xl">{data.penyelenggara[0]}</h1>
                <h1 className="text-sm lg:text-base">{data.penyelenggara[1]}</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-[400px] p-4 lg:p-7  rounded-2xl bg-gradient-to-r from-surface-strong via-border/20 to-transparent border-1 border-surface-strong/80">
            <h1 className="font-bold text-2xl">Event Lainnya</h1>
            <div className=" w-full h-[80%] mt-5 overflow-x-hidden flex flex-col gap-7 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {nextAchievement.map((event: IArticle, i: number) => {
                return (
                  <Link
                    href={`/achievement/${event.slug}`}
                    className="flex w-full justify-between items-center p-5 bg-gradient-to-r  from-brand to-brand-deep rounded-2xl "
                  >
                    <div className="w-[50px] h-[50px] lg:w-[61px] lg:h-[61px] rounded-xl relative ">
                      <Image
                        src={event.imgUrl}
                        alt={event.title}
                        fill
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="w-[78%] lg:w-[82%] flex flex-col items-start gap-1">
                      <h1 className=" font-bold text-xl lg:text-2xl line-clamp-1">{event.title}</h1>
                      <h1 className="text-sm lg:text-base line-clamp-1">
                        {event.penyelenggara[1]}
                      </h1>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] lg:w-[85%] grid grid-cols-1 lg:grid-cols-3 p-4 lg:p-7 bg-gray-800/30 border-[2px] border-border/50 rounded-2xl gap-10">
        <div className=" w-full py-12 px-7 lg:px-10 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand flex justify-end items-center relative z-0">
          <div className=" absolute z-[-1] left-0">
            <svg
              width="85"
              height="158"
              viewBox="0 0 85 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60.875 15.75L45.125 15.75L45.125 7.875C45.125 5.78642 44.2953 3.78338 42.8185 2.30653C41.3416 0.829685 39.3386 -2.10291e-07 37.25 -2.06382e-07C35.1614 -2.02472e-07 33.1584 0.829685 31.6815 2.30653C30.2047 3.78338 29.375 5.78642 29.375 7.875L29.375 15.75L-17.875 15.75L-17.875 7.875C-17.875 5.78642 -18.7047 3.78338 -20.1815 2.30653C-21.6584 0.829685 -23.6614 -9.23589e-08 -25.75 -8.84492e-08C-27.8386 -8.45395e-08 -29.8416 0.829685 -31.3185 2.30653C-32.7953 3.78338 -33.625 5.78642 -33.625 7.875L-33.625 15.75L-49.375 15.75C-55.6407 15.75 -61.6498 18.2391 -66.0804 22.6696C-70.5109 27.1001 -73 33.1093 -73 39.375L-73 133.875C-73 140.141 -70.5109 146.15 -66.0804 150.58C-61.6498 155.011 -55.6407 157.5 -49.375 157.5L60.875 157.5C67.1407 157.5 73.1499 155.011 77.5804 150.58C82.0109 146.15 84.5 140.141 84.5 133.875L84.5 39.375C84.5 33.1093 82.0109 27.1001 77.5804 22.6696C73.1499 18.2391 67.1407 15.75 60.875 15.75ZM68.75 133.875C68.75 135.964 67.9203 137.967 66.4435 139.443C64.9666 140.92 62.9636 141.75 60.875 141.75L-49.375 141.75C-51.4636 141.75 -53.4666 140.92 -54.9435 139.443C-56.4203 137.967 -57.25 135.964 -57.25 133.875L-57.25 78.75L68.75 78.75L68.75 133.875ZM68.75 63L-57.25 63L-57.25 39.375C-57.25 37.2864 -56.4203 35.2834 -54.9435 33.8065C-53.4666 32.3297 -51.4636 31.5 -49.375 31.5L-33.625 31.5L-33.625 39.375C-33.625 41.4636 -32.7953 43.4666 -31.3185 44.9435C-29.8416 46.4203 -27.8386 47.25 -25.75 47.25C-23.6614 47.25 -21.6584 46.4203 -20.1815 44.9435C-18.7047 43.4666 -17.875 41.4636 -17.875 39.375L-17.875 31.5L29.375 31.5L29.375 39.375C29.375 41.4636 30.2047 43.4666 31.6815 44.9435C33.1584 46.4203 35.1614 47.25 37.25 47.25C39.3386 47.25 41.3416 46.4203 42.8185 44.9435C44.2953 43.4666 45.125 41.4636 45.125 39.375L45.125 31.5L60.875 31.5C62.9636 31.5 64.9666 32.3297 66.4435 33.8065C67.9203 35.2834 68.75 37.2864 68.75 39.375L68.75 63Z"
                fill="url(#paint0_linear_1562_236)"
                fill-opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1562_236"
                  x1="5.75"
                  y1="-1.47415e-07"
                  x2="5.75"
                  y2="157.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4CEFF" />
                  <stop offset="1" stop-color="#4A207D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-[50%] text-right">
            <h1 className="font-bold text-xl lg:text-3xl">Tanggal</h1>
            <h1 className="text-base lg:text-lg mt-3">{data.tanggal}</h1>
          </div>
        </div>
        <div className=" w-full py-12 px-7 lg:px-10 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand flex justify-end items-center relative z-0">
          <div className="absolute z-[-1] inset-0">
            <svg
              width="96"
              height="131"
              viewBox="0 0 96 131"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5 -22.9598C23.8614 -23.5176 9.5971 -18.2568 -1.17677 -8.32652C-11.9506 1.60376 -18.3583 15.3963 -19 30.038C-19 81.4921 20.9106 118.642 34.1798 129.447C35.396 130.451 36.9234 131 38.5 131C40.0766 131 41.604 130.451 42.8202 129.447C56.0894 118.642 96 81.8008 96 30.038C95.3583 15.3963 88.9506 1.60376 78.1768 -8.32652C67.4029 -18.2568 53.1386 -23.5176 38.5 -22.9598ZM38.5 115.76C28.9415 107.358 20.444 97.8202 13.1959 87.3578C1.06816 70.6659 -5.67842 50.6685 -6.14222 30.038C-5.50441 18.8071 -0.452774 8.28436 7.91055 0.765572C16.2739 -6.75321 27.2701 -10.6578 38.5 -10.0962C49.7299 -10.6578 60.7261 -6.75321 69.0895 0.765571C77.4528 8.28435 82.5044 18.8071 83.1422 30.038C83.1422 72.0245 52.695 103.72 38.5 115.76Z"
                fill="url(#paint0_linear_0_1)"
                fill-opacity="0.6"
              />
              <path
                d="M38.0511 -1.97697C34.3582 -2.12668 30.6721 -1.5453 27.2066 -0.266529C23.7411 1.01224 20.5651 2.96295 17.8628 5.47251C15.1605 7.98207 12.9856 11.0005 11.4642 14.3529C9.94284 17.7053 9.10525 21.325 9 25.002C9.11875 28.6747 9.96543 32.2879 11.4914 35.634C13.0174 38.9801 15.1926 41.9932 17.8921 44.5001C20.5916 47.0071 23.7622 48.9585 27.2217 50.2423C30.6812 51.526 34.3615 52.1169 38.0511 51.9809C45.4784 52.2008 52.6914 49.4871 58.1152 44.4324C63.539 39.3776 66.7331 32.3924 67 25.002C66.8811 21.3381 66.0377 17.7335 64.5181 14.3942C62.9986 11.0549 60.8326 8.0465 58.144 5.54089C55.4555 3.03529 52.2971 1.08165 48.8494 -0.208318C45.4017 -1.49829 41.7324 -2.09929 38.0511 -1.97697ZM38.0511 39.255C34.0241 39.4775 30.0727 38.1023 27.0624 35.4307C24.0522 32.7592 22.2286 29.0091 21.9912 25.002C22.2286 20.9948 24.0522 17.2447 27.0624 14.5732C30.0727 11.9016 34.0241 10.5265 38.0511 10.7489C42.0886 10.5258 46.0514 11.8978 49.0779 14.5668C52.1045 17.2358 53.95 20.986 54.2134 25.002C53.95 29.0179 52.1045 32.7681 49.0779 35.4371C46.0514 38.1061 42.0886 39.4782 38.0511 39.255Z"
                fill="url(#paint1_linear_0_1)"
                fill-opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="38.5"
                  y1="-23"
                  x2="38.5"
                  y2="131"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4CEFF" />
                  <stop offset="1" stop-color="#4A207D" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="38"
                  y1="-2"
                  x2="38"
                  y2="52"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4CEFF" />
                  <stop offset="1" stop-color="#4A207D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-[50%] text-right">
            <h1 className="font-bold text-xl lg:text-3xl">Lokasi</h1>
            <h1 className="text-base lg:text-lg mt-3">{data.lokasi}</h1>
          </div>
        </div>
        <div className=" w-full py-12 px-7 lg:px-10 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand flex justify-end items-center relative z-0">
          <div className="z-[-1] absolute left-0 bottom-0">
            <svg
              width="105"
              height="92"
              viewBox="0 0 105 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.0833 -1.16216e-07C7.85059 -5.21347e-08 -20 27.8506 -20 62.0833C-20 96.3161 7.85059 124.167 42.0833 124.167C76.3161 124.167 104.167 96.3161 104.167 62.0833C104.167 27.8506 76.3161 -1.80298e-07 42.0833 -1.16216e-07ZM42.0833 111.75C14.6984 111.75 -7.58333 89.4683 -7.58333 62.0833C-7.58333 34.6984 14.6984 12.4167 42.0833 12.4167C69.4683 12.4167 91.75 34.6984 91.75 62.0833C91.75 89.4683 69.4683 111.75 42.0833 111.75Z"
                fill="url(#paint0_linear_0_1)"
                fill-opacity="0.6"
              />
              <path
                d="M48.2917 31.0415L35.875 31.0415L35.875 68.2915L73.125 68.2915L73.125 55.8748L48.2917 55.8748L48.2917 31.0415Z"
                fill="url(#paint1_linear_0_1)"
                fill-opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="42.0833"
                  y1="-1.16216e-07"
                  x2="42.0833"
                  y2="124.167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4CEFF" />
                  <stop offset="1" stop-color="#4A207D" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="54.5"
                  y1="31.0415"
                  x2="54.5"
                  y2="68.2915"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4CEFF" />
                  <stop offset="1" stop-color="#4A207D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-[50%] text-right">
            <h1 className="font-bold text-xl lg:text-3xl">Waktu</h1>
            <h1 className="text-base lg:text-lg mt-3">{data.waktu}</h1>
          </div>
        </div>
      </div>

      <div className="w-[80%] lg:w-[85%] flex flex-col items-center lg:items-start gap-10 p-4 lg:p-7 bg-gradient-to-r from-surface-strong to-brand/20 border-[2px] border-border/50 rounded-2xl backdrop-blur-2xl">
        <h1 className="py-3 px-10 font-semibold text-xl lg:text-2xl rounded-full bg-gradient-to-r from-brand-deep via-brand to-brand">
          Deskripsi Event
        </h1>
        {data.deskripsi.map((item: string, i: number) => {
          return <p className=" text-left text-lg lg:text-xl">{item}</p>;
        })}
      </div>
    </main>
  );
};

export default ArticleSection;
