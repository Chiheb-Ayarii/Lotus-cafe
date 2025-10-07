import React, { useState } from 'react';
import Hero from './home/Hero.jsx';
import { AboutSection, SpecialtiesSection, TestimonialsSection } from './home/About.jsx';
import ReservationSection from './home/Reservation.jsx';
import LotusCafeMenuPage from './Fullmenu.jsx';


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
      <LotusCafeMenuPage onNavigate={onNavigate} />

    </>
  );
}

export default Home;
