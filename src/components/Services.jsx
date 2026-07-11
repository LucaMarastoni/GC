import { useEffect, useMemo, useRef, useState } from "react";
import { heroSlides } from "../data/heroSlides.js";
import { services } from "../data/services.js";
import { assetPath } from "../utils/assets.js";

const iconMap = {
  cartongesso: "images/icons/cartongesso.png",
  "pitture-interne": "images/icons/PittureInterne.png",
  "pitture-esterne": "images/icons/PittureEsterne.png",
  "isolamenti-termici": "images/icons/IsolamentiTermici.png"
};

const imageMap = {
  cartongesso: heroSlides[0].image,
  "pitture-interne": heroSlides[1].image,
  "pitture-esterne": heroSlides[2].image,
  "isolamenti-termici": heroSlides[3].image
};

const intro = {
  eyebrow: "I nostri servizi",
  title: "Soluzioni su misura, fatte per durare.",
  text:
    "Ogni progetto è unico. Offriamo servizi professionali per interni ed esterni, con attenzione ai dettagli e materiali di qualità."
};

function ServiceIcon({ service }) {
  return (
    <span className="service-modern__icon" aria-hidden="true">
      <img src={assetPath(service.iconSrc)} alt="" width="44" height="44" loading="lazy" />
    </span>
  );
}

function ServiceArrow() {
  return (
    <span className="service-modern__arrow" aria-hidden="true">
      →
    </span>
  );
}

function Services() {
  const sectionRef = useRef(null);
  const shouldScrollToDetail = useRef(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [mobileView, setMobileView] = useState("overview");

  const serviceItems = useMemo(
    () =>
      services.map((service, index) => ({
        ...service,
        number: String(index + 1).padStart(2, "0"),
        shortDescription: service.description,
        iconSrc: iconMap[service.id],
        image: imageMap[service.id],
        imageAlt: `Lavorazione GC Finiture Edili: ${service.title.toLowerCase()}`
      })),
    []
  );

  const activeService = serviceItems[activeServiceIndex];
  const isFirst = activeServiceIndex === 0;
  const isLast = activeServiceIndex === serviceItems.length - 1;

  const scrollToSection = () => {
    window.requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const headerHeight = document.querySelector(".brand-header")?.getBoundingClientRect().height || 0;
      const targetTop = section.getBoundingClientRect().top + window.scrollY - headerHeight - 28;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });
    });
  };

  const openMobileDetail = (index) => {
    shouldScrollToDetail.current = true;
    setActiveServiceIndex(index);
    setMobileView("detail");
  };

  useEffect(() => {
    if (mobileView !== "detail" || !shouldScrollToDetail.current) {
      return;
    }

    shouldScrollToDetail.current = false;
    scrollToSection();
  }, [mobileView, activeServiceIndex]);

  const goToService = (index) => {
    setActiveServiceIndex(index);
  };

  const goPrevious = () => {
    if (!isFirst) {
      setActiveServiceIndex((current) => current - 1);
    }
  };

  const goNext = () => {
    if (!isLast) {
      setActiveServiceIndex((current) => current + 1);
    }
  };

  return (
    <section className="section services services-modern" id="servizi" ref={sectionRef}>
      <div className="container">
        <div className="services-modern__desktop">
          <div className="services-modern__copy">
            <p className="services-modern__eyebrow">{intro.eyebrow}</p>
            <h2>{intro.title}</h2>
            <p>{intro.text}</p>

            <div className="services-modern__list" aria-label="Elenco servizi">
              {serviceItems.map((service, index) => (
                <button
                  className={`service-modern-card ${index === activeServiceIndex ? "is-active" : ""}`}
                  key={service.id}
                  type="button"
                  aria-label={`Mostra dettagli servizio ${service.title}`}
                  aria-current={index === activeServiceIndex ? "true" : undefined}
                  onClick={() => goToService(index)}
                >
                  <ServiceIcon service={service} />
                  <span className="service-modern-card__body">
                    <span className="service-modern-card__number">{service.number}</span>
                    <strong>{service.title}</strong>
                    <span>{service.shortDescription}</span>
                  </span>
                  <ServiceArrow />
                </button>
              ))}
            </div>
          </div>

          <aside className="services-modern__visual" aria-live="polite">
            <div className="services-modern__image-wrap">
              <img
                src={assetPath(activeService.image)}
                alt={activeService.imageAlt}
                width="900"
                height="680"
                loading="lazy"
              />
            </div>
            <div className="services-modern__visual-body">
              <span>
                {activeService.number} / {String(serviceItems.length).padStart(2, "0")}
              </span>
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <a className="services-modern__cta" href="#contatti">
                Richiedi informazioni <span aria-hidden="true">→</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="services-modern__mobile">
          {mobileView === "overview" ? (
            <div className="services-modern__overview">
              <p className="services-modern__eyebrow">{intro.eyebrow}</p>
              <h2>{intro.title}</h2>
              <p>{intro.text}</p>

              <div className="services-modern__list" aria-label="Panoramica servizi">
                {serviceItems.map((service, index) => (
                  <button
                    className="service-modern-card"
                    key={service.id}
                    type="button"
                    aria-label={`Apri dettaglio servizio ${service.title}`}
                    onClick={() => openMobileDetail(index)}
                  >
                    <ServiceIcon service={service} />
                    <span className="service-modern-card__body">
                      <span className="service-modern-card__number">{service.number}</span>
                      <strong>{service.title}</strong>
                      <span>{service.shortDescription}</span>
                    </span>
                    <ServiceArrow />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="services-modern__detail">
              <button className="services-modern__back" type="button" onClick={() => setMobileView("overview")}>
                ← Tutti i servizi
              </button>

              <span className="services-modern__counter">
                {activeService.number} / {String(serviceItems.length).padStart(2, "0")}
              </span>
              <h2>{activeService.title}</h2>
              <p>{activeService.description}</p>

              <div className="services-modern__image-wrap">
                <img
                  src={assetPath(activeService.image)}
                  alt={activeService.imageAlt}
                  width="900"
                  height="680"
                  loading="lazy"
                />
              </div>

              <div className="services-modern__dots" aria-label="Servizio attivo">
                {serviceItems.map((service, index) => (
                  <button
                    key={service.id}
                    className={index === activeServiceIndex ? "is-active" : ""}
                    type="button"
                    aria-label={`Vai al servizio ${service.title}`}
                    aria-current={index === activeServiceIndex ? "true" : undefined}
                    onClick={() => goToService(index)}
                  />
                ))}
              </div>

              <div className="services-modern__pager">
                <button type="button" disabled={isFirst} onClick={goPrevious}>
                  <span aria-hidden="true">←</span> Precedente
                </button>
                <button type="button" disabled={isLast} onClick={goNext}>
                  Successivo <span aria-hidden="true">→</span>
                </button>
              </div>

              <a className="services-modern__cta" href="#contatti">
                Richiedi informazioni <span aria-hidden="true">→</span>
              </a>

              <div className="services-modern__compact">
                <h3>Tutti i servizi</h3>
                {serviceItems.map((service, index) => (
                  <button
                    className={`services-modern__compact-item ${index === activeServiceIndex ? "is-active" : ""}`}
                    key={service.id}
                    type="button"
                    aria-label={`Mostra servizio ${service.title}`}
                    aria-current={index === activeServiceIndex ? "true" : undefined}
                    onClick={() => goToService(index)}
                  >
                    <img src={assetPath(service.iconSrc)} alt="" width="24" height="24" loading="lazy" />
                    <span>{service.number}</span>
                    <strong>{service.title}</strong>
                    <ServiceArrow />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
