
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
                Na segunda fase desse ciclo, a frustração é camuflada de produtividade. O mentor, percebendo o declínio 
                de resultados, intensifica a execução: aumenta o volume de conteúdo, tenta "otimizar" o funil, lança com 
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
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-brand-dark mb-6">
                A Percepção é a Moeda Invisível
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-gold/5 to-brand-brown/5 rounded-2xl p-8 md:p-12 border border-brand-gold/20">
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                A percepção é a moeda invisível que decide quem prospera e quem desaparece no jogo das mentorias. Não é o 
                conteúdo que mais educa que vende — é o conteúdo que provoca o reconhecimento simbólico imediato:
              </p>
              
              <blockquote className="border-l-4 border-brand-gold pl-6 my-8">
                <p className="font-playfair text-xl font-medium text-brand-dark italic">
                  "essa pessoa enxerga algo que ninguém mais ousa apontar"
                </p>
              </blockquote>
              
              <p className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                Em um mercado saturado de vozes, frameworks e fórmulas, a percepção se torna o filtro brutal que separa 
                os desejáveis dos descartáveis. O mentor que não domina a arquitetura da percepção está condenado a viver 
                de "provar valor" enquanto sua autoridade se dilui na familiaridade do feed.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-brand-gold/30">
                <h3 className="font-playfair font-semibold text-xl text-brand-dark mb-4">
                  A Verdade Que Poucos Aceitam:
                </h3>
                <p className="font-inter text-gray-700 leading-relaxed text-lg">
                  E aqui está a verdade que poucos aceitam: percepção não é um detalhe — é a fundação. Sua entrega pode 
                  transformar vidas, mas se sua presença não tensiona, ela nunca será sequer considerada. A mente humana 
                  decide antes de entender. Ela sente, classifica, ignora ou se entrega — tudo com base em percepção. E o 
                  mentor que ainda acredita que vai ganhar o jogo com posts didáticos está brincando de conteúdo enquanto 
                  seus concorrentes constroem tronos invisíveis com narrativa e presença.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: The New Architecture */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-brand-dark via-brand-brown to-brand-dark rounded-2xl p-8 md:p-12 text-white">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-center">
                A Arquitetura de Escala
              </h2>
              
              <div className="text-center mb-8">
                <div className="inline-block w-24 h-1 bg-brand-gold"></div>
              </div>
              
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                A nova era das mentorias não será vencida por quem aperfeiçoa a técnica — mas por quem reconstrói a 
                estrutura. O jogo não é mais sobre sequência, é sobre arquitetura. Arquitetura de percepção. Arquitetura 
                de tração. Arquitetura de tensão narrativa que antecede qualquer argumento lógico.
              </p>
              
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                O mentor que vai prosperar daqui pra frente não será o mais esforçado, nem o mais presente — será o mais 
                inevitável. Aquele cuja presença já carrega autoridade silenciosa. Aquele cujo conteúdo não apenas informa, 
                mas desloca. Aquele que constrói um ecossistema onde cada toque, cada mensagem, cada gesto reforça a mesma 
                coisa: você não está diante de mais um, você está diante da resposta.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-brand-gold/30 mb-6">
                <p className="font-inter text-brand-gold leading-relaxed text-lg">
                  É aqui que nasce a Arquitetura de Escala. Não como um método novo, mas como um novo código de construção. 
                  Ela não substitui o que você faz — ela reposiciona o que você é. Cada ponto de contato, cada ativo de 
                  conteúdo, cada fragmento da sua jornada de vendas passa a ser projetado não para parecer profissional… 
                  mas para ser percebido como inevitável.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-black/20 rounded-lg p-6 border border-brand-gold/30">
                  <h3 className="font-playfair font-semibold text-xl text-brand-gold mb-3">Antes</h3>
                  <p className="font-inter text-gray-300">vender para convencer, perseguir leads, aparecer mais</p>
                </div>
                
                <div className="bg-brand-gold/20 rounded-lg p-6 border border-brand-gold">
                  <h3 className="font-playfair font-semibold text-xl text-brand-gold mb-3">Agora</h3>
                  <p className="font-inter text-gray-200">estruturar para atrair, organizar magnetismo, fazer menos com intenção brutal</p>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-brand-gold/30">
                <p className="font-inter text-brand-gold font-medium text-lg">
                  É um deslocamento estratégico: você deixa de vender para convencer, e passa a estruturar para atrair. 
                  Você deixa de perseguir leads — e passa a organizar magnetismo. Não é sobre aparecer mais. É sobre fazer 
                  menos, com intenção brutal. Porque no novo jogo, ou você constrói uma marca com densidade simbólica… ou 
                  será apenas mais um técnico bom com um feed bonito.
                </p>
              </div>
            </div>
          </section>

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
                  "E esse redesenho não é um curso, não é um e-book, não é um PDF gratuito. É uma decisão:"
                </p>
              </div>
              
              <p className="font-inter text-lg text-gray-200 mb-8">
                de sair do ciclo dos que seguem fórmulas e entrar no ciclo dos que constroem símbolos. Não vou te dizer 
                onde isso começa — porque se você realmente entendeu o que está em jogo, você já sabe.
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
