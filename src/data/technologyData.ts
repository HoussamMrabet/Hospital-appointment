import { Microscope, Brain, Heart, Activity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Technology {
  name: string;
  description: string;
  image: string;
  features: string[];
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ResearchItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export const technologies: Technology[] = [
  {
    name: 'Da Vinci Surgical System',
    description: 'Advanced robotic surgery system for minimally invasive procedures',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80',
    features: [
      'Enhanced 3D visualization',
      'Greater surgical precision',
      'Faster recovery times',
      'Reduced post-operative pain'
    ]
  },
  {
    name: '3T MRI Scanner',
    description: 'High-resolution magnetic resonance imaging for detailed diagnostics',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
    features: [
      'Superior image quality',
      'Faster scan times',
      'Advanced neuroimaging',
      'Cardiac imaging capabilities'
    ]
  },
  {
    name: 'AI Diagnostic Platform',
    description: 'Machine learning-powered system for accurate disease detection',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80',
    features: [
      'Early disease detection',
      'Pattern recognition',
      'Automated analysis',
      'Decision support'
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Implemented advanced AI systems for diagnostic assistance and patient care optimization.'
  },
  {
    year: '2022',
    title: 'Robotic Surgery Center',
    description: 'Opened state-of-the-art robotic surgery center with multiple Da Vinci systems.'
  },
  {
    year: '2021',
    title: '3T MRI Installation',
    description: 'Upgraded imaging capabilities with latest 3T MRI technology.'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Complete digitalization of patient records and hospital management systems.'
  }
];

export const research: ResearchItem[] = [
  {
    title: 'AI in Medical Imaging',
    description: 'Developing advanced algorithms for early disease detection and diagnosis.',
    icon: Brain,
    tags: ['Machine Learning', 'Neural Networks', 'Computer Vision']
  },
  {
    title: 'Precision Medicine',
    description: 'Personalized treatment approaches based on genetic and molecular profiling.',
    icon: Microscope,
    tags: ['Genetics', 'Biomarkers', 'Drug Response']
  },
  {
    title: 'Cardiac Innovation',
    description: 'Research in minimally invasive cardiac procedures and monitoring.',
    icon: Heart,
    tags: ['Cardiology', 'Medical Devices', 'Patient Monitoring']
  },
  {
    title: 'Remote Patient Care',
    description: 'Advanced telemedicine and remote monitoring solutions.',
    icon: Activity,
    tags: ['Telemedicine', 'IoT', 'Patient Engagement']
  }
];