import React, { useState, useEffect } from 'react';

interface TopBarProps {
  discountPercentage?: number;
  durationMinutes?: number;
  timeLeft?: number;
}

const TopBar: React.FC<TopBarProps> = ({ 
  discountPercentage = 25, 
  durationMinutes = 10,
  timeLeft: externalTimeLeft 
}) => {
  const [internalTimeLeft, setInternalTimeLeft] = useState(durationMinutes * 60);
  const timeLeft = externalTimeLeft ?? internalTimeLeft; // Use external time if provided, otherwise internal
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsVisible(false);
      return;
    }

    // Only run internal timer if no external time is provided
    if (externalTimeLeft === undefined) {
      const timer = setInterval(() => {
        setInternalTimeLeft(prev => {
          if (prev <= 1) {
            setIsVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, externalTimeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="bg-gradient-to-r from-[#77A060] to-green-700 backdrop-blur-sm border-b border-green-800/20 shadow-lg">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-center space-x-6">
            {/* Left side - Offer text */}
            <div className="flex items-center space-x-3">
              <span className="text-lg">🔥</span>
              <span className="text-sm font-medium text-white">Begrenztes Angebot</span>
              <span className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30">
                {discountPercentage}% SPAREN
              </span>
            </div>
            
            {/* Center - Timer with enhanced design */}
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-1 border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <span className="text-xs font-medium text-white/90">Endet in</span>
              </div>
              <div className="flex space-x-1">
                <div className="text-sm font-mono font-bold text-white bg-white/20 px-2 py-1 rounded-lg border border-white/30">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
            
            {/* Right side - Progress indicator and close */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="w-20 h-1.5 bg-white/20 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-white transition-all duration-1000 ease-linear rounded-full"
                  style={{ width: `${(timeLeft / (durationMinutes * 60)) * 100}%` }}
                />
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="group w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm border border-white/30"
                aria-label="Schließen"
              >
                <svg className="w-3 h-3 text-white group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Mobile close button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="sm:hidden group w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm border border-white/30"
              aria-label="Schließen"
            >
              <svg className="w-3 h-3 text-white group-hover:text-gray-800 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;