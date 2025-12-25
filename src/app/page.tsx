import { NavbarWithDropdowns } from "@/components/sections/NavbarWithDropdowns";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { Differentiators } from "@/components/sections/Differentiators";
import { Audience } from "@/components/sections/Audience";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <NavbarWithDropdowns />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Differentiators />
      <Audience />
      <Security />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
