import "./SectionPill.css";

interface SectionPillProps {
  children: React.ReactNode;
}

export function SectionPill({ children }: SectionPillProps) {
  return (
    <div className="section-pill">
      {children}
    </div>
  );
}
