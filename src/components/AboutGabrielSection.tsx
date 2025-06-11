
import CTAForm from './CTAForm';

const AboutGabrielSection = () => {
  return (
    <section className="mb-20">
      <div className="relative overflow-hidden rounded-2xl">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/lovable-uploads/1a584a6e-6a92-47c3-99f7-aea2eb229eea.png)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-brown/80 to-brand-dark/95"></div>
        </div>
        
        {/* Content */}
        <div className="relative glassmorphism-dialog p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-6">
              Quem é Gabriel Gadelha?
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="font-inter text-lg leading-relaxed text-gray-200">
              Gabriel Gadelha é estrategista digital e mentor, que já ajudou Mentores High Ticket a faturarem mais de 60 milhões de reais.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-gray-200">
              Por muito tempo, Gabriel esteve nos bastidores de grandes palcos do Mercado High Ticket. Mas se viu obrigado a sair dos bastidores para ajudar as pessoas que estavam criando a sua mentoria mas com dificuldades de vender.
            </p>
            
            <p className="font-inter text-lg leading-relaxed text-gray-200">
              Gabriel Gadelha criou a Arquitetura de Escala, que ajuda Mentores High Ticket a venderem suas mentorias sem ser necessário a forçar a venda. Mas acontecendo de maneira leve e escalável.
            </p>
            
            <div className="bg-brand-gold/20 rounded-lg p-6 border border-brand-gold/30 mt-8">
              <p className="font-inter text-brand-gold font-medium text-lg text-center">
                E vou te mostrar como aplicar essa arquitetura no seu negócio.
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8 mt-8 border-t border-brand-gold/30">
            <div className="flex justify-center">
              <CTAForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGabrielSection;
