interface EventCard2 {
  ket: string;
}
const EventCardSideDown: React.FC<{ data: EventCard2 }> = ({ data }) => {
  return (
    <main className="w-full h-full">
      <div className="bg-gradient-to-l from-brand to-brand-deep w-full h-full justify-center items-center flex rounded-lg p-4 ">
        <h1 className="text-justify w-full text-lg lg:text-[25px] ">{data.ket}</h1>
      </div>
    </main>
  );
};

export default EventCardSideDown;
