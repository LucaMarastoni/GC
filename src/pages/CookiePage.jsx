import { company } from "../data/company.js";

function CookiePage() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">Informativa cookie</p>
        <h1>Cookie Policy</h1>

        <section>
          <h2>Cookie usati dal sito</h2>
          <p>
            Il sito non imposta cookie di profilazione e non usa strumenti di analytics, pixel pubblicitari, iframe di
            mappe o video incorporati. La navigazione è possibile senza consenso a finalità statistiche o pubblicitarie,
            perché tali strumenti non sono presenti.
          </p>
        </section>

        <section>
          <h2>Cookie tecnici e risorse necessarie</h2>
          <p>
            Il sito è realizzato come applicazione statica React/Vite. Eventuali dati tecnici raccolti dalla piattaforma
            di hosting o dai fornitori necessari alla visualizzazione delle risorse servono al funzionamento, alla
            sicurezza e all'erogazione del sito. Questi trattamenti non hanno finalità pubblicitarie o di profilazione da
            parte di {company.name}.
          </p>
        </section>

        <section>
          <h2>Font e servizi esterni</h2>
          <p>
            Il sito carica i font Cabinet Grotesk e General Sans tramite Fontshare. La richiesta dei file font può
            comportare la trasmissione di dati tecnici, come indirizzo IP e informazioni sul browser, al fornitore del
            servizio. I link a WhatsApp o ad altri servizi esterni vengono aperti solo dopo un'azione volontaria
            dell'utente e sono soggetti alle informative dei rispettivi fornitori.
          </p>
        </section>

        <section>
          <h2>Consenso cookie</h2>
          <p>
            Il sito non installa cookie non tecnici prima del consenso e non usa strumenti di tracciamento, analytics o
            profilazione. Per questo non viene mostrato un banner di consenso. Se in futuro verranno aggiunti servizi che
            richiedono consenso, questa informativa e la gestione delle preferenze saranno aggiornate prima
            dell'attivazione.
          </p>
        </section>

        <section>
          <h2>Gestione dal browser</h2>
          <p>
            L'utente può gestire, bloccare o cancellare cookie e dati locali attraverso le impostazioni del proprio
            browser. La disattivazione di cookie tecnici eventualmente usati da servizi esterni può incidere sul corretto
            funzionamento di tali servizi.
          </p>
        </section>
      </div>
    </article>
  );
}

export default CookiePage;
