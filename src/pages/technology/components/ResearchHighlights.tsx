import React from 'react';
import { research } from '../../../data/technologyData';

export default function ResearchHighlights() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Research & Development
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {research.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <item.icon className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}