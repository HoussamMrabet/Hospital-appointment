import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import TimeSlotPicker from './TimeSlotPicker';
import { appointmentTypes } from '../../data/appointmentData';

interface AppointmentFormProps {
  onClose: () => void;
}

export default function AppointmentForm({ onClose }: AppointmentFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedType, setSelectedType] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment submission
    console.log({ selectedDate, selectedType, selectedTime });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Appointment Type
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {appointmentTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => setSelectedType(type.id)}
              className={`p-4 rounded-xl border-2 text-left transition-colors ${
                selectedType === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              <type.icon className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-medium text-gray-900">{type.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date & Time
        </label>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center space-x-4 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <input
              type="date"
              value={selectedDate.toISOString().split('T')[0]}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              min={new Date().toISOString().split('T')[0]}
              className="border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <TimeSlotPicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!selectedType || !selectedTime}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Booking
        </button>
      </div>
    </form>
  );
}