import React from 'react';
import { getAvailableTimeSlots } from '../../utils/appointmentUtils';

interface TimeSlotPickerProps {
  selectedDate: Date;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

export default function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onTimeSelect,
}: TimeSlotPickerProps) {
  const timeSlots = getAvailableTimeSlots(selectedDate);

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeSlots.map((slot) => (
        <button
          key={slot.time}
          type="button"
          disabled={!slot.available}
          onClick={() => onTimeSelect(slot.time)}
          className={`p-2 rounded-lg text-sm font-medium transition-colors ${
            selectedTime === slot.time
              ? 'bg-blue-600 text-white'
              : slot.available
              ? 'bg-white hover:bg-gray-100'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
}