import React from 'react';
import { Download, BookOpen, Headphones, Tablet, Check, Gift } from 'lucide-react';

const PurchaseSection = () => {
  const formats = [
    {
      icon: <Download className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "E-Book",
      description: "Sofortiger Download, interaktive Elemente",
      price: "€14.99",
      originalPrice: "€19.99",
      popular: true
    },
    {
      icon: <BookOpen className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Hardcover",
      description: "Hochwertige Druckausgabe, perfekt zum Sammeln",
      price: "€24.99",
      originalPrice: "€29.99",
      popular: false
    },
    {
      icon: <Headphones className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Hörbuch",
      description: "Vom Autor gelesen, 4 Stunden Hörvergnügen",
      price: "€16.99",
      originalPrice: "€21.99",
      popular: false
    }
  ];

  const features = [
    "Lebenslanger Zugang zu digitalen Updates",
    "Exklusiver Zugang zur Leser-Community",
    "Bonus-Aktivitäten und Experimente",
    "Interaktive digitale Ressourcen",
    "30 Tage Geld-zurück-Garantie"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F9F1E2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Hol dir dein Exemplar
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8 font-inter">
            Wähle dein bevorzugtes Format und starte deine Reise ins Gehirn
          </p>
          
          <div className="inline-flex items-center space-x-2 text-white px-6 py-3 rounded-full font-bold shadow-lg font-inter" style={{ backgroundColor: '#77A060' }}>
            <Gift className="w-5 h-5" />
            <span>Begrenzte Zeit: 25% Rabatt auf alle Formate</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {formats.map((format, index) => (
            <div 
              key={index}
              className={`relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                format.popular 
                  ? 'shadow-xl' 
                  : 'border-gray-300'
              }`}
              style={{ borderColor: format.popular ? '#77A060' : '#d1d5db' }}
            >
              {format.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg font-inter" style={{ backgroundColor: '#77A060' }}>
                  Beliebteste Wahl
                </div>
              )}
              
              <div className="text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {format.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4 font-lora">
                  {format.title}
                </h3>
                
                <p className="text-black mb-6 font-inter">
                  {format.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-black font-lora">{format.price}</span>
                    <span className="text-lg text-black/50 line-through font-inter">{format.originalPrice}</span>
                  </div>
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 font-inter ${
                  format.popular
                    ? 'text-white transform hover:scale-105 shadow-lg'
                    : 'border-2 text-black hover:text-white'
                }`}
                style={{ 
                  backgroundColor: format.popular ? '#77A060' : 'transparent',
                  borderColor: format.popular ? 'transparent' : '#77A060'
                }}
                onMouseEnter={(e) => {
                  if (!format.popular) {
                    e.currentTarget.style.backgroundColor = '#77A060';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!format.popular) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {format.popular ? 'E-Book kaufen' : `${format.title} wählen`}
              </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 border-2 shadow-2xl" style={{ borderColor: '#77A060' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6 font-lora">
                Was ist enthalten
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#77A060' }} />
                    <span className="text-black font-inter">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border-2" style={{ borderColor: '#77A060' }}>
                <h4 className="text-black font-semibold mb-2 font-lora">Spezial Launch Bonus</h4>
                <p className="text-black text-sm font-inter">
                  Bestelle in den nächsten 48 Stunden und erhalte exklusiven Zugang zu Dr. Pablos Online-Masterclass "Gehirnforschung für Kinder" (Wert: €97)
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <Tablet className="w-16 h-16 mx-auto mb-4" style={{ color: '#77A060' }} />
                  <h4 className="text-2xl font-bold text-black mb-4 font-lora">
                    Auf allen Geräten verfügbar
                  </h4>
                  <p className="text-black mb-6 font-inter">
                    Lese auf deinem Handy, Tablet, Computer oder E-Reader. Nahtlose Synchronisation auf allen Geräten.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-black font-inter">
                    <div>• iOS & Android</div>
                    <div>• Kindle & EPUB</div>
                    <div>• PDF Download</div>
                    <div>• Web-Browser</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-black mb-4 font-inter">
            Sichere Bezahlung mit branchenführender Verschlüsselung
          </p>
          <div className="flex items-center justify-center space-x-8 text-black/60">
            <span className="text-2xl font-bold font-inter">VISA</span>
            <span className="text-2xl font-bold font-inter">PayPal</span>
            <span className="text-2xl font-bold font-inter">Apple Pay</span>
            <span className="text-2xl font-bold font-inter">Google Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;