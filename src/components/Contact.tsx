import React from 'react';
import { 
  Linkedin, 
  Github, 
  Sparkles, 
  ExternalLink,
  Clock,
  MapPin
} from 'lucide-react';

export const Contact: React.FC = () => {
  const githubUrl = 'https://github.com/bhargav';
  const linkedinUrl = 'https://linkedin.com/in/bhargav-developer';

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Connect & Collaborate</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Let's build something together
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are looking for a Full Stack Developer for production fintech systems, enterprise platforms, or modern MERN engineering, connect directly via my professional channels.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {/* LinkedIn Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-blue-500/25 relative group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-5">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                LinkedIn Network
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Bhargav Developer
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Connect for professional networking, mutual colleagues, discussions, and project opportunities.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#101a2d] hover:bg-[#16243f] border border-blue-500/30 text-blue-300 hover:text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-purple-500/20 relative group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-purple-300 mb-5">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Code & Repositories
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                GitHub Portfolio
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Explore open-source contributions, public repositories, and full-stack software architectures.
              </p>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#101726] hover:bg-[#182338] border border-white/10 text-slate-200 hover:text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>View GitHub Repos</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">Current Status:</span>
            <span className="text-slate-400">Available for Opportunities</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>Response: &lt; 24h</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Remote / Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
