import React, { useState, useEffect } from 'react';
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
import CustomerNotification from './components/CustomerNotification';

function App() {
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F1E2' }}>
      <TopBar discountPercentage={25} durationMinutes={5} timeLeft={timeLeft} />
      {/* <Navigation /> */}
      <div className="pt-16"> {/* Add padding to account for fixed top bar */}
        <Hero timeLeft={timeLeft} />
        <BookPreview />
        <BookDetails />
        <Author />
        <Reviews timeLeft={timeLeft} />
        <PurchaseSection timeLeft={timeLeft} />
        {/* <Footer /> */}
      </div>
      <CustomerNotification />
    </div>
  );
}

export default App;