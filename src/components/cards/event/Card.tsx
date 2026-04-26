// import { MoveRight } from 'lucide-react';
// import { CardEventTypeProps } from '@/components/props';

import { IArticle } from '@/types/article.types';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
interface ICardEvent {
  data: IArticle;
  isLastItem: boolean;
}

const CardEvent: React.FC<ICardEvent> = ({ data, isLastItem }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-5 lg:gap-0 lg:flex-row lg:justify-between items-center lg:h-[600px] relative z-0 group">
        <div
          className={`${!isLastItem ? 'h-[127%]' : 'h-full'}  w-1 border-r-[3px] border-purple-500 border-dashed absolute z-[-2] top-0 left-[50%] hidden lg:block -translate-x-[50%]`}
        ></div>
        {/* tanggal */}
        <div className=" lg:absolute lg:z-[2] w-full lg:w-[156px] p-4 rounded-[12px] bg-brand-muted/50 backdrop-blur-[5px] top-7 lg:left-[50%] lg:translate-x-[-50%] ">
          <h1 className="} font-semibold text-lg text-center">{data.tanggal}</h1>
        </div>
        {/* tanggal */}

        <div className="w-full lg:w-[48%] h-[350px] lg:h-full rounded-2xl bg-gray-500/60 p-5 lg:p-10 relative z-0">
          <div className=" w-full h-full rounded-xl overflow-hidden relative ">
            <Image
              src={data.imgUrl}
              alt={data.title}
              fill
              className=" w-full h-full object-cover group-hover:scale-[1.1] duration-300"
            />
            <div className="absolute z-[3] w-full h-full bg-gradient-to-t from-brand-deep via-brand-deep/20 p-5 lg:p-10 to-transparent flex items-end justify-center lg:group-hover:opacity-[1] opacity-[1] lg:opacity-0 duration-300">
              <Link href={`/event/${data.slug}`} className=" flex items-center gap-3">
                <span className=" text-xl ">Selengkapnya</span>
                <ArrowRight size={20} color="white" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" lg:w-[48%] lg:h-full rounded-2xl flex flex-col justify-between gap-5 lg:gap-0">
          <div className="w-full h-[30%] overflow-hidden bg-gradient-to-r from-brand-deep via-brand to-brand rounded-2xl flex flex-col justify-center p-5 lg:px-14 gap-0 lg:gap-2 relative z-0">
            <div className=" absolute z-[-1] right-0 top-0 w-[50%]">
              <svg
                className="w-full h-auto"
                viewBox="0 0 449 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_291_226"
                  style={{ maskType: 'luminance' }}
                  maskUnits="userSpaceOnUse"
                  x="54"
                  y="-112"
                  width="426"
                  height="427"
                >
                  <path
                    d="M268.138 304.667L90.9196 202.458C55.9748 182.305 43.9845 137.641 64.1384 102.695L166.343 -74.5199C186.497 -109.465 231.162 -121.455 266.106 -101.301L443.321 0.903687C478.266 21.0576 490.256 65.7226 470.102 100.666L367.899 277.886C347.746 312.829 303.081 324.82 268.138 304.667Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_291_226)">
                  <path
                    d="M451.564 6.47422C449.003 4.50125 446.343 2.62193 443.463 0.96093L380.977 -35.0767C294.427 34.8252 101.495 96.2818 58.5239 109.378C58.6381 109.132 51.6323 139.052 51.6434 138.547C107.356 126.494 378.653 65.1471 451.564 6.47422ZM87.4913 60.1952C139.435 44.5345 253.852 3.67604 325.356 -69.3919L265.2 -103.022C229.61 -124.334 184.012 -110.101 163.881 -73.8287L87.4913 60.1952ZM265.691 305.51C300.634 325.662 346.865 317.353 369.652 278.365L405.67 215.912C310.72 189.841 191.249 216.337 137.734 231.695L265.691 305.51ZM56.4732 172.928L84.1655 203.177C139.491 190.255 309.282 153.651 436.102 159.926L470.245 100.723C472.878 96.1327 475.006 91.2708 476.594 86.2224C386.949 68.8208 113.788 154.733 62.0905 171.419"
                    fill="#A9A3B1"
                    fill-opacity="0.15"
                  />
                </g>
              </svg>
            </div>
            <h1 className=" w-full font-extrabold text-3xl tracking-[3px] lg:text-5xl lg:tracking-[6px]">
              {data.singkatanTitle}
            </h1>
            <h1 className=" w-full text-lg  lg:text-2xl line-clamp-1">{data.title}</h1>
          </div>
          <div className="w-full lg:h-[66%] bg-gradient-to-r from-brand-deep via-brand to-brand rounded-2xl p-5 lg:p-12 overflow-hidden">
            <p className=" w-full text-base lg:text-2xl line-clamp-[10] lg:line-clamp-[9]">
              {data.deskripsi.map((item: string) => item)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEvent;
