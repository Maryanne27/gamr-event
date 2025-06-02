'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: "Is the event free?",
    a: "No, tickets will be available for purchase online and at the venue.",
  },
  {
    q: "Can I participate in multiple tournaments?",
    a: "Yes, you can participate in multiple tournaments as long as their schedules don’t overlap.",
  },
  {
    q: "Will there be food and drinks?",
    a: "Absolutely! There will be a variety of food vendors and refreshments available onsite.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#0A091A] text-white py-20 px-6 md:px-20 font-satoshi max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row bg-[#161523] rounded-3xl shadow-lg overflow-hidden">
        {/* Left Tabs */}
        <nav
          aria-label="FAQ Questions"
          className="flex md:flex-col border-b md:border-b-0 md:border-r border-[#2A283A]"
        >
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 md:flex-none md:w-64 px-6 py-5 text-left text-lg font-semibold transition-colors duration-300
                ${
                  activeIndex === i
                    ? 'bg-[#B00610] bg-opacity-20 border-l-4 border-[#B00610] text-[#F97316]'
                    : 'hover:bg-white/10 text-gray-300'
                }
              `}
              aria-selected={activeIndex === i}
              role="tab"
              id={`faq-tab-${i}`}
              aria-controls={`faq-panel-${i}`}
              tabIndex={activeIndex === i ? 0 : -1}
            >
              {faq.q}
            </button>
          ))}
        </nav>

        {/* Right Content */}
        <article
          className="flex-1 p-8 text-gray-300 text-lg leading-relaxed transition-opacity duration-400"
          role="tabpanel"
          id={`faq-panel-${activeIndex}`}
          aria-labelledby={`faq-tab-${activeIndex}`}
          key={activeIndex} // Force re-render for animation
        >
          <p className="animate-fadeIn">{faqs[activeIndex].a}</p>
        </article>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}
