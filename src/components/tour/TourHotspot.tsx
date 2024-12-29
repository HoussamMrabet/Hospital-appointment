import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface TourHotspotProps {
  x: number;
  y: number;
  title: string;
  description: string;
}

export default function TourHotspot({ x, y, title, description }: TourHotspotProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <button
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors ring-4 ring-white/20"
      >
        <Info className="w-4 h-4" />
      </button>

      {showInfo && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-64 bg-white rounded-lg shadow-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
}