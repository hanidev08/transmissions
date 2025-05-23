import DragImage from "@/sections/DragImage";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <DragImage />
    </div>
  );
};

export default Portfolio;
// import Image from "next/image";
// import { Link } from "next-view-transitions";
// import { data } from "@/data";

// const Portfolio = () => {
//   return (
//     <section className=" py-24">
//       <div className="container">
//         <div className=" flex items-center justify-center w-full h-screen gap-4">
//           {data.map(({ slug, text, url }, index) => (
//             <Link href={slug} key={index} className=" relative">
//               <Image
//                 src={url}
//                 alt={text}
//                 className=" w-[350px] h-[350px] object-cover "
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;
