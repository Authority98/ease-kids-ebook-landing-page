import React, { useState, useEffect } from 'react';
import { X, CreditCard, User, Download, CheckCircle, Lock, Star, GraduationCap } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<'payment' | 'success'>('payment');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep('payment');
      setIsProcessing(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      });
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (formatted.length <= 19) { // 16 digits + 3 spaces
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (formatted.length <= 5) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }
    
    // Limit CVV to 3 digits
    if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '');
      if (formatted.length <= 3) {
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation check
    const requiredFields = ['firstName', 'lastName', 'email', 'cardNumber', 'expiryDate', 'cvv'];
    const isValid = requiredFields.every(field => formData[field as keyof FormData].trim() !== '');
    
    if (!isValid) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    // Use setTimeout to ensure DOM is ready for step transition
    setTimeout(() => {
      setCurrentStep('success');
    }, 0);
  };

  const handleDownload = () => {
    // Use a more React-friendly approach for download
    try {
      const link = document.createElement('a');
      link.href = '/book-cover.png'; // This would be replaced with actual PDF URL
      link.download = 'Das-Menschliche-Gehirn-Ebook.pdf';
      link.target = '_blank';
      link.style.display = 'none';
      
      // Temporarily append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      
      // Use setTimeout to ensure the click event is processed before removal
      setTimeout(() => {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }, 100);
      
      // Show success message
      alert('Download gestartet! Das E-Book wird heruntergeladen...');
    } catch (error) {
      console.error('Download error:', error);
      alert('Download konnte nicht gestartet werden. Bitte versuchen Sie es erneut.');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-gradient-to-br from-[#F9F1E2] to-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: '#F9F1E2' }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <Star className="w-16 h-16 text-[#77A060]" />
        </div>
        <div className="absolute bottom-4 left-4 opacity-10">
          <GraduationCap className="w-12 h-12 text-[#77A060]" />
        </div>

        {currentStep === 'payment' ? (
          <div data-step="payment">
            {/* Header */}
            <div className="relative p-6 text-center border-b border-[#77A060]/20">
              <button
                className="absolute top-3 right-3 group w-8 h-8 bg-white/80 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                onClick={onClose}
                aria-label="Zahlung schließen"
              >
                <X className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
              </button>

              <div className="w-12 h-12 bg-gradient-to-r from-[#77A060] to-green-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1 font-lora">Sichere Zahlung</h3>
              <p className="text-base text-gray-700 font-inter">Das Menschliche Gehirn</p>
              
              <div className="flex items-center justify-center space-x-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs text-gray-600 ml-2 font-inter">4.9/5 Bewertung</span>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Personal Information */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center font-lora">
                  <User className="w-4 h-4 mr-2 text-[#77A060]" />
                  Deine Daten
                </h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                      placeholder="Vorname"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                      placeholder="Nachname"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                    placeholder="E-Mail Adresse"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center font-lora">
                  <Lock className="w-4 h-4 mr-2 text-[#77A060]" />
                  Zahlungsdaten
                </h4>
                
                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#77A060] focus:border-transparent transition-all font-inter bg-white/80 backdrop-blur-sm text-sm"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border-2 border-[#77A060]/20">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-700 font-inter">Das Menschliche Gehirn E-Book</span>
                  <span className="text-xl font-bold text-[#77A060] font-lora">€19.99</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 font-inter">✨ Sofortiger Download nach dem Kauf</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-[#77A060] to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-inter"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Zahlung wird verarbeitet...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Lock className="w-4 h-4 mr-2" />
                    Sicher bezahlen - €19.99
                  </div>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center font-inter">
                🔒 SSL-verschlüsselt • 30 Tage Geld-zurück-Garantie
              </p>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div data-step="success">
          <div className="p-6 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-[#77A060]/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle className="w-12 h-12 text-[#77A060]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 font-lora">Fantastisch!</h3>
              <p className="text-lg text-gray-700 font-inter">
                Dein E-Book wartet auf dich! 🎉
              </p>
            </div>

            <div className="bg-gradient-to-r from-white/80 to-[#77A060]/10 rounded-2xl p-6 mb-6 border-2 border-[#77A060]/20">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <img 
                    src="/book-cover.png" 
                    alt="Das Menschliche Gehirn" 
                    className="w-24 h-32 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#77A060] to-green-700 text-white font-bold px-2 py-1 rounded-full text-xs transform rotate-12 shadow-lg font-inter">
                    Bestseller!
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1 font-lora">Das Menschliche Gehirn</h4>
              <p className="text-sm text-gray-600 font-inter">Bereit zum sofortigen Download!</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center font-inter"
              >
                <Download className="w-5 h-5 mr-2" />
                E-Book jetzt herunterladen
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors duration-200 font-inter"
              >
                Fertig
              </button>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-[#77A060]/10 rounded-xl border-2 border-[#77A060]/30">
              <p className="text-sm text-[#77A060] font-inter flex items-center justify-center font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Zahlung erfolgreich! Eine Bestätigungs-E-Mail wurde an {formData.email} gesendet.
              </p>
              <p className="text-xs text-gray-600 font-inter text-center mt-2">
                Du erhältst auch eine Rechnung und Downloadlinks per E-Mail.
              </p>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;