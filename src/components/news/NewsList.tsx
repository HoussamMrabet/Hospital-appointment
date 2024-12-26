import React, { useState } from 'react';
import NewsCard from './NewsCard';
import NewsFilter from './NewsFilter';
import { newsData } from '../../data/newsData';

export default function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['Facility Updates', 'Health Tips', 'Events', 'Research'];

  const filteredNews = selectedCategory === 'all'
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest medical breakthroughs, facility updates, and health tips.
          </p>
        </div>

        <NewsFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}