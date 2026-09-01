import "./ArchedWordmark.css";

interface ArchedWordmarkProps {
  /** Unique suffix so multiple instances don't share SVG element ids. */
  uid?: string;
  /** Decorative when the same words are already in the page heading. */
  decorative?: boolean;
}

/**
 * "CLAUDE COMMUNITY" set on a shallow arc above "BOSTON", with a sunrise
 * half-disc breaking the horizon line. Original typographic composition —
 * no Anthropic or Claude logo, wordmark, or brand asset is reproduced here.
 */
export function ArchedWordmark({ uid = "a", decorative = false }: ArchedWordmarkProps) {
  const arcId = `ccb-arc-${uid}`;
  const sunId = `ccb-sun-${uid}`;

  return (
    <svg
      className="ccb-wordmark"
      viewBox="0 0 800 300"
      xmlns="http://www.w3.org/2000/svg"
      {...(decorative
        ? { "aria-hidden": true as const, focusable: false }
        : { role: "img", "aria-label": "Claude Community Boston" })}
    >
      <defs>
        <path id={arcId} d="M 70 160 A 520 520 0 0 1 730 160" fill="none" />
        <linearGradient id={sunId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--ccb-ochre)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--ccb-terracotta)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* sunrise disc */}
      <path d="M 275 258 A 125 125 0 0 1 525 258 Z" fill={`url(#${sunId})`} />

      {/* horizon */}
      <line
        x1="60"
        y1="258"
        x2="740"
        y2="258"
        stroke="var(--ccb-line-strong)"
        strokeWidth="1.5"
      />

      {/* arced upper wordmark */}
      <text className="ccb-wordmark-arc">
        <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
          CLAUDE COMMUNITY
        </textPath>
      </text>

      {/* city */}
      <text className="ccb-wordmark-city" x="400" y="246" textAnchor="middle">
        BOSTON
      </text>
    </svg>
  );
}
