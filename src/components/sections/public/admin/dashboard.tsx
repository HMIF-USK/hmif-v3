import React, { useState } from 'react';

export const DocumentationForm: React.FC = () => {
  const [activityName, setActivityName] = useState('Scrum Web Dev 1');
  const [department, setDepartment] = useState('PPM');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ activityName, department });
  };

  return (
    <div className="w-full max-w-[920px] rounded-[20px] border border-slate-400 bg-zinc-500/20 shadow-[0_10px_13.6px_rgba(0,0,0,0.25)] backdrop-blur-[6.5px] p-8 font-sans text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      
        <div className="relative mt-8"> 
          
          <div className="absolute top-0 left-0 -translate-y-full inline-block h-[30px] w-[195px] z-10">
            <div 
              style={{ 
                clipPath: 'polygon(0% 100%, 0% 0%, 55% 0%, 66% 40%, 66% 100%)' 
              }}
              className="absolute inset-0 bg-[#8F83E7]"
            >
              <div 
                style={{ 
                  clipPath: 'polygon(0% 100%, 0% 0%, 79.5% 0%, 100% 29.5%, 100% 100%)' 
                }}
                className="absolute inset-[1.5px] bg-gradient-to-b from-[#5033B7] from-[30%] to-[#7E73A4] flex items-center pl-4 text-sm font-bold tracking-wide text-white"
              >
                Dokumentasi
              </div>
            </div>
          </div>
          
          <div className="rounded-r-[10px] rounded-b-[10px] rounded-tl-none backdrop-blur-[6.5px] border border-slate-400 bg-zinc-500/10 min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
            
            <div className="w-36 h-36 text-[#C4A6E8]/8 relative mb-4 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M13.5 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V11" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M3.5 16.5L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13.5 15.5L15.7929 13.2071C16.1834 12.8166 16.8166 12.8166 17.2071 13.2071L20.5 16.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M18 10V2M18 2L14.5 5.5M18 2L21.5 5.5" 
                  stroke="currentColor" 
                  strokeWidth="2.3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute bg-[#8B48F6]/28 blur-xl rounded-full pointer-events-none" />
              <div className="relative p-[4px] rounded-full border border-[#8B48F6]/40 bg-[#7300FF47] flex items-center justify-center shadow-[0_0_15px_rgba(112,41,227,0.2)] z-10">
                <button 
                  type="button" 
                  className="flex items-center gap-2 bg-gradient-to-r from-[#7300FF]/40 border border-[#A467FF]/60 text-white text-xs font-bold px-6 py-2 rounded-full transition-transform active:scale-95"
                >
                  Upload Gambar Disini <span className="text-sm">↗</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="relative w-full min-h-[190px]">
          
          <div 
            style={{ 
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 52px), calc(100% - 174px) calc(100% - 52px), calc(100% - 174px) 100%, 0 100%)',
            }}
            className="absolute inset-0 bg-[#8B5CF6]/40 rounded-[18px]"
          >
            <div 
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 51px), calc(100% - 173px) calc(100% - 51px), calc(100% - 173px) 100%, 0 100%)'
              }}
              className="absolute inset-[1px] bg-gradient-to-b from-[#873AE3] from-[50%] to-[#4A207D] rounded-[17px] border border-[#E19FFF] p-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-xs font-medium">Nama Kegiatan</label>
                <input 
                  type="text" 
                  value={activityName}
                  onChange={(e) => setActivityName(e.target.value)}
                  className="w-full bg-transparent border border-white/80 rounded-xl px-4 py-2 text-white/60 focus:outline-none focus:border-white text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full max-w-[340px]">
                <label className="text-white text-xs font-medium">Departemen</label>
                <div className="relative">
                  <select 
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full bg-transparent border border-white/80 rounded-xl px-4 py-2 text-white/60 appearance-none focus:outline-none focus:border-white text-sm cursor-pointer"
                  >
                    <option value="PPM" className="bg-purple-900 text-white">PPM</option>
                    <option value="PKM" className="bg-purple-900 text-white">PKM</option>
                    <option value="ADM" className="bg-purple-900 text-white">ADM</option>
                    <option value="Hual" className="bg-purple-900 text-white">Hual</option>
                    <option value="MBA" className="bg-purple-900 text-white">MBA</option>
                    <option value="Sosmas" className="bg-purple-900 text-white">Sosmas</option>
                    <option value="Kominkraf" className="bg-purple-900 text-white">Kominkraf</option>
                    <option value="Agama" className="bg-purple-900 text-white">Agama</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/60">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-[169px] h-[48px] bg-transparent border-t-4 border-l-4 border-transparent rounded-tl-[16px] rounded-br-[18px]">
            <button 
              type="submit" 
              className="w-full h-full bg-[#E19FFF] hover:bg-[#BCA2FF] text-[#7300FF] font-bold rounded-tl-[12px] rounded-br-[14px] transition-all duration-200 text-lg tracking-wide shadow-lg flex items-center justify-center active:scale-[0.98]"
            >
              Submit
            </button>
          </div>

        </div>

      </form>
    </div>
  );
};