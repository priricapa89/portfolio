export type Pair = [en: string, es: string];

export interface Pkg {
  /** Path step shown above the name. */
  step: Pair;
  name: Pair;
  desc: Pair;
  items: Pair[];
  price: Pair;
  note?: Pair;
  cta: Pair;
  /** The usual starting point in its category. */
  featured?: boolean;
}

export interface Category {
  slug: string;
  title: Pair;
  line: Pair;
  image: string;
  /** Lowest price in the category, shown on the card. */
  from: Pair;
  packages: Pkg[];
  /** Small print under the packages. */
  footnote?: Pair;
}

const START: Pair = ["Start", "Empieza"];
const ENGAGE: Pair = ["Engage", "Profundiza"];
const STAY: Pair = ["Stay", "Continúa"];

// Prices live here. Change a number in one place.
export const CATEGORIES: Category[] = [
  {
    slug: "strategy-advisory",
    title: ["Strategy & Advisory", "Estrategia y asesoría"],
    line: [
      "Clear direction on where AI fits your business and what to fund first.",
      "Dirección clara sobre dónde encaja la IA en tu negocio y qué financiar primero.",
    ],
    image: "/ways/advisory.jpg",
    from: ["From $350", "Desde $350"],
    packages: [
      {
        step: START,
        name: ["Strategy Conversation", "Conversación estratégica"],
        desc: [
          "One hour on your most pressing question, with a written summary of where I would go next.",
          "Una hora sobre tu pregunta más urgente, con un resumen escrito de hacia dónde iría yo.",
        ],
        items: [
          ["60 minutes, one topic", "60 minutos, un tema"],
          ["One-page written summary within 2 business days", "Resumen escrito de una página en 2 días hábiles"],
          ["Fee credited toward a Sprint booked within 30 days", "El pago se descuenta de un Sprint reservado en 30 días"],
        ],
        price: ["$350", "$350"],
        cta: ["Book a conversation", "Reservar conversación"],
        featured: true,
      },
      {
        step: ENGAGE,
        name: ["AI Strategy Sprint", "Sprint de estrategia de IA"],
        desc: [
          "Two weeks to a clear answer: where AI fits your business, three priorities worth funding, and a 90-day plan.",
          "Dos semanas para una respuesta clara: dónde encaja la IA en tu negocio, tres prioridades que vale la pena financiar y un plan de 90 días.",
        ],
        items: [
          ["Kickoff and up to 3 leadership interviews", "Inicio y hasta 3 entrevistas con líderes"],
          ["Strategy memo with three funded priorities", "Memo estratégico con tres prioridades"],
          ["90-day plan", "Plan de 90 días"],
          ["Readout with your team", "Presentación a tu equipo"],
        ],
        price: ["$2,000", "$2,000"],
        note: ["Fixed fee · 2 weeks", "Precio fijo · 2 semanas"],
        cta: ["Discuss your goals", "Hablemos de tus objetivos"],
      },
      {
        step: STAY,
        name: ["Strategic AI Partner", "Socia estratégica de IA"],
        desc: [
          "A senior advisor alongside your leadership team each month, for the decisions that keep coming.",
          "Una asesora senior junto a tu equipo directivo cada mes, para las decisiones que siguen llegando.",
        ],
        items: [
          ["Two 60-minute sessions a month", "Dos sesiones de 60 minutos al mes"],
          ["Replies within one business day", "Respuestas en un día hábil"],
          ["Monthly written brief", "Informe escrito mensual"],
          ["Review of vendor proposals", "Revisión de propuestas de proveedores"],
        ],
        price: ["From $3,500", "Desde $3,500"],
        note: ["Per month · 3-month minimum", "Al mes · mínimo 3 meses"],
        cta: ["Explore this engagement", "Explorar esta opción"],
      },
    ],
  },
  {
    slug: "executive-education",
    title: ["Executive Education & AI Training", "Formación ejecutiva y capacitación en IA"],
    line: [
      "Leaders and teams who understand AI well enough to use it and question it.",
      "Líderes y equipos que entienden la IA lo suficiente para usarla y cuestionarla.",
    ],
    image: "/ways/education.jpg",
    from: ["From $2,500", "Desde $2,500"],
    packages: [
      {
        step: START,
        name: ["Executive AI Briefing", "Briefing ejecutivo de IA"],
        desc: [
          "Ninety minutes that give your leadership team a shared, realistic picture of AI and what it means for your industry.",
          "Noventa minutos que dan a tu equipo directivo una visión compartida y realista de la IA y lo que significa para tu industria.",
        ],
        items: [
          ["90 minutes, private, remote or in Boston", "90 minutos, privado, remoto o en Boston"],
          ["Tailored to your industry", "Adaptado a tu industria"],
          ["Open Q&A", "Preguntas abiertas"],
          ["One-page takeaway", "Resumen de una página"],
        ],
        price: ["$2,500", "$2,500"],
        note: ["Fixed fee", "Precio fijo"],
        cta: ["Discuss your goals", "Hablemos de tus objetivos"],
      },
      {
        step: ENGAGE,
        name: ["Applied AI Team Workshop", "Taller aplicado de IA para equipos"],
        desc: [
          "A hands-on session built around your team's real work, with a follow-up after 30 days.",
          "Una sesión práctica construida sobre el trabajo real de tu equipo, con seguimiento a los 30 días.",
        ],
        items: [
          ["Half day or full day, up to 20 people", "Medio día o día completo, hasta 20 personas"],
          ["Pre-session survey", "Encuesta previa"],
          ["Use cases from your team's own work", "Casos de uso del trabajo de tu equipo"],
          ["Materials and a 30-day follow-up call", "Materiales y llamada de seguimiento a 30 días"],
        ],
        price: ["From $4,500", "Desde $4,500"],
        note: ["Flat fee per team", "Tarifa fija por equipo"],
        cta: ["Plan a workshop", "Planear un taller"],
        featured: true,
      },
      {
        step: STAY,
        name: ["Leadership AI Program", "Programa de IA para líderes"],
        desc: [
          "Four sessions that take your leaders from awareness to applied use, ending with a presentation to your executives.",
          "Cuatro sesiones que llevan a tus líderes del conocimiento al uso aplicado, y cierran con una presentación a tu dirección.",
        ],
        items: [
          ["4 sessions over 4 to 6 weeks, up to 15 leaders", "4 sesiones en 4 a 6 semanas, hasta 15 líderes"],
          ["Curriculum fitted to each role", "Contenido ajustado a cada rol"],
          ["Applied project per participant", "Proyecto aplicado por participante"],
          ["Responsible AI and governance session", "Sesión de IA responsable y gobernanza"],
        ],
        price: ["From $12,000", "Desde $12,000"],
        cta: ["Request a proposal", "Pedir propuesta"],
      },
    ],
    footnote: [
      "Keynotes and panels: fees depend on format, audience and travel.",
      "Conferencias y paneles: la tarifa depende del formato, la audiencia y el viaje.",
    ],
  },
  {
    slug: "agentic-ai",
    title: ["Agentic AI & Transformation", "IA agéntica y transformación"],
    line: [
      "From a mapped workflow to a tested pilot, with people kept in the loop.",
      "De un flujo de trabajo mapeado a un piloto probado, con las personas siempre en el circuito.",
    ],
    image: "/ways/speaking.jpg",
    from: ["From $4,500", "Desde $4,500"],
    packages: [
      {
        step: START,
        name: ["AI Opportunity Assessment", "Evaluación de oportunidades de IA"],
        desc: [
          "We map one team's workflows and tell you which are worth automating, which are not, and what to pilot first.",
          "Mapeamos los flujos de trabajo de un equipo y te decimos cuáles vale la pena automatizar, cuáles no y qué pilotear primero.",
        ],
        items: [
          ["One team, 2 to 3 weeks", "Un equipo, 2 a 3 semanas"],
          ["Workflow map and up to 5 interviews", "Mapa de flujos y hasta 5 entrevistas"],
          ["Opportunities scored by value and feasibility", "Oportunidades calificadas por valor y viabilidad"],
          ["Fee credited toward a Pilot signed within 60 days", "El pago se descuenta de un Piloto firmado en 60 días"],
        ],
        price: ["From $4,500", "Desde $4,500"],
        cta: ["Discuss your goals", "Hablemos de tus objetivos"],
        featured: true,
      },
      {
        step: ENGAGE,
        name: ["Agentic AI Pilot", "Piloto de IA agéntica"],
        desc: [
          "One workflow, designed and prototyped, tested against how you work today, with a clear go or no-go.",
          "Un flujo de trabajo, diseñado y prototipado, probado contra cómo trabajas hoy, con una recomendación clara de seguir o no.",
        ],
        items: [
          ["One workflow, 4 to 6 weeks", "Un flujo de trabajo, 4 a 6 semanas"],
          ["Workflow design and solution architecture", "Diseño del flujo y arquitectura de la solución"],
          ["Working prototype with human review points", "Prototipo funcional con puntos de revisión humana"],
          ["Test against a baseline", "Prueba contra una línea base"],
        ],
        price: ["From $9,500", "Desde $9,500"],
        note: ["Fixed scope", "Alcance fijo"],
        cta: ["Request a proposal", "Pedir propuesta"],
      },
      {
        step: STAY,
        name: ["AI Transformation Partnership", "Alianza de transformación con IA"],
        desc: [
          "Ongoing leadership for organizations putting AI to work across several teams.",
          "Liderazgo continuo para organizaciones que ponen la IA a trabajar en varios equipos.",
        ],
        items: [
          ["Roadmap across workflows", "Hoja de ruta entre flujos de trabajo"],
          ["Coordination of the build team", "Coordinación del equipo de construcción"],
          ["Adoption and change plan", "Plan de adopción y cambio"],
          ["Governance and measurement", "Gobernanza y medición"],
        ],
        price: ["Scoped together", "Se define en conjunto"],
        cta: ["Start a conversation", "Iniciar conversación"],
      },
    ],
    footnote: [
      "Pilots cover design and a working prototype. Production builds are scoped separately with a technical partner.",
      "Los pilotos cubren el diseño y un prototipo funcional. La construcción en producción se define aparte con un socio técnico.",
    ],
  },
];
