'use client';

import React from 'react';
import { Button } from './ui/button';

export default function ExperienceGamr() {
  return (
    <section className="relative bg-[#0A091A] text-white py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#B00610]/20 via-transparent to-[#705AB8]/20 blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-satoshi mb-6 leading-tight">
          Inside <span className="text-[#705AB8]">Gamr Africa</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl font-satoshi max-w-3xl mx-auto mb-10">
          It’s more than a tournament — it’s a celebration of gaming culture, community, and competition. 
          Join the movement that’s elevating esports across Africa through passion, creativity, and raw talent.
        </p>

        {/* Video Embed */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-md mb-12">
         
          <iframe
           
           src="https://www.youtube.com/embed/A0zpF1c3aVA?si=XGRcIuTfJFEhRdVB"
           title="Gamr Africa Esports Event"
           className="w-full h-full"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        {/* Highlight Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-sm md:text-base">
          {[
            {
              title: 'Global Showdown',
              desc: 'Top gamers from over 20 African countries battling it out in electrifying tournaments.'
            },
            {
              title: 'Immersive Zones',
              desc: 'Explore gaming lounges, tech showcases, anime booths, and creator collabs.'
            },
            {
              title: 'Cultural Celebration',
              desc: 'Music, dance, cosplay, food and fashion — experience Africa’s creative pulse.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md hover:shadow-[#B00610]/30 transition duration-300">
              <h3 className="text-white font-semibold mb-2 font-satoshi">{item.title}</h3>
              <p className="text-gray-400 font-satoshi">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
  variant="danger"
  className="mt-12 px-6 py-3 text-sm font-semibold shadow-lg"
  aria-label="Get Your Tickets"
>
  Get Your Tickets
</Button>

       

      </div>
    </section>
  );
}
