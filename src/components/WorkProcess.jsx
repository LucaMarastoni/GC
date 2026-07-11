import { ChevronLeft, ChevronRight, ClipboardCheck } from "lucide-react";
import { useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef(null);

  const goTo = (index) => setActiveIndex((index + steps.length) % steps.length);
  const previous = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const handleSwipeEnd = (clientX) => {
    if (swipeStartX.current === null) {
      return;
    }

    const deltaX = clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(deltaX) < 42) {
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      previous();
    }
  };

  return (
    <section className="section process" id="processo">
      <div className="container">
        <SectionHeading
          eyebrow="Processo di lavoro"
          title="Un percorso semplice, dal primo confronto alla finitura."
          text="Nessuna tempistica preconfezionata: ogni intervento viene valutato in base a spazi, superfici e modalità operative."
        />

        <div
          className="process__carousel"
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse") {
              swipeStartX.current = event.clientX;
            }
          }}
          onPointerUp={(event) => handleSwipeEnd(event.clientX)}
          onPointerCancel={() => {
            swipeStartX.current = null;
          }}
          onTouchStart={(event) => {
            swipeStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => handleSwipeEnd(event.changedTouches[0].clientX)}
        >
          <div className="process__list" style={{ "--process-index": activeIndex }}>
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

        <div className="process__mobile-controls" aria-label="Controlli carosello processo">
          <button type="button" aria-label="Fase precedente" onClick={previous}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="process__mobile-dots" aria-label="Seleziona fase">
            {steps.map((step, index) => (
              <button
                key={step.title}
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                aria-label={`Mostra fase ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Fase successiva" onClick={next}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
