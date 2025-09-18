import React from 'react';
import { BookOpen, Eye, Lightbulb, Star, GraduationCap } from 'lucide-react';
// Removed: import HTMLFlipBook from 'react-pageflip';

// Removed: const Page = React.forwardRef(...);

const BookPreview = () => {
  return (
    <section id="preview" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      <img 
        src="/d2.png" 
        alt="Decoration 2" 
        className="absolute top-4 left-4 w-1/4 h-auto z-0 opacity-100"
      />
      
      {/* Creative Preview & Reading Icons */}
      <div className="absolute top-12 right-8 opacity-20 animate-pulse">
        <Eye className="w-18 h-18 text-[#77A060]" />
      </div>
      <div className="absolute bottom-16 left-12 opacity-15 animate-bounce">
        <BookOpen className="w-16 h-16 text-[#77A060]" />
      </div>
      <div className="absolute top-1/3 right-16 opacity-25 transform rotate-12">
        <Lightbulb className="w-14 h-14 text-[#77A060]" />
      </div>
      <div className="absolute bottom-32 right-8 opacity-20 animate-pulse">
        <GraduationCap className="w-12 h-12 text-[#77A060]" />
      </div>
      <div className="absolute top-2/3 left-8 opacity-15 transform -rotate-45">
        <Star className="w-10 h-10 text-yellow-500" />
      </div>
      <div className="absolute bottom-8 right-1/4 opacity-20 transform rotate-45">
        <Lightbulb className="w-8 h-8 text-yellow-500" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Blättere durch das Buch
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-inter">
            Erlebe das Buch mit unserem interaktiven Flipbook. Blättere durch die Seiten und entdecke die faszinierende Welt des Gehirns.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe 
              allowFullScreen={true}
              allow="clipboard-write" 
              scrolling="no" 
              className="fp-iframe rounded-lg shadow-2xl" 
              style={{
                border: '0px', 
                width: '100%', 
                height: '400px'
              }}
              src="https://heyzine.com/flip-book/843f012ca4.html"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPreview;