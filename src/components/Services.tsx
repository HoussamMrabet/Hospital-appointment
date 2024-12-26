import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Bone, TestTube } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Cardiology', description: 'Comprehensive heart care and cardiovascular treatments' },
  { icon: Brain, title: 'Neurology', description: 'Expert care for neurological conditions and disorders' },
  { icon: Baby, title: 'Pediatrics', description: 'Specialized healthcare for infants, children, and adolescents' },
  { icon: Bone, title: 'Orthopedics', description: 'Treatment for bones, joints, ligaments, and muscles' },
  { icon: TestTube, title: 'Laboratory', description: '24/7 advanced diagnostic and testing services' },
  { icon: Stethoscope, title: 'Primary Care', description: 'Comprehensive primary healthcare services' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}