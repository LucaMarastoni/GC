import { ArrowRight, MapPin } from "lucide-react";

function IntroSplitSection() {
  return (
    <section className="intro-split" aria-label="Introduzione ai servizi">
      <div className="container intro-split__panel">
        <div className="intro-split__primary">
          <p className="eyebrow">Interventi per interni ed esterni</p>
          <h2>Lavorazioni professionali per interni ed esterni</h2>
          <p>
            GC Finiture Edili realizza interventi in cartongesso, tinteggiature e isolamento termico per abitazioni,
            uffici e attività commerciali.
          </p>
          <a href="#servizi" className="intro-split__link">
            Scopri tutti i servizi <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="intro-split__area">
          <MapPin size={28} aria-hidden="true" />
          <h2>Operativi in tutta la provincia di Verona</h2>
          <p>Dalla sede di Vigasio, l'attività opera a Verona e nei comuni della provincia.</p>
          <a href="#contatti" className="intro-split__area-link">
            Verifica la disponibilità
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSplitSection;
