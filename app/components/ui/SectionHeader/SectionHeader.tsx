import "./SectionHeader.css";
import { SectionPill } from "../SectionPill/SectionPill";

interface SectionHeaderProps {
  pill: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
}

export function SectionHeader({ pill, heading, intro }: SectionHeaderProps) {
  return (
    <>
      <SectionPill>{pill}</SectionPill>
      <h2>{heading}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </>
  );
}
