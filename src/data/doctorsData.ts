import type { LucideIcon } from 'lucide-react';

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  location: string;
  rating: number;
  nextAvailable: string;
  languages: string[];
  education: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    specialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    location: 'Main Hospital, Floor 3',
    rating: 4.9,
    nextAvailable: 'Tomorrow, 10:00 AM',
    languages: ['English', 'Mandarin'],
    education: ['Harvard Medical School', 'Johns Hopkins University'],
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    specialty: 'Neurology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
    location: 'Neuroscience Center',
    rating: 4.8,
    nextAvailable: 'Today, 2:30 PM',
    languages: ['English', 'Spanish'],
    education: ['Yale School of Medicine', 'Stanford University'],
  },
  {
    id: 3,
    name: 'Dr. Maria Rodriguez',
    specialty: 'Pediatrics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
    location: 'Children\'s Wing',
    rating: 4.9,
    nextAvailable: 'Tomorrow, 9:00 AM',
    languages: ['English', 'Spanish'],
    education: ['Columbia University', 'University of Barcelona'],
  },
  {
    id: 4,
    name: 'Dr. Michael Chang',
    specialty: 'Orthopedics',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80',
    location: 'Sports Medicine Center',
    rating: 4.7,
    nextAvailable: 'Thursday, 11:00 AM',
    languages: ['English', 'Korean'],
    education: ['UCLA Medical School', 'Seoul National University'],
  },
];