import type { GalleryFullEvent, EventNavItem } from "./types";

export const EVENTS: GalleryFullEvent[] = [
  {
    id: "wef2025",
    date: "January 2025 · Davos, Switzerland",
    title: "World Economic Forum — Davos 2025",
    desc: "Five days at the crossroads of global capital, technology, and policy. I moved between the houses — each with its own distinct energy: the WSJ's calculated optimism, MIT's intellectual density, the AI House's feverish excitement, Saudi Arabia's trillion-dollar conviction, and CNBC's media pulse. Here's what I saw, and who I met.",
    venues: [
      {
        id: "wef-wsj",
        badge: "📰 WSJ House",
        badgeStyle: { color: "#E84393", borderColor: "rgba(232,67,147,0.3)", background: "rgba(232,67,147,0.07)" },
        sub: "Wall Street Journal · Promenade",
        photos: [
          {
            imgSrc: "/davos.jpg", imgAlt: "WSJ House Davos 2025",
            label: "WSJ House · Photo 1",
            cap: "✏️ Add caption — who's here and what was this moment",
            ctx: "Add 1–3 sentences about the conversation: what was discussed, what surprised you, why it matters.",
            tags: [{ label: "🔗 Person Name · Title / Org" }],
          },
          {
            label: "WSJ House · Photo 2",
            cap: "✏️ Add caption",
            ctx: "Add context about this moment.",
          },
          {
            label: "WSJ House · Photo 3",
            cap: "✏️ Add caption",
            ctx: "Add context.",
          },
        ],
      },
      {
        id: "wef-mit",
        badge: "🎓 MIT House",
        badgeStyle: { color: "#7B4FD4", borderColor: "rgba(123,79,212,0.3)", background: "rgba(123,79,212,0.07)" },
        sub: "Massachusetts Institute of Technology · Davos",
        photos: [
          {
            label: "With Prof. Erik Brynjolfsson · MIT House (featured)",
            cap: "With Prof. Erik Brynjolfsson — MIT House, Davos 2025",
            ctx: `Prof. Brynjolfsson leads the Stanford Digital Economy Lab and is one of the most rigorous economists studying how AI reshapes labor markets. We discussed his "Turing Trap" thesis — the danger of building AI that replaces humans rather than augments them. His argument: the real opportunity is in human-AI collaboration, not substitution. A framing I keep coming back to when I think about what the AI era actually means for people.`,
            tags: [{ label: "🔗 Prof. Erik Brynjolfsson · Stanford Digital Economy Lab", href: "https://digitaleconomy.stanford.edu/people/erik-brynjolfsson/" }],
            featured: true,
            wide: true,
          },
          { label: "MIT House · Photo 2", cap: "✏️ Add caption", ctx: "Add context about this moment at MIT House." },
          { label: "MIT House · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "MIT House · Photo 4", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "MIT House · Photo 5", cap: "✏️ Add caption", ctx: "Add context." },
        ],
      },
      {
        id: "wef-aihouse",
        badge: "🤖 AI House",
        badgeStyle: { color: "#6EC6FF", borderColor: "rgba(110,198,255,0.35)", background: "rgba(110,198,255,0.08)" },
        sub: "Global AI & Tech Leaders · Davos",
        photos: [
          { label: "AI House · Photo 1", cap: "✏️ Add caption", ctx: "Add context about who you met at AI House and what the energy was like." },
          { label: "AI House · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "AI House · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "AI House · Photo 4", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "AI House · Photo 5", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "AI House · Photo 6", cap: "✏️ Add caption", ctx: "Add context." },
        ],
      },
      {
        id: "wef-saudi",
        badge: "🌙 Saudi House",
        badgeStyle: { color: "#FFB347", borderColor: "rgba(255,179,71,0.35)", background: "rgba(255,179,71,0.08)" },
        sub: "Kingdom of Saudi Arabia · Davos",
        photos: [
          { label: "Saudi House · Photo 1", cap: "✏️ Add caption", ctx: "Saudi Arabia announced a $600B AI commitment at Davos. Add context about the energy here and who you connected with." },
          { label: "Saudi House · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "Saudi House · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
        ],
      },
      {
        id: "wef-cnbc",
        badge: "📺 CNBC House",
        badgeStyle: { color: "#FF6B4A", borderColor: "rgba(255,107,74,0.3)", background: "rgba(255,107,74,0.07)" },
        sub: "CNBC Media Center · Promenade",
        photos: [
          { label: "CNBC House · Photo 1", cap: "✏️ Add caption", ctx: "Add context about CNBC House — who you ran into, what was being filmed or recorded, the conversations happening around you." },
          { label: "CNBC House · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "CNBC House · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
        ],
      },
      {
        id: "wef-imperial",
        badge: "🎖 Imperial College AI Dinner",
        badgeStyle: { color: "#8AB4C2", borderColor: "rgba(138,180,194,0.35)", background: "rgba(138,180,194,0.08)" },
        photos: [
          { label: "AI Dinner · Photo 1", cap: "✏️ Add caption", ctx: "Add context about the Imperial College AI Dinner — who was invited, the conversation threads, what surprised you." },
          { label: "AI Dinner · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
          { label: "AI Dinner · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
        ],
      },
    ],
  },
  {
    id: "tedxboston2025",
    date: "2025 · Boston, MA",
    title: "TEDxBoston — Planet Action",
    desc: "Three days spanning MIT CSAIL, the MIT Museum, and the New England Aquarium. Planet Action brought together scientists, technologists, and policymakers working on climate, biodiversity, and the role of AI in Earth systems. I attended as a participant — here's what I walked away with.",
    photos: [
      { label: "TEDxBoston 2025 · Featured photo", icon: "🎤", cap: "✏️ Add your featured TEDxBoston caption", ctx: "Add the story behind this moment — who you were with, what had just been said, what you were thinking.", featured: true, wide: true },
      { label: "TEDxBoston · MIT CSAIL day", cap: "✏️ Add caption — MIT CSAIL", ctx: "Add context about the MIT CSAIL day." },
      { label: "TEDxBoston · MIT Museum", cap: "✏️ Add caption — MIT Museum", ctx: "Add context about the MIT Museum day." },
      { label: "TEDxBoston · New England Aquarium", cap: "✏️ Add caption — Aquarium day", ctx: "Add context about day three." },
      { label: "TEDxBoston · Photo 5", cap: "✏️ Add caption", ctx: "Add context." },
    ],
  },
  {
    id: "dassault2025",
    date: "2025 · Boston, MA",
    title: "Dassault Systèmes Science Week",
    desc: "A week at the intersection of AI, digital twins, and human longevity — led by CEO Bernard Charles and Chief Health Officer Claire Biot. Central thesis: virtual human models combined with AI could fundamentally transform medicine. I was there for the conversations on the business, capital, and ethical implications of that claim.",
    photos: [
      { label: "Dassault Science Week · Featured", icon: "🔬", cap: "✏️ Add featured caption", ctx: "Add context about the moment, who's here, and what was being discussed.", tags: [{ label: "🔗 Bernard Charles · CEO, Dassault Systèmes", href: "https://www.3ds.com/about-3ds/leadership/bernard-charles" }], featured: true, wide: true },
      { label: "Dassault · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "Dassault · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "Dassault · Photo 4", cap: "✏️ Add caption", ctx: "Add context." },
    ],
  },
  {
    id: "harvardq2026",
    date: "2026 · Cambridge, MA",
    title: "Harvard Quantum Symposium — Quantum & AI Impact Series",
    desc: "A day inside Harvard's quantum research conversation — panels featuring Qblox, QuEra Computing, and IBM Quantum. The central question: are we at the quantum ENIAC moment? The researchers in the room were cautious. The investors were not. That tension is the most interesting signal to track right now.",
    photos: [
      { label: "Harvard Quantum · Photo 1", icon: "⚛", cap: "✏️ Add caption", ctx: "Add context — who was on the panel, what the key debate was, what you found most surprising about the discussion." },
      { label: "Harvard Quantum · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "Harvard Quantum · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
    ],
  },
  {
    id: "tedxmit2024",
    date: "2024 · Cambridge, MA",
    title: "TEDxMIT · MIT Sloan School of Management",
    desc: "The event that coincided with Google's announcement of the Willow quantum chip. Prof. Daniela Rus, Director of MIT CSAIL, spoke on AI autonomy and human collaboration. Being in that room — with people who could actually decode what Willow meant — was exactly the kind of signal I try to translate into language everyone else can act on.",
    photos: [
      { label: "TEDxMIT 2024 · Photo 1", cap: "✏️ Add caption", ctx: "Add context about what you experienced at TEDxMIT — the atmosphere, specific talks, people you connected with.", tags: [{ label: "🔗 Prof. Daniela Rus · Director, MIT CSAIL", href: "https://danielarus.csail.mit.edu/" }] },
      { label: "TEDxMIT · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "TEDxMIT · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
    ],
  },
  {
    id: "mitai2023",
    date: "2023 · Cambridge, MA",
    title: "MIT Generative AI Week — Imagination in Action",
    desc: "The week that crystallized the shift. Sam Altman, Lex Fridman, Vinod Khosla, Stephen Wolfram, Joscha Bach — in the same rooms, on the same week, debating the same question: what happens when intelligence scales? I left with more questions than answers, which felt exactly right.",
    photos: [
      { label: "MIT AI Week 2023 · Featured photo", icon: "🤖", cap: "✏️ Add featured caption", ctx: "Add context about who you were with and what had just been said or decided.", featured: true, wide: true },
      { label: "MIT AI Week · Photo 2", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "MIT AI Week · Photo 3", cap: "✏️ Add caption", ctx: "Add context." },
      { label: "MIT AI Week · Photo 4", cap: "✏️ Add caption", ctx: "Add context." },
    ],
  },
];

export const EVENT_NAV: EventNavItem[] = [
  { id: "wef2025", label: "WEF Davos 2025", color: "#C9B8F0" },
  { id: "tedxboston2025", label: "TEDxBoston 2025", color: "#E84393" },
  { id: "dassault2025", label: "Dassault 2025", color: "#7B4FD4" },
  { id: "harvardq2026", label: "Harvard Quantum 2026", color: "#6EC6FF" },
  { id: "tedxmit2024", label: "TEDxMIT 2024", color: "#FF6B4A" },
  { id: "mitai2023", label: "MIT AI Week 2023", color: "#A855F7" },
];
