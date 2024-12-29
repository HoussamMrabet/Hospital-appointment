import React, { useState } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
import type { Doctor } from '../../data/doctorsData';
import BookingModal from '../appointments/BookingModal';

interface DoctorCardProps extends Doctor {}

export default function DoctorCard(doctor: DoctorCardProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="p-6">
          <div className="flex gap-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {doctor.name}
              </h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{doctor.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{doctor.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Next available: {doctor.nextAvailable}</span>
            </div>
          </div>

          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        doctor={doctor}
      />
    </>
  );
}