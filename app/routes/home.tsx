import type { Route } from "./+types/home";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { HeroSection } from "~/components/sections/HeroSection/HeroSection";
import { TickerBanner } from "~/components/sections/TickerBanner/TickerBanner";
import { RoomSection } from "~/components/sections/RoomSection/RoomSection";
// import { BookSection } from "~/components/sections/BookSection/BookSection";
import { TopicsSection } from "~/components/sections/TopicsSection/TopicsSection";
// import { HumanistSISection } from "~/components/sections/HumanistSISection/HumanistSISection";
import { ThreadSection } from "~/components/sections/ThreadSection/ThreadSection";
import { ServicesSection } from "~/components/sections/ServicesSection/ServicesSection";
import { PricingSection } from "~/components/sections/PricingSection/PricingSection";
import { CommunitySection } from "~/components/sections/CommunitySection/CommunitySection";
import { CredentialsSection } from "~/components/sections/CredentialsSection/CredentialsSection";
import { QuoteSection } from "~/components/sections/QuoteSection/QuoteSection";
import { SocialSection } from "~/components/sections/SocialSection/SocialSection";
import { LogoMarquee, type MarqueeItem } from "~/components/ui/LogoMarquee/LogoMarquee";
import { useLang } from "~/i18n/LanguageContext";
import { ContactSection } from "~/components/sections/ContactSection/ContactSection";

// Companies I worked at. Add a line and drop the file in /public/logos.
const EMPLOYERS: MarqueeItem[] = [
  { name: "Lumentum", src: "/logos/lumentum.png" },
  { name: "Volvo", src: "/logos/volvo.png" },
  { name: "Belcorp", src: "/logos/belcorp.png" },
  { name: "Repsol", src: "/logos/repsol.png" },
  { name: "JRC", src: "/logos/jrc.png" },
  { name: "BanBif", src: "/logos/banbif.png" },
];

// Not employers: events and communities I take part in.
const ROOMS: MarqueeItem[] = [
  { name: "World Economic Forum", src: "/logos/wef.png" },
  { name: "MIT", src: "/logos/mit.png", bg: "#f2f4f8" },
  { name: "Harvard" },
  { name: "Massachusetts AI Coalition", src: "/logos/mass-ai-coalition.png" },
  { name: "Claude Community Boston" },
];

const PAGE_URL = "https://pricapa.com/";
const PAGE_TITLE = "Pricilla Ricapa | Economics of AI Infrastructure";
const PAGE_DESCRIPTION =
  "Pricilla Ricapa is an economist and AI strategist working on the economics of AI infrastructure: data centers, photonics, and compute in orbit. Formerly at Lumentum and Volvo Group.";
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
        jobTitle: "Economist and AI Infrastructure Strategist",
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
          "AI Infrastructure Economics",
          "Photonics",
          "Orbital Compute",
          "Quantum Computing",
          "Capital Markets",
          "Strategic Communication",
        ],
      },
    },
  ];
}

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Nav />
      <HeroSection />
      <TickerBanner />
      <ThreadSection />
      <LogoMarquee label={t("Where I've worked", "Dónde he trabajado")} items={EMPLOYERS} duration={32} />
      <ServicesSection />
      <PricingSection />
      <RoomSection />
      <TopicsSection />
      {/* <BookSection /> */}
      {/* <HumanistSISection /> */}
      <CredentialsSection />
      <CommunitySection />
      <QuoteSection />
      <SocialSection />
      <ContactSection />
      <LogoMarquee
        label={t("In the room with", "En la sala con")}
        note={t(
          "Events and communities I take part in as a participant or volunteer. Not employers or sponsors.",
          "Eventos y comunidades donde participo o soy voluntaria. No son empleadores ni patrocinadores.",
        )}
        items={ROOMS}
        duration={36}
      />
      <Footer />
    </>
  );
}
