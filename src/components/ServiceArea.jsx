import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { company } from "../data/company.js";

function ServiceArea() {
  return (
    <section className="section area section--surface" id="area-operativa">
      <div className="container area__grid">
        <div>
          <SectionHeading
            eyebrow="Area operativa"
            title="Operiamo in tutta la provincia di Verona."
            text="GC Finiture Edili realizza interventi in provincia di Verona per abitazioni, uffici e attività commerciali."
          />
        </div>
        <div className="area__map" aria-label={`Rappresentazione astratta dell'area: ${company.area}`} data-reveal>
          <div className="area__map-card">
            <MapPin size={30} aria-hidden="true" />
            <strong>Verona</strong>
            <span>Provincia di Verona</span>
          </div>
          <div className="area__ring area__ring--one" />
          <div className="area__ring area__ring--two" />
          <Navigation className="area__navigation" size={34} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
