'use client';
import HeroSectionInformaticClub from '@/components/sections/public/home/informatics-club/HeroSection';
import InformaticsClub from '@/components/sections/public/home/informatics-club/InformaticsClub';
const InformaticsClubContainer = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSectionInformaticClub />
      <InformaticsClub />
    </div>
  );
};

export default InformaticsClubContainer;
