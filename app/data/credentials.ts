export interface Credential {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  /** Public verification page. */
  url: string;
}

export const credentials: Credential[] = [
  {
    name: "Claude Code in Action",
    issuer: "Anthropic",
    issued: "Aug 2026",
    credentialId: "mc3iogo5weog",
    url: "https://verify.skilljar.com/c/mc3iogo5weog",
  },
  {
    name: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "Aug 2026",
    credentialId: "ru52orjisvf7",
    url: "https://verify.skilljar.com/c/ru52orjisvf7",
  },
  {
    name: "Building with the Claude API",
    issuer: "Anthropic",
    issued: "Aug 2026",
    credentialId: "zixzoryosz75",
    url: "https://verify.skilljar.com/c/zixzoryosz75",
  },
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    issued: "Aug 2026",
    credentialId: "wdd65x99mzuq",
    url: "https://verify.skilljar.com/c/wdd65x99mzuq",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    issued: "Aug 2026",
    credentialId: "khvbcthtjjoc",
    url: "https://verify.skilljar.com/c/khvbcthtjjoc",
  },
];

export interface Appointment {
  role: string;
  org: string;
  period: string;
  detail?: string;
}

export const appointments: Appointment[] = [
  {
    role: "Top 100 Voices",
    org: "Massachusetts AI Coalition",
    period: "Jul 2026 – Present",
    detail: "Voices × 100 Events",
  },
  {
    role: "Claude Community Ambassador",
    org: "Claude Community, Boston",
    period: "Jun 2026 – Present",
    detail: "Independent volunteer role",
  },
];

export interface Education {
  school: string;
  program: string;
  detail?: string;
  /** Logo file in /public/logos, shown as supplied. */
  logo: string;
}

export const education: Education[] = [
  {
    school: "Simon Business School, University of Rochester",
    program: "STEM MBA",
    detail: "Forté Fellow · 2024",
    logo: "/logos/simon.png",
  },
  {
    school: "CUOA Business School",
    program: "Executive Program",
    detail: "Strategy & Marketing",
    logo: "/logos/cuoa.png",
  },
  {
    school: "University of La Verne",
    program: "Executive Program",
    detail: "Finance & Investment",
    logo: "/logos/laverne.png",
  },
  {
    school: "Universidad de Lima",
    program: "BSc Economics",
    detail: "Econometrics & Investments",
    logo: "/logos/ulima.png",
  },
];
