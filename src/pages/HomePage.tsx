import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import FAQ from '../components/FAQ';
import PatientResources from '../components/resources/PatientResources';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PatientResources />
      <FAQ />
      <Contact />
    </>
  );
}