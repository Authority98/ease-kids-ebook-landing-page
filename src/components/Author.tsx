import React from 'react';
import { Twitter, Linkedin, Globe, BookOpen, Lightbulb, Award, Heart, GraduationCap } from 'lucide-react';

const Author = () => {
  return (
    <section id="author" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20" style={{ backgroundColor: 'transparent' }}>
      <img 
        src="/d1.png" 
        alt="Decoration 1" 
        className="absolute bottom-0 right-0 w-1/6 h-auto z-0 opacity-100"
      />
      <img 
        src="/d2.png" 
        alt="Decoration 2" 
        className="absolute top-4 left-4 w-1/4 h-auto z-0 opacity-100"
      />
      
      {/* Creative Author & Science Icons */}
      <div className="absolute top-16 right-12 opacity-20 animate-pulse">
        <GraduationCap className="w-20 h-20 text-[#77A060]" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-15 animate-bounce">
        <Award className="w-16 h-16 text-yellow-500" />
      </div>
      <div className="absolute top-1/4 left-8 opacity-25 transform rotate-12">
        <Lightbulb className="w-14 h-14 text-yellow-500" />
      </div>
      <div className="absolute bottom-1/3 right-8 opacity-20 animate-pulse">
        <GraduationCap className="w-12 h-12 text-[#77A060]" />
      </div>
      <div className="absolute top-2/3 right-1/4 opacity-15 transform -rotate-12">
        <Heart className="w-10 h-10 text-red-400" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-20 transform rotate-45">
        <BookOpen className="w-8 h-8 text-[#77A060]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Lerne den Autor kennen
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-inter">
            Ein leidenschaftlicher Wissenschaftler, der komplexe Themen für Kinder verständlich macht
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Dr. Pablo Barrecheguren - Autor"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-lora">
              Dr. Pablo Barrecheguren
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Neurowissenschaftler & Kinderbuchautor
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                Dr. Pablo Barrecheguren ist ein renommierter Neurowissenschaftler, der es liebt, 
                komplexe Gehirnforschung für Kinder verständlich zu machen. Mit über 10 Jahren 
                Erfahrung in der Hirnforschung bringt er Wissenschaft auf spielerische Weise näher.
              </p>
              
              <p className="font-inter">
                Seine Arbeit wurde in führenden wissenschaftlichen Zeitschriften veröffentlicht, 
                und er hat bereits mehrere erfolgreiche Kinderbücher über Wissenschaft geschrieben. 
                Er promovierte in Neurowissenschaften und arbeitet als Forscher und Wissenschaftskommunikator.
              </p>
              
              <p className="font-inter">
                Wenn er nicht gerade forscht oder schreibt, liebt Pablo es, mit Kindern über 
                Wissenschaft zu sprechen und die nächste Generation von Forschern zu inspirieren.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: '#77A060' }}>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-8 h-8" style={{ color: '#77A060' }} />
                  <div>
                    <div className="text-2xl font-bold text-black font-lora">8</div>
                    <div className="text-black font-inter">Kinderbücher</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: '#77A060' }}>
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8" style={{ color: '#77A060' }} />
                  <div>
                    <div className="text-2xl font-bold text-black font-lora">100+</div>
                    <div className="text-black font-inter">Schulbesuche</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="#" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;