import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ListingsPage } from './components/ListingsPage';
import { DetailsPage } from './components/DetailsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'listings' | 'details'>('home');

  // Simple navigation handler (in a real app, you'd use React Router)
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'listings') {
        setCurrentPage('listings');
      } else if (hash === 'details') {
        setCurrentPage('details');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'listings':
        return <ListingsPage />;
      case 'details':
        return <DetailsPage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}

export default App;