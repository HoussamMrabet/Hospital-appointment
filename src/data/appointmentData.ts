import { Stethoscope, Pill, Brain, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface AppointmentType {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  duration: number;
}

export const appointmentTypes: AppointmentType[] = [
  {
    id: 'general',
    name: 'General Checkup',
    description: 'Regular health checkup and consultation',
    icon: Stethoscope,
    duration: 30,
  },
  {
    id: 'dental',
    name: 'Dental Care',
    description: 'Dental examination and treatment',
    icon: Pill, // Changed from Tooth to Pill
    duration: 45,
  },
  {
    id: 'specialist',
    name: 'Specialist Consultation',
    description: 'Consultation with medical specialists',
    icon: Brain,
    duration: 45,
  },
  {
    id: 'cardio',
    name: 'Cardiology',
    description: 'Heart and cardiovascular checkup',
    icon: Heart,
    duration: 60,
  },
];