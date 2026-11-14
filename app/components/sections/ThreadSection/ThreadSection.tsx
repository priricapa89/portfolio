import { Link } from "react-router";
import "./ThreadSection.css";
import { useLang } from "~/i18n/LanguageContext";

type Pair = [en: string, es: string];

const PILLARS: { title: Pair; body: Pair }[] = [
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
  const { t } = useLang();

  return (
    <section className="thread" id="thread">
      <div className="thread-top">
        <div>
          <div className="eyebrow-num">
            01 <span aria-hidden="true">/</span> {t("The thread that connects it all", "El hilo que lo conecta todo")}
          </div>
          <h2 className="thread-title">
            {t(
              "I learned capital before I learned technology.",
              "Aprendí de capital antes de aprender de tecnología.",
            )}
          </h2>
        </div>
        <div className="thread-copy">
          <p className="thread-lead">
            {t("Peruvian-born. Boston-based.", "Nacida en Perú. Con base en Boston.")}
            <br />
            {t(
              "An economist with an operator\u2019s perspective.",
              "Una economista con mirada de operadora.",
            )}
          </p>
          <p>
            {t(
              "I started in banking and credit rating, including Peru\u2019s central bank. I then ran investor relations at Repsol Peru and managed treasury across 15 markets at Belcorp.",
              "Empecé en banca y clasificación de riesgo, incluido el banco central del Perú. Luego dirigí relación con inversionistas en Repsol Perú y gestioné la tesorería de 15 mercados en Belcorp.",
            )}
          </p>
          <p>
            {t(
              "At Volvo Group, I was Chief of Staff and originated Dr. Volvo, the company\u2019s first AI diagnostic product. At Lumentum, I led enterprise AI strategy, including a RAG system rolled out to more than 1,000 people.",
              "En Volvo Group fui Chief of Staff y originé Dr. Volvo, el primer producto de diagnóstico con IA de la empresa. En Lumentum lideré la estrategia de IA empresarial, incluido un sistema RAG desplegado a más de 1,000 personas.",
            )}
          </p>
          <Link className="thread-more" to="/about">
            {t("More about me", "Más sobre mí")} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <div className="thread-pillars">
        {PILLARS.map((pillar, i) => (
          <div className="thread-pillar" key={pillar.title[0]}>
            <div className="thread-num">0{i + 1}</div>
            <h3>{t(...pillar.title)}</h3>
            <p>{t(...pillar.body)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
