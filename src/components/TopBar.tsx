import React, { useState, useEffect } from 'react';

interface TopBarProps {
  discountPercentage?: number;
  durationMinutes?: number;
}

const TopBar: React.FC<TopBarProps> = ({ 
  discountPercentage = 25, 
  durationMinutes = 30 
}) => {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#77A060] via-green-600 to-[#77A060] text-white shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-pulse">⚡</span>
              <span className="font-bold text-lg">LIMITIERTES ANGEBOT!</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                {discountPercentage}% RABATT
              </span>
              <span className="text-sm opacity-90">auf dein E-Book</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm opacity-90">Noch</span>
              <div className="bg-white/20 px-3 py-1 rounded-lg font-mono font-bold text-lg">
                {formatTime(timeLeft)}
              </div>
              <span className="text-sm opacity-90">Minuten</span>
            </div>
            
            <div className="sm:hidden flex items-center space-x-1">
              <span className="text-xs opacity-90">Endet in</span>
              <div className="bg-white/20 px-2 py-1 rounded text-sm font-mono font-bold">
                {formatTime(timeLeft)}
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Schließen"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 w-full bg-white/20 rounded-full h-1">
          <div 
            className="bg-white h-1 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(timeLeft / (durationMinutes * 60)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;