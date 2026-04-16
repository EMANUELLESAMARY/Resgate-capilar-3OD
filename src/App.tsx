/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden">
      {/* Header / Announcement */}
      <div className="bg-primary text-white text-center py-2 text-xs sm:text-sm font-medium uppercase tracking-widest">
        Oferta exclusiva de lançamento — Dra. Emanuelle Samary
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10"
          >
            <div className="inline-flex items-center gap-2 bg-accent px-4 py-1.5 rounded-sm text-white text-sm font-black mb-6 uppercase">
              RESGATE CAPILAR 30 D
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-primary leading-tight mb-8">
              Recupere seus fios em <span className="text-accent">30 dias</span> — ou continue vendo seu cabelo cair no ralo todos os dias
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Reduza a queda capilar e fortaleça seus fios em 30 dias com um protocolo simples, prático e baseado em ciência.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <PrimaryButton onClick={scrollToOffer}>
                Quero me inscrever agora
              </PrimaryButton>
              <div>
                <p className="text-sm text-gray-400 line-through">De R$197</p>
                <p className="text-2xl font-black text-accent">Por R$37</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 italic">
              *Acesso imediato ao protocolo digital após a confirmação.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative aspect-[4/5] sm:aspect-square">
              <img 
                src="https://picsum.photos/seed/haircare/800/800" 
                alt="Transformação Capilar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a011a] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Float Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 p-2 rounded-full">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#1a011a]">+2.500</p>
                  <p className="text-xs text-gray-500">Vidas transformadas</p>
                </div>
              </div>
            </div>
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="glass-card p-10">
            <span className="text-accent font-black italic text-lg mb-4 block">EXEMPLO PRÁTICO</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight text-primary uppercase">Ignorar é o pior erro</h2>
            <div className="space-y-6 text-gray-600">
              <p>Uma pessoa perde 10kg em poucas semanas. No início, comemora.</p>
              <p>Dias depois, entra em desespero ao ver tufos de cabelo caindo no banho. Tenta trocar shampoo, compra suplementos aleatórios e continua piorando.</p>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h4 className="text-accent font-bold mb-2 uppercase text-sm">Com o protocolo:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <span>Usa o termômetro → descobre o risco alto.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <span>Ajusta alimentação → corrige deficiências.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-accent mt-1 shrink-0" size={18} />
                    <span>Reduz a queda drasticamente em semanas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/h1/400/500" alt="Hair analysis" className="rounded-2xl w-full h-64 object-cover glass-card p-1" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/h2/400/300" alt="Vitamins" className="rounded-2xl w-full h-48 object-cover glass-card p-1" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/h3/400/300" alt="Healthy Hair" className="rounded-2xl w-full h-48 object-cover glass-card p-1" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/h4/400/500" alt="Doctor consulting" className="rounded-2xl w-full h-64 object-cover glass-card p-1" referrerPolicy="no-referrer" />
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

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="O que dizem as pessoas que já aplicaram o protocolo.">
            Resultados que falam por eles mesmos
          </SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Carla Silva"
              role="Emagreceu 15kg"
              text="Eu estava desesperada trocando de shampoo toda semana. O termômetro me mostrou que meu problema era nutricional. Em 3 semanas a queda parou."
              image="https://i.pravatar.cc/150?u=carla"
            />
            <TestimonialCard 
              name="Mariana Costa"
              role="Pós-Bariátrica"
              text="O bônus de skincare foi uma surpresa incrível. Estou cuidando do rosto e do cabelo ao mesmo tempo. Me sinto nova de novo!"
              image="https://i.pravatar.cc/150?u=mariana"
            />
            <TestimonialCard 
              name="Ricardo Alves"
              role="Perda de 12kg"
              text="As entradas estavam ficando muito aparentes. Com as técnicas de estímulo, já noto novos fios nascendo onde era só pele."
              image="https://i.pravatar.cc/150?u=ricardo"
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
          <div className="w-40 h-40 sm:w-56 sm:h-56 shrink-0 relative">
            <div className="absolute inset-0 bg-primary rounded-full -rotate-6 opacity-10" />
            <img 
              src="https://picsum.photos/seed/doc/400/400" 
              alt="Dra. Emanuelle Samary" 
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block font-black">QUEM TE GUIARÁ</span>
            <h2 className="text-4xl font-black text-primary mb-6">Dra. Emanuelle Samary</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Médica com atuação em saúde capilar, nutrologia e estética, dedicada a tratar a raiz dos problemas — conectando metabolismo, nutrição e cuidado real para resultados consistentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card p-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-primary mb-4 uppercase">Dúvidas?</h2>
              <p className="text-gray-600">Nossa equipe de suporte está pronta para te ajudar.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Seu Nome</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/50 border border-primary/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="Como podemos te chamar?"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/50 border border-primary/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                    placeholder="E-mail principal"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">Sua Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/50 border border-primary/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                  placeholder="Como podemos te ajudar hoje?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-widest shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Instagram size={18} className="text-accent" /> @dra.emanuellesamary
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-accent" /> suporte@recuperacaocapilar.com
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
