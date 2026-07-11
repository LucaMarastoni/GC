import { BadgeCheck, Building2, CheckCircle2, Ruler, ShieldCheck } from "lucide-react";
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
  return (
    <section className="section benefits" id="perche-sceglierci">
      <div className="container">
        <SectionHeading
          eyebrow="Perché scegliere GC Finiture Edili"
          title="Concretezza, cura del dettaglio e presenza sul territorio."
          text="Vantaggi credibili, senza promesse assolute o numeri non verificati."
        />
        <div className="benefits__grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article className="benefit" key={title} data-reveal>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
