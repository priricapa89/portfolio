import { useState, useEffect, useCallback } from "react";
import type { Route } from "./+types/gallery";
import type { LightboxState } from "~/components/gallery/types";
import { EVENTS, EVENT_NAV } from "~/components/gallery/data";
import { GalleryNav } from "~/components/gallery/GalleryNav/GalleryNav";
import { GalleryHero } from "~/components/gallery/GalleryHero/GalleryHero";
import { EventStickyNav } from "~/components/gallery/EventStickyNav/EventStickyNav";
import { CloudinaryTip } from "~/components/gallery/CloudinaryTip/CloudinaryTip";
import { EventSection } from "~/components/gallery/EventSection/EventSection";
import { GalleryBookTeaser } from "~/components/gallery/GalleryBookTeaser/GalleryBookTeaser";
import { GalleryFooter } from "~/components/gallery/GalleryFooter/GalleryFooter";
import { Lightbox } from "~/components/gallery/Lightbox/Lightbox";

const PAGE_URL = "https://pricapa.com/gallery";
const PAGE_TITLE = "Gallery — PRicapa.com";
const PAGE_DESCRIPTION =
  "A photo diary of the conversations, people, and moments shaping the future of AI and quantum.";
const PAGE_IMAGE = "https://pricapa.com/pricapa-og.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { tagName: "link", rel: "canonical", href: PAGE_URL },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "PRICAPA" },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: PAGE_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: PAGE_IMAGE },
  ];
}

export default function Gallery() {
  const [activeEvent, setActiveEvent] = useState("wef2025");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".ev");
    function handleScroll() {
      let cur = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 180) cur = s.id;
      });
      if (cur) setActiveEvent(cur);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const openLightbox = useCallback(
    (state: LightboxState) => setLightbox(state),
    [],
  );

  return (
    <>
      <GalleryNav />
      <GalleryHero />
      <EventStickyNav items={EVENT_NAV} activeEvent={activeEvent} />
      <CloudinaryTip />
      {EVENTS.map((event) => (
        <EventSection key={event.id} event={event} onZoom={openLightbox} />
      ))}
      <GalleryBookTeaser />
      <GalleryFooter />
      <Lightbox state={lightbox} onClose={() => setLightbox(null)} />
    </>
  );
}
