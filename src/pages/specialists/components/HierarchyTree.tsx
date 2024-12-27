import React from 'react';
import { hierarchy } from '../../../data/specialistsData';
import HierarchyNode from './HierarchyNode';

export default function HierarchyTree() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50/50 to-transparent min-h-screen flex items-center justify-center py-0">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 text-center">
          <h1 className='text-3xl font-bold text-gray-900'>CEO</h1>
          {/* Top Level (CEO) */}
          <div className="flex justify-center">
            <HierarchyNode {...hierarchy.ceo} isTop />
          </div>

          {/* Second Level (Executives) */}
          <h1 className='text-3xl font-bold text-gray-900'>Executives</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {hierarchy.executives.map((executive, index) => (
              <div className="flex justify-center" key={index}>
                <HierarchyNode {...executive} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
