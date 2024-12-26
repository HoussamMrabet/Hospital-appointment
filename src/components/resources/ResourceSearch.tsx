import React from 'react';
import { Search } from 'lucide-react';

interface ResourceSearchProps {
  onSearch: (query: string) => void;
}

export default function ResourceSearch({ onSearch }: ResourceSearchProps) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
}