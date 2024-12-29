import React from 'react';
import { timeline } from '../../../data/technologyData';

export default function InnovationTimeline() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Innovation Timeline
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-200" />
        <div className="space-y-16">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
                <span className="text-sm font-medium text-blue-600">{item.year}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10 ring-4 ring-white" />
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}