import React from 'react';
import { Twitter, Linkedin, Globe, BookOpen, Lightbulb, Award, Heart, GraduationCap, Youtube, Instagram, Facebook } from 'lucide-react';

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
            Ein leidenschaftlicher Wissenschaftler, der komplexe Themen für Kinder verständlich macht.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-black/10 rounded-3xl transform rotate-3 scale-105"></div>
            <img 
              src="/Pablo.jpg" 
              alt="Dr. Pablo Barrecheguren - Autor"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-lora">
              Dr. Pablo José Barrecheguren Manero
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Ein leidenschaftlicher Wissenschaftler, Doktor der Biomedizin und Experte für Wissenschaftskommunikation.
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                Nach seinem Biochemie-Studium in seiner Heimatstadt Saragossa und einem einjährigen Forschungsaufenthalt an der Universität Cambridge (UK) erwarb Pablo seinen Masterabschluss und promovierte in Neurowissenschaften an der Universität Barcelona. Im Anschluss daran wurde er Finalist des wissenschaftlichen Monologwettbewerbs „Famelab España“ und wechselte vom Labor auf die Bühne.
              </p>
              
              <p className="font-inter">
                Sein Studium an der Schreibschule Ateneo Barcelonés führte ihn zur Veröffentlichung von Neurogamer  (2021, Ed. Paidós), einem Buch, das untersucht, wie Videospiele unser Gehirn beeinflussen. Er ist zudem Autor und Co-Autor von wissenschaftsjournalistischen Artikeln ( elPaís ) und mehreren populärwissenschaftlichen Büchern, darunter „Das menschliche Gehirn“, das ins Deutsche übersetzt und bei Eurasian Scientific Editions veröffentlicht wurde.
              </p>
              
              <p className="font-inter">
                Pablo hat außerdem am Imperial College London studiert, den renommierten Masterstudiengang „Science Media Production“ abgeschlossen und zweimal nationale Fördermittel (FECYT) für audiovisuelle Projekte gewonnen: Neurocosas  (2017) und Neuropíldoras  (2018). All diese Kenntnisse und Erfahrungen haben dazu geführt, dass er als Trainer in allen Aspekten der Wissenschaftskommunikation tätig ist. Sie können seine Arbeit hier verfolgen:
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
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/neurocosas"
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Youtube className="w-6 h-6" />
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
              Illustratorin & Wissenschaftliche Visualisierung.
            </p>
            
            <div className="space-y-4 text-black mb-8">
              <p className="font-inter">
                „Ich bin eine zeichnende Natur, das sich der Visualisierung der Wissenschaft widmet, mit dem Wunsch, Kinder und Erwachsene gleichermaßen zu inspirieren“. – Isa Loureiro
              </p>
              
              <p className="font-inter">
                Isa studierte Design an der Universität von Aveiro und setzte ihren beruflichen Weg in Barcelona fort, wo sie mehr als 10 Jahre lang als Senior-Grafikdesignerin in Design- und Architekturbüros tätig war.
              </p>
              
              <p className="font-inter">
                Ihre Leidenschaft war schon immer die Illustration, weshalb sie beschloss, ihre Fähigkeiten zu verfeinern und sich schließlich auf die wissenschaftliche Illustration spezialisierte (unter anderem studierte sie an der Illustraciencia Academy), um so zur Vermittlung menschlichen Wissens beizutragen.
              </p>
              
              <p className="font-inter">
                „Ich entdeckte die Schönheit in den bizarren Geschöpfen der Natur ebenso wie in den Feinheiten des menschlichen Körpers und empfinde eine wahre Freude daran, sie zu zeichnen. Ich nutze meine unerschöpfliche Geduld, um Komplexes zu beobachten und zu zeichnen, wobei Objektivität die grundlegende Basis meiner Arbeit ist“. – Isa Loureiro
              </p>
              
              <p className="font-inter">
                2021 erhielt Isa den Junceda-Preis in der Kategorie Wissenschaftliche Illustration. Heute arbeitet sie als freiberufliche Designerin und Illustratorin und ist stets bereit, sich auf Projekte oder Aufträge einzulassen, die ihre Vorstellungskraft und ihre Hand auf die Probe stellen.
              </p>
            </div>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://www.instagram.com/isaloureiro_arteyciencia/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/isaloureiro.arteyciencia/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Facebook className="w-6 h-6" />
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
              src="/Isa2.jpg" 
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
              src="/Teresa.jpg" 
              alt="Teresa Ruiz Rosas - Übersetzerin"
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4 font-lora">
              Teresa Ruiz Rosas
            </h3>
            <p className="text-xl mb-6 font-inter" style={{ color: '#77A060' }}>
              Übersetzerin & Schriftstellerin.
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
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/teresaruizrosas/" 
                className="p-3 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                style={{ backgroundColor: '#77A060' }}
              >
                <Facebook className="w-6 h-6" />
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