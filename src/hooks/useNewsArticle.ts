import { useState, useEffect } from 'react';
import { newsData } from '../data/newsData';

export function useNewsArticle(articleId: string | undefined) {
  const [article, setArticle] = useState<typeof newsData[0] | null>(null);

  useEffect(() => {
    if (!articleId) return;
    
    const found = newsData.find(article => article.id.toString() === articleId);
    setArticle(found || null);
  }, [articleId]);

  return article;
}