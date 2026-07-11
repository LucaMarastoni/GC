import { company } from "../data/company.js";
import { formatAddress } from "../utils/links.js";

function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">Bozza da verificare</p>
        <h1>Privacy Policy</h1>
        <p className="legal-page__notice">
          Questa informativa è una bozza tecnica predisposta per il sito statico di {company.name}. Deve essere verificata
          da un professionista prima della pubblicazione definitiva.
        </p>

        <section>
          <h2>Titolare del trattamento</h2>
          <p>
            {company.legalName}, con sede in {formatAddress()}, P. IVA {company.vatNumber}, VAT {company.europeanVat}.
          </p>
        </section>

        <section>
          <h2>Dati trattati nella configurazione iniziale</h2>
          <p>
            Il sito non prevede registrazione, aree riservate, database, form di contatto o invio di dati a un backend.
            L'utente può contattare l'attività tramite telefono, WhatsApp, email o link a Google Maps.
          </p>
        </section>

        <section>
          <h2>Contatto tramite canali esterni</h2>
          <p>
            L'uso di WhatsApp, email, telefono o Google Maps comporta l'interazione con servizi esterni scelti
            dall'utente. Per tali servizi si applicano anche le rispettive informative privacy.
          </p>
        </section>

        <section>
          <h2>Finalità</h2>
          <p>
            I dati eventualmente comunicati dall'utente tramite i canali di contatto vengono utilizzati per rispondere
            alle richieste, valutare l'intervento descritto e gestire il rapporto professionale.
          </p>
        </section>

        <section>
          <h2>Conservazione e diritti</h2>
          <p>
            I tempi di conservazione e le modalità di esercizio dei diritti privacy devono essere confermati dal titolare
            prima della pubblicazione. L'utente può richiedere informazioni usando i recapiti indicati nella sezione
            contatti.
          </p>
        </section>
      </div>
    </article>
  );
}

export default PrivacyPage;
