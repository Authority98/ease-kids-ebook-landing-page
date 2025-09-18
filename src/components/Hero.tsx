import React, { useState } from 'react';
import { Star, Download, Play, Brain, BookOpen, Lightbulb, GraduationCap } from 'lucide-react';
import VideoPopup from './VideoPopup';
import PaymentModal from './PaymentModal';

interface HeroProps {
  timeLeft?: number;
}

const Hero: React.FC<HeroProps> = ({ timeLeft }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const handleOpenPayment = () => {
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      <img 
        src="/d1.png" 
        alt="Decoration 1" 
        className="absolute bottom-0 right-0 w-1/6 h-auto z-0 opacity-100"
      />
      
      {/* Creative Brain & Book Icons */}
      <div className="absolute top-8 left-8 opacity-20 animate-pulse">
        <Brain className="w-16 h-16 text-[#77A060]" />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-bounce">
        <GraduationCap className="w-12 h-12 text-[#77A060]" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-25 transform rotate-12">
        <BookOpen className="w-14 h-14 text-[#77A060]" />
      </div>
      <div className="absolute top-1/3 right-8 opacity-20 animate-pulse">
        <Lightbulb className="w-10 h-10 text-yellow-500" />
      </div>
      <div className="absolute bottom-20 right-1/4 opacity-15 transform -rotate-12">
        <Brain className="w-8 h-8 text-[#77A060]" />
      </div>
      {/* <img 
        src="/d2.png" 
        alt="Decoration 2" 
        className="absolute top-4 left-4 w-1/4 h-auto z-0 opacity-100"
      /> */}
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-start space-x-1 mb-6 z-20 relative" >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 bg-gradient-to-r from-[#77A060] to-green-600 bg-clip-text text-transparent fill-current drop-shadow-lg shadow-[#77A060]/30" style={{fill: 'url(#starGradient)', filter: 'drop-shadow(0 4px 6px rgba(119, 160, 96, 0.3))'}} />
              ))}
              <span className="text-black ml-2 font-semibold">4.9/5</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight font-lora">
              Das Menschliche
              <span className="text-black"> Gehirn</span>
            </h1>
            
            <p className="text-xl text-black mb-8 leading-relaxed font-inter">
              Entdecke die faszinierende Welt deines Gehirns! Eine spannende Reise durch Neuronen, Synapsen und die Geheimnisse des Denkens - erzählt von Dr. Santiago Ramón y Cajal himself!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="group text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-[#77A060] to-green-700 hover:from-green-700 hover:to-green-800 font-inter" 
                onClick={handleOpenPayment}
              >
                <Download className="inline w-5 h-5 mr-2" />
                Jetzt kaufen
              </button>
              <button
                className="group border-2 border-black text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-black/10 font-inter"
                onClick={handleOpenVideo}
              >
                <Play className="inline w-5 h-5 mr-2" />
                Vorschau ansehen
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-lora">25K+</div>
                <div className="text-black/70 font-inter">Verkauft</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-lora">4.9★</div>
                <div className="text-black/70 font-inter">Bewertung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black font-lora">8-12</div>
                <div className="text-black/70 font-inter">Jahre</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="/book-cover.png" 
                    alt="Das Menschliche Gehirn Buchcover"
                  className="w-96 h-[28rem] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 text-white font-bold px-6 py-3 rounded-full transform rotate-12 shadow-lg font-inter bg-gradient-to-r from-[#77A060] to-green-700 text-lg">
                  Bestseller!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Gradient Definition for Stars */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#77A060" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
      </svg>

      <VideoPopup
        videoUrl="/file notion soff4ba56e7e-57ed-400d-9030-c03c0514f7e68d6ddfa9-43f.mp4"
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        timeLeft={timeLeft}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={handleClosePayment}
        timeLeft={timeLeft}
      />
    </section>
  );
};

export default Hero;