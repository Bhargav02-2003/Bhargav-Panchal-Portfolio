import React from 'react';
import { ABOUT_DATA, STATS_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  Layers, 
  Server, 
  Cpu, 
  CheckCircle2, 
  GitBranch, 
  ShieldCheck, 
  Zap, 
  Award,
  TerminalSquare
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {ABOUT_DATA.heading}
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            {ABOUT_DATA.text}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
              
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive: Full SDLC Ownership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: SDLC Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-card rounded-2xl p-7 sm:p-8">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <GitBranch className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Full Software Development Life Cycle (SDLC) Ownership
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABOUT_DATA.sdlcPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#090e18]/80 border border-white/5 hover:border-purple-500/25 transition-all"
                  >
                    <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Production Grade Standards
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Zap className="w-4 h-4 text-yellow-400" />
                Performance & Latency Optimization
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Server className="w-4 h-4 text-blue-400" />
                Microservices & Event Streaming
              </span>
            </div>
          </div>

          {/* Right Column: Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 flex flex-col font-mono text-xs border border-purple-500/20 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <TerminalSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>bhargav@engineer: ~/profile</span>
              </div>
              <div className="text-[10px] text-slate-500">zsh</div>
            </div>

            {/* Terminal Code Snippet */}
            <div className="space-y-3 text-slate-300 flex-1 leading-relaxed">
              <div className="text-slate-500">// Engineering Blueprint</div>
              <div>
                <span className="text-purple-400">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                <span className="text-blue-400">name:</span> <span className="text-emerald-300">"Bhargav"</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-400">role:</span> <span className="text-emerald-300">"Full Stack Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-400">experience:</span> <span className="text-amber-300">"~2.5 Years"</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-400">coreStack:</span> [
                <span className="text-purple-300">"React"</span>, <span className="text-purple-300">"Next.js"</span>, <span className="text-purple-300">"Node.js"</span>, <span className="text-purple-300">"Express"</span>, <span className="text-purple-300">"MongoDB"</span>, <span className="text-purple-300">"TypeScript"</span>
                ],
              </div>
              <div className="pl-4">
                <span className="text-blue-400">domains:</span> [<span className="text-emerald-300">"Fintech KYC/DigiLocker"</span>, <span className="text-emerald-300">"Enterprise HR & LMS"</span>],
              </div>
              <div className="pl-4">
                <span className="text-blue-400">cloudOps:</span> [<span className="text-cyan-300">"AWS EC2"</span>, <span className="text-cyan-300">"Docker"</span>, <span className="text-cyan-300">"Nginx"</span>, <span className="text-cyan-300">"SSL/TLS"</span>],
              </div>
              <div className="pl-4">
                <span className="text-blue-400">status:</span> <span className="text-emerald-400 font-semibold">"Ready for High-Impact Roles"</span>
              </div>
              <div>&#125;;</div>
              <div className="pt-2 text-slate-500">
                <span className="text-emerald-400">✔</span> System status: Production ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
