
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            <span className="text-brand-gold font-inter font-medium text-sm tracking-wider uppercase">
              Nova Era das Mentorias
            </span>
          </div>
          
          <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight animate-fade-in">
            A Transformação do<br />
            <span className="text-brand-gold">Mercado de Mentorias</span>
          </h1>
          
          <p className="font-inter text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            O que antes funcionava por escassez de oferta hoje desmorona por excesso de mesmice. 
            Descubra como navegar no novo cenário das mentorias.
          </p>
          
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-brand-gold animate-bounce" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
    </div>
  );
};

export default HeroSection;
