import "./TickerBanner.css";

const TICKER_ITEMS = [
  "WEF Davos 2025",
  "MIT",
  "Harvard",
  "TEDxMIT & TEDxBoston",
  "IEEE",
  "QuEra · IBM Quantum · Qblox",
  "Dassault Systèmes",
];

export function TickerBanner() {
  // Duplicate items to create the seamless loop effect
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {items.map((item, i) => (
          <span className="ticker-item" key={i}>
            <b>✦</b> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
