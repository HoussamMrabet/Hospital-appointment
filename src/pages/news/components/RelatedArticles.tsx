import React from 'react';
import { Link } from 'react-router-dom';
import { useRelatedArticles } from '../../../hooks/useRelatedArticles';

interface RelatedArticlesProps {
  currentArticleId: number;
  category: string;
}

export default function RelatedArticles({ currentArticleId, category }: RelatedArticlesProps) {
  const relatedArticles = useRelatedArticles(currentArticleId, category);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="group block"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}