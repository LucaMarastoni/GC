import { MapPin, PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { assetPath } from "../utils/assets.js";

function About() {
  return (
    <section className="section about section--surface" id="chi-siamo">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img
            src={assetPath("images/hero/pitture-interne.webp")}
            alt="Ambiente interno in lavorazione con superfici protette e strumenti da tinteggiatura"
            width="900"
            height="700"
            loading="lazy"
          />
        </div>
        <div className="about__content">
          <SectionHeading eyebrow="Chi siamo" title="Un interlocutore diretto, dall'inizio alla finitura." />
          <div className="rich-text" data-reveal>
            <p>
              GC Finiture Edili segue lavorazioni in cartongesso, tinteggiatura e isolamento termico con attenzione alla
              preparazione delle superfici, all'ordine del lavoro e alla qualità della finitura finale.
            </p>
            <p>
              L'attività opera da Vigasio verso Verona e i comuni della provincia, rivolgendosi a privati, uffici e
              attività commerciali.
            </p>
          </div>
          <div className="about__signature" data-reveal>
            <PenLine size={22} aria-hidden="true" />
            <div>
              <strong>Giulio Curinga</strong>
              <span>GC Finiture Edili</span>
            </div>
          </div>
          <p className="about__place" data-reveal>
            <MapPin size={18} aria-hidden="true" />
            Sede a Vigasio. Interventi in tutta la provincia di Verona.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
