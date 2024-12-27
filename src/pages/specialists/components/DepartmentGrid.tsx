import React from 'react';
import type { Department } from '../../../data/specialistsData';

interface DepartmentGridProps {
  departments: Department[];
}

export default function DepartmentGrid({ departments }: DepartmentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {departments.map((dept, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <dept.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
          <p className="text-gray-600 mb-4">{dept.description}</p>
          <div className="space-y-2">
            {dept.specialists.map((specialist, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{specialist.name}</p>
                  <p className="text-xs text-gray-600">{specialist.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}