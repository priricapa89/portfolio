import "./CredentialsSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { appointments, credentials } from "~/data/credentials";

export function CredentialsSection() {
  return (
    <section className="creds" id="credentials">
      <SectionHeader
        pill="Credentials"
        heading={
          <>
            Recent <span className="warm-hl">certifications</span> and
            appointments
          </>
        }
      />

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
