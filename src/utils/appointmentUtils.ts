interface TimeSlot {
  time: string;
  available: boolean;
}

const WORKING_HOURS = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};

export function getAvailableTimeSlots(date: Date): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();
  
  // Generate time slots every 30 minutes
  for (let hour = WORKING_HOURS.start; hour < WORKING_HOURS.end; hour++) {
    for (let minute of [0, 30]) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      // Random availability (70% chance of being available)
      const randomAvailable = Math.random() > 0.3;
      
      // If it's today, make past times unavailable
      const [slotHour, slotMinute] = time.split(':').map(Number);
      const isPastTime = isToday && (
        hour < today.getHours() ||
        (hour === today.getHours() && minute <= today.getMinutes())
      );

      slots.push({
        time,
        available: !isPastTime && randomAvailable,
      });
    }
  }

  return slots;
}