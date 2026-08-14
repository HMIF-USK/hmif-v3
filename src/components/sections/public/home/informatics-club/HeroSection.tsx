import React from 'react';

import DoubleRing from '@/components/svg/informatics-club/DoubleRing';
import OneRing from '@/components/svg/informatics-club/OneRing';

const HeroSectionInformaticClub = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#07040d] flex flex-col justify-center items-center overflow-hidden select-none px-4">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #07040d 30%, #160729 90%, #260e4a 100%)',
        }}
      />

      <div className="relative z-20 w-full max-w-[1100px] flex flex-col items-center justify-center text-center mt-12 mb-28">
        <div
          className="absolute z-10 pointer-events-none w-[200px] sm:w-[280px] md:w-[380px] opacity-90 transform -translate-x-1/2"
          style={{
            left: '30%',
            top: '-3px',
          }}
        >
          <DoubleRing />
        </div>

        <div
          className="absolute z-10 pointer-events-none w-[180px] sm:w-[240px] md:w-[320px] opacity-90 transform -translate-x-1/2"
          style={{
            left: '75%',
            top: '145px',
          }}
        >
          <OneRing />
        </div>

        <h1
          className="w-full flex flex-col items-center uppercase font-extrabold tracking-[-0.03em] relative z-20"
          style={{ fontFamily: "'Syne', 'Montserrat', sans-serif" }}
        >
          <span
            className="text-[11vw] md:text-[7rem] lg:text-[8rem] bg-gradient-to-b from-[#ffffff] via-[#e4e2e9] to-[#5A4A7A] bg-clip-text text-transparent block origin-center transform scale-y-[0.9] font-black"
            style={{ filter: 'drop-shadow(0px 8px 6px rgba(0,0,0,0.5))' }}
          >
            INFORMATICS
          </span>
          <span
            className="text-[11vw] md:text-[7rem] lg:text-[8rem] bg-gradient-to-b from-[#ffffff] via-[#e4e2e9] to-[#5A4A7A] bg-clip-text text-transparent block origin-center transform scale-y-[0.9] font-black -mt-8 md:-mt-16 lg:-mt-15"
            style={{ filter: 'drop-shadow(0px 8px 6px rgba(0,0,0,0.5))' }}
          >
            CLUB
          </span>
        </h1>
      </div>

      <div className="absolute bottom-[10%] left-0 right-0 pointer-events-none flex flex-col items-center justify-center z-10">
        <div
          className="absolute w-full sm:w-[95%] md:w-[90%] h-[150px] opacity-85 blur-[40px] z-10 transform scale-y-[0.38]"
          style={{
            background:
              'radial-gradient(ellipse at center, #a855f7 20%, #6b1d95 40%, #160729 75%, transparent 100%)',
          }}
        />

        <div className="absolute w-[45%] sm:w-[35%] md:w-[30%] h-[3.2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-100 z-30" />

        <div className="absolute w-[50%] sm:w-[40%] md:w-[30%] h-[8px] bg-gradient-to-r from-transparent via-[#d8b4fe] to-transparent opacity-95 blur-[2.5px] z-20" />
      </div>
    </section>
  );
};

export default HeroSectionInformaticClub;
