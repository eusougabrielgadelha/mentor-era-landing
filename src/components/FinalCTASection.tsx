
import CTAForm from './CTAForm';

const FinalCTASection = () => {
  return (
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
        
        <div className="text-center mb-8">
          <p className="font-inter text-brand-gold font-medium text-lg">
            A ruptura final não é sobre entrar em uma nova mentoria.<br />
            É sobre sair da sua antiga versão.<br />
            <span className="font-bold">E isso, só você pode fazer.</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8 border-t border-brand-gold/30">
          <CTAForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
