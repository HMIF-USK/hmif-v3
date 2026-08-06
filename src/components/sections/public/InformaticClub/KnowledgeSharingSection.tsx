import { ArrowUpRight, ImagePlus } from "lucide-react";

const items = [
  {
    title: "KOMINKRAF X PPM",
    image: "",
  },
  {
    title: "KOMINKRAF X PKM",
    image: "",
  },
  {
    title: "INFEST CREW",
    image: "",
  },
  {
    title: "KOMINKRAF X MBA",
    image: "",
  },
];

export default function KnowledgeSharingSection() {
  return (
    <section className="w-full py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs rounded-full border border-white/20 text-white">
            Memoria
          </span>
        </div>

        <h2 className="text-white text-4xl font-bold leading-tight mb-8">
          Sharing Knowledge,
          <br />
          Building Experiences
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#ECECEC] rounded-lg overflow-hidden h-[260px] relative"
            >
              <div className="h-[210px] flex items-center justify-center text-gray-500">
                <ImagePlus size={60} />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-[#ECECEC] px-4 py-3 flex items-center justify-between">
                <p className="text-xs text-black font-medium">
                  {item.title}
                </p>

                <button className="w-6 h-6 rounded bg-black text-white flex items-center justify-center">
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}