import { X } from "lucide-react";
import ContactButton from "./ContactButton.jsx";

function MobileMenu({ isOpen, onClose, links, logoSrc }) {
  return (
    <div className={`mobile-menu ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <button className="mobile-menu__scrim" type="button" tabIndex={isOpen ? 0 : -1} onClick={onClose}>
        <span className="sr-only">Chiudi menu</span>
      </button>
      <aside className="mobile-menu__panel" aria-label="Menu principale">
        <div className="mobile-menu__top">
          <a className="brand brand--menu" href="#home" onClick={onClose}>
            <img src={logoSrc} alt="GC Finiture Edili" width="180" height="52" />
          </a>
          <button className="icon-button" type="button" aria-label="Chiudi menu" onClick={onClose}>
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-menu__nav" aria-label="Navigazione mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__cta">
          <ContactButton type="phone" className="btn--primary" size="large">
            Chiama ora
          </ContactButton>
          <ContactButton type="whatsapp" className="btn--whatsapp" size="large">
            WhatsApp
          </ContactButton>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
