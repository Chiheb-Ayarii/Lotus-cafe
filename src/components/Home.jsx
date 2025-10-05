import React, { useState } from 'react';
import Hero from './home/Hero.jsx';
import { AboutSection, SpecialtiesSection, TestimonialsSection } from './home/About.jsx';
import ReservationSection from './home/Reservation.jsx';


function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />

      <div>
        <AboutSection />
        <SpecialtiesSection />
        <TestimonialsSection />
      </div>

      <ReservationSection />
    </>
  );
}

export default Home;
