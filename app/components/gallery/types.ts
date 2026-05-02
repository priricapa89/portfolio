import type React from "react";

export interface Tag {
  label: string;
  href?: string;
}

export interface Photo {
  imgSrc?: string;
  imgAlt?: string;
  icon?: string;
  label: string;
  cap: string;
  ctx: string;
  tags?: Tag[];
  featured?: boolean;
  wide?: boolean;
}

export interface Venue {
  id?: string;
  badge: string;
  badgeStyle: React.CSSProperties;
  sub?: string;
  columns?: 2 | 3;
  photos: Photo[];
}

export interface GalleryFullEvent {
  id: string;
  date: string;
  title: string;
  desc: string;
  venues?: Venue[];
  photos?: Photo[];
}

export interface EventNavItem {
  id: string;
  label: string;
  color: string;
}

export interface LightboxState {
  src: string;
  cap: string;
  ctx: string;
}
