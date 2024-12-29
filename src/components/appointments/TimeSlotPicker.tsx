import React from 'react';
import { getTimeSlots } from '../../utils/appointmentUtils';
import type { TimeSlot } from '../../utils/appointmentUtils';

interface TimeSlotPickerProps {
  selectedDate: Date;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export default function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onTimeSelect,
}: TimeSlotPickerProps) {
  const timeSlots = getTimeSlots(selectedDate);

  return (
    <div className="grid grid-cols-4 gap-2">
      {timeSlots.map((slot: TimeSlot) => (
        <button
          key={slot.time}
          type="button"
          disabled={!slot.available}
          onClick={() => onTimeSelect(slot.time)}
          className={`
            p-3 rounded-lg text-sm font-medium transition-colors
            ${selectedTime === slot.time
              ? 'bg-blue-600 text-white'
              : slot.available
                ? 'bg-white border border-gray-200 hover:border-blue-500 text-gray-900'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {slot.time}
        </button>
      ))}
    </div>
  );
}