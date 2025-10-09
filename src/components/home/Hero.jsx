import React, { useState, useEffect, useRef } from "react";
import "./hero.css";

const slides = [
  {
    image: "/images/hero.png",
    title: "Plats Délicieux",
    description: "Découvrez une cuisine authentique préparée avec passion et les meilleurs ingrédients."
  },
  {
    image: "/images/hero2.png",
    title: "Éclat & Sérénité",
    description: "Terrasse ouverte, journée parfaite offerte."
  },
  {
    image: "/images/hero3.png",
    title: "Calme & Saveur",
    description: "Ici on se pose, et le stress s’expose.."
  }
];

const Hero = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const length = slides.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => (prev + 1) % length);
      setTimeout(() => setIsTransitioning(false), 1500); // Synced to CSS transition duration
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [length]); // Removed 'current' from deps to prevent restarts

  const handleSlideChange = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(newIndex);
    setTimeout(() => setIsTransitioning(false), 1500);
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
        />
      ))}
      
      <div className="overlay">
        <h1 className="hero-title">{slides[current].title}</h1>
        <p className="hero-desc">{slides[current].description}</p>
        <div className="hero-buttons">
          <button className="hero-btn" onClick={() => {
                if (onNavigate) onNavigate('menu')
                if (typeof window !== 'undefined') window.scrollTo({ top: 0})
              }}> <span>Menu</span> <ion-icon name="chevron-forward-outline"></ion-icon></button>
          <button className="hero-btn" onClick={() => {
                // navigate to home page then scroll to reservations section
                if (onNavigate) onNavigate('home')
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                  // allow smooth scroll then jump to section
                  setTimeout(() => {
                    const el = document.getElementById('reservations')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }, 300)
                }
              }}> <span>Reservation</span></button>
        </div>
      </div>
      
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