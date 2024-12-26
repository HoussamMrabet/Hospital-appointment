import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/news/NewsPage';
import NewsArticlePage from '../pages/news/NewsArticlePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:articleId', element: <NewsArticlePage /> },
    ],
  },
]);