import React from 'react';
import { X, Download, Printer, Briefcase, GraduationCap, Award, ExternalLink, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { SKILLS_CATEGORIES_DATA } from '../data/portfolioData';
import { currentExperience } from '../utils/experience';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
BHARGAV PANCHAL
Full-Stack Web Developer
Location: Pune, India | Phone: +91 9607058922
LinkedIn: https://linkedin.com/in/bhargav-panchal-3a19aa3b3
GitHub: https://github.com/Bhargav02-2003

SUMMARY
Full Stack Developer with ${currentExperience.formattedDecimal}+ years of experience building production-grade FinTech and SaaS applications using React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and AWS. Delivered three production platforms, including a 40% improvement in page-load performance for a live FinTech dashboard. Experienced in Next.js App Router, SSR/SSG/ISR, REST/GraphQL APIs, Redux Toolkit, JWT/OAuth 2.0, AWS EC2, and Nginx, with expertise across the full SDLC in Agile/Scrum environments.

EXPERIENCE

Celestiq DataTech
Full-Stack Web Developer | Pune, India | 2025 – Present
UniGold Finances — FinTech Lending Platform
Domain: FinTech, Lending, KYC/AML Compliance
Technologies: React.js, Next.js, Node.js, Redux Toolkit, ApexCharts, SurePass REST API, Microservices
• Developed end-to-end customer onboarding workflows with automated KYC verification (Aadhaar, PAN, and bank account penny-drop verification via SurePass REST API), ensuring AML-compliant data validation.
• Built the core lending module, including customisable lending programs, automated carat valuation, standard deduction calculations, and hierarchical loan approval workflows.
• Implemented full loan lifecycle management, supporting loan top-ups, partial gold ornament release, bullet repayments, monthly EMI repayment, and 365-day loan tenures.
• Designed an Auction & Bidder Management module for end-of-term asset liquidation, leveraging Redux Toolkit for real-time state management.
• Achieved a 40% reduction in page-load time through lazy loading, code splitting, and React memoisation, significantly improving ApexCharts dashboard performance.
• Integrated API audit logging across critical financial transactions, ensuring regulatory compliance, traceability, and secure coding standards.
• Resolved 30+ front-end and API integration issues, including React rendering, Redux state management, authentication/session handling, and API communication, improving application stability and user experience.

Celestiq DataTech
Full-Stack Web Developer | Pune, India | 2024 – 08/2025
FluxT — Enterprise HR Analytics Platform
Domain: HR Tech, Enterprise Analytics
Technologies: React.js, Node.js, MongoDB, Redux Toolkit, Material-UI (MUI), ApexCharts, Docker
• Architected the complete frontend infrastructure from inception, building a modular, scalable codebase integrated with Node.js and MongoDB for real-time data exchange.
• Engineered a robust state management layer using Redux Toolkit, custom middleware, and Axios, enabling predictable data flow and efficient REST API communication.
• Built a scalable, reusable React component architecture adopted across multiple production projects, reducing feature development time and improving maintainability.
• Developed dynamic, fully responsive user interfaces using Material-UI (MUI), following responsive design, accessibility (a11y), and consistent design system principles.
• Delivered a four-module enterprise platform, including an Employee Feedback System, 40-question Onboarding Portal, RBAC-enabled Analytics Dashboard, and Question Management Panel.
• Built interactive ApexCharts dashboards enabling leadership teams to analyse aggregated employee feedback, comparative branch performance, and trend reporting for data-driven decision-making.
• Maintained Docker-containerised deployments integrated with GitHub, ensuring environment consistency, streamlined deployments, and reliable development-to-production workflows.

KEY PROJECTS

DualBeats — Real-Time Synchronized Music Platform
Personal Project (Live: dualbeats.duckdns.org)
Technologies: React.js, Node.js, Socket.io, YouTube IFrame API, AWS EC2, Nginx, MongoDB Atlas, PM2
• Built a real-time dual music player with synchronized play, pause, seek, and playback events across multiple concurrent users using Socket.io and the YouTube IFrame API.
• Designed a WebSocket-based event architecture with Socket.io, implementing room management, live event broadcasting, user synchronization, and real-time player state management.
• Deployed the application on AWS EC2 (t3.micro) with Nginx as a reverse proxy, enabling production-grade routing, SSL termination, and high availability.
• Configured a custom domain (dualbeats.duckdns.org) with HTTPS/SSL using Nginx and DuckDNS, ensuring secure public access and reliable connectivity.
• Independently managed the complete cloud infrastructure, including AWS EC2 provisioning, Linux server administration, PM2 process management, application deployment, and production monitoring.

EDUCATION
• Bachelor of Engineering – Electronics & Communication Engineering (2021 – 2024)
  Nutan College of Engineering and Research-(NCER) | Pune
• Diploma - Electronic & Telecommunication Engineering (2019 – 2021)
  Pimpri-Chinchwad Polytechnic College | Pune
• Independent Learning: Full-Stack Web Development (MERN), Next.js, AWS EC2, Nginx, Docker & Containerisation, SQL Server, Financial Technology Concepts.

SKILLS
• Language: JavaScript (ES6+), TypeScript
• Frontend: React.js, Next.js (App Router, SSR/SSG/ISR), Redux Toolkit, Tailwind CSS, Material-UI (MUI), HTML5/CSS3
• Backend: Node.js, Express.js, REST & GraphQL APIs, Microservices Architecture
• Database: MongoDB, SQL Server
• Cloud & DevOps: AWS EC2, Nginx, Docker, DuckDNS, PM2
• Testing: Jest, React Testing Library, Unit & Integration Testing
• AI Tools: Claude (AI-assisted development), Google AI Studio, Antigravity
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Bhargav_Panchal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-card rounded-2xl max-w-4xl w-full p-5 sm:p-8 relative border border-purple-500/30 shadow-2xl my-auto max-h-[92vh] flex flex-col">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 flex-shrink-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-purple-400">Curriculum Vitae</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Bhargav Panchal — Resume</h3>
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
              title="Download Resume"
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
          {/* Candidate Profile Header */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#0a0f1d] border border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div>
                <h4 className="text-2xl font-extrabold text-white">BHARGAV PANCHAL</h4>
                <p className="text-purple-300 font-mono text-xs sm:text-sm font-semibold mt-0.5">
                  Full-Stack Web Developer • ~{currentExperience.formattedDecimal} Years Production Experience
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  Pune, India
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  +91 9607058922
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <a
                href="https://linkedin.com/in/bhargav-panchal-3a19aa3b3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors font-mono"
              >
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/bhargav-panchal-3a19aa3b3
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://github.com/Bhargav02-2003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors font-mono"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/Bhargav02-2003
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full Stack Developer with {currentExperience.formattedDecimal}+ years of experience building production-grade FinTech and SaaS applications using React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and AWS. Delivered three production platforms, including a 40% improvement in page-load performance for a live FinTech dashboard. Experienced in Next.js App Router, SSR/SSG/ISR, REST/GraphQL APIs, Redux Toolkit, JWT/OAuth 2.0, AWS EC2, and Nginx, with expertise across the full SDLC in Agile/Scrum environments.
            </p>
          </div>

          {/* Professional Experience */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" />
              Work Experience (Celestiq DataTech)
            </h5>

            <div className="space-y-6">
              {/* Role 1: UniGold Finances */}
              <div className="p-5 rounded-xl bg-[#0e1627] border border-white/5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2.5">
                  <div>
                    <h6 className="text-base font-bold text-white">Full-Stack Web Developer</h6>
                    <p className="text-purple-400 font-semibold text-xs">
                      UniGold Finances — FinTech Lending Platform • Celestiq DataTech
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded border border-emerald-800/40 w-fit">
                    Pune, India | 2025 – Present
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong>Domain:</strong> FinTech, Lending, KYC/AML Compliance</span>
                  <span><strong>Technologies:</strong> React.js, Next.js, Node.js, Redux Toolkit, ApexCharts, SurePass REST API, Microservices</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                  <li>Developed end-to-end customer onboarding workflows with automated KYC verification (Aadhaar, PAN, and bank account penny-drop verification via SurePass REST API), ensuring AML-compliant data validation.</li>
                  <li>Built the core lending module, including customisable lending programs, automated carat valuation, standard deduction calculations, and hierarchical loan approval workflows.</li>
                  <li>Implemented full loan lifecycle management, supporting loan top-ups, partial gold ornament release, bullet repayments, monthly EMI repayment, and 365-day loan tenures.</li>
                  <li>Designed an Auction & Bidder Management module for end-of-term asset liquidation, leveraging Redux Toolkit for real-time state management.</li>
                  <li>Achieved a 40% reduction in page-load time through lazy loading, code splitting, and React memoisation, significantly improving ApexCharts dashboard performance.</li>
                  <li>Integrated API audit logging across critical financial transactions, ensuring regulatory compliance, traceability, and secure coding standards.</li>
                  <li>Resolved 30+ front-end and API integration issues, including React rendering, Redux state management, authentication/session handling, and API communication, improving application stability and user experience.</li>
                </ul>
              </div>

              {/* Role 2: FluxT */}
              <div className="p-5 rounded-xl bg-[#0e1627] border border-white/5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2.5">
                  <div>
                    <h6 className="text-base font-bold text-white">Full-Stack Web Developer</h6>
                    <p className="text-cyan-400 font-semibold text-xs">
                      FluxT — Enterprise HR Analytics Platform • Celestiq DataTech
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 w-fit">
                    Pune, India | 2024 – 08/2025
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong>Domain:</strong> HR Tech, Enterprise Analytics</span>
                  <span><strong>Technologies:</strong> React.js, Node.js, MongoDB, Redux Toolkit, Material-UI (MUI), ApexCharts, Docker</span>
                </div>

                <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                  <li>Architected the complete frontend infrastructure from inception, building a modular, scalable codebase integrated with Node.js and MongoDB for real-time data exchange.</li>
                  <li>Engineered a robust state management layer using Redux Toolkit, custom middleware, and Axios, enabling predictable data flow and efficient REST API communication.</li>
                  <li>Built a scalable, reusable React component architecture adopted across multiple production projects, reducing feature development time and improving maintainability.</li>
                  <li>Developed dynamic, fully responsive user interfaces using Material-UI (MUI), following responsive design, accessibility (a11y), and consistent design system principles.</li>
                  <li>Delivered a four-module enterprise platform, including an Employee Feedback System, 40-question Onboarding Portal, RBAC-enabled Analytics Dashboard, and Question Management Panel.</li>
                  <li>Built interactive ApexCharts dashboards enabling leadership teams to analyse aggregated employee feedback, comparative branch performance, and trend reporting for data-driven decision-making.</li>
                  <li>Maintained Docker-containerised deployments integrated with GitHub, ensuring environment consistency, streamlined deployments, and reliable development-to-production workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              Key Independent Projects
            </h5>

            <div className="p-5 rounded-xl bg-[#0e1627] border border-white/5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/5 pb-2.5">
                <div>
                  <h6 className="text-base font-bold text-white flex items-center gap-2">
                    DualBeats — Real-Time Synchronized Music Platform
                    <a
                      href="https://dualbeats.duckdns.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono font-normal"
                    >
                      (dualbeats.duckdns.org <ExternalLink className="w-3 h-3" />)
                    </a>
                  </h6>
                  <p className="text-slate-400 text-xs">Personal Project • Full Stack & Cloud Infrastructure</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 w-fit">
                  Live on AWS EC2
                </span>
              </div>

              <div className="text-[11px] text-slate-400">
                <strong>Technologies:</strong> React.js, Node.js, Socket.io, YouTube IFrame API, AWS EC2, Nginx, MongoDB Atlas, PM2
              </div>

              <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-slate-300 leading-relaxed">
                <li>Built a real-time dual music player with synchronized play, pause, seek, and playback events across multiple concurrent users using Socket.io and the YouTube IFrame API.</li>
                <li>Designed a WebSocket-based event architecture with Socket.io, implementing room management, live event broadcasting, user synchronization, and real-time player state management.</li>
                <li>Deployed the application on AWS EC2 (t3.micro) with Nginx as a reverse proxy, enabling production-grade routing, SSL termination, and high availability.</li>
                <li>Configured a custom domain (dualbeats.duckdns.org) with HTTPS/SSL using Nginx and DuckDNS, ensuring secure public access and reliable connectivity.</li>
                <li>Independently managed the complete cloud infrastructure, including AWS EC2 provisioning, Linux server administration, PM2 process management, application deployment, and production monitoring.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              Education & Lifelong Learning
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#0e1627] border border-white/5">
                <span className="text-xs font-mono text-purple-400">2021 – 2024 • Pune</span>
                <h6 className="font-bold text-white text-sm mt-1">Bachelor of Engineering</h6>
                <p className="text-xs text-slate-300 mt-0.5">Electronics & Communication Engineering</p>
                <p className="text-xs text-slate-400 mt-1">Nutan College of Engineering and Research (NCER)</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1627] border border-white/5">
                <span className="text-xs font-mono text-purple-400">2019 – 2021 • Pune</span>
                <h6 className="font-bold text-white text-sm mt-1">Diploma in Engineering</h6>
                <p className="text-xs text-slate-300 mt-0.5">Electronic & Telecommunication Engineering</p>
                <p className="text-xs text-slate-400 mt-1">Pimpri-Chinchwad Polytechnic College</p>
              </div>
            </div>

            <div className="mt-3 p-3.5 rounded-xl bg-[#0b101c] border border-white/5 text-xs text-slate-400">
              <span className="text-white font-medium">Independent Learning: </span>
              Full-Stack Web Development (MERN), Next.js, AWS EC2, Nginx, Docker & Containerisation, SQL Server, Financial Technology Concepts.
            </div>
          </div>

          {/* Technical Skills Breakdown */}
          <div>
            <h5 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Skills Matrix
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILLS_CATEGORIES_DATA.map((cat) => (
                <div key={cat.category} className="p-3 rounded-xl bg-[#0e1627] border border-white/5">
                  <span className="font-mono text-purple-300 font-semibold text-[11px] uppercase tracking-wider block mb-1">
                    {cat.title}
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cat.items.map((item) => (
                      <span key={item} className="px-2 py-0.5 bg-black/40 rounded text-slate-300 text-[11px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
