import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import { assetPath } from "../utils/assets.js";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeStartX = useRef(null);

  const goTo = (index) => setActiveIndex((index + projects.length) % projects.length);
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
    <section className="section projects section--dark" id="lavori">
      <div className="container">
        <SectionHeading
          eyebrow="Lavorazioni e soluzioni"
          title="Una raccolta visiva pronta per fotografie autentiche."
          text="Le immagini attuali restano temporanee: la struttura è predisposta per sostituirle con lavorazioni reali."
        />

        {/* Dati e immagini provvisori: sostituire con fotografie autentiche appena disponibili. */}
        <div
          className="projects__carousel"
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
          <div className="projects__grid" style={{ "--project-index": activeIndex }}>
            {projects.map((project, index) => (
              <article className="project-card" key={project.id} data-reveal>
                <div className="project-card__image">
                  <img
                    src={assetPath(project.image)}
                    alt={project.alt}
                    width="1200"
                    height="820"
                    loading="lazy"
                  />
                </div>
                <div className="project-card__body">
                  <p>
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects__mobile-controls" aria-label="Controlli carosello lavorazioni">
          <button type="button" aria-label="Lavorazione precedente" onClick={previous}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <div className="projects__mobile-dots" aria-label="Seleziona lavorazione">
            {projects.map((project, index) => (
              <button
                key={project.id}
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                aria-label={`Mostra lavorazione ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button type="button" aria-label="Lavorazione successiva" onClick={next}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
