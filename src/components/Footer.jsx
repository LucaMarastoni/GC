import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { company } from "../data/company.js";
import { displayValue, formatAddress } from "../utils/links.js";

const footerLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#lavori", label: "Lavori" },
  { href: "#area-operativa", label: "Area operativa" },
  { href: "#contatti", label: "Contatti" }
];

function Footer({ logoSrc }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <a className="brand brand--footer" href="#home">
            <img src={logoSrc} alt="" width="180" height="52" loading="lazy" />
            <span>GC Finiture Edili</span>
          </a>
          <p>
            Cartongesso, pitture interne ed esterne e isolamento termico per abitazioni, uffici e attività commerciali a
            Vigasio, Verona e provincia.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Link footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#/privacy">Privacy Policy</a>
          <a href="#/cookie">Cookie Policy</a>
        </nav>

        <div className="site-footer__contacts">
          <p>{company.legalName}</p>
          <p>P. IVA {company.vatNumber}</p>
          <p>VAT {company.europeanVat}</p>
          <p>{formatAddress()}</p>
          <p>
            <Phone size={16} aria-hidden="true" />
            {displayValue(company.phone)}
          </p>
          <p>
            <WhatsAppIcon size={16} aria-hidden="true" />
            {displayValue(company.whatsapp)}
          </p>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {year} {company.name}</span>
      </div>
    </footer>
  );
}

export default Footer;
