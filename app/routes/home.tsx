import type { Route } from "./+types/home";
import { Nav } from "~/components/layout/Nav";
import { Footer } from "~/components/layout/Footer";
import { HeroSection } from "~/components/sections/HeroSection";
import { TickerBanner } from "~/components/sections/TickerBanner";
import { AboutSection } from "~/components/sections/AboutSection";
import { GalleryTeaser } from "~/components/sections/GalleryTeaser";
import { BookSection } from "~/components/sections/BookSection";
import { TopicsSection } from "~/components/sections/TopicsSection";
import { HumanistSISection } from "~/components/sections/HumanistSISection";
import { ServicesSection } from "~/components/sections/ServicesSection";
import { EventsSection } from "~/components/sections/EventsSection";
import { QuoteSection } from "~/components/sections/QuoteSection";
import { SocialSection } from "~/components/sections/SocialSection";
import { ContactSection } from "~/components/sections/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PRicapa.ai — AI & Quantum Strategist" },
    {
      name: "description",
      content:
        "Pricilla Ricapa — Economist, strategist, and frontier tech translator at the intersection of AI, quantum computing, and capital markets.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <TickerBanner />
      <AboutSection />
      <GalleryTeaser />
      <BookSection />
      <TopicsSection />
      <HumanistSISection />
      <ServicesSection />
      <EventsSection />
      <QuoteSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
