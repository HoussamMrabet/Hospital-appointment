import { useState, useEffect } from 'react';
import { newsData } from '../data/newsData';

export function useRelatedArticles(currentArticleId: number, category: string) {
  const [articles, setArticles] = useState<typeof newsData>([]);

  useEffect(() => {
    const related = newsData
      .filter(article => 
        article.id !== currentArticleId && 
        article.category === category
      )
      .slice(0, 2);
    
    setArticles(related);
  }, [currentArticleId, category]);

  return articles;
}