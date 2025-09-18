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
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F1E2' }}>
      <TopBar discountPercentage={25} durationMinutes={30} />
      {/* <Navigation /> */}
      <div className="pt-20"> {/* Add padding to account for fixed top bar */}
        <Hero />
        <BookPreview />
        <BookDetails />
        <Author />
        <Reviews />
        <PurchaseSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;