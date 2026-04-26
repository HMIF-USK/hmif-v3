import BeyondLogoGray from '@/components/svg/department/beyond';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';
import gridBG from '../../../../../../../public/images/grid.png';
const DepartmentBackground: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className=" absolute z-[-5] -bottom-[100px] lg:-bottom-[200px] -left-[50px] lg:-left-[100px]">
        <BeyondLogoGray size={isMobile ? 200 : 400} />
      </div>
      <div className=" absolute z-[-5] inset-0 -top-[50px]">
        <BeyondLogoGray size={isMobile ? 100 : 200} />
      </div>
      <div className=" absolute z-[-5] -right-[100px] bottom-24 lg:-right-[130px] lg:bottom-5">
        <BeyondLogoGray size={isMobile ? 200 : 400} />
      </div>

      <div className=" w-full h-[10vh] inset-0 absolute z-[-6] bg-gradient-to-r from-brand-soft via-brand to-brand rounded-b-full opacity-[0.3] blur-2xl"></div>
      <div className=" w-full h-[10vh] left-0 bottom-0 absolute z-[-6] bg-gradient-to-r from-brand-soft via-brand to-brand  opacity-[0.3] blur-2xl"></div>
      <div className=" w-full absolute z-[-4] inset-0 overflow-hidden">
        <Image src={gridBG} alt="Grid" className="w-full h-screen lg:h-full object-cover" />
      </div>
    </>
  );
};

export default DepartmentBackground;
