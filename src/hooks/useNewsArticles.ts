import { useState, useEffect } from 'react';
import { newsData } from '../data/newsData';

const ITEMS_PER_PAGE = 6;

export function useNewsArticles(page: number, category: string) {
  const [articles, setArticles] = useState(newsData);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let filtered = category === 'all'
      ? newsData
      : newsData.filter(article => article.category === category);

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    
    setArticles(filtered.slice(start, end));
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [page, category]);

  return { articles, totalPages };
}