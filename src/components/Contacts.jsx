import { Clock, MapPin } from "lucide-react";
import ContactButton from "./ContactButton.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Contacts() {
  return (
    <section className="section contacts section--surface" id="contatti">
      <div className="container contacts__grid">
        <div className="contacts__content">
          <SectionHeading
            eyebrow="Contatti"
            title="Racconta il lavoro e verifica la disponibilità."
            text="Per un sopralluogo o un preventivo, invia qualche dettaglio sul lavoro: zona, tipo di intervento e tempi desiderati."
          />

          <div className="contacts__notes" data-reveal>
            <div>
              <MapPin size={18} aria-hidden="true" />
              <span>Operiamo in tutta la provincia di Verona.</span>
            </div>
            <div>
              <Clock size={18} aria-hidden="true" />
              <span>Risposta rapida per disponibilità, sopralluoghi e preventivi.</span>
            </div>
          </div>
        </div>

        <div className="contacts__panel" data-reveal>
          <p className="contacts__panel-kicker">Parla direttamente con Giulio</p>
          <h3>Meglio partire da una chiamata o da WhatsApp.</h3>
          <p>
            Mandaci foto, misure indicative o una breve descrizione del lavoro: ti aiutiamo a capire il prossimo passo.
          </p>
          <div className="contacts__actions" data-reveal>
            <ContactButton type="phone" className="btn--primary" size="large">
              Chiama ora
            </ContactButton>
            <ContactButton type="whatsapp" className="btn--whatsapp" size="large">
              WhatsApp
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
