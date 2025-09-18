import React from 'react';
import { Calendar, Globe, BookOpen, Award, Users, Zap } from 'lucide-react';

const BookDetails = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Neu erschienen",
      description: "2024 veröffentlicht mit den neuesten Erkenntnissen"
    },
    {
      icon: <Globe className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Für Kinder",
      description: "Perfekt für neugierige Kinder von 8-12 Jahren"
    },
    {
      icon: <BookOpen className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "64 Seiten",
      description: "Vollgepackt mit bunten Illustrationen und Wissen"
    },
    {
      icon: <Award className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Preisgekrönt",
      description: "Bestes Kindersachbuch 2024"
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "25K+ Leser",
      description: "Begeisterte Kinder und Eltern weltweit"
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: '#77A060' }} />,
      title: "Wissenschaftlich",
      description: "Echte Neurowissenschaft kindgerecht erklärt"
    }
  ];

  const Page = React.forwardRef(({ image, alt }: { image: string; alt: string }, ref: React.Ref<HTMLDivElement>) => (
    <div className="page rounded-2xl shadow-2xl bg-white" ref={ref}>
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  ));

  return (
    <section id="details" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F9F1E2' }}>
      <img 
        src="/d1.png" 
        alt="Decoration 1" 
        className="absolute top-0 right-0 w-1/6 h-auto z-0 opacity-100"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ 
  backgroundImage: "url('/d3.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'transparent',
  opacity: 1
}}> 
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 font-lora">
            Warum dieses Buch besonders ist
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-inter">
            "Das Menschliche Gehirn" ist nicht nur ein Buch - es ist eine aufregende Entdeckungsreise durch das faszinierendste Organ unseres Körpers!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              style={{ borderColor: '#77A060' }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3 font-lora">
                {feature.title}
              </h3>
              <p className="text-black font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-16 border-2" style={{ borderColor: '#77A060' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6 font-lora">
                Was du entdecken wirst
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#77A060' }}></div>
                  <p className="text-black font-inter">Wie dein Gehirn aus 86 Milliarden Neuronen besteht und wie sie miteinander sprechen</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#77A060' }}></div>
                  <p className="text-black font-inter">Warum das Kleinhirn 80% aller Gehirnzellen enthält und was es alles kann</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#77A060' }}></div>
                  <p className="text-black font-inter">Wie Gedanken und Erinnerungen entstehen und warum Schlaf so wichtig ist</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#77A060' }}></div>
                  <p className="text-black font-inter">Spannende Geschichten von berühmten Gehirnforschern wie Dr. Santiago Ramón y Cajal</p>
                </div>
              </div>
            </div>
            
            <img src="/book-cover.png" alt="Book Cover" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;