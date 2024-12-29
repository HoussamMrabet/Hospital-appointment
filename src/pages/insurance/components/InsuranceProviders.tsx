import React from 'react';
import { insuranceProviders } from '../../../data/insuranceData';

export default function InsuranceProviders() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Accepted Insurance Providers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {insuranceProviders.map((provider, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={provider.logo}
              alt={provider.name}
              className="h-12 mb-4 object-contain"
            />
            <h3 className="font-semibold text-gray-900 mb-2">{provider.name}</h3>
            <p className="text-sm text-gray-600">{provider.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}