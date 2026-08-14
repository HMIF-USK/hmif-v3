'use client';
import EllipsAchievement from '@/components/svg/achievements/ellips-achievement';
import ElementAchievement from '@/components/svg/achievements/element';
import { useState, useEffect, useRef } from 'react';
import { useAchievements } from '@/services/achievement/achievement.query';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Kartu desktop: dua kolom lurus mengapit judul, tiga baris sejajar — orbitnya datang
 * dari perhitungan posisi (x, y) pada requestAnimationFrame. Kartu tidak pernah diberi
 * rotasi CSS (transform: translate(-50%, -50%)), sehingga SELALU 100% tegak lurus (tanpa miring).
 */
const CARD_W = 320;
const CARD_H = 300;
const COL_X = 460; // jarak titik tengah kolom dari pusat ring
const ROW_GAP = 330;

const CARD_SLOT_OFFSETS = [-1, 1].flatMap((col) =>
  [-1, 0, 1].map((row) => ({
    x: col * COL_X,
    y: row * ROW_GAP,
  }))
);

export const ACHIEVEMENT_CARD_SLOTS = CARD_SLOT_OFFSETS.map((slot) => ({
  left: slot.x - CARD_W / 2,
  top: slot.y - CARD_H / 2,
}));

const BackgroundAchievement: React.FC = () => {
  // Enam achievement terbaru yang diunggah (backend mengurutkan created_at desc).
  const { data } = useAchievements();
  const achievements = (data ?? []).slice(0, ACHIEVEMENT_CARD_SLOTS.length);

  const [isHover, setIsHover] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angleRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const isHoverRef = useRef<boolean>(false);
  isHoverRef.current = isHover;

  const prefersReducedMotionRef = useRef<boolean>(false);
  prefersReducedMotionRef.current = prefersReducedMotion;

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

  useEffect(() => {
    let animId: number;

    const updatePositions = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        if (!isHoverRef.current && !prefersReducedMotionRef.current) {
          // Putaran 360 derajat dalam 30 detik (30.000 ms)
          angleRef.current = (angleRef.current + (delta * 360) / 30000) % 360;
        }
      }
      lastTimeRef.current = time;

      const rad = (angleRef.current * Math.PI) / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);

      CARD_SLOT_OFFSETS.forEach((slot, index) => {
        const el = cardRefs.current[index];
        if (el) {
          const x = slot.x * cos - slot.y * sin;
          const y = slot.x * sin + slot.y * cos;

          // Posisi kartu lurus sempurna tanpa rotasi sama sekali (transform: translate(-50%, -50%))
          el.style.left = `calc(50% + ${x}px)`;
          el.style.top = `calc(50% + ${y}px)`;
          el.style.transform = `translate(-50%, -50%)`;
        }
      });

      animId = requestAnimationFrame(updatePositions);
    };

    animId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Helper function to get animation class for decorative elements
  const getAnimationClass = (baseClass: string) => {
    if (prefersReducedMotion || isHover) {
      return `${baseClass} animate-pause`;
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

      {/* Decorative main ring */}
      <div
        className={`absolute z-[-10] xl:z-[7] w-[350px] h-[350px] md:w-[1300px] md:h-[1300px] rounded-full bg-transparent border-[1px] border-brand shadow-[0px_0px_20px_rgba(90,24,154,0.5)] pointer-events-none ${getAnimationClass('rotation-20')}`}
      >
        <div
          className={`absolute scale-[0.5] md:scale-[1] top-[15%] md:right-[48%] md:-top-[3%] ${getAnimationClass('rotation-3')}`}
        >
          <ElementAchievement />
        </div>
      </div>

      {/* Container kartu yang mengorbit: diposisikan tepat di tengah, tidak berotasi secara CSS
          sehingga kartu SELALU 100% tegak lurus (tanpa miring sedikit pun). */}
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className="absolute z-[-10] xl:z-[7] w-[350px] h-[350px] md:w-[1300px] md:h-[1300px] rounded-full bg-transparent"
      >
        {CARD_SLOT_OFFSETS.map((_, index) => {
          const achievement = achievements[index];

          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`absolute hidden xl:flex ${
                achievement ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } bg-surface/30 backdrop-blur-[2px] rounded-2xl p-5 flex-col justify-between items-start transition-opacity duration-300 border-[0.5px] border-foreground/20`}
              style={{
                width: CARD_W,
                height: CARD_H,
                left: `calc(50% + ${CARD_SLOT_OFFSETS[index].x}px)`,
                top: `calc(50% + ${CARD_SLOT_OFFSETS[index].y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {achievement && (
                <>
                  <div className="w-full text-foreground">
                    <h1 className="mb-1 text-2xl font-bold line-clamp-1">
                      {achievement.singkatanTitle}
                    </h1>
                    <p className="text-base line-clamp-1">{achievement.title}</p>
                  </div>
                  <div className="w-full h-[50%] bg-surface rounded-2xl relative overflow-hidden">
                    <Image
                      src={achievement.imgUrl}
                      alt={achievement.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <Link
                    href={`/achievement/${achievement.slug}`}
                    className="bg-background/20 py-2 rounded-full px-4 flex items-center justify-center gap-5 text-sm font-bold border-[0.5px] border-foreground"
                  >
                    <span>Selengkapnya</span>
                  </Link>
                </>
              )}
            </div>
          );
        })}
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
