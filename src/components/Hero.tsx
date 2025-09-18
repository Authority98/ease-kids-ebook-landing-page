import React from 'react';
import { Star, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
              ))}
              <span className="text-black ml-2">4.9/5 (1,247 Bewertungen)</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight font-lora">
              Das Menschliche
              <span className="text-black"> Gehirn</span>
            </h1>
            
            <p className="text-xl text-black mb-8 leading-relaxed font-inter">
              Entdecke die faszinierende Welt deines Gehirns! Eine spannende Reise durch Neuronen, Synapsen und die Geheimnisse des Denkens - erzählt von Dr. Santiago Ramón y Cajal himself!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-inter" style={{ backgroundColor: '#77A060' }}>
                <Download className="inline w-5 h-5 mr-2" />
                Jetzt kaufen
              </button>
              <button className="group border-2 border-black text-black px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-black/10 font-inter">
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
                  src="https://images.pexels.com/photos/8613313/pexels-photo-8613313.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Das Menschliche Gehirn Buchcover"
                  className="w-72 h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 text-white font-bold px-4 py-2 rounded-full transform rotate-12 shadow-lg font-inter" style={{ backgroundColor: '#77A060' }}>
                  Bestseller!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;