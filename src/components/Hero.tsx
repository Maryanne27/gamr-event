import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-satoshi">
      <Image
        src="/herobg.svg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl tracking-tight drop-shadow-md">
          Africa’s Biggest Esports Event
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Join top gamers across the continent in a celebration of competition,
          community, and culture.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            variant="gamrPrimary"
            className="px-6 py-3 text-sm md:text-base font-semibold shadow-md"
          >
            Register Now
          </Button>
          <Button
            variant="whiteBtn"
            className="px-6 py-3 text-sm md:text-base font-semibold shadow-md"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <Image
          src="/images/section-divider.svg"
          alt="Section divider"
          width={1440}
          height={120}
          className="w-full h-auto block"
          priority
        />
      </div>
    </section>
  );
}
