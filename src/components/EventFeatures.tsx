'use client';

import React from 'react';
import {
  RiTrophyLine,
  RiGroupLine,
  RiBroadcastLine,
  RiGamepadLine,
} from 'react-icons/ri';

const features = [
  {
    icon: <RiTrophyLine size={28} />,
    title: 'Elite Tournaments',
    description:
      'Battle in high-stakes competitions featuring Africa’s top esports talent.',
    image: '/images/tournament.jpg',
  },
  {
    icon: <RiGamepadLine size={28} />,
    title: 'Hands-on Game Demos',
    description:
      'Try out exclusive games and upcoming releases in our play zones.',
    image: '/images/network.jpg',
  },
  {
    icon: <RiBroadcastLine size={28} />,
    title: 'Live Broadcast',
    description:
      'Watch professional streamers and casters bring the hype, live on stage and online.',
    image: '/images/live.jpg',
  },
  {
    icon: <RiGroupLine size={28} />,
    title: 'Community & Networking',
    description:
      'Meet developers, gamers, and industry leaders shaping Africa’s gaming future.',
    image: '/images/community.jpg',
  },
];

export default function EventFeatures() {
  return (
    <section className="bg-[#0A091A] text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-satoshi text-white">
          What to Expect at <span className="text-[#705AB8]">Gamr Africa</span>
        </h2>
        <p className="text-gray-300 text-lg mb-12 font-satoshi max-w-2xl mx-auto">
          Dive into a world of epic battles, new experiences, and powerful connections. Here’s what’s waiting for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
           <div
           key={idx}
           className="relative rounded-2xl group h-64 overflow-hidden cursor-pointer"
         >
           <img
             src={feature.image}
             alt={feature.title}
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
         
           {/* Overlay */}
           <div className="absolute inset-0  group-hover:bg-black/70 transition-all duration-500 z-10" />
         
           {/* Hover content */}
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
             <div className="mb-3 text-[#705AB8] group-hover:text-white transition-colors duration-300">
               {feature.icon}
             </div>
             <h3 className="text-xl font-semibold font-satoshi mb-2">
               {feature.title}
             </h3>
             <p className="text-sm text-gray-300 font-satoshi">
               {feature.description}
             </p>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </section>
  );
}
