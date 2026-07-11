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
            Nella configurazione attuale il sito non imposta direttamente cookie tramite codice applicativo e non usa
            cookie di profilazione, strumenti di analytics, pixel pubblicitari, iframe di mappe o video incorporati.
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
          <h2>È necessario un banner cookie?</h2>
          <p>
            Nella configurazione attuale non è previsto un banner cookie, perché il sito non installa cookie non tecnici
            prima del consenso e non utilizza strumenti di tracciamento, analytics o profilazione. Se in futuro verranno
            aggiunti Google Analytics, Meta Pixel, mappe o video incorporati, chat esterne, strumenti di marketing o
            altri servizi che impostano cookie non tecnici, sarà necessario rivalutare l'informativa e introdurre un
            sistema di consenso adeguato.
          </p>
        </section>

        <section>
          <h2>Gestione dal browser</h2>
          <p>
            L'utente può gestire, bloccare o cancellare i cookie attraverso le impostazioni del proprio browser. La
            disattivazione di cookie tecnici eventualmente usati da servizi esterni può incidere sul corretto
            funzionamento di tali servizi.
          </p>
        </section>
      </div>
    </article>
  );
}

export default CookiePage;
