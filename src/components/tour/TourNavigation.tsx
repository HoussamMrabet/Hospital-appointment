import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { TourLocation } from '../../data/tourData';

interface TourNavigationProps {
  locations: TourLocation[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function TourNavigation({ locations, currentIndex, onNavigate }: TourNavigationProps) {
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4">
      <button
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex gap-2">
        {locations.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => onNavigate(currentIndex + 1)}
        disabled={currentIndex === locations.length - 1}
        className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}