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
            Claude Community Boston brings together people who are
            experimenting, building, learning, and connecting around new ways of
            working with AI.
          </p>
          <p>
            It is deliberately mixed. Founders sit next to operators,
            researchers next to people who picked up their first agent last
            week. The point is the exchange, not the credential.
          </p>
          <p>
            Curation is the whole job. Rather than filling a room and hoping,
            I want to know what people here are actually working on, so each
            session is built for the people who show up to it.
          </p>
          <div className="ccb-intro-attrib">
            <p className="ccb-intro-attrib-name">Curated by Pricilla Ricapa</p>
            <p className="ccb-intro-attrib-role">
              Claude Community Ambassador
            </p>
            <p className="ccb-intro-attrib-note">
              An independent volunteer role. Claude Community is an Anthropic
              community program. This page is independently maintained by
              Pricilla Ricapa and is not an official Anthropic website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
