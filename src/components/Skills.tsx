import React, { useState } from 'react';
import { SKILLS_CATEGORIES_DATA, SKILLS_DATA } from '../data/portfolioData';
import { 
  Cpu, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'categories' | 'proficiency'>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Testing', 'AI Tools'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Language':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-green-400" />;
      case 'Cloud & DevOps':
        return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'Testing':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'AI Tools':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-400" />;
    }
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#070a10]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Skills & Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Full-stack engineering stack encompassing frontend architectures, high-performance server APIs, cloud orchestration, testing frameworks, and modern AI developer tooling.
          </p>

          {/* View Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#0e1627] border border-white/10 mt-8">
            <button
              id="skills-view-categories"
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'categories'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Categorized Stacks</span>
            </button>
            <button
              id="skills-view-proficiency"
              onClick={() => setActiveTab('proficiency')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'proficiency'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Proficiency Metrics</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Categorized Stacks (Grid of Cards) */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_CATEGORIES_DATA.map((group) => (
              <div
                key={group.category}
                className="glass-card glass-card-hover rounded-2xl p-6 relative flex flex-col justify-between border border-white/10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0b1220] border border-white/10 flex items-center justify-center shadow-inner">
                        {getCategoryIcon(group.category)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                          {group.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {group.items.length} {group.items.length === 1 ? 'skill' : 'technologies'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#0f172a]/90 text-slate-200 border border-white/10 group-hover:border-purple-500/25 transition-all hover:text-white hover:border-purple-400/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Production Ready Experience</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW 2: Proficiency Progress Bars */}
        {activeTab === 'proficiency' && (
          <div>
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-[#0f172a] text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card glass-card-hover rounded-2xl p-5 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-[#141e33] border border-white/10 flex items-center justify-center text-[11px] font-mono font-bold text-purple-300">
                        {skill.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-base font-bold font-mono gradient-text">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full bg-[#111827] rounded-full h-2 p-0.5 overflow-hidden border border-white/5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color || 'from-purple-500 to-blue-500'} transition-all duration-700 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
