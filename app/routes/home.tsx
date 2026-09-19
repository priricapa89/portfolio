import type { Route } from "./+types/home";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { HeroSection } from "~/components/sections/HeroSection/HeroSection";
import { TickerBanner } from "~/components/sections/TickerBanner/TickerBanner";
import { AboutSection } from "~/components/sections/AboutSection/AboutSection";
import { GalleryTeaser } from "~/components/sections/GalleryTeaser/GalleryTeaser";
// import { BookSection } from "~/components/sections/BookSection/BookSection";
import { TopicsSection } from "~/components/sections/TopicsSection/TopicsSection";
// import { HumanistSISection } from "~/components/sections/HumanistSISection/HumanistSISection";
import { ServicesSection } from "~/components/sections/ServicesSection/ServicesSection";
import { EventsSection } from "~/components/sections/EventsSection/EventsSection";
import { CommunitySection } from "~/components/sections/CommunitySection/CommunitySection";
import { CredentialsSection } from "~/components/sections/CredentialsSection/CredentialsSection";
import { QuoteSection } from "~/components/sections/QuoteSection/QuoteSection";
import { SocialSection } from "~/components/sections/SocialSection/SocialSection";
import { ContactSection } from "~/components/sections/ContactSection/ContactSection";

const PAGE_URL = "https://pricapa.com/";
const PAGE_TITLE = "PRicapa.com — AI & Quantum Strategist";
const PAGE_DESCRIPTION =
  "Pricilla Ricapa — Economist, strategist, and frontier tech translator at the intersection of AI, quantum computing, and capital markets.";
const PAGE_IMAGE = "https://pricapa.com/pricapa-og.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { tagName: "link", rel: "canonical", href: PAGE_URL },

    { property: "og:type", content: "profile" },
    { property: "og:site_name", content: "PRICAPA" },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: PAGE_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Pricilla Ricapa" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: PAGE_IMAGE },

    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://pricapa.com/#pricilla",
        name: "Pricilla Ricapa",
        url: PAGE_URL,
        image: "https://pricapa.com/main-image.JPG",
        jobTitle: "AI & Quantum Strategist",
        description: PAGE_DESCRIPTION,
        email: "mailto:pricilla@pricapa.com",
        homeLocation: {
          "@type": "Place",
          name: "Boston, Massachusetts",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Boston",
            addressRegion: "MA",
            addressCountry: "US",
          },
        },
        knowsLanguage: ["English", "Spanish", "Portuguese"],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Simon Business School",
        },
        sameAs: [
          "https://www.linkedin.com/in/pricilla-ricapa/",
          "https://www.instagram.com/pri_ricapa/",
          "https://www.youtube.com/channel/UCmkZqwSWDm3AweOb1FD_2zQ",
          "https://x.com/ricapapricilla",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Quantum Computing",
          "AI Infrastructure Economics",
          "Capital Markets",
          "Strategic Communication",
        ],
      },
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
      <CommunitySection />
      <GalleryTeaser />
      {/* <BookSection /> */}
      <TopicsSection />
      {/* <HumanistSISection /> */}
      <ServicesSection />
      <EventsSection />
      <CredentialsSection />
      <QuoteSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
