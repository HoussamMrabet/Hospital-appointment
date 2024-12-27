import React from 'react';
import { Building2, Users, Award, HeartPulse } from 'lucide-react';

const stats = [
  { icon: Building2, value: '1954', label: 'Founded' },
  { icon: Users, value: '500+', label: 'Healthcare Professionals' },
  { icon: Award, value: '25+', label: 'Awards' },
  { icon: HeartPulse, value: '1M+', label: 'Patients Treated' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80"
                alt="Hospital History"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">70+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Pioneering Healthcare Since 1954
            </h2>
            <p className="text-gray-600 mb-8">
              From our humble beginnings as a small community clinic, MedCare Plus has evolved into a 
              leading healthcare institution, combining cutting-edge medical technology with 
              compassionate care. Our journey reflects our unwavering commitment to advancing 
              medical excellence and serving our community.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Research Excellence</h3>
                  <p className="text-gray-600">Leading breakthrough medical research and innovations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community Focus</h3>
                  <p className="text-gray-600">Dedicated to serving and improving community health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}