import { company } from "../data/company.js";

function CookiePage() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">Bozza da verificare</p>
        <h1>Cookie Policy</h1>
        <p className="legal-page__notice">
          Questa Cookie Policy è una bozza tecnica relativa alla configurazione iniziale del sito statico di{" "}
          {company.name}. Deve essere verificata prima della pubblicazione definitiva.
        </p>

        <section>
          <h2>Cookie nella configurazione iniziale</h2>
          <p>
            Il sito, nella configurazione iniziale, non utilizza cookie di profilazione, strumenti di analytics, pixel di
            tracciamento, iframe di mappe o video incorporati.
          </p>
        </section>

        <section>
          <h2>Cookie tecnici</h2>
          <p>
            Il sito è realizzato come applicazione statica React/Vite e non imposta direttamente cookie tecnici per il
            funzionamento delle pagine. Eventuali cookie potrebbero dipendere dalla piattaforma di hosting o da servizi
            esterni aperti volontariamente dall'utente.
          </p>
        </section>

        <section>
          <h2>Servizi esterni linkati</h2>
          <p>
            I link a WhatsApp, email e Google Maps aprono servizi esterni in base all'azione dell'utente. Tali servizi
            possono applicare proprie regole su cookie e tecnologie simili.
          </p>
        </section>

        <section>
          <h2>Banner cookie</h2>
          <p>
            In assenza di cookie non tecnici gestiti direttamente dal sito, nella configurazione iniziale non viene
            mostrato un banner cookie. L'introduzione futura di analytics, pixel o contenuti incorporati richiede una
            nuova valutazione.
          </p>
        </section>
      </div>
    </article>
  );
}

export default CookiePage;
