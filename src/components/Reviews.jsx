import { useEffect, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { reviews } from "../data/reviews.js";

function Reviews() {
  const hasReviews = reviews.items.length > 0;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews.items[activeIndex];

  useEffect(() => {
    if (!hasReviews || reviews.items.length < 2) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.items.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, [hasReviews]);

  return (
    <section className="section reviews" id="recensioni">
      <div className="container">
        <SectionHeading
          eyebrow="Recensioni"
          title="Le opinioni dei clienti"
          text="Esperienze raccolte da lavori di finitura, tinteggiatura, cartongesso e isolamento in provincia di Verona."
        />

        {hasReviews ? (
          <div className="reviews__carousel" data-reveal>
            <article className="review-card review-card--featured" key={`${activeReview.name}-${activeIndex}`}>
              <div>
                <div className="review-card__stars" aria-label="Valutazione 5 stelle su 5">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={18} aria-hidden="true" fill="currentColor" />
                  ))}
                </div>
                <p>{activeReview.text}</p>
              </div>
              <strong>{activeReview.name}</strong>
            </article>

            <div className="reviews__controls" aria-label="Seleziona recensione">
              {reviews.items.map((review, index) => (
                <button
                  key={`${review.name}-${review.date}`}
                  className={index === activeIndex ? "is-active" : ""}
                  type="button"
                  aria-label={`Mostra recensione ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="reviews__empty" data-reveal>
            <Star size={28} aria-hidden="true" />
            <p>
              Quando saranno disponibili recensioni autentiche o un profilo professionale verificabile, questa sezione
              potrà essere aggiornata dal file dati dedicato.
            </p>
            {reviews.profileUrl ? (
              <a href={reviews.profileUrl} target="_blank" rel="noreferrer">
                Consulta il profilo professionale <ExternalLink size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

export default Reviews;
