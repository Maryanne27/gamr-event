'use client';

import React from 'react';
import {
  RiTimeLine,
  RiGamepadLine,
  RiMic2Line,
  RiTeamLine,
  RiCameraLensLine,
} from 'react-icons/ri';

const schedule = [
  {
    time: '10:00 AM',
    title: 'Opening Ceremony',
    description: 'Kick off Gamr Africa 2025 with immersive intros and keynote talks.',
    type: 'ceremony',
    icon: <RiMic2Line size={24} />,
  },
  {
    time: '11:30 AM',
    title: 'FIFA Showdown Finals',
    description: 'Top players battle for the FIFA Championship — live!',
    type: 'tournament',
    icon: <RiGamepadLine size={24} />,
  },
  {
    time: '1:00 PM',
    title: 'Panel: Future of African Gaming',
    description: 'Industry leaders discuss innovation and challenges in esports.',
    type: 'panel',
    icon: <RiTeamLine size={24} />,
  },
  {
    time: '3:00 PM',
    title: 'Streamer Spotlight',
    description: 'Live gameplay + AMA with top African streamers.',
    type: 'stream',
    icon: <RiCameraLensLine size={24} />,
  },
];

const badgeColors = {
  ceremony: 'bg-purple-600',
  tournament: 'bg-red-600',
  panel: 'bg-blue-600',
  stream: 'bg-green-600',
};

export default function EventSchedule() {
  return (
    <section className="relative bg-[#0A091A] text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-satoshi mb-4">
            Event <span className="text-[#705AB8]">Schedule</span>
          </h2>
          <p className="text-gray-300 text-lg font-satoshi max-w-2xl mx-auto">
            Every moment is packed with esports energy, insights, and entertainment.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="relative grid md:grid-cols-2 gap-12">
          {/* Vertical line */}
          <div className="absolute top-0 left-4 md:left-1/2 w-1 h-full bg-white/10 transform -translate-x-1/2"></div>

          {schedule.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
  key={idx}
  className={`relative flex flex-col md:items-${isLeft ? 'end' : 'start'} md:text-${isLeft ? 'right' : 'left'} group`}
>
  <div className="relative w-full md:max-w-md p-6 bg-[#15132B] rounded-xl overflow-hidden group shadow-xl transition-all duration-300">
    {/* Glitchy glowing border effect */}
    <div className="absolute inset-0 z-0 rounded-xl border-2 border-transparent bg-gradient-to-tr from-[#705AB8] via-transparent to-[#FF0080] group-hover:animate-borderGlow [mask-image:_linear-gradient(#fff_0_0)]"></div>
    
    {/* Neon corner accent fragments */}
    <span className="absolute top-0 left-0 w-6 h-1 bg-[#705AB8] rounded-r-full blur-sm animate-pulse"></span>
    <span className="absolute bottom-0 right-0 w-6 h-1 bg-[#FF0080] rounded-l-full blur-sm animate-pulse"></span>

    {/* Corner shadows for depth */}
    <span className="absolute -top-3 -left-3 w-10 h-10 bg-[#705AB8] rounded-full opacity-10 blur-2xl pointer-events-none"></span>
    <span className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#FF0080] rounded-full opacity-10 blur-2xl pointer-events-none"></span>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-3">
        <span className={`p-2 rounded-full ${badgeColors[item.type]} text-white`}>
          {item.icon}
        </span>
        <h3 className="text-xl font-bold font-satoshi">{item.title}</h3>
      </div>
      <p className="text-sm text-white/90 mb-4 font-satoshi">{item.description}</p>
      <div className="flex items-center gap-2 text-white/60 text-sm">
        <RiTimeLine size={16} />
        {item.time}
      </div>
    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
