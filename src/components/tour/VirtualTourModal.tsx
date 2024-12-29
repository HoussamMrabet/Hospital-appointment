import React, { useState } from 'react';
import { X, Info } from 'lucide-react';
import { tourLocations } from '../../data/tourData';
import TourHotspot from './TourHotspot';
import TourNavigation from './TourNavigation';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  const [currentLocation, setCurrentLocation] = useState(0);
  const location = tourLocations[currentLocation];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50">
      <div className="relative w-full h-full">
        {/* Tour Image */}
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover"
        />

        {/* Hotspots */}
        {location.hotspots.map((hotspot, index) => (
          <TourHotspot key={index} {...hotspot} />
        ))}

        {/* Navigation */}
        <TourNavigation
          locations={tourLocations}
          currentIndex={currentLocation}
          onNavigate={setCurrentLocation}
        />

        {/* Location Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{location.name}</h2>
          <p className="text-gray-200">{location.description}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}