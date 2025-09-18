import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="w-full" style={{ backgroundColor: isScrolled ? '#F9F1E2' : 'transparent' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/image.png" alt="Logo" className="h-10 w-10" />
            <span className="font-bold text-xl text-black font-lora">Das Gehirn</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#preview" className="text-black hover:opacity-70 transition-colors font-inter">Vorschau</a>
            <a href="#details" className="text-black hover:opacity-70 transition-colors font-inter">Details</a>
            <a href="#author" className="text-black hover:opacity-70 transition-colors font-inter">Autor</a>
            <a href="#reviews" className="text-black hover:opacity-70 transition-colors font-inter">Bewertungen</a>
            <button className="text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-inter font-bold" style={{ backgroundColor: '#77A060' }}>
              Buch kaufen
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#F9F1E2' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#preview" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Vorschau</a>
            <a href="#details" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Details</a>
            <a href="#author" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Autor</a>
            <a href="#reviews" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Bewertungen</a>
            <button className="w-full mt-4 text-white px-6 py-2 rounded-full font-inter font-bold" style={{ backgroundColor: '#77A060' }}>
              Buch kaufen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;