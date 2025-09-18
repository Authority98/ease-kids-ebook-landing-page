import React from 'react';
import Hero from './components/Hero';
import BookPreview from './components/BookPreview';
import BookDetails from './components/BookDetails';
import Author from './components/Author';
import Reviews from './components/Reviews';
import VideoSection from './components/VideoSection';
import PurchaseSection from './components/PurchaseSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F1E2' }}>
      <Navigation />
      <Hero />
      <BookPreview />
      <BookDetails />
      <Author />
      <Reviews />
      <PurchaseSection />
      <Footer />
    </div>
  );
}

export default App;