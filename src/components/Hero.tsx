import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowRight, FileText, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

interface HeroProps {
  onViewWorkClick: () => void;
  onDownloadCvClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onDownloadCvClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-blue-600/12 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[320px] h-[320px] bg-indigo-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0)`,
          backgroundSize: '36px 36px' 
        }} 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101728]/80 border border-purple-500/25 shadow-lg shadow-purple-900/10 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold tracking-wider text-purple-300 uppercase">
            {HERO_DATA.tag}
          </span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="text-xs text-slate-300 font-medium">Available for Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
          {HERO_DATA.headingPrefix}
          <span className="gradient-text drop-shadow-sm">{HERO_DATA.name}</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-200 mb-6 max-w-3xl mx-auto leading-relaxed">
          {HERO_DATA.subtext}
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO_DATA.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-view-work-btn"
            onClick={onViewWorkClick}
            className="w-full sm:w-auto gradient-btn text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-base"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 text-purple-200" />
          </button>

          <button
            id="hero-download-cv-btn"
            onClick={onDownloadCvClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0d1424]/80 hover:bg-[#131d33] border border-white/15 hover:border-purple-500/40 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-base shadow-md"
          >
            <FileText className="w-5 h-5 text-purple-400" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Tech Icon Row */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Core Tech Stack & Ecosystem
            </span>
          </div>

          {/* Primary 10 Core Stack Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mb-6">
            {HERO_DATA.techIcons.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center gap-3 p-3 rounded-xl bg-[#0e1628]/80 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-900/15 backdrop-blur-sm text-left"
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs bg-gradient-to-br border ${tech.color} flex-shrink-0 transition-transform group-hover:scale-105`}
                >
                  {tech.short}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {tech.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categorized Skills Ecosystem Quick Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {HERO_DATA.ecosystemCategories.map((eco) => (
              <a
                key={eco.label}
                href="#skills"
                className="px-3 py-1.5 rounded-full text-[11px] font-mono bg-[#0f172a]/60 border border-white/5 text-slate-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-950/30 transition-all"
              >
                <span className="text-purple-400 font-semibold">{eco.label}:</span>{' '}
                <span className="text-slate-400">{eco.items}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
