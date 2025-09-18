import React from 'react';

const BookPreview = () => {
  return (
    <section id="preview" className="py-20" style={{ backgroundColor: '#F9F1E2' }}>
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
                border: '1px solid lightgray', 
                width: '100%', 
                height: '400px'
              }}
              src="https://heyzine.com/flip-book/843f012ca4.html"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPreview;