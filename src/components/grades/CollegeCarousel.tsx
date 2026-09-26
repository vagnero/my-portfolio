import { useState } from "react";

interface CollegeCarouselProps {
  images: string[];
  title: string;
  darkMode: boolean;
}

const CollegeCarousel  = ({ images, title, darkMode }: CollegeCarouselProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="college-carousel">
      <h2 className="college-title">{title}</h2>
      <div className={`carousel-container ${darkMode ? "bg-body-secondary" : "bg-dark"}`}>
      
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous academic record">
          &#10094;
        </button>

        <a
          href={images[current]}
          target="_blank"
          rel="noopener noreferrer"
          className="carousel-link"
        >
          <img
            src={images[current]}
            alt={`Histórico ${current + 1}`}
            className="carousel-image"
          />
        </a>

        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next academic record">
          &#10095;
        </button>

        {/* Indicadores dentro do container */}
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              type="button"
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Show academic record ${idx + 1}`}
              aria-current={idx === current ? "true" : undefined}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default CollegeCarousel;
