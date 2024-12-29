import React from 'react';
import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  return (
    <a
      href="tel:8005550123"
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50 flex items-center space-x-2"
      aria-label="Emergency Call"
    >
      <Phone className="animate-pulse" size={24} />
    </a>
  );
}