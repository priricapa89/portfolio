import { memo, useEffect, useRef } from "react";
import type { Route } from "./+types/about";
import { Nav } from "~/components/layout/Nav/Nav";
import { Footer } from "~/components/layout/Footer/Footer";
import { useContactModal } from "~/components/ui/ContactModal/ContactModalContext";
import { ABOUT_HTML } from "~/components/about/markup";
import { initAbout } from "~/components/about/initAbout";
// Linked only while /about is open, so these styles never reach other pages.
import aboutCss from "~/components/about/about.css?url";

const PAGE_URL = "https://pricapa.com/about";
const PAGE_TITLE = "About Pricilla Ricapa | The Renaissance of Intelligence | PRICAPA";
const PAGE_DESCRIPTION =
  "Pricilla Ricapa is an economist and AI strategist from La Oroya, Peru, based in Boston. Her work connects AI strategy, capital, deep tech, community and human potential.";

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap",
  },
  { rel: "stylesheet", href: aboutCss },
  { rel: "preload", as: "image", href: "/about/hero-clean.jpg" },
];

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

// Memoised with no changing props: the page around it re-renders (language, contact modal),
// and a re-render would put the server markup back over everything initAbout() built.
const AboutBody = memo(function AboutBody({ contact }: { contact: { current: () => void } }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    return initAbout(ref.current, { openContact: () => contact.current() });
  }, [contact]);
  return <main ref={ref} className="ab" dangerouslySetInnerHTML={{ __html: ABOUT_HTML }} />;
});

export default function About() {
  const { openContactModal } = useContactModal();
  const contact = useRef(openContactModal);
  contact.current = openContactModal;

  return (
    <>
      <Nav />
      <AboutBody contact={contact} />
      <div className="ab-foot">
        <Footer />
      </div>
      <div className="ab-spacer" aria-hidden="true" />
    </>
  );
}
