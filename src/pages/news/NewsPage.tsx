import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsFilter from '../../components/news/NewsFilter';
import NewsPagination from './components/NewsPagination';
import { useNewsArticles } from '../../hooks/useNewsArticles';

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { articles, totalPages } = useNewsArticles(currentPage, selectedCategory);
  const categories = ['Facility Updates', 'Health Tips', 'Events', 'Research'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest News & Updates</h1>
        
        <NewsFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <Link to={`/news/${article.id}`} className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <span className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}