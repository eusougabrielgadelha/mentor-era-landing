
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight } from 'lucide-react';

const CTAForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    instagram: '',
    revenue: ''
  });
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{0,5})(\d{0,4})/, (match, p1, p2, p3) => {
        if (p3) return `(${p1}) ${p2}-${p3}`;
        if (p2) return `(${p1}) ${p2}`;
        if (p1) return `(${p1}`;
        return match;
      });
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const getURLParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || ''
    };
  };

  const getSaoPauloDateTime = () => {
    const now = new Date();
    const saoPauloTime = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).formatToParts(now);

    const date = `${saoPauloTime.find(p => p.type === 'day')?.value}/${saoPauloTime.find(p => p.type === 'month')?.value}/${saoPauloTime.find(p => p.type === 'year')?.value}`;
    const time = `${saoPauloTime.find(p => p.type === 'hour')?.value}:${saoPauloTime.find(p => p.type === 'minute')?.value}:${saoPauloTime.find(p => p.type === 'second')?.value}`;
    
    return { date, time };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.instagram || !formData.revenue) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const urlParams = getURLParams();
    const { date, time } = getSaoPauloDateTime();

    const webhookData = {
      ...formData,
      page_url: window.location.href,
      date: date,
      time: time,
      ...urlParams
    };

    console.log('Dados enviados:', webhookData);

    try {
      const response = await fetch('https://hook.us1.make.com/mw2ou8gt87mukvq83xmovom22qtpa8yr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Dados enviados com sucesso. Redirecionando para o WhatsApp...",
        });
        
        setTimeout(() => {
          window.open('https://api.whatsapp.com/send/?phone=5585986535111&text=Quero+ativar+a+Arquitetura+de+Escala&type=phone_number&app_absent=0', '_blank');
          setIsOpen(false);
          setFormData({ name: '', phone: '', email: '', instagram: '', revenue: '' });
        }, 1000);
      } else {
        throw new Error('Erro ao enviar dados');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erro",
        description: "Erro ao enviar dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const revenueOptions = [
    'Até 5k/mês',
    'de 5k a 10k',
    'de 10k a 20k',
    '20k a 50k',
    '50k a 100k',
    '100k a 500k',
    'acima de 500k'
  ];

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="glassmorphism-button relative w-full max-w-md sm:max-w-lg text-white font-inter font-bold text-sm sm:text-base lg:text-lg xl:text-xl px-8 sm:px-10 lg:px-14 py-5 sm:py-6 lg:py-7 shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 leading-tight flex items-center justify-center gap-3"
          >
            <span className="text-center break-words relative z-10">
              SIM! QUERO ME CADASTRAR
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          </Button>
        </DialogTrigger>
        <DialogContent className="glassmorphism-dialog sm:max-w-md mx-4 max-h-[90vh] overflow-y-auto border-none">
          <DialogHeader>
            <DialogTitle className="font-playfair text-xl sm:text-2xl text-brand-dark text-center">
              Quero a Arquitetura de Escala
            </DialogTitle>
          </DialogHeader>
          <div className="glassmorphism-form p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-brand-dark font-inter font-medium text-sm">
                  Nome completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Seu nome completo"
                  className="mt-1 glassmorphism-input"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-brand-dark font-inter font-medium text-sm">
                  Telefone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className="mt-1 glassmorphism-input"
                  maxLength={15}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-brand-dark font-inter font-medium text-sm">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="seu@email.com"
                  className="mt-1 glassmorphism-input"
                  required
                />
              </div>

              <div>
                <Label htmlFor="instagram" className="text-brand-dark font-inter font-medium text-sm">
                  Instagram *
                </Label>
                <Input
                  id="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
                  placeholder="@seuinstagram"
                  className="mt-1 glassmorphism-input"
                  required
                />
              </div>

              <div>
                <Label htmlFor="revenue" className="text-brand-dark font-inter font-medium text-sm">
                  Faixa de faturamento mensal *
                </Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, revenue: value }))}>
                  <SelectTrigger className="mt-1 glassmorphism-input">
                    <SelectValue placeholder="Selecione sua faixa de faturamento" />
                  </SelectTrigger>
                  <SelectContent className="glassmorphism-select">
                    {revenueOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full glassmorphism-button text-brand-dark font-inter font-bold mt-6 py-3 text-base"
              >
                {isLoading ? 'Enviando...' : 'QUERO ACESSO AGORA'}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CTAForm;
