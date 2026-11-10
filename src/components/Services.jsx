import React from 'react';
import { Sparkles, Code, Layout, Zap, Check, ArrowRight, Clock } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Code,
  Layout,
  Zap,
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07080d]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offres & Expertises</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Des services taillés pour{' '}
            <span className="cyber-gradient-text">accélérer votre croissance</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            De la conception UX jusqu'au déploiement et à l'optimisation, chaque étape est maîtrisée avec rigueur.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComp = iconMap[service.icon] || Code;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between relative group ${
                  isFeatured
                    ? 'bg-[#10162a]/90 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-950/40 lg:-translate-y-2'
                    : 'bg-[#0e1320]/70 border border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md">
                    {service.badge}
                  </div>
                )}

                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Estimated Timeline */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-xs text-slate-300 mb-6 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Délai moyen : {service.timeline}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Inclus dans la prestation :
                    </span>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service CTA */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    isFeatured
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 hover:scale-[1.02]'
                      : 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-white/5'
                  }`}
                >
                  <span>Démarrer ce projet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
