import { Heart, Book, Users, Trophy, ArrowUpRight, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export const departments = [
  'Medical Staff',
  'Nursing',
  'Administration',
  'Laboratory',
  'Radiology',
  'IT'
];

export const jobListings: JobListing[] = [
  {
    title: 'Senior Nurse Practitioner',
    department: 'Nursing',
    location: 'Main Hospital',
    type: 'Full-time',
    description: 'Seeking an experienced nurse practitioner to join our emergency department team.'
  },
  {
    title: 'Medical Records Specialist',
    department: 'Administration',
    location: 'Medical Office Building',
    type: 'Full-time',
    description: 'Manage and maintain accurate patient medical records using our EMR system.'
  },
  {
    title: 'Laboratory Technician',
    department: 'Laboratory',
    location: 'Main Hospital',
    type: 'Part-time',
    description: 'Perform laboratory tests and procedures to support patient diagnosis and treatment.'
  }
];

export const benefits: Benefit[] = [
  {
    title: 'Comprehensive Healthcare',
    description: 'Full medical, dental, and vision coverage for you and your family',
    icon: Heart
  },
  {
    title: 'Professional Development',
    description: 'Continuing education and career advancement opportunities',
    icon: Book
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible scheduling and paid time off',
    icon: Clock
  },
  {
    title: 'Team Environment',
    description: 'Collaborative and supportive work culture',
    icon: Users
  },
  {
    title: 'Recognition Programs',
    description: 'Rewards and recognition for outstanding performance',
    icon: Trophy
  },
  {
    title: 'Career Growth',
    description: 'Clear paths for advancement and specialization',
    icon: ArrowUpRight
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
    quote: 'Working here has given me the opportunity to grow both professionally and personally. The supportive environment and state-of-the-art facilities make it an ideal place for medical professionals.'
  },
  {
    name: 'James Wilson',
    role: 'IT Manager',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
    quote: 'The emphasis on innovation and continuous improvement makes this an exciting place to work. We\'re always implementing new technologies to enhance patient care.'
  }
];