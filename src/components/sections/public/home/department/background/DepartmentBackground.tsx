import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import gridBG from '../../../../../../../public/images/grid.png';

const DepartmentBackground: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {/* Logo 1 - Left Bottom */}
      <div className="absolute z-[-5] -bottom-[100px] lg:-bottom-[200px] -left-[50px] lg:-left-[100px] pointer-events-none">
        <Image
          src="/logo/logo1.svg"
          alt="HMIF Logo 1"
          width={isMobile ? 200 : 400}
          height={isMobile ? 200 : 400}
          className="blur-[2.5px] opacity-70 rotate-12 transition-all duration-500"
        />
      </div>

      {/* Logo 2 - Center (Moved Lower Down) */}
      <div className="absolute z-[-5] inset-x-0 top-[120px] lg:top-[180px] flex items-start justify-center pointer-events-none">
        <Image
          src="/logo/logo2.svg"
          alt="HMIF Logo 2"
          width={isMobile ? 130 : 240}
          height={isMobile ? 130 : 240}
          className="blur-[2.5px] opacity-60 -rotate-6 transition-all duration-500"
        />
      </div>

      {/* Logo 3 - Right Bottom */}
      <div className="absolute z-[-5] -right-[100px] bottom-24 lg:-right-[130px] lg:bottom-5 pointer-events-none">
        <Image
          src="/logo/logo3.svg"
          alt="HMIF Logo 3"
          width={isMobile ? 200 : 400}
          height={isMobile ? 200 : 400}
          className="blur-[2.5px] opacity-70 -rotate-12 transition-all duration-500"
        />
      </div>

      <div className=" w-full h-[10vh] inset-0 absolute z-[-6] bg-gradient-to-r from-brand-soft via-brand to-brand rounded-b-full opacity-[0.3] blur-2xl"></div>
      <div className=" w-full h-[10vh] left-0 bottom-0 absolute z-[-6] bg-gradient-to-r from-brand-soft via-brand to-brand opacity-[0.3] blur-2xl"></div>
      <div className=" w-full absolute z-[-4] inset-0 overflow-hidden">
        <Image src={gridBG} alt="Grid" className="w-full h-screen lg:h-full object-cover" />
      </div>
    </>
  );
};

export default DepartmentBackground;

