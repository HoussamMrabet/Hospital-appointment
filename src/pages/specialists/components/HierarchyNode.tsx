import React from 'react';
import { Linkedin } from 'lucide-react';

interface HierarchyNodeProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
  isTop?: boolean;
}

export default function HierarchyNode({ name, title, image, linkedin, isTop }: HierarchyNodeProps) {
  return (
    <div className={`flex flex-col items-center ${isTop ? 'w-72' : 'w-64'}`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
        <div className="relative bg-white p-6 rounded-xl shadow-md">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600 mt-1">{title}</p>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
              >
                <Linkedin size={16} className="mr-1" />
                <span className="text-sm">Connect</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}