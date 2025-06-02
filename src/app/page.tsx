import About from "@/components/About";
import EventFeatures from "@/components/EventFeatures";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";
import SectionDivider from "@/components/SectionDivider";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import Venue from "@/components/Venue";
import RootLayout from "./layout";

export default function Home() {
  return (
  <>
   <Hero />
   <Sponsors />
   <About />
   <EventFeatures />
   <Schedule />
   {/* <Speakers /> */}
   {/* <Register /> */}
   <Faq />
   {/* <Venue /> */}

  </>
  );
}

