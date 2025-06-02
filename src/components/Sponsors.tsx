// 'use client';

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import { Autoplay, FreeMode } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import { sponsors } from "../data/sponsors";

// SwiperCore.use([Autoplay, FreeMode]);

// export default function Sponsors() {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-[#0A091A]">

//       {/* Desktop Grid  */}
      
//       <div className="hidden md:grid grid-cols-5 gap-10 items-center justify-items-center">
//         {sponsors.map(({ name, logo }) => (
//           <img
//             key={name}
//             src={logo}
//             alt={`${name} logo`}
//             className="max-h-16 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
//             loading="lazy"
//             draggable={false}
//           />
//         ))}
//       </div> 
     

//       {/* Mobile Continuous Scroll Carousel */}
//       <div className="md:hidden">
//       <Swiper
//         spaceBetween={24}
//         slidesPerView={5}
//         loop={true}
//         freeMode={true}
//         autoplay={{
//           delay: 0,
//           disableOnInteraction: false,
//         }}
//         speed={2000}
//         grabCursor={false}
//         className="py-4"
//         breakpoints={{
//           320: { slidesPerView: 2 },
//           640: { slidesPerView: 3 },
//           768: { slidesPerView: 4 },
//           1024: { slidesPerView: 5 },
//         }}
//       >
//         {Array(2)
//           .fill(sponsors)
//           .flat()
//           .map(({ name, logo }, index) => (
//             <SwiperSlide
//               key={`${name}-${index}`}
//               className="flex justify-center items-center"
//               aria-label={`${name} logo`}
//             >
//               <img
//                 src={logo}
//                 alt={`${name} logo`}
//                 className="h-14 w-auto max-w-full object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
//                 loading="lazy"
//                 draggable={false}
//               />
//             </SwiperSlide>
//           ))}
//       </Swiper>
//       </div>
//     </section>
//   );
// }
