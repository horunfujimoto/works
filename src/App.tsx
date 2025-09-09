//src\App.tsx
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary';
import { TetrisGameProvider } from './contexts/TetrisGameContext';

// Lazy load portfolio pages for better performance
const Career = React.lazy(() => import('./pages/Career'));
const Articles = React.lazy(() => import('./pages/Articles'));
const Hobbies = React.lazy(() => import('./pages/Hobbies'));
const Works = React.lazy(() => import('./pages/Works'));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    backgroundColor: '#f5f5f5'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
      <div className="loading-spinner" />
      <p style={{
        color: 'var(--color-tertiary-grey)',
        fontFamily: 'var(--font-family-primary)',
        fontSize: '16px'
      }}>
        Loading portfolio section...
      </p>
    </div>
  </div>
);

// Navigation wrapper component to provide navigation function to context
const AppContent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <TetrisGameProvider onNavigate={handleNavigation}>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </Suspense>
      </Layout>
    </TetrisGameProvider>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
