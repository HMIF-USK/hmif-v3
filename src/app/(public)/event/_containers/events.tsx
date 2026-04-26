'use client';
// import { themeConfig } from '@/configs/theme.config';
import NavLayout from '@/core/layouts/nav.layout';
import { useTheme } from '@/core/providers/theme.provider';
import EventsComponents from '@/components/sections/public/event/Events';

export default function ContainerEvent() {
  const { theme } = useTheme();

  return (
    <NavLayout>
      <main className={`w-screen text-white bg-background`}>
        <div className="flex flex-col items-center justify-center w-full ">
          <EventsComponents />
        </div>
      </main>
    </NavLayout>
  );
}
