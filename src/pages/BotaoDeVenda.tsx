
import { ArrowDown, Check } from 'lucide-react';
import CTAButton from '../components/CTAButton';

const BotaoDeVenda = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAE8DB] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2F2F2F] via-[#5C4130] to-[#2F2F2F]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 glassmorphism-translucent rounded-full">
              <span className="text-white font-inter font-medium text-sm tracking-wider uppercase">
                Estrutura de Vendas
              </span>
            </div>
            
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight animate-fade-in">
              A estrutura que faz você<br />
              <span className="text-[#EABD8F]">vender toda vez que quiser</span><br />
              sem depender de ninguém
            </h1>
            
            <p className="font-inter text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tenha sua oferta pronta, sua página no ar e sua venda validada em 30 minutos.
            </p>
            
            <div className="flex justify-center">
              <ArrowDown className="w-8 h-8 text-[#EABD8F] animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EABD8F] to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Content Section */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você tem uma mentoria. Uma entrega robusta, um método validado, um histórico que te orgulha. Mas, por alguma razão silenciosa, as pessoas não compram. E o mais desesperador: elas até demonstram interesse… mas não avançam. Você então decide "ajeitar sua estrutura". Pensa em uma nova página. Percebe que precisa de copy. De designer. De programador. Em poucos cliques, já gastou R$5.000 — sem nem saber se vai funcionar. Porque no final das contas, todo mundo repete a mesma sentença cínica: "Tudo é teste." E você começa a duvidar. Não da sua entrega. Mas da sua capacidade de colocar essa entrega em JOGO.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                O que mais dói não é não vender. É saber que tem gente comprando — só não é de você. Você vê páginas simples, ofertas banais, estruturas toscas… e ainda assim, pingam vendas. Enquanto a sua mentoria, mais potente, mais transformadora, continua invisível. Não porque falta qualidade. Mas porque falta uma coisa: presença estruturada. Você não tem um botão. Um lugar onde as pessoas entram, leem e agem. Sua oferta existe — mas não opera. Sua estrutura vive de ideias, não de conversão. E o lead percebe. Ele nunca te diz isso diretamente. Mas quando visualiza e não responde, quando pede link e nunca volta, quando diz "vou pensar" e nunca mais aparece… ele está gritando: "Você ainda não tem uma oferta pronta pra mim."
              </p>
              
              <div className="bg-gradient-to-r from-[#EABD8F]/10 to-[#5C4130]/10 border-l-4 border-[#5C4130] p-6 rounded-r-lg my-8">
                <p className="font-inter text-[#2F2F2F] font-medium text-lg">
                  Você diz que quer vender, mas não tem uma página. Diz que quer escalar, mas ainda não tem uma página de vendas. Diz que quer independência, mas precisa de um designer, de um copywriter, de um programador — como se seu negócio fosse um frankenstein operado por favores.
                </p>
              </div>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                E enquanto tenta colar os pedaços, o tempo passa. O feed se enche de conteúdo, os stories se enchem de opinião… mas a conta bancária segue vazia. Você sente que está "presente" no mercado — mas, no fundo, está orbitando ao redor dele, sem nunca aterrissar com força. E não é porque te falta conhecimento. É porque te falta estrutura. A ponte entre saber e faturar se chama execução com arquitetura. E você, até hoje, vive paralisado na borda da ponte.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Mas tem uma dor que não é dita em voz alta. Que você camufla com esforço e estética. É o vexame silencioso de parecer amador. De ter 15 abas abertas com tentativas de landing, 7 versões de headline, 3 "quases" e um link quebrado. Você já viu colegas menos experientes fechando grupos, lançando páginas e postando print de vendas. E você? Você entrega, você ensina, você tem resultado — mas não se sente AUTORIZADO a vender. Como se a sua estrutura precisasse de um selo externo pra ser levada a sério. E isso não fere só o negócio. Fere o orgulho. Corrói a autoestima. Porque, no fim, você sabe: não é sobre técnica. É sobre DIGNIDADE. E nada destrói mais um mentor do que sentir que a sua voz é forte… mas sua estrutura é fraca.
              </p>
            </div>
          </section>

          {/* Problem Amplification */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#EABD8F]/5 to-[#5C4130]/5 rounded-2xl p-8 md:p-12 border border-[#EABD8F]/20">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você tenta racionalizar: "talvez ele tenha mais tráfego, talvez o nicho ajude, talvez seja só fase." Mas no fundo, você sabe. Ele não entrega melhor, não fala melhor, não pensa melhor. Ele só tem o que você não tem: uma estrutura que funciona. Enquanto você lapida headline, revisa conteúdo e regrava pitch, ele já está vendendo. Com uma landing mal diagramada. Com uma copy cheia de clichês. Mas com uma rota clara entre atenção e compra. E isso queima por dentro — porque você percebe que não é mais sobre competência. É sobre conversão. E quem converte domina o jogo, mesmo que tenha metade da sua entrega.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                O monstro do mercado não é o concorrente mais talentoso. É o mediano com coragem. Aquele que montou uma página feia, escreveu uma oferta simples, mas colocou no ar antes de se sentir "pronto". E agora, enquanto você organiza suas ideias, ele organiza o onboarding dos novos mentorados. O pior? Você sabe que poderia fazer melhor. Muito melhor. Mas o tempo está passando, e ninguém reconhece genialidade fora do campo de batalha. Não é justo — mas é real. E se você não tiver estrutura, será obrigado a assistir gente com menos visão colher o reconhecimento, a tração e o dinheiro que poderiam ser seus.
              </p>
            </div>
          </section>

          {/* Solution Introduction */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-6">
                A Solução Final
              </h2>
              <div className="w-24 h-1 bg-[#EABD8F] mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você não precisa de um time. Não precisa de uma agência. Não precisa de uma copy escrita por um especialista gringo que cobra em dólar. Você precisa de uma coisa só: uma estrutura que leve sua ideia — crua, imperfeita, tensionada — até o coração da decisão da sua audiência. A promessa aqui não é elegante, mas é brutal: sair do zero, da página em branco, da ideia solta… e em 30 minutos, ter uma oferta no ar, uma página vendável, e um botão que faz dinheiro acontecer. Sem passar semanas "refinando", sem gastar R$5 mil pra testar se alguém quer comprar. Você vai parar de "preparar terreno" e vai começar a colher resultado com o que já tem — hoje.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Essa não é mais uma mentoria sobre "branding". Não é um curso sobre "funil perpétuo". É o fim do seu improviso. O Botão de Vendas é a rota direta entre o que você sabe fazer e o que as pessoas querem comprar. Você não vai aprender teoria. Vai montar sua carta. Vai subir sua página. Vai jogar o link no ar. E vai, enfim, experimentar o que significa ter uma estrutura de venda própria, sem pedir permissão, sem esperar por ninguém. Essa é a promessa: transformar sua potência invisível em conversão tangível, com o que você tem, com o que você sabe — e em meia hora.
              </p>
            </div>
          </section>

          {/* Objection Handling */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#2F2F2F] to-[#5C4130] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-center">
                Pare de Se Sabotar
              </h2>
              
              <div className="text-center mb-8">
                <div className="inline-block w-24 h-1 bg-[#EABD8F]"></div>
              </div>
              
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                Você se repete isso todo dia como se fosse sabedoria. "Preciso de uma página perfeita pra vender", "Não adianta colocar no ar sem um copywriter bom", "Ainda não tenho total clareza da minha oferta", "Antes preciso rodar tráfego"... Mentiras elegantes. Sabotagens com cara de profissionalismo. E você veste essas desculpas como se fossem armaduras, mas elas são algemas. A página perfeita não existe. O copywriter não vai captar sua verdade melhor que você. A clareza não vem antes — vem quando o lead responde. E o tráfego, sem uma estrutura viva, é só gasolina em carro sem motor. O que você chama de "esperar o momento certo" é, na real, medo travestido de estratégia.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-[#EABD8F]/30 mb-6">
                <p className="font-inter text-[#EABD8F] leading-relaxed text-lg">
                  Você não precisa de um milagre. Você precisa de um botão. Um link. Um sistema simples, visceral e acionável. Porque no fim das contas, o que te prende não é a complexidade — é a ausência de uma estrutura mínima com poder de começar.
                </p>
              </div>
              
              <p className="font-inter text-gray-200 mb-8">
                E enquanto você adia, o tempo passa, os leads esfriam, a comparação com quem já está vendendo te corrói em silêncio. O Botão de Vendas desmonta cada uma dessas desculpas com algo que nenhuma mentoria fez até hoje: te dá a página, te dá a copy, te dá o pitch — e te obriga a fazer. Agora. Do jeito que está. Porque a liberdade que você quer não está no futuro. Ela está atrás da sua covardia de publicar.
              </p>
            </div>
          </section>

          {/* Product Description */}
          <section className="mb-20">
            <div className="border-l-4 border-[#EABD8F] pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-4">
                O Sistema Que Funciona
              </h2>
              <div className="w-24 h-1 bg-[#EABD8F]"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você não precisa de mais um curso. Precisa de um sistema que FUNCIONE agora. O Botão de Vendas é uma arma compacta construída para uma única finalidade: converter. No MÓDULO 1, você aprende a montar uma estrutura de carta de vendas que não apenas explica o que você faz — mas instala inevitabilidade. São 7 blocos que tensionam, conduzem e fecham. Com frases de impacto que forçam o lead a agir, não porque você pediu — mas porque ele entendeu que não tem alternativa. É o fim da VSL que ninguém assiste, e o início da oferta que começa a vender só de ser lida.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                No MÓDULO 2, você gera uma página com aparência de agência… sem precisar de designer, sem um tostão gasto com programador. A IA escreve, organiza, estrutura e publica em menos de 10 minutos. Com um prompt que transforma ideias soltas em página profissional, direto no ar — enquanto você ainda está quente. No MÓDULO 3, a tração imediata: estratégia pra usar sua própria audiência morna e validar em 24h. Uma empresa de uma pessoa só. Sem equipe. Sem desculpas. Só você, uma estrutura funcional, e o link que dispara vendas. Porque a diferença entre quem fatura e quem só posta... é quem tem um botão que responde ao desejo do lead.
              </p>
            </div>
          </section>

          {/* First CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* What It's Not */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-[#EAE8DB] to-white border border-[#5C4130]/20 rounded-2xl p-8 md:p-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-8 text-center">
                O Que NÃO É
              </h2>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                O Botão de Vendas não é mais um curso de copy cheio de teoria reciclada. Não é sobre aprender técnicas que você nunca vai aplicar, nem sobre ficar assistindo aulas infinitas enquanto o boleto vence. Não é um framework estético pra deixar seu pitch mais "bonitinho" — é uma estrutura estratégica pra colocar dinheiro no seu bolso com o que você já tem nas mãos. Não tem aulas sobre o "poder da persuasão" ou storytelling inspiracional. Tem suor, execução e uma engenharia direta de tração. Aqui, você não aprende a *parecer* estratégico. Você se torna alguém que faz vendas acontecerem mesmo quando tudo à volta está parado.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Também não é um curso sobre tráfego, automação ou growth. Não tem a promessa fajuta de "seis dígitos em sete dias" com fórmula genérica. Não tem hack de carrossel, não tem mágica de CTA, não tem promessa de viral. O Botão de Vendas é o contrário disso: é brutalmente real. É a estrutura mínima e necessária que separa quem tem só uma ideia de quem tem um negócio vivo. Porque no final, não importa quantos reels você poste ou quantos leads você atraia — se você não tem um lugar claro pra onde apontar o desejo das pessoas, você continua jogando um jogo de fumaça. E a fumaça, por mais bonita que pareça, não paga o aluguel.
              </p>
            </div>
          </section>

          {/* Second CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* What It Is */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#EABD8F]/10 to-[#5C4130]/10 rounded-2xl p-8 md:p-12 border border-[#EABD8F]/30">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-8 text-center">
                O Que É
              </h2>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                O Botão de Vendas é uma estrutura cirúrgica criada para tirar sua oferta da cabeça e colocar ela no jogo em menos de 30 minutos — com copy, página, e sistema de venda pronto para validar no mundo real. É o fim da espera estratégica. O fim da dependência técnica. O fim da vergonha silenciosa de não ter nada rodando enquanto outros, menos preparados, estão vendendo. É o botão simbólico que você aperta quando decide parar de justificar por que ainda não está vendendo, e começa a vender. É o "já pra rua", o "já tá no ar", o "tá aqui o link" que transforma especialistas bons em autoridades rentáveis. Sem precisar de designer, sem precisar de copywriter, sem pedir bênção pra ninguém.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                É a primeira estrutura de venda pensada para mentores, especialistas e criadores que já têm valor, mas estão travados pela execução. Que sabem ensinar, sabem entregar, têm resultado real — mas ainda não têm um sistema que faça o jogo rodar de forma simples, rápida e eficiente. O Botão de Vendas dá forma, função e fluxo à sua oferta. Com ele, você ganha autonomia estética, autoridade narrativa e independência comercial. Você passa a ter uma presença que não só informa — mas vende. Uma estrutura que não só representa — mas fatura. E acima de tudo, um botão que, uma vez pressionado, libera o que estava preso há tempo demais: sua capacidade de fazer dinheiro com aquilo que você já sabe fazer melhor do que 90% do mercado.
              </p>
            </div>
          </section>

          {/* Third CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* Pricing Highlight Block */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#EABD8F]/20 to-[#5C4130]/20 rounded-3xl p-8 md:p-12 border-2 border-[#EABD8F] text-center shadow-xl">
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-[#2F2F2F] mb-8">
                Botão de Vendas
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-6 h-6 text-[#5C4130] flex-shrink-0" />
                  <span className="font-inter text-lg md:text-xl text-[#2F2F2F] font-medium">
                    É uma estrutura que faz dinheiro
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-6 h-6 text-[#5C4130] flex-shrink-0" />
                  <span className="font-inter text-lg md:text-xl text-[#2F2F2F] font-medium">
                    Com o que você já tem
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-6 h-6 text-[#5C4130] flex-shrink-0" />
                  <span className="font-inter text-lg md:text-xl text-[#2F2F2F] font-medium">
                    Ainda essa semana
                  </span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-center mb-4">
                  <span className="font-inter text-2xl text-[#5C4130] line-through opacity-70">
                    R$ 497
                  </span>
                </div>
                <div className="text-center">
                  <span className="font-playfair font-bold text-6xl md:text-7xl text-[#2F2F2F] bg-gradient-to-r from-[#EABD8F] to-[#5C4130] bg-clip-text text-transparent">
                    R$ 100
                  </span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const searchParams = new URLSearchParams(window.location.search);
                    const baseUrl = 'https://payfast.greenn.com.br/122277/offer/u6uvMi';
                    const finalUrl = searchParams.toString() ? `${baseUrl}?${searchParams.toString()}` : baseUrl;
                    window.open(finalUrl, '_blank');
                  }}
                  className="glassmorphism-button px-8 py-4 rounded-xl font-inter font-semibold text-lg text-[#2F2F2F] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#EABD8F]/50 shadow-xl"
                >
                  QUERO TER ACESSO AO BOTÃO DE VENDAS
                </button>
              </div>
            </div>
          </section>

          {/* Pricing and Urgency */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#2F2F2F] to-[#5C4130] rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
                Decisão Final
              </h2>
              
              <div className="w-24 h-1 bg-[#EABD8F] mx-auto mb-8"></div>
              
              <p className="font-inter text-lg leading-relaxed mb-8 text-gray-200 max-w-3xl mx-auto">
                Até o fim do mês, o Botão de Vendas custa R$100 — o equivalente a uma pizza ruim ou a um almoço que você nem vai lembrar. Depois disso, o acesso sobe para R$497, porque o valor que ele entrega já pagaria múltiplas mentorias. E vai subir sem aviso, sem chororô, sem volta. Você tem alguns dias pra decidir se vai continuar assistindo gente menos preparada do que você vender todos os dias... ou se finalmente vai estruturar sua oferta com autoridade e começar a fazer dinheiro com o que já tem. O que está em jogo aqui não é o preço — é o quanto custa continuar estagnado.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-[#EABD8F]/30 mb-8">
                <p className="font-playfair text-xl font-medium text-[#EABD8F] italic">
                  Enquanto você lê isso, tem mentor com página tosca, copy reciclada e estratégia malfeita… vendendo. Por quê? Porque ele tem o que você ainda não tem: uma estrutura simples, acionável e pronta pra converter.
                </p>
              </div>
              
              <p className="font-inter text-lg text-gray-200 mb-8">
                Você? Você segue preso na ilusão da "grande preparação". Seu conteúdo é bom, sua entrega é real — mas sem um botão, tudo isso é apenas energia represada. O Botão de Vendas não é mais uma ideia bonita. É uma ruptura operacional. E o tempo pra apertar esse botão está ACABANDO. Depois não diga que ninguém te avisou.
              </p>
            </div>
          </section>

          {/* Fourth CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* Final Urgency */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Ou você aperta esse botão agora — ou continua sendo só mais uma mente brilhante com a estrutura de um amador. Você pode passar mais uma semana arrumando o feed, ajustando a bio, esperando clareza… mas no fundo sabe que isso não muda nada se sua oferta continuar trancada dentro de você. Estratégia sem execução é só vaidade. E a cada dia que passa, alguém com menos preparo, menos entrega e menos profundidade vai ocupar o espaço que deveria ser seu — porque teve coragem de vender enquanto você ainda ajustava o tom da headline.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Esse é o ponto sem retorno. Não tem desculpa. Não tem aula gratuita. Não tem grupo de aquecimento. Tem um link. Um botão. Uma escolha. Você vai sair com uma carta de vendas pronta, uma página no ar, e uma estrutura que coloca dinheiro no seu bolso antes do final do dia. Não porque você decorou uma técnica nova — mas porque você finalmente se permitiu vender. Ou você vira a referência que o mercado respeita… ou segue sendo o especialista que todo mundo gosta, mas ninguém lembra na hora de comprar.
              </p>
            </div>
          </section>

          {/* Fifth CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* About Gabriel */}
          <section className="mb-12">
            <div className="border-l-4 border-[#5C4130] pl-8 mb-8">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-4">
                Quem é Gabriel Gadelha?
              </h2>
              <div className="w-24 h-1 bg-[#5C4130]"></div>
            </div>
            
            <div className="bg-gradient-to-r from-[#EAE8DB] to-white border border-[#EABD8F]/20 rounded-2xl p-8 md:p-12">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Gabriel Gadelha é estrategista digital e mentor, que já ajudou Mentores High Ticket a faturarem mais de 60 milhões de reais.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Por muito tempo, Gabriel esteve nos bastidores de grandes palcos do Mercado High Ticket. Mas se viu obrigado a sair dos bastidores para ajudar as pessoas que estavam criando a sua mentoria mas com dificuldades de vender.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Gabriel Gadelha criou a Arquitetura de Escala, que ajuda Mentores High Ticket a venderem suas mentorias sem ser necessário a forçar a venda. Mas acontecendo de maneira leve e escalável.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-8 text-lg">
                E vou te mostrar como vender sempre que quizer.
              </p>
              
              <div className="text-center">
                <CTAButton />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BotaoDeVenda;
