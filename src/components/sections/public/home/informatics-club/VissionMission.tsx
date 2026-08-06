import React from 'react';
import SpringLeft from '@/components/svg/informatics-club/SpringLeft';
import SpringRight from '@/components/svg/informatics-club/SpringRight';

const VisionMission = () => {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-b from-[#2e0968] to-[#11022d] py-24 overflow-hidden flex flex-col items-center justify-center font-sans">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#a855f7] opacity-15 blur-[140px] pointer-events-none rounded-full z-0" />
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-[#6d28d9] opacity-10 blur-[120px] pointer-events-none rounded-full z-0" />

            <div className="absolute top-[15%] -left-[2%] md:-left-[1%] z-0 pointer-events-none animate-logo">
                <SpringLeft className="w-[240px] md:w-[280px] lg:w-[320px] h-auto object-contain opacity-70" />
            </div>

            <div className="relative z-10 w-full max-w-[1300px] px-6 md:px-8 lg:px-12 mx-auto flex flex-col items-center">
                <div className="flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                    >
                        <path d="M10 2.5C10 7.5 15 12.5 20 12.5C15 12.5 10 17.5 10 22.5C10 17.5 5 12.5 0 12.5C5 12.5 10 7.5 10 2.5Z" fill="#e9d5ff"/>
                        <path d="M19 4C19 6.2 21.2 8 23.5 8C21.2 8 19 9.8 19 12C19 9.8 16.8 8 14.5 8C16.8 8 19 6.2 19 4Z" fill="#c084fc"/>
                    </svg>
                    <span className="text-[#E2E8F0] font-bold text-[11px] md:text-[13px] tracking-[0.2em] uppercase ml-1">
                        Our Foundation
                    </span>
                </div>

                <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-14 text-center tracking-wide uppercase drop-shadow-md">
                    VISION & MISSION
                </h2>

                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch relative">
                    <div className="flex-1 w-full flex items-center relative bg-[#311166]/40 backdrop-blur-xl border border-white/20 rounded-[20px] p-8 md:p-12 lg:px-14 lg:py-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] overflow-hidden group transition-all duration-500 hover:-translate-y-2 cursor-default z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none opacity-100" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-full bg-gradient-to-r from-transparent via-[#d8b4fe]/40 to-transparent pointer-events-none opacity-100 mix-blend-screen" />
                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
                        
                        <p className="relative z-10 text-white/95 text-[15px] md:text-[16px] lg:text-[18px] leading-[2] md:leading-[2.2] text-left font-light tracking-wide drop-shadow-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </div>

                    <div className="flex-1 w-full flex items-center relative bg-[#311166]/40 backdrop-blur-xl border border-white/20 rounded-[20px] p-8 md:p-12 lg:px-14 lg:py-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] overflow-hidden group transition-all duration-500 hover:-translate-y-2 cursor-default z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none opacity-100" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-full bg-gradient-to-r from-transparent via-[#d8b4fe]/40 to-transparent pointer-events-none opacity-100 mix-blend-screen" />
                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 to-transparent opacity-60 pointer-events-none" />
                        
                        <p className="relative z-10 text-white/95 text-[15px] md:text-[16px] lg:text-[18px] leading-[2] md:leading-[2.2] text-left font-light tracking-wide drop-shadow-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[5%] right-[2%] z-50 pointer-events-none animate-logo-6s">
                <SpringRight className="w-[155px] h-[159px] object-contain opacity-80 drop-shadow-2xl" />
            </div>
        </section>
    );
};

export default VisionMission;
