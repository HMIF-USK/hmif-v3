'use client';
import Star from '@/components/svg/events/start';
import CardEvent from '@/components/cards/event/Card';
import { IArticle } from '@/types/article.types';
import { useMemo } from 'react';
import { useProkers } from '@/services/hmif/hmif.query';
import { prokerToArticle } from '@/services/hmif/hmif.mapper';
import DataState from '@/core/components/data-state';
// import { eventCardData } from '@/configs/event.config';

const EventsComponents: React.FC = () => {
  const { data, isLoading, error } = useProkers();
  const events: IArticle[] = useMemo(() => (data ?? []).map(prokerToArticle), [data]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center xl:pt-[12vh] py-14 xl:pb-20 overflow-hidden gap-10 relative z-0">
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
              fillOpacity="0.8"
            />
          </g>
          <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_0_57)">
            <path
              d="M9.49982 235.262C10.3258 200.221 292.906 296.013 676 302.03C1059.09 308.046 1389.83 220.989 1389 256.03C1388.17 291.07 1070.09 426.546 687 420.53C303.906 414.513 8.67386 270.302 9.49982 235.262Z"
              fill="white"
              fillOpacity="0.8"
            />
          </g>
          <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_0_57)">
            <path
              d="M9.49982 276.262C10.3258 241.221 292.906 337.013 676 343.03C1059.09 349.046 1389.83 261.989 1389 297.03C1388.17 332.07 1070.09 467.546 687 461.53C303.906 455.513 8.67386 311.302 9.49982 276.262Z"
              fill="white"
              fillOpacity="0.8"
            />
          </g>
          <path
            d="M1507.5 -90.5V266.818C1317.5 365.764 1048.21 427.56 749.498 427.56C451.315 427.56 182.443 365.981 -7.5 267.34V-90.5H1507.5Z"
            fill="url(#paint1_linear_0_57)"
            stroke="url(#paint2_linear_0_57)"
            strokeWidth="3"
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              <stop stopColor="#AE00FF" />
              <stop offset="0.825" stopColor="#E19FFF" />
              <stop offset="1" stopColor="#5E00FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_57"
              x1="750"
              y1="80.5298"
              x2="750"
              y2="429.06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E0A17" />
              <stop offset="1" stopColor="#1A0046" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_57"
              x1="-9.00001"
              y1="138.53"
              x2="1509"
              y2="144.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#140E24" />
              <stop offset="0.5" stopColor="#E19FFF" />
              <stop offset="1" stopColor="#140E24" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_57"
              x1="942.215"
              y1="369.173"
              x2="901.799"
              y2="538.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C60786" />
              <stop offset="1" stopColor="#8400FF" />
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
              fillOpacity="0.8"
            />
          </g>
          <g style={{ mixBlendMode: 'plus-lighter' }} filter="url(#filter1_f_0_57)">
            <path
              d="M9.49982 235.262C10.3258 200.221 292.906 296.013 676 302.03C1059.09 308.046 1389.83 220.989 1389 256.03C1388.17 291.07 1070.09 426.546 687 420.53C303.906 414.513 8.67386 270.302 9.49982 235.262Z"
              fill="white"
              fillOpacity="0.8"
            />
          </g>
          <g style={{ mixBlendMode: 'overlay' }} filter="url(#filter2_f_0_57)">
            <path
              d="M9.49982 276.262C10.3258 241.221 292.906 337.013 676 343.03C1059.09 349.046 1389.83 261.989 1389 297.03C1388.17 332.07 1070.09 467.546 687 461.53C303.906 455.513 8.67386 311.302 9.49982 276.262Z"
              fill="white"
              fillOpacity="0.8"
            />
          </g>
          <path
            d="M1507.5 -90.5V266.818C1317.5 365.764 1048.21 427.56 749.498 427.56C451.315 427.56 182.443 365.981 -7.5 267.34V-90.5H1507.5Z"
            fill="url(#paint1_linear_0_57)"
            stroke="url(#paint2_linear_0_57)"
            strokeWidth="3"
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              <stop stopColor="#AE00FF" />
              <stop offset="0.825" stopColor="#E19FFF" />
              <stop offset="1" stopColor="#5E00FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_57"
              x1="750"
              y1="80.5298"
              x2="750"
              y2="429.06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0E0A17" />
              <stop offset="1" stopColor="#1A0046" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_57"
              x1="-9.00001"
              y1="138.53"
              x2="1509"
              y2="144.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#140E24" />
              <stop offset="0.5" stopColor="#E19FFF" />
              <stop offset="1" stopColor="#140E24" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_57"
              x1="942.215"
              y1="369.173"
              x2="901.799"
              y2="538.394"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C60786" />
              <stop offset="1" stopColor="#8400FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className=" flex flex-col items-center">
        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-brand-deep to-brand-muted border border-foreground/20 rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 shadow-md">
          {' '}
          <Star />
          <h1 className="font-bold text-foreground text-xs sm:text-sm md:text-base">THE LATEST</h1>{' '}
        </div>

        <h1 className="mt-2 sm:mt-4 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight text-center">
          EVENT
        </h1>
      </div>

      <div className=" w-[87%] xl:w-[85%] flex flex-col items-center gap-20">
        <DataState
          isLoading={isLoading}
          error={error}
          isEmpty={events.length === 0}
          emptyText="Belum ada event yang dipublikasikan."
        />
        {events.map((event: IArticle, i: number) => {
          return (
            <div key={event.slug} className="contents">
              <CardEvent data={event} isLastItem={i === events.length - 1 ? true : false} />
              {i !== events.length - 1 && (
                <div className="w-full h-1 bg-gradient-to-r from-transparent rounded-full via-brand-deep to-transparent"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsComponents;
