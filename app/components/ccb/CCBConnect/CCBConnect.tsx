import "./CCBConnect.css";
import { COMMUNITY_EMAIL, COMMUNITY_LINKEDIN } from "~/data/claude-community";

export function CCBConnect() {
  return (
    <section className="ccb-connect" aria-labelledby="ccb-connect-h">
      <div className="ccb-wrap ccb-connect-inner">
        <div>
          <p className="ccb-eyebrow">Keep the conversation going</p>
          <h2 id="ccb-connect-h">Connect with the community.</h2>
          <p className="ccb-connect-sub">
            The room is the start. Most of what comes out of it happens in the
            weeks after.
          </p>
        </div>
        <ul className="ccb-connect-links">
          <li>
            <a href={COMMUNITY_LINKEDIN} target="_blank" rel="noreferrer">
              <span className="ccb-connect-label">LinkedIn</span>
              <span className="ccb-connect-value">Pricilla Ricapa</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${COMMUNITY_EMAIL}`}>
              <span className="ccb-connect-label">Email</span>
              <span className="ccb-connect-value">{COMMUNITY_EMAIL}</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="ccb-wrap ccb-connect-qr">
        The QR code on the back of the workshop badge points here, to this page,
        so it keeps working long after the session ends.
      </p>
    </section>
  );
}
