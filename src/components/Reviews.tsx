import React, { useState } from 'react';
import { Star, Quote, Heart, ThumbsUp, Users, Award, GraduationCap } from 'lucide-react';
import PaymentModal from './PaymentModal';
import ThankYouPopup from './ThankYouPopup';

interface ReviewsProps {
  timeLeft?: number;
}

const Reviews: React.FC<ReviewsProps> = ({ timeLeft }) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const handleOpenPayment = () => {
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };

  const handlePaymentSuccess = (name: string, email: string) => {
    setCustomerName(name);
    setCustomerEmail(email);
    setShowThankYou(true);
  };

  const handleDownload = () => {
    // Create download link
    const link = document.createElement('a');
    link.href = '/ease-kids-ebook.pdf';
    link.download = 'Das-Menschliche-Gehirn-E-Book.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reviews = [
    {
      name: "@familienchaos_mal_5",
      title: "",
      rating: 5,
      review: "Sehr spannend, Dankeschön für die tolle Vorstellung! 😍",
      avatar: "/familienchaos_mal_5.jpg"
    },
    {
      name: "@mintundmalve",
      title: "",
      rating: 5,
      review: "Witzige Illustrationen. 😅 Das Thema finde ich auch mega spannend!",
      avatar: "/mintundmalve.jpg"
    },
    {
      name: "@janettsmeinung",
      title: "",
      rating: 5,
      review: "Ein spannendes Thema und auch sehr ansprechend und modern umgesetzt. Gefällt mir!",
      avatar: "/janettsmeinung.jpg"
    },
    {
      name: "@favolina_und_junior",
      title: "",
      rating: 5,
      review: "Oh wow, was für coole Illustrationen 😍",
      avatar: "/favolina_und_junior.jpg"
    },
    {
      name: "@kinderbuchwelten",
      title: "",
      rating: 5,
      review: "Wooow das sieht ja krass aus 😂😍 total spannend 😮",
      avatar: "/kinderbuchwelten.jpg"
    },
    {
      name: "@kuestenkidsunterwegs",
      title: "",
      rating: 5,
      review: "Toll, wenn Sachwissen so spannend präsentiert wird 👍📖",
      avatar: "/kuestenkidsunterwegs.jpg"
    }
  ];

  return (
    <section id="reviews" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      {/* Creative Reviews & Social Proof Icons */}
      <div className="absolute top-16 right-12 opacity-20 animate-pulse">
        <ThumbsUp className="w-18 h-18 text-[#77A060]" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-15 animate-bounce">
        <Users className="w-16 h-16 text-[#77A060]" />
      </div>
      <div className="absolute top-1/4 left-8 opacity-25 transform rotate-12">
        <Award className="w-14 h-14 text-yellow-500" />
      </div>
      <div className="absolute bottom-1/3 right-8 opacity-20 animate-pulse">
        <Users className="w-12 h-12 text-[#77A060]" />
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-15 transform -rotate-12">
        <Heart className="w-10 h-10 text-red-400" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-20 transform rotate-45">
        <GraduationCap className="w-8 h-8 text-[#77A060]" />
      </div>
      <div className="absolute top-12 left-1/4 opacity-15 animate-bounce">
        <Star className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Was Leser sagen
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 bg-gradient-to-r from-[#77A060] to-green-600 bg-clip-text text-transparent fill-current" style={{fill: 'url(#starGradient)'}} />
            ))}
            <span className="text-2xl font-bold text-black ml-4 font-lora">4.9/5</span>
          </div>
          <svg width="0" height="0">
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#77A060" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-xl text-black font-inter">
            Bewertungen von Eltern, Buchrezensenten und begeisterten Lesern
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              style={{ borderColor: '#77A060' }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-black font-semibold font-lora">{review.name}</h4>
                  <p className="text-sm font-inter" style={{ color: '#77A060' }}>{review.title}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{fill: 'url(#starGradient)'}} />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-black/30" />
                <p className="text-black leading-relaxed pl-6 font-inter">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border-2 max-w-4xl mx-auto" style={{ borderColor: '#77A060' }}>
            <h3 className="text-2xl font-bold text-black mb-4 font-lora">
              Werde Teil der Gehirn-Entdecker Community!
            </h3>
            <p className="text-black mb-6 font-inter">
              "Das Menschliche Gehirn" ist das perfekte Buch für neugierige Kinder, die verstehen wollen, wie ihr Gehirn funktioniert.
            </p>
            <button 
              className="text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r from-[#77A060] to-green-700 hover:from-green-700 hover:to-green-800 font-inter" 
              onClick={handleOpenPayment}
            >
              Jetzt dein Exemplar sichern
            </button>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={handleClosePayment}
        timeLeft={timeLeft}
        onPaymentSuccess={handlePaymentSuccess}
      />
      
      <ThankYouPopup 
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        onDownload={handleDownload}
        customerName={customerName}
      />
    </section>
  );
};

export default Reviews;