import React from 'react';
import { Sparkles, Star, Quote, CheckCircle } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#090b12]">
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Retours d'expérience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ce que disent les clients avec qui j'ai{' '}
            <span className="cyber-gradient-text">collaboré</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            La satisfaction et la réussite mesurable de vos projets sont ma priorité absolue.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0e1322]/70 border border-white/10 p-8 backdrop-blur-xl relative flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                {/* Content */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{item.content}"
                </p>

                {/* Highlight Pill */}
                {item.highlight && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-6">
                    ⚡ {item.highlight}
                  </div>
                )}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-cyan-400/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-slate-400 text-xs">{item.role}</p>
                  <p className="text-cyan-400 text-xs font-medium">{item.company}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-semibold text-sm sm:text-base block">Engagement Qualité & Satisfaction</span>
              <span className="text-slate-400 text-xs">Accompagnement, révisions incluses et support post-lancement assuré.</span>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-colors"
          >
            Démarrer un projet ensemble
          </a>
        </div>

      </div>
    </section>
  );
}
