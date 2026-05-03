import "./EmailSubscribeForm.css";
import { useState } from "react";

interface EmailSubscribeFormProps {
  buttonLabel: string;
  confirmationMessage: string;
}

export function EmailSubscribeForm({
  buttonLabel,
  confirmationMessage,
}: EmailSubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="subscribe-form">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => { if (email) { setSubmitted(true); setEmail(""); } }}>
          {buttonLabel}
        </button>
      </div>
      {submitted && (
        <div className="subscribe-confirmation">{confirmationMessage}</div>
      )}
    </>
  );
}
