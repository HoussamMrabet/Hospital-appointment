import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Search, Calendar, Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import AppointmentModal from './appointments/AppointmentModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const { scrollToSection } = useSmoothScroll();
  const location = useLocation();

  const navLinks = [
    { id: 'services', label: 'Services' },
    { path: '/specialists', label: 'Specialists' },
    { id: 'patients', label: 'Patients' },
    { path: '/news', label: 'News' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (item: { id?: string; path?: string }) => {
    if (item.path) {
      return;
    }
    
    if (location.pathname !== '/') {
      window.location.href = `/#${item.id}`;
      return;
    }

    if (item.id) {
      scrollToSection(item.id);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Phone size={18} />
            <span className="font-semibold">Emergency: (800) 555-0123</span>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <Link to="/insurance" className="hover:text-blue-200">Insurance</Link>
            <Link to="/careers" className="hover:text-blue-200">Careers</Link>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            MedCare Plus
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((item) => (
              item.path ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} className="text-gray-600" />
            </button>
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <button
                  key={item.id || item.path}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-blue-900 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsAppointmentModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </header>
  );
}