import "./CredentialsSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { appointments, credentials, education } from "~/data/credentials";

export function CredentialsSection() {
  return (
    <section className="creds" id="credentials">
      <SectionHeader
        pill="Credentials"
        heading={
          <>
            Education, <span className="warm-hl">certifications</span> and
            recognition
          </>
        }
      />

      <h3 className="creds-sub">Education</h3>
      <div className="edu-grid">
        {education.map((e) => (
          <div className="edu-card" key={e.school}>
            <div className="edu-logo">
              <img src={e.logo} alt={e.school} loading="lazy" />
            </div>
            <span className="cred-issuer">{e.school}</span>
            <h3 className="cred-name">{e.program}</h3>
            {e.detail && <span className="cred-meta">{e.detail}</span>}
          </div>
        ))}
      </div>

      <h3 className="creds-sub">Certifications</h3>
      <div className="creds-grid">
        {credentials.map((c) => (
          <a
            key={c.credentialId}
            className="cred-card"
            href={c.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="cred-issuer">{c.issuer}</span>
            <h3 className="cred-name">{c.name}</h3>
            <span className="cred-meta">Issued {c.issued}</span>
            <span className="cred-verify">Verify credential →</span>
          </a>
        ))}
      </div>

      <h3 className="creds-sub">Recognition &amp; roles</h3>
      <ul className="creds-appointments">
        {appointments.map((a) => (
          <li key={`${a.org}-${a.role}`}>
            <span className="cred-role">{a.role}</span>
            <span className="cred-org">{a.org}</span>
            <span className="cred-period">
              {a.period}
              {a.detail ? ` · ${a.detail}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
