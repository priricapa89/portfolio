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

// The short "where to start" row. Full packages live in app/data/engagements.ts.
const PLANS: Plan[] = [
  {
    tag: ["Free", "Gratis"],
    name: "Fit call",
    price: ["Free", "Gratis"],
    note: ["15 minutes", "15 minutos"],
    cta: ["Book a call", "Agendar llamada"],
    items: [
      ["A short video call", "Una videollamada corta"],
      ["Your situation and goals", "Tu situación y objetivos"],
      ["A clear next step, no obligation", "Un siguiente paso claro, sin compromiso"],
    ],
  },
  {
    tag: ["Most start here", "Punto de partida habitual"],
    name: "Strategy Conversation",
    price: ["$350", "$350"],
    note: ["60 minutes", "60 minutos"],
    cta: ["Book a conversation", "Reservar conversación"],
    featured: true,
    items: [
      ["One hour on your most pressing question", "Una hora sobre tu pregunta más urgente"],
      ["Written summary within 2 business days", "Resumen escrito en 2 días hábiles"],
      ["Fee credited toward a Sprint within 30 days", "El pago se descuenta de un Sprint en 30 días"],
    ],
  },
  {
    tag: ["Custom", "A medida"],
    name: "A mix of services",
    price: ["Scoped together", "Se define en conjunto"],
    note: ["One proposal", "Una sola propuesta"],
    cta: ["Let's find the right fit", "Encontremos la opción adecuada"],
    items: [
      ["Advisory, training and pilots combined", "Asesoría, formación y pilotos combinados"],
      ["Sized to your goals and budget", "Ajustado a tus objetivos y presupuesto"],
      ["Clear scope before any work starts", "Alcance claro antes de empezar"],
    ],
  },
];

const PLAN_ES: Record<string, string> = {
  "Fit call": "Llamada inicial",
  "Strategy Conversation": "Conversación estratégica",
  "A mix of services": "Una combinación de servicios",
};

export function PricingSection() {
  const { openContactModal } = useContactModal();
  const { t, lang } = useLang();

  return (
    <section className="pricing" id="pricing">
      <SectionHeader
        pill={t("Where to start", "Por dónde empezar")}
        heading={
          lang === "es" ? (
            <>Encontremos la forma adecuada <em>de trabajar en conjunto</em></>
          ) : (
            <>Find the right way <em>to work together</em></>
          )
        }
        intro={t(
          "Not sure which engagement fits? Start with one of these.",
          "¿No sabes cuál opción te conviene? Empieza por una de estas.",
        )}
      />
      <div className="pricing-panel pricing-start">
        {PLANS.map((plan) => (
          <div className={`plan${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
            <div className="plan-tag">{t(...plan.tag)}</div>
            <h3>{PLAN_ES[plan.name] && lang === "es" ? PLAN_ES[plan.name] : plan.name}</h3>
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
      <p className="plan-all">
        <a href="/#services">{t("See all nine engagements ↑", "Ver las nueve opciones ↑")}</a>
      </p>
    </section>
  );
}
