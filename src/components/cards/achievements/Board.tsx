// // components/Board.tsx
// import { BoardTypesProps } from '@/components/props/index';
// import { CircleArrowOutUpRight } from 'lucide-react';
// import Link from 'next/link';

// const Board: React.FC<BoardTypesProps> = ({ data }) => {
//   return (
//     <div
//       className={
//         'bg-gradient-to-r from-white/30 to-surface-strong/80 flex justify-center p-[1rem] rounded-md flex-col w-[17vw]'
//       }
//     >
//       <h1 className="font-semibold">{data.title}</h1>
//       <p className="font-light">{data.date}</p>
//       <div className="flex justify-center items-center m-1">
//         {data?.image && (
//           <svg
//             width="282"
//             height="178"
//             viewBox="0 0 282 178"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M276.386 0H5.61429C2.5136 0 0 2.51361 0 5.61429V116.147C0 117.625 0.582431 119.043 1.62099 120.094L57.1988 176.332C58.2535 177.399 59.6916 178 61.1921 178H276.386C279.486 178 282 175.486 282 172.386V5.61429C282 2.5136 279.486 0 276.386 0Z"
//               fill="#D0C5F2"
//             />
//           </svg>
//         )}
//       </div>
//       <div className="flex justify-end">
//         <CircleArrowOutUpRight />
//       </div>
//     </div>
//   );
// };

// export default Board;
