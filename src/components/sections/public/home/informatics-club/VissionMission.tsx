import React from 'react';
import SpringLeft from '@/components/svg/informatics-club/SpringLeft';
import SpringRight from '@/components/svg/informatics-club/SpringRight';

const VisionMission = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#1F0845] py-24 overflow-hidden flex flex-col items-center justify-center font-sans">
            <div className="absolute top-[5%] -left-[23px] z-0 pointer-events-none">
                <SpringLeft className="w-[466px] h-[456px] object-contain opacity-80 mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-[1360px] px-6 md:px-10 mx-auto flex flex-col items-center">
                <div className="flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md">
                    <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                    >
                        <path d="M10 2.5C10 7.5 15 12.5 20 12.5C15 12.5 10 17.5 10 22.5C10 17.5 5 12.5 0 12.5C5 12.5 10 7.5 10 2.5Z" fill="#c4b5fd"/>
                        <path d="M19 4C19 6.2 21.2 8 23.5 8C21.2 8 19 9.8 19 12C19 9.8 16.8 8 14.5 8C16.8 8 19 6.2 19 4Z" fill="#a78bfa"/>
                    </svg>
                    <span className="text-[#E2E8F0] font-bold text-xs md:text-sm tracking-[0.25em] uppercase ml-1">
                        Our Foundation
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-white mb-16 text-center tracking-[0.05em] uppercase drop-shadow-2xl">
                    VISION & MISSION
                </h2>

                <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full justify-center relative">
                    <div className="w-full md:w-[640px] min-h-[366px] flex items-center relative bg-gradient-to-br from-[#7e22ce]/70 to-[#4c1d95]/80 backdrop-blur-3xl border border-white/20 rounded-[24px] p-10 md:px-16 md:py-12 shadow-[0_10px_40px_rgba(31,8,69,0.8)] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-[24px]" />
                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/50 via-white/10 to-transparent rounded-l-[24px]" />
                        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#a855f7] opacity-45 blur-[60px] rounded-full pointer-events-none" />
                        
                        <p className="relative z-10 text-[#f8f9fa] text-[16px] md:text-[19px] leading-[2.2] text-left font-normal tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </div>

                    <div className="w-full md:w-[640px] min-h-[366px] flex items-center relative bg-gradient-to-br from-[#7e22ce]/70 to-[#4c1d95]/80 backdrop-blur-3xl border border-white/20 rounded-[24px] p-10 md:px-16 md:py-12 shadow-[0_10px_40px_rgba(31,8,69,0.8)] overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-t-[24px]" />
                        <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-white/50 via-white/10 to-transparent rounded-l-[24px]" />
                        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#a855f7] opacity-45 blur-[60px] rounded-full pointer-events-none" />
                        
                        <p className="relative z-10 text-[#f8f9fa] text-[16px] md:text-[19px] leading-[2.2] text-left font-normal tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-[5%] right-[2%] z-50 pointer-events-none">
                <SpringRight className="w-[155px] h-[159px] object-contain opacity-100 drop-shadow-2xl" />
            </div>
        </section>
    );
};

export default VisionMission;
