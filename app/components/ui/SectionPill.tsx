interface SectionPillProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function SectionPill({ children, style }: SectionPillProps) {
  return (
    <div className="section-pill" style={style}>
      {children}
    </div>
  );
}
