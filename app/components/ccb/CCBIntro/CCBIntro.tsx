import "./CCBIntro.css";

export function CCBIntro() {
  return (
    <section className="ccb-intro" id="community" aria-labelledby="ccb-intro-h">
      <div className="ccb-wrap ccb-intro-inner">
        <div className="ccb-intro-lead">
          <p className="ccb-eyebrow">The community</p>
          <h2 id="ccb-intro-h">
            A community for people building <em>what comes next.</em>
          </h2>
        </div>
        <div className="ccb-intro-body">
          <p>
            Claude Community Boston brings together people who are experimenting,
            building, learning, and connecting around new ways of working with AI.
          </p>
          <p>
            It is deliberately mixed. Founders sit next to operators, researchers
            next to people who picked up their first agent last week. The point is
            the exchange, not the credential.
          </p>
          <div className="ccb-intro-attrib">
            <p className="ccb-intro-attrib-name">Led by Pricilla Ricapa</p>
            <p className="ccb-intro-attrib-role">Claude Community Ambassador</p>
            <p className="ccb-intro-attrib-note">
              An independent, volunteer role. Claude Community Boston is a
              community initiative, not an Anthropic organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
