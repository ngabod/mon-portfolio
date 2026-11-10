import React, { useState } from 'react';
import { 
  Sparkles, Code2, Database, Cloud, Palette, 
  Atom, Server, Network, Zap, GitBranch, Box, 
  Gauge, LayoutGrid, Smartphone, Eye, ShieldCheck, 
  Cpu, Layers, CheckCircle2 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon names to Lucide components
const iconMap = {
  Atom,
  Code2,
  Palette,
  Sparkles,
  Cpu,
  Layers,
  Server,
  Database,
  Network,
  Zap,
  GitBranch,
  Box,
  Cloud,
  Gauge,
  CheckCircle2,
  LayoutGrid,
  Smartphone,
  Eye,
  ShieldCheck,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07080d]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Boîte à outils & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Compétences & <span className="cyber-gradient-text">Technologies Maîtrisées</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Un écosystème technique moderne sélectionné pour sa rapidité, sa sécurité et sa pérennité.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillsData.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="rounded-3xl bg-[#0f1422]/60 border border-white/10 p-6 sm:p-10 backdrop-blur-xl mb-12">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {skillsData[selectedCategory].category}
            </h3>
            <p className="text-slate-400 text-sm">
              {skillsData[selectedCategory].description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData[selectedCategory].skills.map((skill, i) => {
              const IconComp = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#131828]/70 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Highlights Footer Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-[#0c101a] border border-white/5">
            <span className="block text-xl font-bold text-cyan-400 font-mono">100/100</span>
            <span className="text-xs text-slate-400">Score Lighthouse Performance</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c101a] border border-white/5">
            <span className="block text-xl font-bold text-indigo-400 font-mono">100%</span>
            <span className="text-xs text-slate-400">Responsive Mobile First</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c101a] border border-white/5">
            <span className="block text-xl font-bold text-purple-400 font-mono">WCAG AA</span>
            <span className="text-xs text-slate-400">Accessibilité & Inclusivité</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c101a] border border-white/5">
            <span className="block text-xl font-bold text-emerald-400 font-mono">Clean Code</span>
            <span className="text-xs text-slate-400">TypeScript & Tests Intégrés</span>
          </div>
        </div>

      </div>
    </section>
  );
}
