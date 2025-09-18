import React, { useState, useEffect } from 'react';
import { CheckCircle, Download, Heart, Sparkles, X } from 'lucide-react';

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
  customerName?: string;
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ 
  isOpen, 
  onClose, 
  onDownload,
  customerName = ''
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-md bg-gradient-to-br from-white via-[#F9F1E2] to-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#77A060]/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-600/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 group w-8 h-8 bg-white/80 hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
          onClick={onClose}
          aria-label="Schließen"
        >
          <X className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </button>

        {/* Success Icon */}
        <div className="pt-8 pb-4 px-6 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#77A060] to-green-600 rounded-full blur-lg opacity-30 animate-pulse" />
            <div className="relative w-20 h-20 bg-gradient-to-r from-[#77A060] to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
              <CheckCircle className="w-10 h-10 text-white animate-in zoom-in duration-700" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900 font-lora">
              Vielen Dank{customerName ? `, ${customerName}` : ''}!
            </h2>
            <p className="text-gray-600 font-inter leading-relaxed">
              Deine Zahlung war erfolgreich. Dein E-Book "Das Menschliche Gehirn" ist bereit zum Download!
            </p>
          </div>
        </div>

        {/* Book Preview */}
        <div className="px-6 py-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-20 bg-gradient-to-br from-[#77A060] to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">E-BOOK</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Das Menschliche Gehirn</h3>
                <p className="text-sm text-gray-600">Sofortiger Download • PDF Format</p>
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="text-center p-3 bg-gradient-to-br from-[#77A060]/5 to-transparent rounded-xl">
              <Heart className="w-5 h-5 text-[#77A060] mx-auto mb-1" />
              <p className="text-xs text-gray-600">100% sicher</p>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-600/5 to-transparent rounded-xl">
              <Sparkles className="w-5 h-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-gray-600">Sofort download</p>
            </div>
          </div>

          {/* Download Button */}
          <button
            onClick={onDownload}
            className="w-full bg-gradient-to-r from-[#77A060] to-green-600 text-white font-semibold py-3 px-6 rounded-2xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Jetzt Herunterladen</span>
          </button>

          {/* Additional Info */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Der Download startet automatisch. Eine E-Mail mit dem Link wurde an deine Adresse gesendet.
          </p>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#77A060] to-green-600 rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;