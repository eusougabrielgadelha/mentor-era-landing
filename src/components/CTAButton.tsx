
import { useLocation } from 'react-router-dom';

const CTAButton = () => {
  const location = useLocation();
  
  const handleClick = () => {
    // Captura os parâmetros UTM da URL atual
    const searchParams = new URLSearchParams(location.search);
    const baseUrl = 'https://payfast.greenn.com.br/122277/offer/u6uvMi';
    
    // Se existem UTMs, adiciona eles à URL de destino
    if (searchParams.toString()) {
      const finalUrl = `${baseUrl}?${searchParams.toString()}`;
      window.open(finalUrl, '_blank');
    } else {
      window.open(baseUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="glassmorphism-button px-8 py-4 rounded-xl font-inter font-semibold text-lg text-[#2F2F2F] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#EABD8F]/50 shadow-xl"
    >
      QUERO ATIVAR O BOTÃO DE VENDAS
    </button>
  );
};

export default CTAButton;
