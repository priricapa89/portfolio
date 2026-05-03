import type { Route } from "./+types/home";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { HeroSection } from "~/components/sections/HeroSection/HeroSection";
import { TickerBanner } from "~/components/sections/TickerBanner/TickerBanner";
import { AboutSection } from "~/components/sections/AboutSection/AboutSection";
import { GalleryTeaser } from "~/components/sections/GalleryTeaser/GalleryTeaser";
import { BookSection } from "~/components/sections/BookSection/BookSection";
import { TopicsSection } from "~/components/sections/TopicsSection/TopicsSection";
import { HumanistSISection } from "~/components/sections/HumanistSISection/HumanistSISection";
import { ServicesSection } from "~/components/sections/ServicesSection/ServicesSection";
import { EventsSection } from "~/components/sections/EventsSection/EventsSection";
import { QuoteSection } from "~/components/sections/QuoteSection/QuoteSection";
import { SocialSection } from "~/components/sections/SocialSection/SocialSection";
import { ContactSection } from "~/components/sections/ContactSection/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PRicapa.com — AI & Quantum Strategist" },
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
