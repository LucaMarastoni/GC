import { ClipboardCheck } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  {
    title: "Primo contatto",
    text: "Raccontaci il tipo di intervento e le tue esigenze."
  },
  {
    title: "Valutazione",
    text: "Vengono analizzati gli spazi, le superfici e il risultato desiderato."
  },
  {
    title: "Definizione del lavoro",
    text: "Si concordano soluzione, materiali e modalità di intervento."
  },
  {
    title: "Realizzazione",
    text: "Il lavoro viene eseguito con attenzione alle preparazioni e alle finiture."
  }
];

function WorkProcess() {
  return (
    <section className="section process" id="processo">
      <div className="container">
        <SectionHeading
          eyebrow="Processo di lavoro"
          title="Un percorso semplice, dal primo confronto alla finitura."
          text="Nessuna tempistica preconfezionata: ogni intervento viene valutato in base a spazi, superfici e modalità operative."
        />

        <div className="process__list">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title} data-reveal>
              <div className="process-step__marker">
                <ClipboardCheck size={22} aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
