import "./PricapaMark.css";

interface PricapaMarkProps {
  /** Pixel size of the square mark. */
  size?: number;
  /** Show the PRICAPA wordmark next to the mark. */
  withWordmark?: boolean;
  /** Optional line under the wordmark. */
  strapline?: string;
}

/**
 * PRICAPA's own identity: the rose-gold R mark plus wordmark.
 * This is the primary visual identity of the page.
 */
export function PricapaMark({
  size = 40,
  withWordmark = true,
  strapline,
}: PricapaMarkProps) {
  return (
    <span className="pr-mark">
      <img
        src="/pricapa-logo.png"
        alt="PRICAPA"
        width={size}
        height={size}
        className="pr-mark-img"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="pr-mark-text">
          <span className="pr-mark-name">PRICAPA</span>
          {strapline && <span className="pr-mark-strap">{strapline}</span>}
        </span>
      )}
    </span>
  );
}
