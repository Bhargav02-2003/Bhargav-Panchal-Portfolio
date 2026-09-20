import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080d] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0d121f] rounded-[6px] flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-white">BP</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-300">
                © 2026 Bhargav Panchal. Built with React & Tailwind.
              </p>
              <p className="text-xs text-slate-500 font-mono">
                Production-grade FinTech & SaaS MERN Engineering
              </p>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Bhargav02-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0e1626] border border-white/5 hover:border-purple-500/30 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/bhargav-panchal-3a19aa3b3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#0e1626] border border-white/5 hover:border-blue-500/30 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#141d30] border border-white/10 hover:border-purple-500/40 text-purple-300 hover:text-white transition-all flex items-center gap-1 text-xs font-mono"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
