import React, { useState, useEffect } from "react";
import "./hero.css";

const slides = [
  {
    image: "./src/assets/hero.png",
    title: "Delicious Dishes",
    description: "Experience authentic cuisine crafted with passion and the finest ingredients."
  },
  {
    image: "./src/assets/hero2.png",
    title: "Cozy Atmosphere",
    description: "Relax and dine in our warm, inviting space designed for your comfort."
  },
  {
    image: "./src/assets/hero3.png",
    title: "Fresh Ingredients",
    description: "Daily sourced farm-to-table ingredients for exceptional flavor."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((current + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, length]);

  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    handleSlideChange((current - 1 + length) % length);
  };

  const nextSlide = () => {
    handleSlideChange((current + 1) % length);
  };

  const goToSlide = (index) => {
    if (index !== current) {
      handleSlideChange(index);
    }
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="overlay" key={`overlay-${current}`}>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.description}</p>
              <div className="hero-buttons">
                <button className="btn-primary">Menu <ion-icon name="chevron-forward-outline"></ion-icon></button>
                <button className="btn-secondary">Reservation <ion-icon name="chevron-forward-outline"></ion-icon></button>
              </div>
            </div>
          )}
        </div>
      ))}
      
      <button className="arrow left" onClick={prevSlide} aria-label="Previous slide">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className="arrow right" onClick={nextSlide} aria-label="Next slide">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;