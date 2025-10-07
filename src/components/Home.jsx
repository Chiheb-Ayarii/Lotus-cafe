import React, { useState } from 'react';
import Hero from './home/Hero.jsx';
import { AboutSection, SpecialtiesSection, TestimonialsSection } from './home/About.jsx';
import ReservationSection from './home/Reservation.jsx';


function Home({ onNavigate }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ReservationSection />
      <div>
        <AboutSection onNavigate={onNavigate} />
        <SpecialtiesSection onNavigate={onNavigate} />
        <TestimonialsSection onNavigate={onNavigate} />
      </div>
    </>
  );
}

export default Home;
