import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import HomePage from '../pages/HomePage';
import NewsPage from '../pages/news/NewsPage';
import NewsArticlePage from '../pages/news/NewsArticlePage';
import SpecialistsPage from '../pages/specialists/SpecialistsPage';
import TechnologyPage from '../pages/technology/TechnologyPage';
import InsurancePage from '../pages/insurance/InsurancePage';
import CareersPage from '../pages/careers/CareersPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'news/:articleId', element: <NewsArticlePage /> },
      { path: 'specialists', element: <SpecialistsPage /> },
      { path: 'technology', element: <TechnologyPage /> },
      { path: 'insurance', element: <InsurancePage /> },
      { path: 'careers', element: <CareersPage /> },
    ],
  },
]);