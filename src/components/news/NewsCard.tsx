import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export default function NewsCard({ title, date, description, image, category }: NewsCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 font-semibold hover:text-blue-800">
          Read More →
        </a>
      </div>
    </article>
  );
}