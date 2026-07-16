import { company } from "../data/company.js";
import { projects } from "../data/projects.js";
import { seoData } from "../data/seo.js";
import { services } from "../data/services.js";
import { getMapsHref, isMissingValue, normalizePhone } from "./links.js";

const getSiteBase = () =>
  !isMissingValue(company.domain) && company.domain.startsWith("http")
    ? company.domain.replace(/\/$/, "")
    : window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, "");

export const absoluteUrl = (path = "") => {
  if (!path) {
    return `${getSiteBase()}/`;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${getSiteBase()}/${path.replace(/^\//, "")}`;
};

const routeSeo = {
  home: {
    title: seoData.title,
    description: seoData.description,
    canonicalPath: "",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  },
  privacy: {
    title: "Privacy Policy | GC Finiture Edili",
    description: "Informativa privacy di GC Finiture Edili sul trattamento dei dati e sui contatti volontari.",
    canonicalPath: "#/privacy",
    robots: "noindex, follow"
  },
  cookie: {
    title: "Cookie Policy | GC Finiture Edili",
    description: "Informativa cookie di GC Finiture Edili: sito senza analytics, pixel pubblicitari o profilazione.",
    canonicalPath: "#/cookie",
    robots: "noindex, follow"
  }
};

export const getCanonicalUrl = (route = "home") => {
  const page = routeSeo[route] || routeSeo.home;
  return page.canonicalPath ? `${getSiteBase()}/${page.canonicalPath}` : `${getSiteBase()}/`;
};

export const getPageSeo = (route = "home") => {
  const page = routeSeo[route] || routeSeo.home;

  return {
    ...page,
    canonical: getCanonicalUrl(route),
    image: absoluteUrl(seoData.image),
    imageAlt: seoData.imageAlt,
    siteName: seoData.siteName,
    locale: seoData.locale
  };
};

const serviceUrl = (service) => absoluteUrl(`#servizi-${service.id}`);

const getServiceGraph = () =>
  services.map((service) => ({
    "@type": "Service",
    "@id": serviceUrl(service),
    name: `${service.title} a Verona e provincia`,
    description: service.description,
    serviceType: service.title,
    areaServed: seoData.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area
    })),
    provider: {
      "@id": `${getSiteBase()}/#business`
    },
    url: absoluteUrl(`#servizi`)
  }));

const getOfferCatalog = () => ({
  "@type": "OfferCatalog",
  "@id": `${getSiteBase()}/#servizi-offerti`,
  name: "Servizi di finiture edili a Verona",
  itemListElement: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@id": serviceUrl(service)
    }
  }))
});

export const getJsonLd = () => {
  const phone = normalizePhone(company.phone);
  const businessId = `${getSiteBase()}/#business`;
  const websiteId = `${getSiteBase()}/#website`;
  const webpageId = `${getSiteBase()}/#webpage`;
  const breadcrumbId = `${getSiteBase()}/#breadcrumb`;
  const faqId = `${getSiteBase()}/#faq`;
  const mainImage = absoluteUrl(seoData.image);
  const logo = absoluteUrl(company.logo);
  const serviceGraph = getServiceGraph();

  const business = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: company.name,
    legalName: company.legalName,
    url: getCanonicalUrl("home"),
    logo,
    image: [mainImage, ...projects.slice(0, 4).map((project) => absoluteUrl(project.image))],
    description: seoData.description,
    telephone: phone,
    vatID: company.europeanVat,
    taxID: company.vatNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: "IT"
    },
    hasMap: getMapsHref(),
    areaServed: seoData.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      availableLanguage: ["it-IT"],
      areaServed: "Provincia di Verona"
    },
    knowsAbout: seoData.keywords,
    hasOfferCatalog: {
      "@id": `${getSiteBase()}/#servizi-offerti`
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@id": serviceUrl(service)
      }
    }))
  };

  if (!phone) {
    delete business.telephone;
    delete business.contactPoint;
  }

  if (!isMissingValue(company.email)) {
    business.email = company.email;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: getCanonicalUrl("home"),
        name: seoData.siteName,
        description: seoData.description,
        inLanguage: seoData.language,
        publisher: {
          "@id": businessId
        }
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: getCanonicalUrl("home"),
        name: seoData.title,
        description: seoData.description,
        inLanguage: seoData.language,
        isPartOf: {
          "@id": websiteId
        },
        about: {
          "@id": businessId
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${getSiteBase()}/#primaryimage`,
          url: mainImage,
          contentUrl: mainImage,
          caption: seoData.imageAlt,
          width: seoData.imageWidth,
          height: seoData.imageHeight
        },
        breadcrumb: {
          "@id": breadcrumbId
        }
      },
      business,
      getOfferCatalog(),
      ...serviceGraph,
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: seoData.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "GC Finiture Edili",
            item: getCanonicalUrl("home")
          }
        ]
      }
    ]
  };
};
