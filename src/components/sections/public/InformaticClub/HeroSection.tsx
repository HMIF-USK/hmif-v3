import React from 'react';
// Menggunakan Path Alias Next.js untuk akurasi jalur folder
import DoubleRing from '@/components/svg/informatics-club/DoubleRing';
import OneRing from '@/components/svg/informatics-club/OneRing';

const HeroSectionInformaticClub = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#07040d] flex flex-col justify-center items-center overflow-hidden select-none px-4">
      
          {/* BACKGROUND UTAMA (z-0) */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #07040d 30%, #160729 90%, #260e4a 100%)'
            }}
          />

          {/* 1. TOMBOL KEMBALI (z-30) */}
          <div className="absolute top-8 left-6 md:left-10 z-30 flex items-center w-full">
            <a 
              href="#" 
              className="px-6 py-1.5 text-[11px] font-medium tracking-wide text-[#b1a0d7] bg-[#221633] border border-[#3b2a54] rounded-full hover:bg-[#34224d] transition-all whitespace-nowrap"
              style={{ fontFamily: 'sans-serif' }}
            >
              Kembali
            </a>
            <div className="h-[1px] bg-gradient-to-r from-[#3d2b5c] via-[#1a102f] to-transparent w-[35%] ml-4 hidden sm:block" />
          </div>

          {/* 2. AREA UTAMA TEKS DENGAN SVG DI DALAMNYA (z-20) */}
          <div className="relative z-20 w-full max-w-[1100px] flex flex-col items-center justify-center text-center mt-12 mb-28">
            
            {/* ======================================================== */}
            {/* SVG DOUBLE RING  */}
            {/* ======================================================== */}
            <div 
              className="absolute z-10 pointer-events-none w-[200px] sm:w-[280px] md:w-[380px] opacity-90 transform -translate-x-1/2"
              style={{ 
                left: '22%', 
                top: '-3px' 
              }}
            >
              <DoubleRing />
            </div>

            {/* ======================================================== */}
            {/* SVG ONE RING */}
            {/* ======================================================== */}
            <div 
              className="absolute z-10 pointer-events-none w-[180px] sm:w-[240px] md:w-[320px] opacity-90 transform -translate-x-1/2"
              style={{ 
                left: '65%',  
                top: '170px'  
              }}
            >
              <OneRing />
            </div>

            <h1 
              className="w-full flex flex-col items-center uppercase font-extrabold tracking-[-0.03em] relative z-20"
              style={{ fontFamily: "'Syne', 'Montserrat', sans-serif" }}
            >
              <span 
                className="text-[11vw] md:text-[7rem] lg:text-[8rem] bg-gradient-to-b from-[#ffffff] via-[#e4e2e9] to-[#9994a5] bg-clip-text text-transparent block origin-center transform scale-y-[0.9] font-black"
                style={{ filter: 'drop-shadow(0px 8px 6px rgba(0,0,0,0.5))' }}
              >
                INFORMATICS
              </span>
              <span 
                className="text-[11vw] md:text-[7rem] lg:text-[8rem] bg-gradient-to-b from-[#ffffff] via-[#e4e2e9] to-[#9994a5] bg-clip-text text-transparent block origin-center transform scale-y-[0.9] font-black -mt-4 md:-mt-8"
                style={{ filter: 'drop-shadow(0px 8px 6px rgba(0,0,0,0.5))' }}
              >
                CLUB
              </span>
            </h1>
          </div>

          {/* 3. EFEK CAHAYA (Diturunkan sedikit ke bottom-[8%] agar pas di bawah teks) */}
          <div className="absolute bottom-[10%] left-0 right-0 pointer-events-none flex flex-col items-center justify-center z-10">
            {/* Pendaran Cahaya Violet */}
            <div 
              className="absolute w-full sm:w-[95%] md:w-[90%] h-[150px] opacity-85 blur-[40px] z-10 transform scale-y-[0.38]"
              style={{
                background: 'radial-gradient(ellipse at center, #a855f7 20%, #6b1d95 40%, #160729 75%, transparent 100%)'
              }}
            />
            
            {/* Inti Garis Putih */}
            <div className="absolute w-[45%] sm:w-[35%] md:w-[30%] h-[3.2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-100 z-30" />
            
            {/* Aura Glow Garis Putih */}
            <div className="absolute w-[50%] sm:w-[40%] md:w-[30%] h-[8px] bg-gradient-to-r from-transparent via-[#d8b4fe] to-transparent opacity-95 blur-[2.5px] z-20" />
          </div>

        </section>
    );
};

export default HeroSectionInformaticClub;