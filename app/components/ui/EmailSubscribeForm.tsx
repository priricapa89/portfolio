import { useState } from "react";

interface EmailSubscribeFormProps {
  buttonLabel: string;
  confirmationMessage: string;
  buttonStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export function EmailSubscribeForm({
  buttonLabel,
  confirmationMessage,
  buttonStyle,
  inputStyle,
}: EmailSubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button
          onClick={() => { if (email) { setSubmitted(true); setEmail(""); } }}
          style={buttonStyle}
        >
          {buttonLabel}
        </button>
      </div>
      {submitted && (
        <div style={{ marginTop: 12, fontSize: "0.85rem", color: "var(--purple)", fontWeight: 500 }}>
          {confirmationMessage}
        </div>
      )}
    </>
  );
}
