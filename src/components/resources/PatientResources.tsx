import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import ResourceSearch from './ResourceSearch';
import { resourcesData } from '../../data/resourcesData';

export default function PatientResources() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resourcesData.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="patients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access important forms, educational materials, and resources to help you prepare for your visit.
          </p>
        </div>

        <ResourceSearch onSearch={setSearchQuery} />

        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}