import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import MobileMenu from "./MobileMenu.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { company } from "../data/company.js";
import {
  displayValue,
  getFallbackContactHref,
  getPhoneHref,
  getWhatsAppHref
} from "../utils/links.js";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servizi", label: "Servizi" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#lavori", label: "Lavorazioni" },
  { href: "#area-operativa", label: "Area operativa" },
  { href: "#contatti", label: "Contatti" }
];

function Header({ logoSrc }) {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsAppHref();

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", isMenuOpen);

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", onEscape);
    }

    return () => {
      document.body.classList.remove("is-menu-open");
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`brand-header ${isCompact ? "is-compact" : ""}`}>
        <div className="brand-header__inner">
          <a
            className={`brand-header__quick brand-header__quick--phone ${!phoneHref ? "is-pending" : ""}`}
            href={phoneHref || getFallbackContactHref()}
          >
            <Phone size={18} aria-hidden="true" />
            <span>{displayValue(company.phone)}</span>
          </a>

          <a className="brand brand--header" href="#home" aria-label="GC Finiture Edili - torna alla home">
            <img src={logoSrc} alt="GC Finiture Edili" width="180" height="52" />
          </a>

          <a
            className={`brand-header__quick brand-header__quick--whatsapp ${!whatsappHref ? "is-pending" : ""}`}
            href={whatsappHref || getFallbackContactHref()}
            target={whatsappHref ? "_blank" : undefined}
            rel={whatsappHref ? "noreferrer" : undefined}
          >
            <WhatsAppIcon size={18} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Apri menu"
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={25} aria-hidden="true" />
          </button>
        </div>
        <div id="menu-mobile">
          <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} links={navLinks} logoSrc={logoSrc} />
        </div>
      </header>

      <nav className="main-nav-bar" aria-label="Navigazione principale">
        <div className="main-nav-bar__inner">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Header;
