import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MobileContactBar from "./components/MobileContactBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPage from "./pages/PrivacyPage.jsx";
import CookiePage from "./pages/CookiePage.jsx";
import { company } from "./data/company.js";
import { assetPath } from "./utils/assets.js";
import { getCanonicalUrl, getJsonLd } from "./utils/seo.js";

const getRoute = () => {
  const hash = window.location.hash;

  if (hash.startsWith("#/privacy")) {
    return "privacy";
  }

  if (hash.startsWith("#/cookie")) {
    return "cookie";
  }

  return "home";
};

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const pageTitle =
      route === "privacy"
        ? "Privacy Policy | GC Finiture Edili"
        : route === "cookie"
          ? "Cookie Policy | GC Finiture Edili"
          : "GC Finiture Edili | Cartongesso, pitture e isolamento a Verona";

    const pageDescription =
      route === "home"
        ? "GC Finiture Edili opera a Vigasio e in provincia di Verona con servizi di cartongesso, pitture interne ed esterne e isolamento termico."
        : "Bozza informativa per GC Finiture Edili, da verificare prima della pubblicazione definitiva.";

    document.title = pageTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", pageDescription);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", getCanonicalUrl(route));
    }

    const existingJsonLd = document.getElementById("schema-local-business");
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    if (route === "home") {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "schema-local-business";
      script.text = JSON.stringify(getJsonLd());
      document.head.appendChild(script);
    }

    if (route !== "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route]);

  useEffect(() => {
    if (route !== "home") {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash || hash.startsWith("/")) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
  }, [route]);

  const page = useMemo(() => {
    if (route === "privacy") {
      return <PrivacyPage />;
    }

    if (route === "cookie") {
      return <CookiePage />;
    }

    return <HomePage />;
  }, [route]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Salta al contenuto
      </a>
      <Header logoSrc={assetPath(company.logo)} />
      <main id="main-content">{page}</main>
      <Footer logoSrc={assetPath(company.logo)} />
      <MobileContactBar />
    </div>
  );
}

export default App;
