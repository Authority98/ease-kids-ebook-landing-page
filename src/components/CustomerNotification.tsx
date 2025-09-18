import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin } from 'lucide-react';

const CustomerNotification: React.FC = () => {
  const [notification, setNotification] = useState<{ name: string; location: string; time: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const customerData = [
    { name: 'Anna', location: 'Berlin' },
    { name: 'Markus', location: 'München' },
    { name: 'Lisa', location: 'Hamburg' },
    { name: 'Thomas', location: 'Köln' },
    { name: 'Sarah', location: 'Frankfurt' },
    { name: 'Michael', location: 'Stuttgart' },
    { name: 'Julia', location: 'Düsseldorf' },
    { name: 'David', location: 'Leipzig' },
    { name: 'Sophie', location: 'Dortmund' },
    { name: 'Alexander', location: 'Essen' }
  ];

  const generateRandomNotification = () => {
    const randomCustomer = customerData[Math.floor(Math.random() * customerData.length)];
    const randomMinutes = Math.floor(Math.random() * 15) + 1; // 1-15 minutes ago
    
    return {
      name: randomCustomer.name,
      location: randomCustomer.location,
      time: `vor ${randomMinutes} Minute${randomMinutes === 1 ? '' : 'n'}`
    };
  };

  useEffect(() => {
    const showNotification = () => {
      const newNotification = generateRandomNotification();
      setNotification(newNotification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 10 seconds
    const firstTimeout = setTimeout(showNotification, 10000);

    // Show notifications twice per minute (every 30 seconds)
    const interval = setInterval(showNotification, 30000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg p-4 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-[#77A060] to-green-600 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              {notification.name} hat gerade gekauft
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3 text-gray-400" />
              <p className="text-xs text-gray-500">
                {notification.location} • {notification.time}
              </p>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#77A060] to-green-600 h-1 rounded-full transition-all duration-5000 ease-linear"
            style={{
              width: isVisible ? '100%' : '0%',
              transition: 'width 5s linear'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerNotification;