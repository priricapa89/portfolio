import { Link } from "react-router";
import "./ThreadSection.css";
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
    body: [
      "Economics, finance, investor relations, and treasury.",
      "Economía, finanzas, relación con inversionistas y tesorería.",
    ],
  },
  {
    title: ["Applied AI and leadership", "IA aplicada y liderazgo"],
    body: [
      "From business strategy to shipping Dr. Volvo at Volvo Group.",
      "De la estrategia de negocio a lanzar Dr. Volvo en Volvo Group.",
    ],
  },
  {
    title: ["Infrastructure and deep tech", "Infraestructura y deep tech"],
    body: [
      "Inside the optical industry at Lumentum. Now, compute in orbit.",
      "Dentro de la industria óptica en Lumentum. Ahora, cómputo en órbita.",
    ],
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
    </section>
  );
}
