
import HeroSection from './HeroSection';
import TimelineSection from './TimelineSection';
import PerceptionSection from './PerceptionSection';
import ArchitectureSection from './ArchitectureSection';
import AboutGabrielSection from './AboutGabrielSection';
import FinalCTASection from './FinalCTASection';

const SalesLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: The Beginning */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Durante um tempo, vender mentoria era como vender água no deserto — a simples presença já bastava. 
                O mercado era ingênuo, a audiência estava faminta e qualquer promessa revestida de autoridade improvisada 
                encontrava abrigo imediato nas decisões de compra. Só que esse cenário acabou. O que antes funcionava por 
                escassez de oferta hoje desmorona por excesso de mesmice. A estrutura genérica — aquela do funil reciclado, 
                do conteúdo didático e da "oferta irresistível" padrão — virou um idioma morto. E os mentores que não 
                perceberam isso seguem repetindo fórmulas que perderam sua força gravitacional.
              </p>
              
              <div className="bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 border-l-4 border-brand-brown p-6 rounded-r-lg my-8">
                <p className="font-inter text-brand-dark font-medium text-lg">
                  O que mudou? Tudo. O mercado amadureceu. A atenção encareceu. E a percepção virou o ativo mais escasso 
                  da economia digital. Hoje, quem não entende como moldar percepção... evapora, mesmo com uma entrega impecável.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The New Era */}
          <section className="mb-20">
            <div className="border-l-4 border-brand-gold pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                A Nova Era das Mentorias
              </h2>
              <div className="w-24 h-1 bg-brand-gold"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                A nova era das mentorias não é apenas uma transição tática. É um divisor existencial. Ela não premia 
                mais quem se esforça — premia quem gera tensão estratégica, quem propõe algo que transcende o "funcional" 
                e entra no campo do simbólico. O mentor genérico morre de fome em um banquete, porque não sabe mais como 
                provocar apetite. E o que está em jogo não é apenas a queda no faturamento, mas a erosão do respeito, 
                a perda da inevitabilidade, o colapso da diferenciação.
              </p>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Essa ruptura não é uma opinião. É uma resposta natural do mercado ao excesso de ruído. E, como toda 
                resposta natural, ela não tem piedade. Ou você adapta sua estrutura à nova lógica da percepção… ou vai 
                descobrir, da forma mais brutal, que fazer o que sempre fez não te coloca mais nem no jogo.
              </p>
            </div>
          </section>

          {/* Section 3: Timeline */}
          <TimelineSection />

          {/* Section 4: The Invisible Cycle */}
          <section className="mb-20">
            <div className="border-l-4 border-brand-brown pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                O Ciclo Invisível da Mentoria Genérica
              </h2>
              <div className="w-24 h-1 bg-brand-brown"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                O ciclo invisível da mentoria genérica é um labirinto disfarçado de atalho. Ele começa de forma quase 
                imperceptível, quando o mentor — sedento por previsibilidade — copia fórmulas que "já funcionaram". Em 
                vez de construir uma proposta inegociável, escolhe seguir estruturas recicladas, ofertas pasteurizadas 
                e promessas que já perderam o impacto.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg my-8">
                <p className="font-inter text-red-800 font-medium text-lg">
                  A consequência é devastadora: o mentor passa a operar em um campo onde a única variável é o tempo até 
                  sua percepção evaporar. Ele faz tudo "certo" no papel: tráfego, conteúdo, script, funil. Mas nada 
                  disso instala desejo real. Por quê? Porque ele se tornou indistinguível.
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Sua entrega pode até ser sólida, mas a percepção que a antecede é completamente genérica — e no mercado 
                atual, o que não provoca distinção imediata provoca rejeição silenciosa.
              </p>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Na segunda fase desse ciclo, a frustração é camuflada de produtividade. O mentor, percebendo o declínio de resultados, intensifica a execução: aumenta o volume de conteúdo, tenta "otimizar" o funil, lança com 
                mais frequência — e acredita que o esforço vai compensar o colapso da atenção. Mas tudo isso é só barulho. 
                A estrutura que o sustenta é fraca demais para tensionar, densa demais para converter e previsível demais 
                para capturar autoridade.
              </p>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                O lead sente o cheiro de mais do mesmo antes mesmo de clicar. A audiência engaja por hábito, mas não se 
                move. E o mentor — preso nesse ciclo invisível — continua tentando convencer com mais entrega, sem perceber 
                que o que está faltando não é técnica, é singularidade estratégica. O que não gera contraste, não gera 
                conversão. E o mentor genérico não percebe que está se repetindo — até ser ignorado em silêncio.
              </p>
            </div>
          </section>

          {/* Section 5: Perception as Currency */}
          <PerceptionSection />

          {/* Section 6: The New Architecture */}
          <ArchitectureSection />

          {/* Section 7: The Old Cycle Mentor */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                O Mentor do Ciclo Antigo
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                O mentor preso no ciclo antigo costuma carregar uma certeza invisível de que seu problema é tático, quando 
                na verdade é estrutural. Ele acredita que gravar mais stories resolve percepção, que trocar a cor do criativo 
                resolve desejo, que ajustar o pitch resolve conversão. Mas a verdade é brutal: ele está operando com uma 
                mentalidade de manutenção, não de ruptura.
              </p>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Seu conteúdo é bom, mas previsível. Sua presença é constante, mas não magnética. Seu funil é organizado, 
                mas não instiga. E quando o lead passa por essa jornada, ele não sente urgência — sente comodidade. O mentor 
                do ciclo antigo tem um feed impecável, mas nenhuma tensão. Tem depoimentos, mas não tem posicionamento. Tem 
                técnica, mas não tem simbolismo.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <p className="font-inter text-yellow-800 font-medium text-lg">
                  Ele ainda atrai likes, mas já perdeu o poder de provocar movimento real. E por isso, vive em ciclos de 
                  tráfego que não qualificam, de reuniões que não fecham, de lançamentos que não escalam. Não por 
                  incompetência — mas por inércia estratégica.
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                O que falta não é mais conhecimento. É coragem de rasgar o próprio manual e construir uma presença que 
                pressiona, que desloca, que exige resposta. Porque o novo ciclo não recompensa quem é bom. Ele recompensa 
                quem é impossível de ignorar.
              </p>
            </div>
          </section>

          {/* Section 8: The Mirror */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                O Reflexo Sem Filtros
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Chega um ponto em que o mentor precisa encarar o próprio reflexo sem filtros: a ausência de resultado não é 
                mais sintoma da falta de esforço, mas da insistência em jogar um jogo que já mudou. A verdade é que o mercado 
                parou de premiar o técnico, o esforçado, o "certinho". Ele agora se curva apenas ao estratégico, ao perceptivo, 
                ao inevitável.
              </p>
              
              <div className="bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 border-l-4 border-brand-gold p-6 rounded-r-lg my-8">
                <p className="font-inter text-brand-dark font-medium text-lg">
                  E se você está lendo isso e sente que sua entrega é boa, sua metodologia é sólida, mas mesmo assim a procura 
                  não vem com força — então talvez o problema não esteja no que você faz, mas em como você é percebido.
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Porque hoje, não é o mentor mais competente que fatura mais. É o mentor que domina a arquitetura da percepção, 
                que tensiona o suficiente para ser visto como raro, urgente e inegociável.
              </p>
            </div>
          </section>

          {/* Section 9: Who is Gabriel Gadelha */}
          <AboutGabrielSection />

          {/* Final Call to Action */}
          <FinalCTASection />
        </div>
      </div>
    </div>
  );
};

export default SalesLetter;
