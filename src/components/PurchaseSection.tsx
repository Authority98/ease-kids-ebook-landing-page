import React, { useState } from 'react';
import { Download, BookOpen, Headphones, Tablet, Check, Gift, ShoppingCart, Star, Heart, GraduationCap, Play } from 'lucide-react';
import PaymentModal from './PaymentModal';
import ThankYouPopup from './ThankYouPopup';
import VideoPopup from './VideoPopup';

interface PurchaseSectionProps {
  timeLeft?: number;
}

const PurchaseSection: React.FC<PurchaseSectionProps> = ({ timeLeft }) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  const formats = [
    {
      icon: <BookOpen className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Hardcover",
      description: "Hochwertige Druckausgabe",
      price: "CHF 26.50",
      popular: true
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
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      <img 
        src="/d3.png" 
        alt="Background pattern"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
      />
      
      {/* Creative Purchase & Shopping Icons */}
      <div className="absolute top-16 right-12 opacity-20 animate-pulse">
        <ShoppingCart className="w-20 h-20 text-[#77A060]" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-15 animate-bounce">
        <BookOpen className="w-18 h-18 text-[#77A060]" />
      </div>
      <div className="absolute top-1/4 left-8 opacity-25 transform rotate-12">
        <Star className="w-16 h-16 text-yellow-500" />
      </div>
      <div className="absolute bottom-1/3 right-8 opacity-20 animate-pulse">
        <GraduationCap className="w-14 h-14 text-[#77A060]" />
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-15 transform -rotate-12">
        <Heart className="w-12 h-12 text-red-400" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-20 transform rotate-45">
        <BookOpen className="w-10 h-10 text-[#77A060]" />
      </div>
      <div className="absolute top-12 left-1/4 opacity-15 animate-bounce">
        <Gift className="w-8 h-8 text-yellow-500" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Hol dir dein Exemplar
          </h2>
        </div>

        {/* Video Preview Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#77A060]/20">
              <div className="relative cursor-pointer" onClick={handleOpenVideo}>
                <div className="relative w-full aspect-square">
                  <img 
                    src="/cover.png" 
                    alt="Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#77A060] to-green-700 rounded-full flex items-center justify-center shadow-xl transform scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-lora">Buchvorschau ansehen</h3>
                <p className="text-gray-600 font-inter">Entdecke die faszinierende Welt des menschlichen Gehirns</p>
                <button 
                  onClick={handleOpenVideo}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-[#77A060] to-green-700 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Video abspielen
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16 justify-center">
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
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg font-inter bg-gradient-to-r from-[#77A060] to-green-700">
                  Beliebteste Wahl
                </div>
              )}
              
              <div className="text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
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
                  </div>
                </div>
                
                <button 
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 font-inter ${
                    format.popular
                      ? 'text-white transform hover:scale-105 shadow-lg bg-gradient-to-r from-[#77A060] to-green-700 hover:from-green-700 hover:to-green-800'
                      : 'border-2 text-black hover:text-white bg-gradient-to-r from-transparent to-transparent hover:from-[#77A060] hover:to-green-700'
                  }`}
                  style={{ 
                    borderColor: format.popular ? 'transparent' : '#77A060'
                  }}
                  onClick={handleOpenPayment}
                >
                  {format.popular ? 'Jetzt kaufen' : `${format.title} wählen`}
                </button>
              </div>
            </div>
          ))}
        </div>



        <div className="text-center mt-16">
          <p className="text-black mb-4 font-inter">
            Sichere Bezahlung mit branchenführender Verschlüsselung
          </p>
          <div className="flex items-center justify-center space-x-8">

          </div>
        </div>
      </div>

      <VideoPopup
        videoUrl="https://example.com/TheHumanBrain.mp4"
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        timeLeft={timeLeft}
      />

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

export default PurchaseSection;