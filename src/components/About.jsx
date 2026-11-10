import React, { useState } from 'react';
import { Terminal, Download, Sparkles, Check, Layers, Cpu, Target, Clock } from 'lucide-react';
import { personalInfo, terminalContent } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('whoami');

  const tabs = [
    { id: 'whoami', label: 'Profil' },
    { id: 'stack', label: 'Stack' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'philosophy', label: 'Philosophie' },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Centré sur l\'impact',
      desc: 'Chaque décision technique et graphique vise un but précis : engager vos visiteurs et maximiser la conversion.'
    },
    {
      icon: Cpu,
      title: 'Architecture Moderne',
      desc: 'Développement avec les meilleurs standards actuels : React, Next.js, code typé et composants modulaires.'
    },
    {
      icon: Clock,
      title: 'Ponctualité & Clarté',
      desc: 'Planning clair, points d\'avancement réguliers et respect strict des délais convenus ensemble.'
    },
    {
      icon: Layers,
      title: 'Design UI/UX Sur-Mesure',
      desc: 'Aucun template générique réchauffé : une identité visuelle pensée spécialement pour votre marque.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090b12]">
      {/* Decorative lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À propos de moi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            L'alliance de l'art du design et de la{' '}
            <span className="cyber-gradient-text">rigueur technique</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Découvrez qui se cache derrière le code et comment je structure chaque projet digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Bio & Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-[#0f1424]/70 border border-white/10 backdrop-blur-xl relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                Développeur passionné & artisan du web
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Basé à {personalInfo.location}, je travaille aussi bien avec des startups en amorçage qu'avec des entreprises établies recherchant une refonte complète ou la création d'une nouvelle application web sur-mesure.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-medium text-sm transition-all duration-200"
                >
                  <span>Discuter d'une opportunité</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-medium text-sm transition-all duration-200"
                >
                  <span>Voir mes travaux récents</span>
                </a>
              </div>
            </div>

            {/* Core Values 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0e121e]/80 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-semibold text-base mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Terminal */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0b0e17] border border-white/15 shadow-2xl shadow-cyan-950/20 overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#121624] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    bash - terminal@david-dev:~
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-white/5">
                  v2.4.0
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex items-center border-b border-white/10 bg-[#0d101a] px-3 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 text-xs font-mono font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-cyan-400 text-cyan-400 bg-cyan-400/5'
                        : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    --{tab.label.toLowerCase()}
                  </button>
                ))}
              </div>

              {/* Terminal Screen Body */}
              <div className="p-6 font-mono text-xs sm:text-sm min-h-[360px] flex flex-col justify-between">
                <div>
                  <div className="text-slate-500 mb-4">
                    <span>Last login: {new Date().toLocaleDateString('fr-FR')} on ttys001</span>
                    <br />
                    <span className="text-cyan-400">➜</span> <span className="text-emerald-400">~/david-portfolio</span> <span className="text-purple-400">git:(main)</span> <span className="text-white">$ david --{activeTab}</span>
                  </div>

                  <div className="space-y-3">
                    {terminalContent[activeTab]?.map((line, index) => (
                      <div key={index} className="text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-500 select-none">&gt;</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated command prompt cursor */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-slate-400 text-xs">
                  <span className="text-cyan-400 font-bold">➜</span>
                  <span className="text-white font-semibold">sys</span>
                  <span className="text-slate-500">: Ready for commands</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse inline-block"></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
