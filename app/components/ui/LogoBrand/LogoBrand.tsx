import "./LogoBrand.css";

interface LogoBrandProps {
  /** Pixel size of the mark. */
  size?: number;
}

export function LogoBrand({ size = 32 }: LogoBrandProps) {
  return (
    <span className="logo-brand">
      <img
        src="/pricapa-logo.png"
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        className="logo-brand-img"
        style={{ width: size, height: size }}
      />
      <span className="logo-brand-text">
        <span className="pr">PR</span>icapa<span className="dot">.</span>com
      </span>
    </span>
  );
}
