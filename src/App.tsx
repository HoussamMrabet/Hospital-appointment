import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import NewsList from './components/news/NewsList';
import PatientResources from './components/resources/PatientResources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <NewsList />
        <PatientResources />
        <Contact />
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}

export default App;