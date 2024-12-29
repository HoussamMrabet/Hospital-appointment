import React from 'react';
import TechnologyShowcase from './components/TechnologyShowcase';
import InnovationTimeline from './components/InnovationTimeline';
import ResearchHighlights from './components/ResearchHighlights';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Medical Technology
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we leverage the latest medical innovations to provide exceptional patient care
          </p>
        </div>

        <TechnologyShowcase />
        <InnovationTimeline />
        <ResearchHighlights />
      </div>
    </div>
  );
}