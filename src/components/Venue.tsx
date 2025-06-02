"use client";

import React, { useRef } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const venueImages = [
  "../images/venue1.jpeg",
  "../images/venue2.jpeg",
  "../images/venue3.jpeg",
  "../images/venue4.jpeg",
  "../images/venue5.jpeg",
  "../images/venue2.jpeg",
];

export default function VenueCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-[#0A091A]">
      <h2 className="text-4xl font-bold text-purple-500 mb-8 font-orbitron text-center">
        In-Person Venue
      </h2>

      {/* Image Scroll Area */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
      >
        {venueImages.map((src, idx) => (
          <div
            key={idx}
            className="w-[calc(100%/3-1rem)] flex-shrink-0 overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            // style={{ boxShadow: "0 8px 20px rgb(187 134 252 / 0.5)" }}
          >
            <img
              src={src}
              alt={`Venue ${idx + 1}`}
              className="w-full h-[280px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="bg-purple-500 hover:bg-purple-700 text-white text-xl p-3 rounded-full transition"
        >
          <RiArrowLeftSLine />
        </button>
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="bg-purple-500 hover:bg-purple-700 text-white text-xl p-3 rounded-full transition"
        >
          <RiArrowRightSLine />
        </button>
      </div>
    </section>
  );
}
