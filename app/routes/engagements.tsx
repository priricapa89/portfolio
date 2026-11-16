import { Link, data } from "react-router";
import type { Route } from "./+types/engagements";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { EngagementPanel } from "~/components/sections/EngagementPanel/EngagementPanel";
import { CATEGORIES } from "~/data/engagements";
import { useLang } from "~/i18n/LanguageContext";
import "~/components/sections/ServicesSection/ServicesSection.css";

export function loader({ params }: Route.LoaderArgs) {
  const index = CATEGORIES.findIndex((c) => c.slug === params.slug);
  if (index < 0) throw data("Not found", { status: 404 });
  return { index };
}

export function meta({ data: d }: Route.MetaArgs) {
  const cat = d ? CATEGORIES[d.index] : undefined;
  if (!cat) return [{ title: "PRICAPA" }];
  const url = `https://pricapa.com/engagements/${cat.slug}`;
  const title = `${cat.title[0]} | PRICAPA`;
  return [
    { title },
    { name: "description", content: cat.line[0] },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:title", content: title },
    { property: "og:description", content: cat.line[0] },
    { property: "og:url", content: url },
    { property: "og:image", content: "https://pricapa.com/pricapa-og.jpg" },
  ];
}

export default function Engagements({ loaderData }: Route.ComponentProps) {
  const { t } = useLang();
  const cat = CATEGORIES[loaderData.index];

  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>
        <section className="services eng-page">
          <Link className="eng-back" to="/#services">
            {t("← All engagements", "← Todas las opciones")}
          </Link>
          <p className="eng-kicker">0{loaderData.index + 1}</p>
          <h1 className="eng-title">{t(...cat.title)}</h1>
          <p className="eng-lead">{t(...cat.line)}</p>
          <EngagementPanel category={cat} />
          <div className="eng-others">
            {CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
              <Link key={c.slug} to={`/engagements/${c.slug}`}>
                {t(...c.title)} →
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
