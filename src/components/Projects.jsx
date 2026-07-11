import SectionHeading from "./SectionHeading.jsx";
import { projects } from "../data/projects.js";
import { assetPath } from "../utils/assets.js";

function Projects() {
  return (
    <section className="section projects section--dark" id="lavori">
      <div className="container">
        <SectionHeading
          eyebrow="Lavorazioni e soluzioni"
          title="Una raccolta visiva pronta per fotografie autentiche."
          text="Le immagini attuali restano temporanee: la struttura è predisposta per sostituirle con lavorazioni reali."
        />

        {/* Dati e immagini provvisori: sostituire con fotografie autentiche appena disponibili. */}
        <div className="projects__grid">
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
    </section>
  );
}

export default Projects;
