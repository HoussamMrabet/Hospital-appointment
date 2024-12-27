import React from 'react';
import HierarchyTree from './components/HierarchyTree';
import DepartmentGrid from './components/DepartmentGrid';
import { departments } from '../../data/specialistsData';

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hospital Leadership & Specialists</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to providing exceptional medical care
          </p>
        </div>

        <HierarchyTree />
        
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Medical Departments</h2>
          <DepartmentGrid departments={departments} />
        </section>
      </div>
    </div>
  );
}