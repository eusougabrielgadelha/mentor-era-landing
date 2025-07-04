
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OJogoDaMentoria from "./pages/OJogoDaMentoria";
import BotaoDeVenda from "./pages/BotaoDeVenda";
import SistemaDeEscala from "./pages/SistemaDeEscala";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App está carregando');
  console.log('Rota atual:', window.location.pathname);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ojogodamentoria" element={<OJogoDaMentoria />} />
            <Route path="/botao-de-vendas" element={<BotaoDeVenda />} />
            <Route path="/sistema-de-escala" element={<SistemaDeEscala />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
