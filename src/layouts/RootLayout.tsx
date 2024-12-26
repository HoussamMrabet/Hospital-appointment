import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmergencyButton from '../components/EmergencyButton';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <Outlet />
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}