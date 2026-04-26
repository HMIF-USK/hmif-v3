// import { EventsCardTypeProps } from '@/components/props';
import FotoDummy from '@/components/svg/events/fotoDummy';

interface EventCardItem {
  title: string;
  subTitle: string;
  image: string;
}

const EventCardComponents: React.FC<{ data: EventCardItem }> = ({ data }) => {
  return (
    <main className="w-full h-full">
      <div className="flex justify-center items-center my-2">
        <div className="border-1 border-white rounded-lg w-full p-4 flex flex-col">
          <div>
            <h1>{data.title}</h1>
          </div>

          <div>
            <p>{data.subTitle}</p>
          </div>

          {data.image && (
            <div className="mt-4 flex w-full justify-center">
              <FotoDummy />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default EventCardComponents;
