import React, { useState } from 'react';
import { X, Search, MapPin, Calendar, Filter } from 'lucide-react';
import DoctorCard from './DoctorCard';
import SearchFilters from './SearchFilters';
import { doctors } from '../../data/doctorsData';

interface DoctorSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorSearchModal({ isOpen, onClose }: DoctorSearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden">
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Find Your Doctor</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="text-black w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by name, specialty, or condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 text-black"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {showFilters && <SearchFilters />}
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid md:grid-cols-2 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}