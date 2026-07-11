import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { heroSlides } from "../data/heroSlides.js";
import { services } from "../data/services.js";
import { assetPath } from "../utils/assets.js";

const serviceImages = {
  cartongesso: heroSlides[0].image,
  "pitture-interne": heroSlides[1].image,
  "pitture-esterne": heroSlides[2].image,
  "isolamenti-termici": heroSlides[3].image
};

function Services() {
  const [activeService, setActiveService] = useState(services[0].id);
  const active = services.find((service) => service.id === activeService) || services[0];

  return (
    <section className="section services" id="servizi">
      <div className="container services__layout">
        <div className="services__intro">
          <SectionHeading
            eyebrow="Servizi"
            title="Superfici, divisioni e isolamento: quattro ambiti, un solo modo di lavorare."
            text="Ogni servizio parte da una valutazione concreta di spazi, supporti e finitura attesa."
          />
          <div className="services__image" aria-label={`Immagine associata a ${active.title}`}>
            <img
              src={assetPath(serviceImages[active.id] || serviceImages.cartongesso)}
              alt=""
              width="1800"
              height="900"
              loading="lazy"
            />
            <span>{active.title}</span>
          </div>
        </div>

        <div className="services__list">
          {services.map((service, index) => (
            <article
              className={`service-row ${service.id === activeService ? "is-active" : ""}`}
              key={service.id}
              onMouseEnter={() => setActiveService(service.id)}
              onFocus={() => setActiveService(service.id)}
            >
              <button type="button" onClick={() => setActiveService(service.id)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.title}</strong>
              </button>
              <p>{service.description}</p>
              <a href="#contatti">
                Richiedi informazioni <ArrowRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
