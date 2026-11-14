import "./ServicesSection.css";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";
import { useLang } from "~/i18n/LanguageContext";

type Pair = [en: string, es: string];

interface Plan {
  tag: Pair;
  name: string;
  price: Pair;
  note: Pair;
  cta: Pair;
  items: Pair[];
  featured?: boolean;
}

// Prices live here. Change a number in one place.
const PLANS: Plan[] = [
  {
    tag: ["Start here", "Empieza aquí"],
    name: "Discovery call",
    price: ["Free", "Gratis"],
    note: ["15 minutes", "15 minutos"],
    cta: ["Book a call", "Agendar llamada"],
    featured: true,
    items: [
      ["15-minute video call", "Videollamada de 15 minutos"],
      ["Your situation and goals", "Tu situación y objetivos"],
      ["A clear next step", "Un siguiente paso claro"],
      ["No obligation", "Sin compromiso"],
    ],
  },
  {
    tag: ["Advise", "Asesoría"],
    name: "AI Strategy Session",
    price: ["$299", "$299"],
    note: ["One-time · 90 minutes", "Pago único · 90 minutos"],
    cta: ["Book a session", "Reservar sesión"],
    items: [
      ["90-minute working session", "Sesión de trabajo de 90 minutos"],
      ["Review of how your team works", "Revisión de cómo trabaja tu equipo"],
      ["Top three AI opportunities, ranked", "Tres oportunidades de IA, priorizadas"],
      ["Action plan with tool suggestions", "Plan de acción con herramientas"],
      ["Written summary to share", "Resumen escrito para compartir"],
    ],
  },
  {
    tag: ["Teach", "Formación"],
    name: "Team AI Workshop",
    price: ["From $1,500", "Desde $1,500"],
    note: ["By team size and length", "Según equipo y duración"],
    cta: ["Plan a workshop", "Planear un taller"],
    items: [
      ["Live session, two to three hours", "Sesión en vivo de dos a tres horas"],
      ["Examples from your industry", "Ejemplos de tu industria"],
      ["Practice with real tools", "Práctica con herramientas reales"],
      ["Slides and recap notes", "Diapositivas y resumen"],
      ["Next steps for your team", "Próximos pasos para tu equipo"],
    ],
  },
  {
    tag: ["Build", "Implementación"],
    name: "AI Implementation",
    price: ["From $5,000", "Desde $5,000"],
    note: ["Scoped before work starts", "Alcance definido antes de empezar"],
    cta: ["Request a proposal", "Pedir propuesta"],
    items: [
      ["Process review and opportunity map", "Revisión de procesos y mapa de oportunidades"],
      ["Tools, prompts and procedures set up", "Herramientas, prompts y procesos listos"],
      ["Team training", "Capacitación del equipo"],
      ["Documentation and rollout support", "Documentación y apoyo en el despliegue"],
      ["Optional monthly advisory", "Asesoría mensual opcional"],
    ],
  },
];

export function ServicesSection() {
  const { openContactModal } = useContactModal();
  const { t } = useLang();

  return (
    <section className="services" id="services">
      <h2 className="pricing-title" id="pricing">
        {t("Pricing", "Precios")}
      </h2>
      <div className="pricing-panel">
        {PLANS.map((plan) => (
          <div className={`plan${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
            <div className="plan-tag">{t(...plan.tag)}</div>
            <h3>{plan.name}</h3>
            <div className="plan-price">{t(...plan.price)}</div>
            <div className="plan-note">{t(...plan.note)}</div>
            <button
              type="button"
              className={`plan-btn${plan.featured ? " plan-btn-dark" : ""}`}
              onClick={openContactModal}
            >
              {t(...plan.cta)}
            </button>
            <ul>
              {plan.items.map((item) => (
                <li key={item[0]}>{t(...item)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pricing-speaking">
        <span>
          {t(
            "Speaking and panels: fees depend on scope.",
            "Conferencias y paneles: la tarifa depende del alcance.",
          )}
        </span>
        <button type="button" onClick={openContactModal}>
          {t("Ask about speaking", "Consultar por conferencias")}
        </button>
      </div>
    </section>
  );
}
