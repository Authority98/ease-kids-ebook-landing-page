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
              Dr. Pablo José Barrecheguren Manero
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Neurowissenschaftler & Wissenschaftskommunikator
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                A passionate scientist, doctor in biomedicine and expert in science communication. 
                After studying Biochemistry in his native Zaragoza and researching for a year at Cambridge 
                University (UK), Pablo obtained master's degree and a PhD on Neurosciences at the University 
                of Barcelona.
              </p>
              
              <p className="font-inter">
                It was after finishing them that he became a finalist in the scientific monologue 
                competition 'FamelabEspaña' and moved from the labs to the stage. His studies at the Ateneo Barcelonés Writing School have led him to publish Neurogamer (2021, 
                Ed. Paidós), a book that explores how video games affect our brain.
              </p>
              
              <p className="font-inter">
                He is also author and co-author of science journalism articles (elPaís) and several popular science books, among them 
                "The Human Brain", which was translated to German and published by Eurasian Scientific 
                Editions. Pablo has also studied at Imperial College London, obtained the prestigious master's degree 
                Science Media Production, and has twice won national funding (FECYT) for audiovisual projects: 
                Neurocosas (2017) and Neuropíldoras (2018).
              </p>
            </div>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://x.com/pjbarrecheguren/status/984123915906768904" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/pablobarrecheguren/?locale=en_US" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/pablobarrecheguren/?hl=en" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Illustrator Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-lora">
              Isa Loureiro
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Illustratorin & Wissenschaftliche Visualisierung
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                "I am a drawing creature, dedicated to the visualization of science, with the desire to inspire 
                children and adults alike". Isa studied Design at the University of Aveiro and continued her professional path in Barcelona, 
                practicing in design and architecture studios as a senior graphic designer for more than 10 
                years.
              </p>
              
              <p className="font-inter">
                Her passion has always been illustration, so she decided to refine her skills and ended up 
                specializing in scientific illustration (inter alia, she studied in Illustraciencia Academy) and 
                thereby contributing to the communication of human knowledge.
              </p>
              
              <p className="font-inter">
                "I discovered beauty in the bizarre beings of the natural world as well as in the intricacies of the 
                human body, and a real pleasure in drawing them. I take advantage of my inexhaustible 
                patience to observe and draw what is complex, using objectivity as the fundamental basis of my 
                work". In 2021 Isa received the Junceda award in the category of Scientific Illustration.
              </p>
            </div>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/isaloureiro_arteyciencia/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/isaloureiro.arteyciencia/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/isalou_sciart" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.isaloureiro.com/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform -rotate-3 scale-105"></div>
            <img 
              src="https://images.pexels.com/photos/3796212/pexels-photo-3796212.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Isa Loureiro - Illustratorin"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Translator Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          <div className="relative">
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Teresa Ruiz Rosas - Übersetzerin"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-lora">
              Teresa Ruiz Rosas
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Übersetzerin & Schriftstellerin
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                Teresa Ruiz Rosas ist eine peruanische Schriftstellerin und Dolmetscherin. Ihr Debütroman El 
                copista wurde 1994 für den Premio Herralde nominiert. Außerdem war sie 1999 für den Juan 
                Rulfo Preis für Kurzgeschichten nominiert.
              </p>
              
              <p className="font-inter">
                Derzeit lebt Teresa in Barcelona, wo sie nicht nur schreibt, sondern auch an Übersetzungen von 
                Spanische und Katalanische ins Deutsch und umgekehrt arbeitet.
              </p>
            </div>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/teresa_ruizrosas/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/teresaruizrosas/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Globe className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/truizrosas" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.teresaruizrosas.com" 
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