import "./PricingSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
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

export function PricingSection() {
  const { openContactModal } = useContactModal();
  const { t, lang } = useLang();

  return (
    <section className="pricing" id="pricing">
      <SectionHeader
        pill={t("Pricing", "Precios")}
        heading={
          lang === "es" ? (
            <>Lo que cuesta, <em>desde el inicio</em></>
          ) : (
            <>What it costs, <em>up front</em></>
          )
        }
        intro={t(
          "What is free, what is paid, and what you get. Every engagement starts with a free call.",
          "Qué es gratis, qué se paga y qué recibes. Todo empieza con una llamada gratuita.",
        )}
      />
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
      <div className="plan-custom">
        <div>
          <div className="plan-tag">{t("Custom", "A medida")}</div>
          <h3>{t("A mix of all three", "Una combinación de las tres")}</h3>
          <p>
            {t(
              "Combine strategy, team training, implementation and speaking in one engagement, scoped to your goals and budget.",
              "Combina estrategia, formación, implementación y conferencias en un solo proyecto, ajustado a tus objetivos y presupuesto.",
            )}
          </p>
        </div>
        <div className="plan-custom-side">
          <div className="plan-price">{t("By scope", "Según alcance")}</div>
          <button type="button" className="plan-btn plan-btn-dark" onClick={openContactModal}>
            {t("Request a custom proposal", "Pedir propuesta a medida")}
          </button>
        </div>
      </div>
    </section>
  );
}
