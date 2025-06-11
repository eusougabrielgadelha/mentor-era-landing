
const TimelineSection = () => {
  return (
    <section className="mb-20">
      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-12 text-center">
        A Linha do Tempo da Transformação
      </h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
          O mercado de mentorias, embora impulsionado por ondas de inovação e promessas transformadoras, percorreu 
          uma linha do tempo previsível — até que 2025 rompeu esse padrão.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-gold"></div>
        
        <div className="space-y-12">
          <div className="relative flex items-start">
            <div className="absolute left-6 w-4 h-4 bg-brand-gold rounded-full border-4 border-white shadow-lg"></div>
            <div className="ml-16">
              <div className="bg-white border border-brand-gold/20 rounded-lg p-6 shadow-sm">
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-2">
                  Era da Euforia (até 2022)
                </h3>
                <p className="font-inter text-gray-700">
                  Primeiro veio a era da euforia (até 2022), marcada pela explosão de especialistas e a venda 
                  facilitada por um público inexperiente e faminto.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-start">
            <div className="absolute left-6 w-4 h-4 bg-brand-brown rounded-full border-4 border-white shadow-lg"></div>
            <div className="ml-16">
              <div className="bg-white border border-brand-gold/20 rounded-lg p-6 shadow-sm">
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-2">
                  Ciclo da Repetição (2023-2024)
                </h3>
                <p className="font-inter text-gray-700">
                  Depois, o ciclo da repetição (2023–2024), onde as estratégias deixaram de ser diferenciais e se 
                  tornaram commodities: todo mentor virou uma variação do mesmo script, operando em funis gêmeos 
                  e posicionamentos sem alma.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-start">
            <div className="absolute left-6 w-4 h-4 bg-brand-dark rounded-full border-4 border-white shadow-lg animate-pulse-gold"></div>
            <div className="ml-16">
              <div className="bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 border border-brand-gold rounded-lg p-6 shadow-md">
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-2">
                  A Ruptura de 2025
                </h3>
                <p className="font-inter text-gray-700 font-medium">
                  Mas foi em 2025 que o mercado atingiu maturidade e, com ela, impôs seu veredito: não basta mais 
                  aparecer — é preciso ser percebido como inevitável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="prose prose-lg max-w-none mt-8">
        <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
          A ruptura não veio com barulho, mas com silêncio. A audiência parou de reagir. O engajamento virou 
          indiferença. A conversão murchou. E o que parecia ser uma crise foi, na verdade, um filtro. O mercado 
          parou de recompensar quem dominava fórmulas e começou a reverenciar quem dominava percepção. Essa é a 
          nova régua: sofisticação invisível, autoridade implícita e tensão latente. Quem não entendeu isso em 
          2025, já ficou para trás.
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
