import EventCardSide from '@/core/components/event-card-side';
import EventCardComponents from './event-card-component';
import { EventCardTypesProps } from '@/components/props';
import EventCardSideDown from './event-card-sidedown';
import RowComponent from '@/components/svg/events/row';
import { useIsMobile } from '@/hooks/use-mobile';

const EventCardContents: React.FC<EventCardTypesProps> = ({ data }) => {
  const isMobile = useIsMobile();
  return (
    <main className="w-full min-h-screen  flex flex-col gap-12 px-4 py-8 md:px-8 md:py-12 relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-40 h-full z-0 hidden md:block">
        <RowComponent />
      </div>

      {data.Card.map((item, index) => (
        <div
          key={index}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start z-10 max-w-7xl mx-auto"
        >
          {!isMobile && (
            <div className="col-span-1 md:col-span-2 flex justify-center -mt-4 mb-4 md:mb-6 z-10 absolute top-35 left-1/2 -translate-x-1/2">
              <div className="border bg-white/20 backdrop-blur-md  text-white px-4 py-2 rounded-lg w-32 md:w-30 shadow-md">
                <h1 className="text-center font-bold text-sm md:text-base">{item.tanggal}</h1>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 mt-20 md:mt-24">
            <EventCardComponents data={item.card1} />
          </div>

          <div className="grid grid-cols-1 grid-rows-[0.6fr_2fr] gap-4  mt-20 md:mt-24">
            <div className="p-2">
              <EventCardSide data={item.card2} />
            </div>
            <div className="p-2">
              <EventCardSideDown data={item.card3} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default EventCardContents;
