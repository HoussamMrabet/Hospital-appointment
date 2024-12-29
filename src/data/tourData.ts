export interface TourHotspot {
  x: number;
  y: number;
  title: string;
  description: string;
}

export interface TourLocation {
  name: string;
  description: string;
  image: string;
  hotspots: TourHotspot[];
}

export const tourLocations: TourLocation[] = [
  {
    name: 'Main Lobby',
    description: 'Our welcoming entrance featuring modern architecture and a comfortable waiting area.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
    hotspots: [
      {
        x: 25,
        y: 45,
        title: 'Information Desk',
        description: '24/7 staffed desk for patient information and assistance',
      },
      {
        x: 75,
        y: 35,
        title: 'Waiting Area',
        description: 'Comfortable seating area with complimentary Wi-Fi',
      },
    ],
  },
  {
    name: 'Emergency Department',
    description: 'State-of-the-art emergency care facility equipped for any situation.',
    image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80',
    hotspots: [
      {
        x: 30,
        y: 50,
        title: 'Triage Station',
        description: 'Quick assessment area for emergency cases',
      },
      {
        x: 70,
        y: 40,
        title: 'Treatment Rooms',
        description: 'Private rooms equipped with advanced medical technology',
      },
    ],
  },
  {
    name: 'Surgical Wing',
    description: 'Advanced surgical facilities with the latest medical technology.',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80',
    hotspots: [
      {
        x: 45,
        y: 55,
        title: 'Operating Rooms',
        description: 'Modern surgical suites with robotic assistance capabilities',
      },
      {
        x: 65,
        y: 35,
        title: 'Recovery Area',
        description: 'Dedicated post-operative care unit with 24/7 monitoring',
      },
    ],
  },
];