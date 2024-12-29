import React, { useState } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import TimeSlotPicker from './TimeSlotPicker';
import type { Doctor } from '../../data/doctorsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
}

export default function BookingModal({ isOpen, onClose, doctor }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking:', { doctor, selectedDate, selectedTime });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="text-black w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-500 mt-1">{doctor.location}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <TimeSlotPicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
              />
            </div>

            <button
              type="submit"
              disabled={!selectedTime}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}