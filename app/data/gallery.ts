export interface GalleryEvent {
  to: string;
  year: string;
  gradient: string;
  icon: string;
  label: string;
  title: string;
  sub: string;
  count: string;
}

export const galleryEvents: GalleryEvent[] = [
  {
    to: "/gallery",
    year: "2026",
    gradient: "linear-gradient(135deg,#6EC6FF,#A855F7,#EC4899)",
    icon: "🤖",
    label: "2026 · Cambridge, MA",
    title: "MIT Imagination in Action",
    sub: "Leading in an Intelligent World",
    count: "Forbes · MIT · Akamai",
  },
  {
    to: "/gallery#wef2025",
    year: "2025",
    gradient: "linear-gradient(135deg,#1A1A2E,#2D1B6E)",
    icon: "🌍",
    label: "Jan 2025 · Davos, Switzerland",
    title: "World Economic Forum — Davos 2025",
    sub: "WSJ House · MIT House · AI House · Saudi House · Imperial College AI Dinner",
    count: "10+ photos · 5 venues",
  },
  {
    to: "/gallery#tedxboston2025",
    year: "2025",
    gradient: "linear-gradient(135deg,#E84393,#FF6B4A)",
    icon: "🎤",
    label: "2025 · Boston, MA",
    title: "TEDxBoston — Planet Action",
    sub: "MIT CSAIL · MIT Museum · New England Aquarium",
    count: "3-day event",
  },
  {
    to: "/gallery#dassault2025",
    year: "2025",
    gradient: "linear-gradient(135deg,#7B4FD4,#6EC6FF)",
    icon: "🔬",
    label: "2025 · Boston, MA",
    title: "Dassault Systèmes Science Week",
    sub: "AI, digital twins, human longevity",
    count: "Bernard Charles · Claire Biot",
  },
  {
    to: "/gallery#tedxmit2024",
    year: "2024",
    gradient: "linear-gradient(135deg,#FF6B4A,#FFB347)",
    icon: "⚛",
    label: "2024 · Cambridge, MA",
    title: "TEDxMIT · MIT Sloan",
    sub: "Quantum vs. supercomputing · Google Willow",
    count: "Daniela Rus",
  },
];
