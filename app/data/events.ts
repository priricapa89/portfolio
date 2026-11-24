export type OrgId = "wef" | "mit" | "harvard" | "massai" | "claude" | "tedx" | "aiweek";

export interface Event {
  year: string;
  /** Month and year, or a season when the post gives no exact date. */
  when: string;
  name: string;
  detail: string;
  /** Her part in it. Leave out when she attended. */
  role?: [en: string, es: string];
  /** Her post about it. */
  href?: string;
  /** Tiles in the "In the room with" row that list this event. */
  orgs?: OrgId[];
}

const HOST: [string, string] = ["Host", "Anfitriona"];
const SPEAKER: [string, string] = ["Speaker", "Ponente"];
const PANELIST: [string, string] = ["Panelist", "Panelista"];

// Newest first. Sourced from her own posts. Add a line to add an event.
export const events: Event[] = [
  { year: "2026", when: "Oct 2026", name: "TEDxBoston: Unlocking Longevity, at WHOOP", detail: "AI and early detection in preventive medicine and aging", href: "https://www.instagram.com/p/DeSipZVGv30/", orgs: ["tedx"] },
  { year: "2026", when: "Oct 2026", name: "MIT FutureFest · Imagination in Action", detail: "Kresge Auditorium · Starcloud on compute in orbit, Cerebras, Rodney Brooks", href: "https://www.instagram.com/p/DeH6YQalIJE/", orgs: ["mit"] },
  { year: "2026", when: "Oct 2026", name: "GAI World · Hynes Convention Center", detail: "Enterprise AI transformation · invited by the GAI Insights team", href: "https://www.instagram.com/p/Dd9rqS7lBbT/" },
  { year: "2026", when: "Sep 2026", name: "NuVert: Amplifying Human Potential Summit · Boston AI Week", detail: "Panel “Responsible Innovation at Scale” · Microsoft New England", role: PANELIST, href: "https://www.instagram.com/p/DdzaAKeFINZ/", orgs: ["aiweek"] },
  { year: "2026", when: "Sep 2026", name: "Wasabi community night at Fenway · Boston AI Week", detail: "The Boston tech community at the ballpark", href: "https://www.instagram.com/p/Dd4cZSKlA2J/", orgs: ["aiweek"] },
  { year: "2026", when: "Sep 2026", name: "Claude Community Boston Build Night · Boston AI Week kickoff", detail: "Harvard Business School · 650+ registrations for 96 seats, nine demos", role: HOST, href: "https://www.instagram.com/p/DdrtC8flJvK/", orgs: ["claude", "harvard", "aiweek"] },
  { year: "2026", when: "Sep 2026", name: "NEMBC 2026 · Newport, Rhode Island", detail: "AI for mortgage leaders: agentic orchestration, context engineering, guardrails", role: SPEAKER, href: "https://www.instagram.com/p/DdXc0pqjToD/" },
  { year: "2026", when: "Sep 2026", name: "Claude Community Boston: first workshop", detail: "Harvard Coop, Cambridge · 200+ registered, 80+ came to build", role: HOST, href: "https://www.instagram.com/p/DdCg3NDFB7n/", orgs: ["claude"] },
  { year: "2026", when: "Aug 2026", name: "Massachusetts AI Coalition: 100th event celebration", detail: "One of the coalition’s 100 Voices", href: "https://www.instagram.com/p/DclbJD_Ea15/", orgs: ["massai"] },
  { year: "2026", when: "Aug 2026", name: "Inside Suno, Cambridge", detail: "A look inside the AI music company, through the Massachusetts AI Coalition", href: "https://www.instagram.com/reel/Dcb4ISvvCJp/", orgs: ["massai"] },
  { year: "2026", when: "Jul 2026", name: "Massachusetts AI Coalition: Summer Startup Block Party", detail: "Founders, researchers, investors and builders", href: "https://www.instagram.com/p/Dakm5wTEcYx/", orgs: ["massai"] },
  { year: "2026", when: "Jun 2026", name: "TEDxBoston", detail: "Talks on AI and the future", href: "https://www.instagram.com/p/DaRPnlzDXCs/", orgs: ["tedx"] },
  { year: "2026", when: "Jun 2026", name: "Boston Tech Week", detail: "MIT, Kendall Square, Seaport · 400+ events in one week", href: "https://www.instagram.com/p/DZFXzO1EVxu/" },
  { year: "2026", when: "May 2026", name: "A day of AI conversations · Boston, Cambridge and the Seaport", detail: "AI infrastructure, robotics and future systems", href: "https://www.instagram.com/p/DY0v-ygDbbQ/" },
  { year: "2026", when: "Apr 2026", name: "Imagination in Action · MIT Media Lab", detail: "AI infrastructure, power, cooling, governance and AI in orbit", href: "https://www.instagram.com/p/DXKCjdljS5g/", orgs: ["mit"] },
  { year: "2025", when: "Nov 2025", name: "TEDxBoston: Planet Action (3 days)", detail: "Second year · MIT and the New England Aquarium", href: "https://www.instagram.com/p/DRViboVDQGn/", orgs: ["tedx", "mit"] },
  { year: "2025", when: "Nov 2025", name: "AI conversations at Harvard Business School and the MIT Museum", detail: "AI, genetics and new forms of work", href: "https://www.instagram.com/p/DRAsCrEkb_u/", orgs: ["harvard", "mit"] },
  { year: "2025", when: "Oct 2025", name: "Dassault Systèmes Science Week, Boston", detail: "AI, digital twins, human longevity · Bernard Charles, Claire Biot" },
  { year: "2025", when: "Sep 2025", name: "Human Augmentation Summit · MIT Media Lab", detail: "Longevity, digital twins, brain–computer interfaces", href: "https://www.instagram.com/p/DO__9r1kc6W/", orgs: ["mit"] },
  { year: "2025", when: "May 2025", name: "Global Motherhood Leadership Summit · Harvard", detail: "Talk on the convergence of AI, quantum, neuroscience and biology", role: SPEAKER, href: "https://www.instagram.com/p/DKfl1uaSJel/", orgs: ["harvard"] },
  { year: "2025", when: "Apr 2025", name: "Imagination in Action · MIT Media Lab", detail: "Launch of NANDA for decentralized AI agents · conversation with Joscha Bach", href: "https://www.instagram.com/p/DI6qlcYxvWY/", orgs: ["mit"] },
  { year: "2025", when: "Mar 2025", name: "Quantum & AI Impact Series", detail: "Qblox · QuEra · IBM Quantum", href: "https://www.instagram.com/p/DG8dUmTxssc/" },
  { year: "2025", when: "Jan 2025", name: "World Economic Forum · Davos 2025", detail: "WSJ House · MIT House · CNBC House · AI House", href: "https://www.instagram.com/p/DFfzbepxnWp/", orgs: ["wef"] },
  { year: "2024", when: "2024", name: "IEEE Global Tech Forum · Microsoft NERD Center", detail: "AI ethics, governance, and human-machine teaming" },
  { year: "2024", when: "2024", name: "TEDxMIT · MIT Sloan School of Management", detail: "Quantum vs. supercomputing · Google Willow · Daniela Rus", orgs: ["mit"] },
  { year: "2023", when: "2023", name: "MIT Generative AI Week · Imagination in Action", detail: "Sam Altman · Lex Fridman · Vinod Khosla · Stephen Wolfram", orgs: ["mit"] },
];
