import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useNewsArticle } from '../../hooks/useNewsArticle';
import RelatedArticles from './components/RelatedArticles';

export default function NewsArticlePage() {
  const { articleId } = useParams();
  const article = useNewsArticle(articleId);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link to="/news" className="text-blue-600 hover:text-blue-800">
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/news"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to News
        </Link>

        <article>
          <div className="mb-8">
            <span className="text-sm text-blue-600 font-medium px-3 py-1 bg-blue-50 rounded-full">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{article.title}</h1>
            <div className="text-gray-500">{article.date}</div>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />

          <div className="prose max-w-none">
            {article.content}
          </div>
        </article>

        <RelatedArticles currentArticleId={article.id} category={article.category} />
      </div>
    </div>
  );
}