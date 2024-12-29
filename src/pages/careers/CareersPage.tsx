import React from 'react';
import JobListings from './components/JobListings';
import CareerBenefits from './components/CareerBenefits';
import CareerTestimonials from './components/CareerTestimonials';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build your career with us and make a difference in healthcare
          </p>
        </div>

        <JobListings />
        <CareerBenefits />
        <CareerTestimonials />
      </div>
    </div>
  );
}