import { company } from "../data/company.js";
import { formatAddress } from "../utils/links.js";

function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="container legal-page__inner">
        <p className="eyebrow">Informativa privacy</p>
        <h1>Privacy Policy</h1>

        <section>
          <h2>Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento è {company.legalName}, con sede in {formatAddress()}, P. IVA{" "}
            {company.vatNumber}, VAT {company.europeanVat}.
          </p>
        </section>

        <section>
          <h2>Dati trattati tramite il sito</h2>
          <p>
            Il sito è una vetrina statica e non prevede registrazione, aree riservate, form di contatto, database utenti
            o invio diretto di dati a un backend. La navigazione può comportare il trattamento di dati tecnici
            normalmente trasmessi dal browser, come indirizzo IP, informazioni sul dispositivo, data e ora della richiesta
            e pagine visitate, da parte della piattaforma di hosting e dei servizi necessari alla visualizzazione del
            sito.
          </p>
        </section>

        <section>
          <h2>Contatti volontari</h2>
          <p>
            L'utente può contattare {company.name} tramite telefono o WhatsApp. I dati comunicati volontariamente, come
            nome, recapito, contenuto del messaggio, immagini inviate o informazioni sul lavoro richiesto, vengono
            utilizzati per rispondere alla richiesta, valutare l'intervento e gestire il rapporto professionale.
          </p>
        </section>

        <section>
          <h2>Base giuridica e finalità</h2>
          <p>
            Il trattamento dei dati comunicati dall'utente è necessario per dare seguito alla richiesta ricevuta, per
            fornire informazioni, preventivi o sopralluoghi e, se richiesto, per avviare o gestire il rapporto
            contrattuale. I dati tecnici di navigazione sono trattati per consentire il funzionamento, la sicurezza e la
            corretta erogazione del sito.
          </p>
        </section>

        <section>
          <h2>Servizi tecnici esterni</h2>
          <p>
            Il sito può caricare risorse tecniche da fornitori esterni, ad esempio file font da Fontshare e file statici
            dalla piattaforma di hosting. Tali fornitori possono ricevere dati tecnici necessari alla richiesta della
            risorsa, come l'indirizzo IP e informazioni sul browser. Il sito non usa strumenti di analytics, pixel
            pubblicitari, aree riservate, mappe incorporate o video incorporati.
          </p>
        </section>

        <section>
          <h2>Comunicazione e conservazione</h2>
          <p>
            I dati non vengono ceduti a terzi per finalità di marketing. Possono essere trattati da fornitori tecnici o
            consulenti che supportano il titolare nella gestione del sito, della comunicazione o degli adempimenti
            amministrativi. I dati ricevuti tramite contatto vengono conservati per il tempo necessario a gestire la
            richiesta e gli eventuali obblighi collegati.
          </p>
        </section>

        <section>
          <h2>Diritti dell'interessato</h2>
          <p>
            L'utente può chiedere accesso, rettifica, cancellazione, limitazione o opposizione al trattamento dei propri
            dati, nei casi previsti dalla normativa applicabile. Le richieste possono essere inviate usando i recapiti
            indicati sul sito. Resta fermo il diritto di proporre reclamo all'autorità di controllo competente.
          </p>
        </section>
      </div>
    </article>
  );
}

export default PrivacyPage;
