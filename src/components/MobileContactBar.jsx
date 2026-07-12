import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { getFallbackContactHref, getPhoneHref, getWhatsAppHref } from "../utils/links.js";

function MobileContactBar() {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();

  return (
    <nav className="mobile-contact-bar" aria-label="Contatti rapidi">
      <a className={!phoneHref ? "is-pending" : ""} href={phoneHref || getFallbackContactHref()}>
        <Phone size={20} aria-hidden="true" />
        <span>Chiama</span>
      </a>
      <a
        className={`mobile-contact-bar__whatsapp ${!whatsappHref ? "is-pending" : ""}`}
        href={whatsappHref || getFallbackContactHref()}
        target={whatsappHref ? "_blank" : undefined}
        rel={whatsappHref ? "noreferrer" : undefined}
      >
        <WhatsAppIcon size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}

export default MobileContactBar;
