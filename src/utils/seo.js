import { company } from "../data/company.js";
import { assetPath } from "./assets.js";
import { formatAddress, isMissingValue, normalizePhone } from "./links.js";

export const getCanonicalUrl = (route = "home") => {
  const base =
    !isMissingValue(company.domain) && company.domain.startsWith("http")
      ? company.domain.replace(/\/$/, "")
      : window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, "");

  if (route === "privacy") {
    return `${base}/#/privacy`;
  }

  if (route === "cookie") {
    return `${base}/#/cookie`;
  }

  return `${base}/`;
};

export const getJsonLd = () => {
  const phone = normalizePhone(company.phone);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    legalName: company.legalName,
    image: assetPath("images/hero/cartongesso.webp"),
    vatID: company.europeanVat,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: "IT"
    },
    areaServed: ["Vigasio", "Verona", "Provincia di Verona"],
    description:
      "Servizi di cartongesso, pitture interne ed esterne e isolamento termico per abitazioni, uffici e attività commerciali.",
    url: getCanonicalUrl("home")
  };

  if (phone) {
    jsonLd.telephone = phone;
  }

  if (!isMissingValue(company.email)) {
    jsonLd.email = company.email;
  }

  jsonLd.addressText = formatAddress();
  return jsonLd;
};
