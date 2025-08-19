import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import Hero from './components/Hero';
import WhatWeDo from './components/Statistics';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Handle hash-based navigation
    if (page.startsWith('#')) {
      const pageName = page.substring(1);
      setCurrentPage(pageName);
      return;
    }
  };

  // Handle hash changes for direct navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <PrivacyPolicy />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <Hero />
      <div id="what-we-do">
        <WhatWeDo />
      </div>
      <ContactSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;