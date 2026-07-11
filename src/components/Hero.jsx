import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import ContactButton from "./ContactButton.jsx";
import { heroSlides } from "../data/heroSlides.js";
import { assetPath } from "../utils/assets.js";

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const swipeStartX = useRef(null);
  const slideCount = heroSlides.length;
  const activeSlide = heroSlides[current];

  const goTo = (index) => setCurrent((index + slideCount) % slideCount);
  const next = () => setCurrent((index) => (index + 1) % slideCount);
  const previous = () => setCurrent((index) => (index - 1 + slideCount) % slideCount);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setIsReducedMotion(mediaQuery.matches);
    updateMotion();
    mediaQuery.addEventListener("change", updateMotion);
    return () => mediaQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (isReducedMotion || document.hidden) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slideCount);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [isReducedMotion, slideCount]);

  const statusText = useMemo(
    () => `Slide ${current + 1} di ${slideCount}: ${activeSlide.label}`,
    [activeSlide, current, slideCount]
  );

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      next();
    }

    if (event.key === "ArrowLeft") {
      previous();
    }
  };

  const handleSwipeEnd = (clientX) => {
    if (swipeStartX.current === null) {
      return;
    }

    const deltaX = clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (Math.abs(deltaX) < 46) {
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      previous();
    }
  };

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Lavorazioni principali GC Finiture Edili"
      onKeyDown={handleKeyDown}
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
      tabIndex={-1}
    >
      <div className="hero__slides">
        {heroSlides.map((slide, index) => (
          <article
            className={`hero__slide ${index === current ? "is-active" : ""}`}
            key={slide.id}
            aria-hidden={index !== current}
          >
            <img
              src={assetPath(slide.image)}
              alt={slide.alt}
              width="1800"
              height="900"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              style={{ objectPosition: slide.position }}
            />
          </article>
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__label">{activeSlide.label}</p>
        <h1>{activeSlide.title}</h1>
        <p className="hero__lead">{activeSlide.subtitle}</p>
        <div className="hero__actions">
          <ContactButton type="phone" className="btn--primary" size="large">
            Chiama ora
          </ContactButton>
          <ContactButton type="whatsapp" className="btn--whatsapp" size="large">
            Scrivi su WhatsApp
          </ContactButton>
        </div>
      </div>

      <div className="hero__controls" aria-label="Controlli carosello">
        <button
          type="button"
          className="hero__arrow"
          aria-label="Slide precedente"
          onClick={previous}
        >
          <ChevronLeft size={24} aria-hidden="true" />
        </button>
        <div className="hero__dots" role="tablist" aria-label="Scegli slide">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={index === current ? "is-active" : ""}
              aria-label={`Vai alla slide ${index + 1}: ${slide.label}`}
              aria-selected={index === current}
              role="tab"
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="hero__arrow"
          aria-label="Slide successiva"
          onClick={next}
        >
          <ChevronRight size={24} aria-hidden="true" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {statusText}
      </p>
    </section>
  );
}

export default Hero;
