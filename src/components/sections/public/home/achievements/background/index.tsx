'use client';
import EllipsAchievement from '@/components/svg/achievements/ellips-achievement';
import ElementAchievement from '@/components/svg/achievements/element';
import { useState, useEffect } from 'react';
import { achievements } from '@/data/achievement-list';
import Image from 'next/image';
import Link from 'next/link';

const BackgroundAchievement: React.FC = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes in motion preference
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Helper function to get animation class
  const getAnimationClass = (baseClass: string) => {
    if (prefersReducedMotion || isHover) {
      return `${baseClass} animate-pause`; // Pause animation if user prefers reduced motion or on hover
    }
    return baseClass;
  };

  return (
    <>
      <div className="w-full absolute z-[-10] inset-0 blur-[5px]">
        <EllipsAchievement />
      </div>
      <div className="w-full absolute z-[-11] inset-0 blur-[5px] rotate-x-[180deg] bottom-0">
        <EllipsAchievement />
      </div>

      <div
        className={`absolute z-[-9] w-[100px] h-[100px] md:w-[600px] md:h-[600px] rounded-full bg-transparent border-[1px] border-brand shadow-[0px_0px_20px_rgba(90,24,154,0.5)] ${getAnimationClass('rotation-10')}`}
      >
        <div
          className={`absolute scale-[0.5] md:scale-[1] -right-[10%] md:right-[15%] top-[5%] ${getAnimationClass('rotation-3')}`}
        >
          <ElementAchievement />
        </div>
        <div
          className={`absolute scale-[0.5] md:scale-[1] -left-[10%] -bottom-[0%] md:left-[15%] md:bottom-[5%] ${getAnimationClass('rotation-5')}`}
        >
          <ElementAchievement />
        </div>
      </div>

      <div
        className={`absolute z-[-8] w-[200px] h-[200px] md:w-[900px] md:h-[900px] rounded-full bg-transparent border-[1px] border-brand shadow-[0px_0px_20px_rgba(90,24,154,0.5)] ${getAnimationClass('rotation-15-reverse')}`}
      >
        <div
          className={`absolute scale-[0.5] md:scale-[1] md:left-[15%] md:top-[5%] ${getAnimationClass('rotation-3')}`}
        >
          <ElementAchievement />
        </div>
        <div
          className={`absolute scale-[0.5] md:scale-[1] md:right-[15%] md:bottom-[5%] ${getAnimationClass('rotation-5')}`}
        >
          <ElementAchievement />
        </div>
        <div
          className={`absolute scale-[0.5] md:scale-[1] left-[40%] -bottom-[13%] md:left-[15%] md:bottom-[5%] ${getAnimationClass('rotation-5')}`}
        >
          <ElementAchievement />
        </div>
      </div>

      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className={`absolute z-[-10] xl:z-[7] w-[350px] h-[350px] md:w-[1300px] md:h-[1300px] rounded-full bg-transparent border-[1px] border-brand shadow-[0px_0px_20px_rgba(90,24,154,0.5)] ${getAnimationClass('rotation-20')}`}
      >
        <div
          className={`absolute  scale-[0.5] md:scale-[1] top-[15%] md:right-[48%] md:-top-[3%] ${getAnimationClass('rotation-3')}`}
        >
          <ElementAchievement />
        </div>

        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% - 770px)',
            left: 'calc(50% - 225px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[0].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[0].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[0].imgUrl}
              alt={achievements[0].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[0].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>

        {/* Card 2 - 60° (kanan atas) */}
        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% - 350px)',
            left: 'calc(50% + 338px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[1].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[1].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[1].imgUrl}
              alt={achievements[1].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[1].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>

        {/* Card 3 - 120° (kanan bawah) */}
        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% + 200px)',
            left: 'calc(50% + 338px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[2].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[2].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[2].imgUrl}
              alt={achievements[2].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[2].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>

        {/* Card 4 - 180° (bawah) */}
        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% + 480px)',
            left: 'calc(50% - 225px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[3].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[3].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[3].imgUrl}
              alt={achievements[3].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[3].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>

        {/* Card 5 - 240° (kiri bawah) */}
        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% + 200px)',
            left: 'calc(50% - 788px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[4].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[4].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[4].imgUrl}
              alt={achievements[4].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[4].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>

        {/* Card 6 - 300° (kiri atas) */}
        <div
          className={`absolute hidden xl:flex ${getAnimationClass('rotation-20-reverse')} w-[450px] h-[450px] md:h-[320px] bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start duration-300 border-[0.5px] border-foreground/20`}
          style={{
            top: 'calc(50% - 350px)',
            left: 'calc(50% - 788px)',
            transform: 'translate(0, 0)',
          }}
        >
          <div className="w-full text-foreground">
            <h1 className="mb-1 text-3xl font-bold line-clamp-1">
              {achievements[6].singkatanTitle}
            </h1>
            <p className="text-xl line-clamp-1">{achievements[6].title}</p>
          </div>
          <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
            <Image
              src={achievements[6].imgUrl}
              alt={achievements[6].title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={`/achievement/${achievements[6].slug}`}
            className="bg-background/20 py-3 rounded-full px-4 flex items-center justify-center gap-5 font-bold border-[0.5px] border-foreground"
          >
            <span>Selengkapnya</span>
          </Link>
        </div>
      </div>
      <div className=" absolute z-[10] top-[50%] left-[50%] translate-[-50%] hidden xl:flex flex-col items-center gap-2">
        <h1 className=" text-6xl  lg:text-7xl font-extrabold bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight text-center">
          Achievements
        </h1>
        <div className="flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-b from-brand-deep/30 to-brand-muted/30 border border-foreground/20 rounded-full px-3 md:px-10 py-1 sm:py-2 md:py-3 shadow-md cursor-pointer ">
          <Link
            href={'/achievement'}
            className="font-bold text-foreground  text-xs sm:text-sm md:text-base"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default BackgroundAchievement;
