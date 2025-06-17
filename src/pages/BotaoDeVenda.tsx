
import { ArrowDown } from 'lucide-react';
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
                Botão de Vendas
              </span>
            </div>
            
            <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight animate-fade-in">
              Sua Mentoria Vendendo <span className="text-[#EABD8F]">HOJE</span>,
              Com o Botão Que Transforma<br /
              <span className="text-[#EABD8F]">Até Suas Ideias Mais Idiotas</span>
              em Produto Vendável
            </h1>
            
            <p className="font-inter text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transforme qualquer ideia solta em produto vendável, com estrutura, página e botão prontos em minutos.
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
          
          {/* Problem Section */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você está preso no seu próprio labirinto.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Tem um produto. Uma mentoria. Um método que funciona. Mas acorda todo dia como um vendedor desesperado, tentando fechar uma venda por semana… enquanto o mês escorre pelo ralo. Você posta. Interage. Faz call. Puxa assunto. Responde caixinha. Gasta no tráfego. E no fim? Fecha 1. Quando fecha.
              </p>
              
              <div className="bg-gradient-to-r from-[#EABD8F]/10 to-[#5C4130]/10 border-l-4 border-[#5C4130] p-6 rounded-r-lg my-8">
                <p className="font-inter text-[#2F2F2F] font-medium text-lg">
                  É como correr numa esteira esperando atravessar o mapa.
                </p>
              </div>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Você tá vendendo como se 2021 ainda fosse real.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg font-semibold">
                Mas o jogo mudou.<br />
                O mercado não compra mais empurrão.<br />
                Compra PERCEPÇÃO. Compra SOLUÇÃO imediata.<br />
                Compra de quem tem ALGO AGORA.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Enquanto você espera o lead "esquentar",<br />
                outro mentor — talvez com menos entrega —<br />
                tá vendendo produto todo dia.<br />
                Porque tem link.<br />
                Tem estrutura.<br />
                Tem algo pra responder à DOR que apareceu no story das 13h17.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                E você? Você anota pra pensar numa ideia amanhã.
              </p>
            </div>
          </section>

          {/* Pain Amplification */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#2F2F2F] to-[#5C4130] rounded-2xl p-8 md:p-12 text-white">
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                Você acha que precisa de mais tráfego? Mentira.
              </p>
              
              <p className="font-inter text-lg leading-relaxed mb-6 text-white font-semibold">
                Você precisa de algo vendável HOJE.<br />
                Pra transformar perguntas em produto.<br />
                Respostas em receita.<br />
                Ideias soltas em ofertas com botão.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-[#EABD8F]/30 mb-6">
                <p className="font-inter text-[#EABD8F] leading-relaxed text-lg">
                  A real é simples:<br />
                  A audiência não espera.<br />
                  Se ela sente uma dor, ela quer a solução agora.<br />
                  E se você não tiver nada, ela vai comprar de alguém que tenha.<br />
                  Mesmo que entregue menos.
                </p>
              </div>
              
              <p className="font-inter text-gray-200 mb-8">
                E aqui tá o crime que você comete contra seu próprio faturamento:<br />
                Você tenta empurrar a mentoria pra TODO MUNDO.<br />
                Mas a mentoria precisa de maturação, de tração.<br />
                Ela vende melhor depois da 12ª interação.
              </p>
              
              <p className="font-inter text-white font-medium">
                Só que você tá tentando vender na segunda.
              </p>
            </div>
          </section>

          {/* Solution Introduction */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Enquanto isso, tem mentor usando mini-ofertas pra aquecer.<br />
                Pra faturar.<br />
                Pra deixar o lead 100x mais pronto.<br />
                Gente que fez 300 MIL vendendo produtos de R$47 a R$97…<br />
                e só DEPOIS vendeu mentorias de R$70 MIL.<br />
                Porque sabia jogar o jogo real.
              </p>
              
              <div className="bg-gradient-to-r from-[#EABD8F]/10 to-[#5C4130]/10 border-l-4 border-[#EABD8F] p-6 rounded-r-lg my-8">
                <p className="font-inter text-[#2F2F2F] font-medium text-lg">
                  Não é low ticket.<br />
                  Não é produto baratinho pra escalar.<br />
                  É uma estrutura de prontidão.
                </p>
              </div>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg font-semibold">
                Vender tudo o que a sua audiência precisa.<br />
                Na hora que ela precisar.<br />
                Sem precisar criar do zero.<br />
                Sem depender de favor.<br />
                Sem travar.
              </p>
            </div>
          </section>

          {/* Product Introduction */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-6">
                É por isso que eu criei o Botão de Vendas.
              </h2>
              <div className="w-24 h-1 bg-[#EABD8F] mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Uma máquina simples, brutal e direta.<br />
                Que transforma qualquer ideia idiota que você tiver —<br />
                em um produto com copy, página, preço e botão.<br />
                Em minutos.
              </p>
            </div>
          </section>

          {/* What You'll Get */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#EABD8F]/20 to-[#5C4130]/20 rounded-3xl p-8 md:p-12 border-2 border-[#EABD8F]">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#2F2F2F] mb-8 text-center">
                O que você vai receber:
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="font-inter text-lg text-[#2F2F2F] leading-relaxed">
                  A estrutura exata que me faz vender mentoria de 15 MIL com carta de vendas
                </p>
                <p className="font-inter text-lg text-[#2F2F2F] leading-relaxed">
                  O mapa que transforma ideias no guardanapo em produtos com lucro real
                </p>
                <p className="font-inter text-lg text-[#2F2F2F] leading-relaxed">
                  O passo a passo pra montar uma página de vendas em MINUTOS<br />
                  (sem designer, sem programador, sem entender NADA de tech)
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#2F2F2F] to-[#5C4130] rounded-xl p-6 text-white mb-8">
                <p className="font-inter text-lg font-semibold text-center mb-4">
                  E o MELHOR:
                </p>
                <p className="font-inter text-lg text-gray-200 leading-relaxed">
                  Se você comprar AGORA, vai liberar acesso ao bônus mais insano que já criei:<br />
                  Meu Agent GPT — a IA que eu treinei pessoalmente pra te ajudar a vender TODO SANTO DIA.
                </p>
                <p className="font-inter text-lg text-gray-200 leading-relaxed mt-4">
                  Não é chatGPT genérico.<br />
                  É uma ferramenta de guerra.<br />
                  Você joga a ideia → Ele transforma em estrutura.<br />
                  Ele escreve. Ele organiza. Ele monta.<br />
                  Você lança. Você vende.
                </p>
                <p className="font-inter text-lg text-[#EABD8F] leading-relaxed mt-4 font-medium">
                  Esse agente era exclusivo dos meus mentorados de acompanhamento.<br />
                  Agora, por tempo LIMITADO, vai junto com o Botão de Vendas.<br />
                  E depois, sai do ar. Sem choro. Sem volta.
                </p>
              </div>
            </div>
          </section>

          {/* First CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#EABD8F]/15 to-[#5C4130]/15 rounded-2xl p-8 md:p-12 text-center border border-[#EABD8F]/30">
              <div className="mb-8">
                <p className="font-inter text-2xl text-[#2F2F2F] mb-4">
                  Valor? <span className="font-bold text-4xl text-[#5C4130]">R$100</span>
                </p>
                <p className="font-inter text-lg text-[#2F2F2F]">
                  À Vista ou parcelado (12x de R$ 10,28)
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#2F2F2F] to-[#5C4130] rounded-lg p-6 text-white mb-8">
                <p className="font-inter text-lg">
                  Preço real? <span className="text-2xl font-bold text-[#EABD8F]">R$497</span>
                </p>
                <p className="font-inter text-gray-200 mt-2">
                  E isso NÃO é um truque.<br />
                  É mais barato que uma pizza…<br />
                  Mas é a sua chance de parar de improvisar e começar a faturar com consistência.
                </p>
              </div>
            </div>
          </section>

          {/* Strategy Section */}
          <section className="mb-20">
            <div className="prose prose-lg max-w-none">
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg font-semibold">
                Você quer uma mentoria de 70K?<br />
                Então começa vendendo algo agora.
              </p>
              
              <p className="font-inter text-[#2F2F2F] leading-relaxed mb-6 text-lg">
                Vende o que a audiência pede.<br />
                Entrega uma transformação rápida.<br />
                Cria desejo real.<br />
                E só então oferece sua mentoria com autoridade.
              </p>
            </div>
          </section>

          {/* Second CTA */}
          <section className="mb-20">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>

          {/* Final Push */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#2F2F2F] to-[#5C4130] rounded-2xl p-8 md:p-12 text-white text-center">
              <p className="font-inter text-lg leading-relaxed mb-6 text-gray-200">
                👉🏼 O link tá aqui.<br />
                Clique.<br />
                Receba o acesso.<br />
                Transforme aquela ideia idiota que você teve ontem no banho...<br />
                …em um produto que pinga no Pix hoje à noite.
              </p>
              
              <div className="bg-black/20 rounded-lg p-6 border border-[#EABD8F]/30 mb-8">
                <p className="font-playfair text-xl font-medium text-[#EABD8F] italic">
                  Essa é a nova era da mentoria.<br />
                  Quem tem botão, fatura.<br />
                  Quem não tem... posta.
                </p>
              </div>
              
              <p className="font-inter text-2xl text-white font-bold mb-8">
                Escolha.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12">
            <div className="text-center">
              <CTAButton />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BotaoDeVenda;
