import { Link } from "react-router";
import "./ThreadSection.css";
import "../RoomSection/RoomSection.css";
import { SectionPill } from "../../ui/SectionPill/SectionPill";
import { useLang } from "~/i18n/LanguageContext";

type Pair = [en: string, es: string];

interface Pillar {
  title: Pair;
  body: Pair;
  /** Optional photo for the card, e.g. "/my-photo.jpg". Without it the card shows a tinted panel. */
  image?: string;
}

const PILLARS: Pillar[] = [
  {
    title: ["Capital", "Capital"],
    body: ["Finance, investments and markets.", "Finanzas, inversiones y mercados."],
    image: "/pillars/capital.jpg",
  },
  {
    title: ["Intelligence", "Inteligencia"],
    body: ["AI, agents and architecture.", "IA, agentes y arquitectura."],
    image: "/pillars/intelligence.jpg",
  },
  {
    title: ["Infrastructure", "Infraestructura"],
    body: [
      "Deep tech, photonics and the future of intelligence, including the economics of AI infrastructure from data centers to orbit.", "Deep tech, fotónica y el futuro de la inteligencia, incluida la economía de la infraestructura de IA, de los data centers a la órbita.",
    ],
    image: "/pillars/infrastructure.jpg",
  },
];

export function ThreadSection() {
  const { t, lang } = useLang();

  return (
    <section className="thread" id="thread">
      <div className="thread-top">
        <div className="thread-copy">
          <SectionPill>{t("The thread", "El hilo conductor")}</SectionPill>
          <h2>
            {lang === "es" ? (
              <>Aprendí de capital <em>antes de aprender de tecnología</em></>
            ) : (
              <>I learned capital <em>before I learned technology</em></>
            )}
          </h2>
          <p className="thread-lead">
            {t(
              "Peruvian-born. Boston-based. An economist with an operator’s perspective.",
              "Nacida en Perú. Con base en Boston. Una economista con mirada de operadora.",
            )}
          </p>
          <p>
            {t(
              "I started in banking and credit rating, including Peru’s central bank. I then ran investor relations at Repsol Peru and managed treasury across 15 markets at Belcorp.",
              "Empecé en banca y clasificación de riesgo, incluido el banco central del Perú. Luego dirigí relación con inversionistas en Repsol Perú y gestioné la tesorería de 15 mercados en Belcorp.",
            )}
          </p>
          <p>
            {t(
              "At Volvo Group, I was Chief of Staff and originated Dr. Volvo, the company’s first AI diagnostic product. At Lumentum, I led enterprise AI strategy, including a RAG system rolled out to more than 1,000 people.",
              "En Volvo Group fui Chief of Staff y originé Dr. Volvo, el primer producto de diagnóstico con IA de la empresa. En Lumentum lideré la estrategia de IA empresarial, incluido un sistema RAG desplegado a más de 1,000 personas.",
            )}
          </p>
          <Link className="btn-ghost thread-more" to="/about">
            {t("More about me →", "Más sobre mí →")}
          </Link>
        </div>
        <div className="thread-photo">
          <img
            src="/IIA-04-15-2025 - Profilepic.JPG"
            alt="Pricilla Ricapa"
            loading="lazy"
          />
        </div>
      </div>
      <div className="thread-pillars">
        {PILLARS.map((pillar, i) => (
          <div className="thread-pillar" key={pillar.title[0]}>
            <div className="thread-media">
              {pillar.image ? (
                <img src={pillar.image} alt="" loading="lazy" />
              ) : (
                <span aria-hidden="true">0{i + 1}</span>
              )}
            </div>
            <div className="thread-pillar-body">
              <h3>{t(...pillar.title)}</h3>
              <p>{t(...pillar.body)}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="swipe-hint" aria-hidden="true">{t("Swipe for more →", "Desliza para ver más →")}</p>
    </section>
  );
}
