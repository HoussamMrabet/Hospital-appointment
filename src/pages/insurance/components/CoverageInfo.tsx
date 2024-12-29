import React from 'react';
import { coverageTypes } from '../../../data/insuranceData';

export default function CoverageInfo() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Coverage Information</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {coverageTypes.map((type, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <type.icon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <ul className="space-y-2">
              {type.services.map((service, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span className="text-sm text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}