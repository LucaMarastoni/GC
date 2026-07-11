import ContactButton from "./ContactButton.jsx";

function FinalCTA() {
  return (
    <section className="final-cta" id="contatti" aria-labelledby="final-cta-title">
      <div className="container final-cta__inner" data-reveal>
        <div>
          <p className="eyebrow">Contatto diretto</p>
          <h2 id="final-cta-title">
            Hai un lavoro da realizzare?
            <span>Parliamone.</span>
          </h2>
          <p>
            Contatta GC Finiture Edili per descrivere il tuo progetto e verificare la disponibilità in provincia di
            Verona.
          </p>
        </div>
        <div className="final-cta__actions">
          <ContactButton type="phone" className="btn--primary" size="large">
            Chiama Giulio
          </ContactButton>
          <ContactButton type="whatsapp" className="btn--light" size="large">
            Scrivi su WhatsApp
          </ContactButton>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
