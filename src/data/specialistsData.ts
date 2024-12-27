import { Heart, Brain, Bone, TestTube, Stethoscope, Baby } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Specialist {
  name: string;
  role: string;
  image: string;
}

export interface Department {
  name: string;
  description: string;
  icon: LucideIcon;
  specialists: Specialist[];
}

export const hierarchy = {
  ceo: {
    name: "Dr. Sarah Chen",
    title: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com"
  },
  executives: [
    {
      name: "Dr. James Wilson",
      title: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Maria Rodriguez",
      title: "Chief of Operations",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Dr. Michael Chang",
      title: "Chief of Research",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
      linkedin: "https://linkedin.com"
    }
  ]
};

export const departments: Department[] = [
  {
    name: "Cardiology",
    description: "Specialized heart care and cardiovascular treatments",
    icon: Heart,
    specialists: [
      {
        name: "Dr. Emily Parker",
        role: "Head of Cardiology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Robert Kim",
        role: "Senior Cardiologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Neurology",
    description: "Expert care for neurological conditions",
    icon: Brain,
    specialists: [
      {
        name: "Dr. David Thompson",
        role: "Head of Neurology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Lisa Chen",
        role: "Neurologist",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Orthopedics",
    description: "Treatment for bones, joints, and muscles",
    icon: Bone,
    specialists: [
      {
        name: "Dr. Mark Johnson",
        role: "Head of Orthopedics",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Sarah Lee",
        role: "Orthopedic Surgeon",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Laboratory",
    description: "Advanced diagnostic and testing services",
    icon: TestTube,
    specialists: [
      {
        name: "Dr. Jennifer Wu",
        role: "Lab Director",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Michael Brown",
        role: "Clinical Pathologist",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Primary Care",
    description: "Comprehensive healthcare services",
    icon: Stethoscope,
    specialists: [
      {
        name: "Dr. Amanda Martinez",
        role: "Head of Primary Care",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. John Davis",
        role: "Family Physician",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    name: "Pediatrics",
    description: "Specialized care for children",
    icon: Baby,
    specialists: [
      {
        name: "Dr. Rachel Green",
        role: "Head of Pediatrics",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Thomas Wilson",
        role: "Pediatrician",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
      }
    ]
  }
];