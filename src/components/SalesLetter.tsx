
import { ArrowDown } from 'lucide-react';

const SalesLetter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full">
              <span className="text-brand-gold font-inter font-medium text-sm tracking-wider uppercase">
                Carta de Vendas Exclusiva
              </span>
            </div>
            
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight animate-fade-in">
              A Nova Era do<br />
              <span className="text-brand-gold">Mercado de Mentorias</span>
            </h1>
            
            <p className="font-inter text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              O que antes funcionava por escassez de oferta hoje desmorona por excesso de mesmice. 
              Descubra por que os métodos antigos falharam e como navegar no novo cenário.
            </p>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-brand-gold animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1: The Fall of the Old Era */}
          <section className="mb-20">
            <div className="border-l-4 border-brand-gold pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                O Fim de uma Era
              </h2>
              <div className="w-24 h-1 bg-brand-gold"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Durante um tempo, vender mentoria era como vender água no deserto — a simples presença já bastava. 
                O mercado era ingênuo, a audiência estava faminta e qualquer promessa revestida de autoridade improvisada 
                encontrava abrigo imediato nas decisões de compra.
              </p>
              
              <div className="bg-gradient-to-r from-brand-gold/10 to-brand-brown/10 border-l-4 border-brand-brown p-6 rounded-r-lg my-8">
                <p className="font-inter text-brand-dark font-medium text-lg italic">
                  "Só que esse cenário acabou. O que antes funcionava por escassez de oferta hoje desmorona por excesso de mesmice."
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                A estrutura genérica — aquela do funil reciclado, do conteúdo didático e da "oferta irresistível" padrão — 
                virou um idioma morto. E os mentores que não perceberam isso seguem repetindo fórmulas que perderam sua força gravitacional.
              </p>
            </div>
          </section>

          {/* Section 2: What Changed */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                O Que Mudou?
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="font-playfair text-2xl font-medium text-brand-brown">Tudo.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-brand-gold/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-gold rounded-full"></div>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-3">O mercado amadureceu</h3>
                <p className="font-inter text-gray-600">A audiência não aceita mais promessas vazias e fórmulas genéricas.</p>
              </div>
              
              <div className="bg-white border border-brand-gold/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-brown/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-brown rounded-full"></div>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-3">A atenção encareceu</h3>
                <p className="font-inter text-gray-600">Capturar e manter atenção tornou-se o maior desafio dos mentores.</p>
              </div>
              
              <div className="bg-white border border-brand-gold/20 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-dark/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-brand-dark rounded-full"></div>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-3">A percepção virou ativo</h3>
                <p className="font-inter text-gray-600">Hoje, quem não entende como moldar percepção... evapora.</p>
              </div>
            </div>
          </section>

          {/* Section 3: The New Era */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-brand-dark to-brand-brown rounded-2xl p-8 md:p-12 text-white mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
                A Nova Era das Mentorias
              </h2>
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                A nova era das mentorias não é apenas uma transição tática. É um divisor existencial. 
                Ela não premia mais quem se esforça — premia quem gera tensão estratégica, quem propõe algo 
                que transcende o "funcional" e entra no campo do simbólico.
              </p>
              <div className="border-t border-brand-gold/30 pt-6">
                <p className="font-inter text-brand-gold font-medium text-lg">
                  O mentor genérico morre de fome em um banquete, porque não sabe mais como provocar apetite.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Timeline */}
          <section className="mb-20">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-12 text-center">
              A Linha do Tempo da Transformação
            </h2>
            
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
                        Explosão de especialistas e venda facilitada por um público inexperiente e faminto.
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
                        Estratégias viraram commodities: todo mentor virou uma variação do mesmo script.
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
                        O mercado parou de recompensar quem dominava fórmulas e começou a reverenciar quem dominava percepção.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: The Invisible Cycle */}
          <section className="mb-20">
            <div className="border-l-4 border-brand-brown pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-4">
                O Ciclo Invisível da Mentoria Genérica
              </h2>
              <div className="w-24 h-1 bg-brand-brown"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                O ciclo invisível da mentoria genérica é um labirinto disfarçado de atalho. Ele começa de forma quase imperceptível, 
                quando o mentor — sedento por previsibilidade — copia fórmulas que "já funcionaram".
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg my-8">
                <p className="font-inter text-red-800 font-medium text-lg">
                  <strong>A consequência é devastadora:</strong> o mentor passa a operar em um campo onde a única variável 
                  é o tempo até sua percepção evaporar.
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Ele faz tudo "certo" no papel: tráfego, conteúdo, script, funil. Mas nada disso instala desejo real. 
                Por quê? Porque ele se tornou indistinguível.
              </p>
            </div>
          </section>

          {/* Section 6: Perception is Currency */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                A Percepção é a Moeda Invisível
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-gold/5 to-brand-brown/5 rounded-2xl p-8 md:p-12 border border-brand-gold/20">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                A percepção é a moeda invisível que decide quem prospera e quem desaparece no jogo das mentorias. 
                Não é o conteúdo que mais educa que vende — é o conteúdo que provoca o reconhecimento simbólico imediato.
              </p>
              
              <blockquote className="border-l-4 border-brand-gold pl-6 my-8">
                <p className="font-playfair text-xl font-medium text-brand-dark italic">
                  "Essa pessoa enxerga algo que ninguém mais ousa apontar."
                </p>
              </blockquote>
              
              <div className="bg-white rounded-lg p-6 border border-brand-gold/30">
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-4">
                  A Verdade Que Poucos Aceitam:
                </h3>
                <p className="font-inter text-gray-700 leading-relaxed text-lg">
                  Percepção não é um detalhe — é a fundação. Sua entrega pode transformar vidas, 
                  mas se sua presença não tensiona, ela nunca será sequer considerada.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: The New Architecture */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark rounded-2xl p-8 md:p-12 text-white">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-center">
                A Arquitetura de Escala
              </h2>
              
              <div className="text-center mb-8">
                <div className="inline-block w-24 h-1 bg-brand-gold"></div>
              </div>
              
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                É aqui que nasce a Arquitetura de Escala. Não como um método novo, mas como um novo código de construção. 
                Ela não substitui o que você faz — ela reposiciona o que você é.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-black/20 rounded-lg p-6 border border-brand-gold/30">
                  <h3 className="font-playfair font-semibold text-xl text-brand-gold mb-3">Antes</h3>
                  <p className="font-inter text-gray-300">Vender para convencer, perseguir leads, aparecer mais.</p>
                </div>
                
                <div className="bg-brand-gold/20 rounded-lg p-6 border border-brand-gold">
                  <h3 className="font-playfair font-semibold text-xl text-brand-gold mb-3">Agora</h3>
                  <p className="font-inter text-gray-200">Estruturar para atrair, organizar magnetismo, fazer menos com intenção brutal.</p>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-brand-gold/30">
                <p className="font-inter text-brand-gold font-medium text-lg">
                  No novo jogo, ou você constrói uma marca com densidade simbólica... 
                  ou será apenas mais um técnico bom com um feed bonito.
                </p>
              </div>
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
                Chega um ponto em que o mentor precisa encarar o próprio reflexo sem filtros: a ausência de resultado 
                não é mais sintoma da falta de esforço, mas da insistência em jogar um jogo que já mudou.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <p className="font-inter text-yellow-800 font-medium text-lg">
                  <strong>A verdade é que o mercado parou de premiar o técnico, o esforçado, o "certinho".</strong> 
                  Ele agora se curva apenas ao estratégico, ao perceptivo, ao inevitável.
                </p>
              </div>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                E se você está lendo isso e sente que sua entrega é boa, sua metodologia é sólida, 
                mas mesmo assim a procura não vem com força — então talvez o problema não esteja no que você faz, 
                mas em como você é percebido.
              </p>
            </div>
          </section>

          {/* Final Call to Action */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-brand-dark to-brand-brown rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
                A Decisão Final
              </h2>
              
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              
              <p className="font-inter text-lg leading-relaxed mb-8 text-gray-200 max-w-3xl mx-auto">
                Talvez você não precise de mais uma aula, nem de mais um script. Talvez o que te falta seja o gatilho certo 
                para redesenhar toda a lógica do seu posicionamento.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-brand-gold/30 mb-8">
                <p className="font-playfair text-xl font-medium text-brand-gold italic">
                  "E esse redesenho não é um curso, não é um e-book, não é um PDF gratuito. É uma decisão."
                </p>
              </div>
              
              <p className="font-inter text-lg text-gray-200 mb-8">
                De sair do ciclo dos que seguem fórmulas e entrar no ciclo dos que constroem símbolos.
              </p>
              
              <div className="text-center">
                <p className="font-inter text-brand-gold font-medium text-lg">
                  A ruptura final não é sobre entrar em uma nova mentoria.<br />
                  É sobre sair da sua antiga versão.<br />
                  <span className="font-bold">E isso, só você pode fazer.</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SalesLetter;
