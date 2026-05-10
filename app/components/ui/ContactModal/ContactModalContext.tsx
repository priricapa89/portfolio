import { createContext, useContext, useState } from "react";
import { ContactModal } from "./ContactModal";

interface ContactModalContextValue {
  openContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue>({
  openContactModal: () => {},
});

export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ openContactModal: () => setOpen(true) }}>
      {children}
      {open && <ContactModal onClose={() => setOpen(false)} />}
    </ContactModalContext.Provider>
  );
}
