import React from 'react';
import { technologies } from '../../../data/technologyData';

export default function TechnologyShowcase() {
  return (
    <section className="mb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-video">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-600 mb-4">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}