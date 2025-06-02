import React from 'react'
import Image from "next/image";


export default function Speakers() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white text-black">
    <h2 className="text-3xl font-bold mb-12">Special Guests</h2>
    <div className="grid gap-8 md:grid-cols-4">
      {[1, 2, 3, 4].map((id) => (
        <div key={id} className="rounded-xl shadow p-4">
          <Image
            src={`/hero-${id}.jpeg`}
            alt={`Guest ${id}`}
            width={300}
            height={300}
            className="rounded-full w-40 h-40 mx-auto object-cover"
          />
          <h3 className="mt-4 font-semibold text-lg">Guest Name {id}</h3>
          <p className="text-sm text-gray-600">Influencer / Gamer</p>
        </div>
      ))}
    </div>
  </section>
  )
}
