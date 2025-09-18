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
    <nav className={`top-0 w-full z-30 transition-all duration-300 lg:fixed ${isScrolled ? 'shadow-lg' : ''}`} style={{ backgroundColor: 'white' }}>
      <div className="w-full px-[30px]">
        <div className="max-w-full">
        <div className="flex flex-col items-center py-4 md:flex-row md:justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <a href="https://ease-kids.ch/">
                <img src="/image.png" alt="Logo" className="w-[100px]" />
              </a>
            </div>
          
          <div className="hidden md:flex flex-grow justify-center space-x-[25px]">
            <a href="https://ease-kids.ch/product-category/science/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Kids Science Books</a>
            <a href="https://ease-kids.ch/product-category/anatomy/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Anatomy</a>
            <a href="https://ease-kids.ch/product-category/chemistry/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Chemistry</a>
            <a href="https://ease-kids.ch/product-category/math/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Mathematics</a>
            <a href="https://ease-kids.ch/product-category/physics/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Physics</a>
            <a href="https://ease-kids.ch/product-category/astronomy/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Astronomy</a>
            <a href="https://ease-kids.ch/product-category/psychology/" className="text-black py-2 rounded-md text-sm font-light hover:italic" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Psychology</a>
            <div className="relative group">
                <button className="text-black py-2 rounded-md text-sm font-light hover:italic focus:outline-none flex items-center" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>
  More
  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 9l-7 7-7-7" />
  </svg>
</button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-1 w-48 z-30 pt-2">
                <a href="https://ease-kids.ch/product-category/philosophy/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Philosophy</a>
                 <a href="https://ease-kids.ch/product-category/geography/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Geography</a>
                 <a href="https://ease-kids.ch/product-category/history/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>History</a>
                 <a href="https://ease-kids.ch/product-category/music/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Music</a>
                 <a href="https://ease-kids.ch/product-category/art/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Art</a>
                 <a href="https://ease-kids.ch/product-category/literature/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Literature</a>
                 <a href="https://ease-kids.ch/product-category/logics/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Logics</a>
                 <a href="https://ease-kids.ch/product-category/nature/" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" style={{ fontFamily: 'Lora, sans-serif', fontWeight: 100, color: 'rgb(0,0,0)', fontSize: '18px', lineHeight: '20px' }}>Nature</a>

              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.989 15.4905L19.5 19.0015" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24.00 24.00" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-0.5 0 25 25" fill="none" stroke="#000000" strokeWidth="1.25">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M17.25 7.88501H18.31L19.37 21.425C19.39 21.715 19.16 21.965 18.87 21.965L5.13 22.005C4.84 22.005 4.61 21.755 4.63 21.465L5.60999 7.92502H6.71" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13.25 8.95502H10.72" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.25 10.605V6.33499C15.25 4.48499 13.79 2.995 11.99 2.995C10.19 2.995 8.72998 4.49499 8.72998 6.33499V10.605" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <svg width="24" height="24" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.989 15.4905L19.5 19.0015" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24.00 24.00" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H20V19C20 16.7909 18.2091 15 16 15Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#000000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-0.5 0 25 25" fill="none" stroke="#000000" strokeWidth="1.25">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M17.25 7.88501H18.31L19.37 21.425C19.39 21.715 19.16 21.965 18.87 21.965L5.13 22.005C4.84 22.005 4.61 21.755 4.63 21.465L5.60999 7.92502H6.71" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13.25 8.95502H10.72" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.25 10.605V6.33499C15.25 4.48499 13.79 2.995 11.99 2.995C10.19 2.995 8.72998 4.49499 8.72998 6.33499V10.605" stroke="#000000" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'white' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Kids Science Books</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Anatomy</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Chemistry</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Mathematics</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Physics</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Astronomy</a>
            <a href="#" className="block text-black hover:opacity-70 px-3 py-2 font-inter">Psychology</a>
            <div className="relative group">
              <button className="w-full text-left text-black hover:opacity-70 px-3 py-2 font-inter flex items-center justify-between">
                More
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden group-hover:block bg-white shadow-lg rounded-md mt-1 py-1 w-full z-10">
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Philosophy</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Geography</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">History</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Music</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Art</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Literature</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Logics</a>
                <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 font-inter">Nature</a>
              </div>
            </div>

              Buch kaufen
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;