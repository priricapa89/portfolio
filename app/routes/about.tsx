import type { Route } from "./+types/about";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { AboutSection } from "~/components/sections/AboutSection/AboutSection";

const PAGE_URL = "https://pricapa.com/about";
const PAGE_TITLE = "About Pricilla Ricapa | PRICAPA";
const PAGE_DESCRIPTION =
  "Pricilla Ricapa is an economist and AI strategist based in Boston, working on the economics of AI infrastructure.";

export function meta({}: Route.MetaArgs) {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { tagName: "link", rel: "canonical", href: PAGE_URL },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: "https://pricapa.com/pricapa-og.jpg" },
  ];
}

export default function About() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: 68 }}>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
