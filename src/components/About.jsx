import { MapPin, PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { assetPath } from "../utils/assets.js";

function About() {
  return (
    <section className="section about section--surface" id="chi-siamo">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img
            src={assetPath("images/about/imbianchino-al-lavoro.webp")}
            alt="Imbianchino al lavoro con rullo su una parete interna"
            width="900"
            height="700"
            loading="lazy"
          />
        </div>
        <div className="about__content">
          <SectionHeading eyebrow="Chi siamo" title="Giulio Curinga, un riferimento diretto per ogni finitura." />
          <div className="rich-text" data-reveal>
            <p>
              GC Finiture Edili è l'attività di Giulio Curinga, professionista specializzato in cartongesso,
              tinteggiature interne ed esterne e soluzioni per l'isolamento termico.
            </p>
            <p>
              Ogni lavoro viene seguito con un confronto diretto, attenzione alla preparazione delle superfici e cura
              della finitura finale, per abitazioni, uffici e attività commerciali in provincia di Verona.
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
