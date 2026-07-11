import { BadgeCheck, Building2, CheckCircle2, ChevronLeft, ChevronRight, Ruler, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const benefits = [
  {
    icon: Ruler,
    title: "Soluzioni studiate in base agli spazi",
    text: "Ogni scelta viene valutata rispetto alla funzione dell'ambiente e al risultato desiderato."
  },
  {
    icon: CheckCircle2,
    title: "Attenzione alla preparazione e alle finiture",
    text: "La resa finale parte da superfici preparate con ordine e da passaggi esecutivi precisi."
  },
  {
    icon: BadgeCheck,
    title: "Interlocutore diretto",
    text: "Il confronto resta concreto, con indicazioni chiare su soluzione, materiali e modalità di intervento."
  },
  {
    icon: ShieldCheck,
    title: "Materiali scelti in funzione del lavoro",
    text: "Prodotti e cicli applicativi vengono selezionati in base alle superfici e alle condizioni d'uso."
  },
  {
    icon: Building2,
    title: "Interventi per case e attività",
    text: "Lavorazioni pensate per abitazioni, uffici, negozi e locali professionali."
  },
  {
    icon: ShieldCheck,
    title: "Presenza sul territorio veronese",
    text: "Sede a Vigasio e operatività orientata a Verona e ai comuni della provincia."
  }
];

function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef(null);

  const goTo = (index) => setActiveIndex((index + benefits.length) % benefits.length);
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
    <section className="section benefits" id="perche-sceglierci">
      <div className="container">
        <SectionHeading
          eyebrow="Perché scegliere GC Finiture Edili"
          title="Concretezza, cura del dettaglio e presenza sul territorio."
          text="Vantaggi credibili, senza promesse assolute o numeri non verificati."
        />
        <div
          className="benefits__carousel"
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
          <div className="benefits__grid" style={{ "--benefit-index": activeIndex }}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <article className="benefit" key={title} data-reveal>
                <Icon size={24} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="benefits__mobile-controls" aria-label="Controlli carosello vantaggi">
          <button type="button" aria-label="Vantaggio precedente" onClick={previous}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="benefits__mobile-dots" aria-label="Seleziona vantaggio">
            {benefits.map((benefit, index) => (
              <button
                key={benefit.title}
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                aria-label={`Mostra vantaggio ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Vantaggio successivo" onClick={next}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
