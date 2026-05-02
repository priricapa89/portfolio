export interface SocialLink {
  platform: string;
  handle: string;
  href: string;
  cardClass: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    handle: "Pricilla Ricapa",
    href: "https://www.linkedin.com/in/pricilla-ricapa/",
    cardClass: "soc-li",
  },
  {
    platform: "Instagram",
    handle: "@pri_ricapa",
    href: "https://www.instagram.com/pri_ricapa/",
    cardClass: "soc-ig",
  },
  {
    platform: "YouTube",
    handle: "Pricilla Ricapa Guerrero",
    href: "https://www.youtube.com/channel/UCmkZqwSWDm3AweOb1FD_2zQ",
    cardClass: "soc-yt",
  },
  {
    platform: "X / Twitter",
    handle: "@ricapapricilla",
    href: "https://x.com/ricapapricilla",
    cardClass: "soc-x",
  },
  {
    platform: "Email",
    handle: "pri.ricapa89@gmail.com",
    href: "mailto:pri.ricapa89@gmail.com",
    cardClass: "soc-mail",
  },
];
