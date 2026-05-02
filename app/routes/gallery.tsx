import { useState, useEffect, useCallback } from "react";
import type { Route } from "./+types/gallery";
import type { LightboxState } from "~/components/gallery/types";
import { EVENTS, EVENT_NAV } from "~/components/gallery/data";
import { GalleryNav } from "~/components/gallery/GalleryNav";
import { GalleryHero } from "~/components/gallery/GalleryHero";
import { EventStickyNav } from "~/components/gallery/EventStickyNav";
import { CloudinaryTip } from "~/components/gallery/CloudinaryTip";
import { EventSection } from "~/components/gallery/EventSection";
import { GalleryBookTeaser } from "~/components/gallery/GalleryBookTeaser";
import { GalleryFooter } from "~/components/gallery/GalleryFooter";
import { Lightbox } from "~/components/gallery/Lightbox";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery — PRicapa.ai" },
    {
      name: "description",
      content:
        "A photo diary of the conversations, people, and moments shaping the future of AI and quantum.",
    },
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
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openLightbox = useCallback((state: LightboxState) => setLightbox(state), []);

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
