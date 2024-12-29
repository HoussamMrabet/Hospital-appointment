import { Shield, Heart, Stethoscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface InsuranceProvider {
  name: string;
  logo: string;
  description: string;
}

interface CoverageType {
  title: string;
  description: string;
  icon: LucideIcon;
  services: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

export const insuranceProviders: InsuranceProvider[] = [
  {
    name: 'Blue Cross Blue Shield',
    logo: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80',
    description: 'Comprehensive coverage for individuals and families'
  },
  {
    name: 'Aetna',
    logo: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80',
    description: 'Wide network of healthcare providers'
  },
  {
    name: 'UnitedHealthcare',
    logo: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80',
    description: 'Flexible plans for every need'
  },
  {
    name: 'Cigna',
    logo: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80',
    description: 'Quality healthcare coverage solutions'
  }
];

export const coverageTypes: CoverageType[] = [
  {
    title: 'Preventive Care',
    description: 'Regular check-ups and screenings to maintain your health',
    icon: Shield,
    services: [
      'Annual physicals',
      'Immunizations',
      'Health screenings',
      'Wellness visits'
    ]
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency care coverage',
    icon: Heart,
    services: [
      'Emergency room visits',
      'Ambulance services',
      'Urgent care',
      'Critical care'
    ]
  },
  {
    title: 'Specialty Care',
    description: 'Access to specialized medical services',
    icon: Stethoscope,
    services: [
      'Specialist consultations',
      'Surgery',
      'Physical therapy',
      'Mental health services'
    ]
  }
];

export const insuranceFAQs: FAQ[] = [
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, UnitedHealthcare, and Cigna. Please contact our billing department for specific coverage questions.'
  },
  {
    question: 'How do I verify my insurance coverage?',
    answer: 'You can verify your coverage by contacting your insurance provider directly or by calling our billing department. We recommend doing this before your appointment.'
  },
  {
    question: 'What if I don\'t have insurance?',
    answer: 'We offer various payment plans and financial assistance programs for uninsured patients. Please contact our financial counselors to discuss your options.'
  }
];