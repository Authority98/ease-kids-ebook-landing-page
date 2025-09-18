import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F9F1E2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <a href="https://ease-kids.ch/">
              <img src="/image.png" alt="Logo" className="w-[110px] mb-4" />
            </a>
            <p className="text-[#000] text-[16px] leading-[28px] font-inter mb-4">
              Our mission is to bring the wonders of the universe to young minds through engaging, educational, and beautifully illustrated books.
            </p>
            <h4 className="font-inter text-[18px] font-semibold text-[#000] mb-2">Follow Us</h4>
            <div className="flex flex-row space-x-2">
              <a href="https://www.instagram.com/ease_kids/" className="text-white bg-[#77A060] rounded-full p-2 hover:bg-[#5a7a4a]">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-inter text-[18px] font-semibold text-[#000] mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="https://ease-kids.ch/#author" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Author</a></li>
              <li><a href="https://ease-kids.ch/#aboutus" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">About us</a></li>
              <li><a href="https://ease-kids.ch/#testiminials" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Help */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-inter text-[18px] font-semibold text-[#000] mb-4">Quick Help</h4>
            <ul className="space-y-2">
              <li><a href="https://ease-kids.ch/#contact" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Contact us</a></li>
              <li><a href="https://ease-kids.ch/privacy-policy" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Privacy Policy</a></li>
              <li><a href="https://ease-kids.ch/terms-of-use" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Terms Of Use</a></li>
            </ul>
          </div>

          {/* Column 4: Category */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-inter text-[18px] font-semibold text-[#000] mb-4">Category</h4>
            <ul className="space-y-2">
              <li><a href="https://ease-kids.ch/product-category/kids-science-books/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Kids Science Books</a></li>
              <li><a href="https://ease-kids.ch/product-category/anatomy/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Anatomy</a></li>
              <li><a href="https://ease-kids.ch/product-category/chemistry/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Chemistry</a></li>
              <li><a href="https://ease-kids.ch/product-category/mathematics/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Mathematics</a></li>
              <li><a href="https://ease-kids.ch/product-category/physics/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Physics</a></li>
              <li><a href="https://ease-kids.ch/product-category/astronomy/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Astronomy</a></li>
              <li><a href="https://ease-kids.ch/product-category/psychology/" className="text-[#000] text-[16px] leading-[28px] font-inter hover:text-[#77A060]">Psychology</a></li>

            </ul>
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-8 text-center text-[#000] text-[16px] leading-[28px] font-inter">
          © 2023 Eurasian Scientific Editions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;