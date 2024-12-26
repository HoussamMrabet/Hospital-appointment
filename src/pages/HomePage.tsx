import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import FAQ from '../components/FAQ';
import PatientResources from '../components/resources/PatientResources';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <PatientResources />
      <FAQ />
      <Contact />
    </>
  );
}