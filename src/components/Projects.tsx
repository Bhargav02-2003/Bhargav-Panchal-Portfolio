import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  Lock, 
  Radio, 
  Shield, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Music, 
  Coins, 
  Building2,
  X,
  Info
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'dualbeats':
        return <Music className="w-5 h-5 text-purple-400" />;
      case 'unigold-finances':
        return <Coins className="w-5 h-5 text-amber-400" />;
      case 'los-lms':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real-world platforms deployed in production, spanning real-time WebSockets, fintech KYC/AML systems, and enterprise loan origination microservices.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden border border-white/10 group"
            >
              {/* Card Header & Status */}
              <div className="p-7">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#101827] border border-white/10 flex items-center justify-center shadow-inner">
                    {getProjectIcon(project.id)}
                  </div>

                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      <Lock className="w-3 h-3" />
                      {project.statusBadge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                      <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                      {project.statusBadge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-4 uppercase tracking-wider">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architecture Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Highlights:
                  </div>
                  {project.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tags & Actions */}
              <div className="px-7 pb-7 pt-2 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#111927] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full gradient-btn text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-purple-600/20 hover:shadow-purple-600/35 transition-all"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-[#111927] text-slate-200 hover:text-white hover:bg-[#182338] border border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Info className="w-4 h-4 text-purple-400" />
                    <span>View Architecture Specs</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Private Projects */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card rounded-2xl max-w-xl w-full p-6 sm:p-8 relative border border-purple-500/30 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>{selectedProject.statusBadge}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-purple-300 font-mono mb-4">{selectedProject.tagline}</p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="p-4 rounded-xl bg-[#0b101c] border border-white/10 mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Architectural Breakdown
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-colors"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
