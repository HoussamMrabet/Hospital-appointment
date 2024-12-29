import React from 'react';
import { benefits } from '../../../data/careersData';

export default function CareerBenefits() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Work With Us</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <benefit.icon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}