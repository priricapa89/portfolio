export interface Event {
  year: string;
  name: string;
  detail: string;
}

export const events: Event[] = [
  { year: "2026", name: "World Economic Forum — Davos 2026", detail: "Invited, unable to attend — continued WEF community engagement remotely" },
  { year: "2026", name: "Harvard Quantum Symposium — Quantum & AI Impact Series", detail: "Panel attendee: Qblox · QuEra · IBM Quantum" },
  { year: "2025", name: "World Economic Forum — Davos 2025", detail: "WSJ House · MIT House · AI House · Imperial College AI Dinner" },
  { year: "2025", name: "TEDxBoston — Planet Action (3 days)", detail: "Participant · MIT CSAIL · MIT Museum · New England Aquarium" },
  { year: "2025", name: "Dassault Systèmes Science Week, Boston", detail: "AI, digital twins, human longevity — Bernard Charles, Claire Biot" },
  { year: "2024", name: "IEEE Global Tech Forum · Microsoft NERD Center", detail: "AI ethics, governance, and human-machine teaming" },
  { year: "2024", name: "TEDxMIT · MIT Sloan School of Management", detail: "Participant · Quantum vs. supercomputing · Google Willow · Daniela Rus" },
  { year: "2023", name: "MIT Generative AI Week · Imagination in Action", detail: "Participant · Sam Altman · Lex Fridman · Vinod Khosla · Stephen Wolfram" },
];
