import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { StackGrid } from "@/components/sections/stack-grid";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { CTA } from "@/components/sections/cta";
import { Marquee } from "@/components/ui/marquee";

const marqueeItems = [
  "Expo",
  "React Native",
  "Laravel",
  "PostgreSQL",
  "Reverb WS",
  "Firebase",
  "ESP32",
  "Docker",
  "AI Automation",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <FeaturedWork />
      <StackGrid />
      <AboutTeaser />
      <CTA />
    </>
  );
}
