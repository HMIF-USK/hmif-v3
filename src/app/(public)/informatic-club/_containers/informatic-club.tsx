'use client';
import NavLayout from '@/core/layouts/nav.layout';
import InformaticsClub from '@/components/sections/public/home/informatics-club/InformaticsClub';

export default function ContainerInformaticClub() {
  return (
    <NavLayout>
      <main className="w-full bg-background overflow-hidden text-white pt-20">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <InformaticsClub />
        </div>
      </main>
    </NavLayout>
  );
}
