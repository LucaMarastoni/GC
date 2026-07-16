import SectionHeading from "./SectionHeading.jsx";
import { seoData } from "../data/seo.js";

function SeoContent() {
  return (
    <section className="section seo-local section--surface" id="finiture-edili-verona">
      <div className="container seo-local__grid">
        <div className="seo-local__content" data-reveal>
          <SectionHeading
            eyebrow="Finiture edili Verona"
            title="Cartongesso, tinteggiature e isolamento termico a Vigasio e Verona."
            text="Un unico riferimento per lavori di finitura interna ed esterna, dalla preparazione delle superfici alla consegna del lavoro finito."
          />
          <div className="rich-text">
            <p>
              GC Finiture Edili segue interventi per abitazioni, uffici e attività commerciali in provincia di Verona,
              con lavorazioni in cartongesso, pitture interne, pitture esterne, isolamento termico e cappotti.
            </p>
            <p>
              Ogni lavoro viene valutato in base agli spazi, allo stato delle superfici e al risultato richiesto, con
              attenzione alla pulizia del cantiere, alla scelta dei materiali e alla cura della finitura finale.
            </p>
          </div>
        </div>

        <aside className="seo-local__panel" aria-label="Zone servite" data-reveal>
          <h3>Zone servite</h3>
          <ul>
            {seoData.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="container seo-faq" data-reveal>
        <h2>Domande frequenti su lavori e sopralluoghi</h2>
        <div className="seo-faq__list">
          {seoData.faqs.map((faq) => (
            <details key={faq.question} className="seo-faq__item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeoContent;
