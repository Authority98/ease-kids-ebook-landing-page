import React, { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import PaymentModal from './PaymentModal';

interface VideoPopupProps {
  videoUrl: string;
  onClose: () => void;
  isOpen: boolean;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, onClose, isOpen }) => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleOpenPayment = () => {
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl bg-gradient-to-br from-[#77A060]/5 to-green-50 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#77A060]/20 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#77A060] to-green-700 rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 font-lora">Buchvorschau</h3>
              <p className="text-sm text-gray-600 font-inter">Das Menschliche Gehirn</p>
            </div>
          </div>
          
          <button
            className="group w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            onClick={onClose}
            aria-label="Video schließen"
          >
            <X className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black">
          <video 
            controls 
            autoPlay 
            className="w-full h-auto max-h-[70vh] object-contain"
            poster="/book-cover.png"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Video overlay gradient for better visual appeal */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gradient-to-r from-[#77A060]/5 to-green-50 border-t border-[#77A060]/20">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-700 font-inter">
                Gefällt dir was du siehst? Hol dir das komplette Buch!
              </p>
              <div className="flex items-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
                <span className="text-sm text-gray-600 ml-2">4.9/5 (1,247 Bewertungen)</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button 
                className="px-6 py-2 bg-[#77A060]/10 hover:bg-[#77A060]/20 text-[#77A060] border border-[#77A060]/30 rounded-full font-medium transition-colors duration-200 font-inter"
                onClick={onClose}
              >
                Schließen
              </button>
              <button 
                className="px-6 py-2 bg-gradient-to-r from-[#77A060] to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full font-bold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter"
                onClick={handleOpenPayment}
              >
                Jetzt kaufen
              </button>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={handleClosePayment}
      />
    </div>
  );
};

export default VideoPopup;