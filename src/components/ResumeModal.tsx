import React from 'react';
import { X, Download, Printer, Copy, Check, Briefcase, GraduationCap, Award, Mail, ExternalLink } from 'lucide-react';
import { SKILLS_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
BHARGAV - FULL STACK DEVELOPER
LinkedIn: https://linkedin.com/in/bhargav-developer
GitHub: https://github.com/bhargav
Summary: Full Stack Developer with ~2.5 years of experience building production-grade fintech and enterprise applications using React, Next.js, Node.js, Express, MongoDB, and TypeScript.

SKILLS:
- Language: JavaScript (ES6+), TypeScript
- Frontend: React.js, Next.js (App Router, SSR/SSG/ISR), Redux Toolkit, Tailwind CSS, Material-UI (MUI), HTML5/CSS3
- Backend: Node.js, Express.js, REST & GraphQL APIs, Microservices Architecture
- Database: MongoDB, SQL Server
- Cloud & DevOps: AWS EC2, Nginx, Docker, DuckDNS, PM2
- Testing: Jest, React Testing Library, Unit & Integration Testing
- AI Tools: Claude (AI-assisted development), Google AI Studio, Antigravity

PRODUCTION EXPERIENCE & KEY PROJECTS:
1. DualBeats (Live: dualbeats.duckdns.org)
   - Real-time synchronized dual music player built with React, Socket.io, MongoDB Atlas, AWS EC2 + Nginx.
   - Sub-50ms sync latency, SSL via Let's Encrypt.
2. UniGold Finances (Production Fintech)
   - Aadhaar-based DigiLocker verification flow, KYC/AML onboarding and gold lending platform.
   - Secure client-side data persistence and automated credit evaluation.
3. LOS-LMS (Production Enterprise)
   - Angular frontend over NestJS microservices backend for loan origination and lending.
   - Custom Model Context Protocol (MCP) server integration for database tooling.
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bhargav_FullStack_Developer_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-card rounded-2xl max-w-3xl w-full p-6 sm:p-9 relative border border-purple-500/30 shadow-2xl my-auto max-h-[90vh] flex flex-col">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 flex-shrink-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Curriculum Vitae</span>
            <h3 className="text-2xl font-bold text-white">Bhargav's Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#141e33] hover:bg-[#1a2742] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Print or Save PDF"
            >
              <Printer className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="p-2 rounded-xl gradient-btn text-white transition-all flex items-center gap-1.5 text-xs font-mono shadow-md"
              title="Download CV"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="overflow-y-auto pr-2 py-6 space-y-6 text-slate-300 text-sm leading-relaxed font-sans">
          {/* Candidate Summary */}
          <div className="p-5 rounded-xl bg-[#0a0f1d] border border-white/5">
            <h4 className="text-xl font-bold text-white mb-1">Bhargav</h4>
            <p className="text-purple-300 font-mono text-xs mb-3">Full Stack Developer • ~2.5 Years Production Experience</p>
            <p className="text-slate-300 text-xs sm:text-sm">
              Full Stack Developer specializing in production fintech and enterprise HR platforms using React, Next.js, Node.js, Express, MongoDB, and TypeScript. Experienced across the full SDLC from architectural estimation and microservices development to AWS EC2 containerized deployment and production maintenance.
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-purple-400" />
              Technical Stack & Competencies
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {SKILLS_DATA.map((s) => (
                <div key={s.name} className="p-2.5 rounded-lg bg-[#0e1627] border border-white/5 flex justify-between">
                  <span className="text-white font-medium">{s.name}</span>
                  <span className="font-mono text-purple-400">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Projects Breakdown */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-purple-400" />
              Key Production Projects & Impact
            </h5>
            <div className="space-y-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-[#0e1627] border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="font-bold text-white text-sm">{p.title}</h6>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/30">
                      {p.statusBadge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{p.tagline}</p>
                  <p className="text-xs text-slate-300 mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-4 rounded-xl bg-[#0b101c] border border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
            <div>
              <span className="text-slate-400">Professional Profile: </span>
              <span className="text-white font-mono">linkedin.com/in/bhargav-developer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Portfolio: </span>
              <span className="text-purple-300 font-mono">Bhargav.dev</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
