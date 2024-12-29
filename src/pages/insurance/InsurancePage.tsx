import React from 'react';
import InsuranceProviders from './components/InsuranceProviders';
import CoverageInfo from './components/CoverageInfo';
import InsuranceFAQ from './components/InsuranceFAQ';

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with major insurance providers to ensure you receive the care you need
          </p>
        </div>
        
        <InsuranceProviders />
        <CoverageInfo />
        <InsuranceFAQ />
      </div>
    </div>
  );
}