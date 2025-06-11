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
  return;
};
export default CTAButton;