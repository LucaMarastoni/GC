import { ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { getFallbackContactHref, getPhoneHref, getWhatsAppHref } from "../utils/links.js";

const iconMap = {
  phone: Phone,
  whatsapp: WhatsAppIcon,
  arrow: ArrowRight
};

function ContactButton({ type = "phone", children, className = "", size = "default" }) {
  const Icon = iconMap[type] || ArrowRight;
  const href = type === "whatsapp" ? getWhatsAppHref() : getPhoneHref();
  const isMissing = !href;

  return (
    <a
      className={`btn ${className} ${size === "large" ? "btn--large" : ""} ${isMissing ? "btn--pending" : ""}`}
      href={href || getFallbackContactHref()}
      target={type === "whatsapp" && href ? "_blank" : undefined}
      rel={type === "whatsapp" && href ? "noreferrer" : undefined}
      aria-label={isMissing ? `${children} - dato di contatto da inserire` : undefined}
    >
      <Icon size={20} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export default ContactButton;
