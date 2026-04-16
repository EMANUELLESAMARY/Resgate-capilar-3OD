/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Target, 
  Thermometer, 
  Gift, 
  FileCheck, 
  Calendar,
  Instagram,
  Mail,
  Phone,
  MessageSquare,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAMES = [
  'Ana', 'Bruno', 'Carla', 'Diego', 'Elena', 'Fábio', 'Gabriela', 'Hugo', 'Isabela', 'João',
  'Kátia', 'Lucas', 'Mariana', 'Nuno', 'Olívia', 'Paulo', 'Quitéria', 'Ricardo', 'Sofia', 'Tiago',
  'Úrsula', 'Vitor', 'Wanda', 'Xavier', 'Yara', 'Zeca', 'Beatriz', 'Caio', 'Daniela', 'Eduardo'
];

const CITIES = [
  'São Paulo/SP', 'Rio de Janeiro/RJ', 'Belo Horizonte/MG', 'Salvador/BA', 'Fortaleza/CE',
  'Brasília/DF', 'Curitiba/PR', 'Manaus/AM', 'Recife/PE', 'Porto Alegre/RS', 'Belém/PA',
  'Goiânia/GO', 'Guarulhos/SP', 'Campinas/SP', 'São Luís/MA', 'São Gonçalo/RJ', 'Maceió/AL',
  'Duque de Caxias/RJ', 'Natal/RN', 'Teresina/PI', 'São Bernardo do Campo/SP', 'Campo Grande/MS',
  'Jaboatão dos Guararapes/PE', 'Osasco/SP', 'Santo André/SP', 'João Pessoa/PB', 'Uberlândia/MG',
  'Contagem/MG', 'Sorocaba/SP', 'Ribeirão Preto/SP'
];

const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', city: '' });

  useEffect(() => {
    const showPopup = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      setData({ name: randomName, city: randomCity });
      setVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setVisible(false);
        // Schedule next one
        const delay = Math.floor(Math.random() * (80000 - 50000 + 1)) + 50000;
        setTimeout(showPopup, delay);
      }, 5000);
    };

    // First appearance after 8 seconds
    const initialTimeout = setTimeout(showPopup, 8000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          className="fixed bottom-6 left-6 z-[100] max-w-[280px] w-full"
        >
          <div className="glass-card bg-white/90 backdrop-blur-xl p-4 flex items-center gap-4 shadow-2xl border-l-4 border-accent">
            <div className="bg-accent/10 p-2 rounded-full shrink-0">
              <ShoppingBag size={20} className="text-accent" />
            </div>
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-primary leading-tight">
                {data.name} de {data.city}
              </p>
              <p className="text-gray-500">acabou de adquirir o Resgate Capilar 30D</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const PrimaryButton = ({ children, onClick, className = "" }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
  <button 
    onClick={onClick}
    className={`bg-accent hover:opacity-90 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_10px_20px_rgba(255,99,33,0.2)] uppercase tracking-wider text-sm sm:text-base ${className}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-primary">
      {children}
    </h2>
    {subtitle && (
      <p className="text-lg max-w-2xl mx-auto text-gray-600">
        {subtitle}
      </p>
    )}
  </div>
);

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8"
  >
    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
      <Icon className="text-primary" size={28} />
    </div>
    <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const BonusCard = ({ title, originalValue, description, icon: Icon }: { title: string, value: string, originalValue: string, description: string, icon: any }) => (
  <div className="glass-card p-8 flex flex-col h-full relative overflow-hidden group border-dashed border-primary/40">
    <div className="absolute top-0 right-0 p-4 bg-accent text-white font-bold text-xs rounded-bl-xl">
      BÔNUS VIP
    </div>
    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors">
      <Icon className="text-primary" size={30} />
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
    <div className="mt-auto border-t border-primary/10 pt-4">
      <p className="text-gray-400 text-xs line-through">Valor original: {originalValue}</p>
      <p className="text-accent font-bold text-lg">Incluso Grátis</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, text, image }: { name: string, role: string, text: string, image: string }) => (
  <div className="glass-card glass-card-sm p-6 italic text-gray-700 border-l-4 border-accent">
    <div className="flex items-center gap-4 mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
      <div>
        <h4 className="font-bold text-primary not-italic">{name}</h4>
        <p className="text-xs text-gray-500 not-italic">{role}</p>
      </div>
    </div>
    "{text}"
  </div>
);

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <SalesNotification />
      {/* Header / Announcement */}
      <div className="bg-primary text-white text-center py-2 text-xs sm:text-sm font-medium uppercase tracking-widest">
        Oferta exclusiva de lançamento — Dra. Emanuelle Samary
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-24">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 md:p-16"
          >
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-sm text-white text-sm font-black mb-6 uppercase mx-auto">
              RESGATE CAPILAR 30 D
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-tight mb-8">
              Recupere seus fios em <span className="text-accent">30 dias</span> — ou continue vendo seu cabelo cair no ralo todos os dias
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Reduza a queda capilar e fortaleça seus fios em 30 dias com um protocolo simples, prático e baseado em ciência.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <PrimaryButton onClick={scrollToOffer}>
                Quero me inscrever agora
              </PrimaryButton>
              <div className="text-left">
                <p className="text-sm text-gray-400 line-through">De R$197</p>
                <p className="text-2xl font-black text-accent">Por R$37</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              *Acesso imediato ao protocolo digital após a confirmação.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Bullets Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Entenda o que você vai desbloquear ao entrar no desafio hoje.">
            Por que este protocolo funciona?
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard 
              icon={Target}
              title="Redução Visível da Queda"
              description="Menos cabelo no travesseiro e no banho já nas primeiras semanas de aplicação correta."
            />
            <BenefitCard 
              icon={ShieldCheck}
              title="Causa Real Atacada"
              description="Protocolo completo que foca na queda pós-emagrecimento, resolvendo o estresse metabólico."
            />
            <BenefitCard 
              icon={Clock}
              title="Rotina Simples e Guida"
              description="Você só segue o plano diário, sem precisar pensar ou pesquisar produtos mirabolantes."
            />
            <BenefitCard 
              icon={Sparkles}
              title="Estímulo ao Crescimento"
              description="Técnicas práticas que ativam os folículos para o nascimento de novos fios saudáveis."
            />
            <BenefitCard 
              icon={FileCheck}
              title="Controle Total da Evolução"
              description="Ferramentas exclusivas que mostram se o seu tratamento está realmente entregando resultados."
            />
            <BenefitCard 
              icon={Thermometer}
              title="Diagnóstico de Risco"
              description="Use o Termômetro de Risco Capilar para entender o nível de dano causado pela sua perda de peso."
            />
          </div>
        </div>
      </section>

      {/* Product Explanation */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">A Ciência por trás</span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-8">
            O Desafio 30 Dias é um protocolo direto, baseado em ciência.
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
            <p>
              Criado para interromper o ciclo de queda causado pelo emagrecimento rápido, você não vai receber teoria solta. 
              Você vai seguir um plano diário com nutrição, cuidados tópicos e estímulos que reorganizam o ciclo capilar.
            </p>
            <p className="font-bold text-primary">
              Enquanto a maioria tenta “produtinhos milagrosos”, aqui você atua na raiz do problema: deficiência nutricional e estresse metabólico.
            </p>
            <div className="glass-card p-8 border-l-8 border-accent my-10">
              <h4 className="text-xl font-black text-primary mb-4">O diferencial: Você não anda no escuro.</h4>
              <p>
                Logo no início, você usa o <span className="text-accent font-bold">Termômetro de Risco Capilar Pós-Dieta</span> — uma ferramenta que mostra, com números, o nível de dano causado pela sua perda de peso.
              </p>
            </div>
            <p>
              Resultado: menos queda, fios mais fortes e o crescimento voltando — sem depender de soluções caras ou invasivas.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionTitle subtitle="Três pilares fundamentais para sua transformação.">
            O que você vai aprender
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="glass-card p-10 relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-xl font-bold mb-3 text-primary uppercase">Identificar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Use o termômetro capilar para entender se está em risco, alerta ou perigo. Sai da ansiedade.</p>
            </div>
            <div className="glass-card p-10 relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-xl font-bold mb-3 text-primary uppercase">Estabilizar</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Exatamente o que fazer nos primeiros dias para travar a queda e parar de piorar a situação.</p>
            </div>
            <div className="glass-card p-10 relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-xl font-bold mb-3 text-primary uppercase">Estimular</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Ative o crescimento e devolva densidade ao cabelo com técnicas simples e rotinas guiadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-10 md:p-16 text-center">
            <span className="text-accent font-black italic text-lg mb-4 block underline decoration-accent/30 underline-offset-8">EXEMPLO PRÁTICO</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-10 leading-tight text-primary uppercase">Ignorar é o pior erro</h2>
            <div className="space-y-6 text-gray-600 text-left max-w-2xl mx-auto">
              <p className="text-lg">Uma pessoa perde 10kg em poucas semanas. No início, comemora.</p>
              <p className="text-lg">Dias depois, entra em desespero ao ver tufos de cabelo caindo no banho. Tenta trocar shampoo, compra suplementos aleatórios e continua piorando.</p>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-inner">
                <h4 className="text-accent font-bold mb-6 uppercase text-sm tracking-widest text-center border-b border-accent/20 pb-4">Com o protocolo:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-accent/10 p-1 rounded-full">
                      <CheckCircle2 className="text-accent shrink-0" size={20} />
                    </div>
                    <span className="font-medium text-primary">Usa o termômetro → descobre o risco real e para de agir no escuro.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-accent/10 p-1 rounded-full">
                      <CheckCircle2 className="text-accent shrink-0" size={20} />
                    </div>
                    <span className="font-medium text-primary">Ajusta alimentação estratégica → corrige as deficiências que causam a queda.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-accent/10 p-1 rounded-full">
                      <CheckCircle2 className="text-accent shrink-0" size={20} />
                    </div>
                    <span className="font-medium text-primary">Estabilização rápida → Reduz a queda drasticamente em poucas semanas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus VIP Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Tudo o que você precisa para uma transformação completa de imagem.">
            Bônus VIP Exclusivos
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BonusCard 
              icon={Sparkles}
              title="IA Skincare Pós-Emagrecimento"
              description="Sistema de IA que analisa sua pele e indica cuidados para recuperar firmeza e combater a flacidez."
              originalValue="R$ 147"
              value="GRÁTIS"
            />
            <BonusCard 
              icon={Calendar}
              title="Checklist Diário de Execução"
              description="Material que elimina a dúvida sobre o que fazer. Você só marca e executa com consistência."
              originalValue="R$ 47"
              value="GRÁTIS"
            />
            <BonusCard 
              icon={Gift}
              title="Planner Capilar + Lista"
              description="Planejamento semanal pronto e lista estratégica de compras focada no crescimento capilar."
              originalValue="R$ 67"
              value="GRÁTIS"
            />
          </div>
        </div>
      </section>

      <section id="offer" className="py-24">
        <div className="max-w-xl mx-auto px-6 text-center relative overflow-hidden">
          <div className="glass-card p-10 sm:p-16 border-2 border-primary/10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 text-primary uppercase">Garanta sua Vaga</h2>
            <p className="text-gray-600 mb-12 text-lg">A oportunidade de reverter o dano capilar é agora. Não espere ficar irreversível.</p>
            
            <div className="mb-10">
              <p className="text-gray-400 line-through text-xl">R$ 197,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-5xl sm:text-6xl font-black text-accent">R$ 37</span>
              </div>
              <p className="text-primary font-bold mt-2">Pagamento Único.</p>
            </div>
            
            <PrimaryButton className="w-full text-xl py-6">
              Quero acessar agora
            </PrimaryButton>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-widest">
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} /> Compra Segura
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={14} /> 7 Dias Garantia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 glass-card p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 sm:w-64 sm:h-64 shrink-0 relative">
            <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 opacity-10" />
            <img 
              src="https://i.postimg.cc/59HbDx7k/IMG-2271-(squo1).jpg" 
              alt="Dra. Emanuelle Samary" 
              className="w-full h-full object-cover rounded-2xl relative z-10 border-4 border-white shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block font-black">Sua guia nessa jornada:</span>
            <h2 className="text-4xl font-black text-primary mb-6">Dra Emanuelle Samary</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Médica desde 2013, com atuação em Saúde Capilar, Nutrologia e Estética. Dedico minha prática clínica a tratar a raiz dos problemas. Vi milhares de pacientes perdendo a autoestima após o emagrecimento. O problema não é falta de shampoo, é um colapso metabólico capilar.
              </p>
              <p className="font-medium text-primary py-4 border-y border-primary/5 italic">
                Este protocolo condensa meu raciocínio clínico para que você recupere seus fios sem precisar gastar fortunas em consultório.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <CheckCircle2 size={16} className="text-accent" /> Raciocínio Clínico
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <CheckCircle2 size={16} className="text-accent" /> Densidade Real
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <CheckCircle2 size={16} className="text-accent" /> Fim da Queda
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  <CheckCircle2 size={16} className="text-accent" /> Rapidez nos Resultados
                </div>
              </div>
              
              <p className="mt-8 text-accent font-black text-sm uppercase tracking-tighter bg-accent/5 p-4 rounded-xl border border-accent/10">
                🚀 Protocolo de choque para ver os primeiros resultados ja em 30 dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-xs sm:text-sm">
          <p className="mb-4 text-primary font-bold">© 2026 Dra. Emanuelle Samary. Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-4 mb-4 uppercase tracking-widest font-black text-[10px]">
            <a href="#" className="hover:text-accent transition-colors">Termos</a>
            <a href="#" className="hover:text-accent transition-colors">Privacidade</a>
          </div>
          <p className="max-w-2xl mx-auto opacity-50">
            Este produto não substitui orientação médica profissional. Os resultados podem variar de pessoa para pessoa. 
            Consulte seu médico antes de iniciar qualquer protocolo ou dieta.
          </p>
        </div>
      </footer>
    </div>
  );
}
