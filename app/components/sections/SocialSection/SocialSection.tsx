import "./SocialSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";

// SVG icons kept inline — they're unique per platform and not reused elsewhere
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452H16.89v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 01-1.98-1.98c0-1.093.887-1.98 1.98-1.98 1.093 0 1.98.887 1.98 1.98 0 1.093-.887 1.98-1.98 1.98zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <defs>
        <linearGradient id="ig2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>
      <path fill="url(#ig2)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#FF0000">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#000">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#7B4FD4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const SOCIAL_CARDS = [
  { href: "https://www.linkedin.com/in/pricilla-ricapa/", cardClass: "soc-li", Icon: LinkedInIcon, platform: "LinkedIn", handle: "Pricilla Ricapa" },
  { href: "https://www.instagram.com/pri_ricapa/", cardClass: "soc-ig", Icon: InstagramIcon, platform: "Instagram", handle: "@pri_ricapa" },
  { href: "https://www.youtube.com/channel/UCmkZqwSWDm3AweOb1FD_2zQ", cardClass: "soc-yt", Icon: YouTubeIcon, platform: "YouTube", handle: "Pricilla Ricapa Guerrero" },
  { href: "https://x.com/ricapapricilla", cardClass: "soc-x", Icon: XIcon, platform: "X / Twitter", handle: "@ricapapricilla" },
  { href: "mailto:pri.ricapa89@gmail.com", cardClass: "soc-mail", Icon: EmailIcon, platform: "Email", handle: "pri.ricapa89@gmail.com" },
];

export function SocialSection() {
  return (
    <section className="social-section" id="social">
      <SectionHeader pill="Connect" heading={<>Find me <em>everywhere</em></>} />
      <div className="social-grid">
        {SOCIAL_CARDS.map(({ href, cardClass, Icon, platform, handle }) => (
          <a
            key={platform}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noreferrer"}
            className={`social-card ${cardClass}`}
          >
            <div className="social-icon"><Icon /></div>
            <div className="social-text">
              <span className="soc-platform">{platform}</span>
              <span className="soc-handle">{handle}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
