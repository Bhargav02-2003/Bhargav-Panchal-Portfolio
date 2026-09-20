import { SkillItem, SkillCategoryGroup, ProjectItem, StatItem, TestimonialItem } from '../types';
import { currentExperience } from '../utils/experience';

export const HERO_DATA = {
  tag: 'FULL STACK DEVELOPER',
  name: 'Bhargav Panchal',
  headingPrefix: "Hi, I'm ",
  subtext: 'I build production-grade FinTech & SaaS platforms with the MERN stack.',
  description:
    `Full Stack Developer with ~${currentExperience.formattedDecimal} years of experience building production-grade FinTech and SaaS applications using React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, and AWS. Delivered three production platforms, including a 40% improvement in page-load performance for a live FinTech dashboard.`,
  techIcons: [
    { name: 'JavaScript', short: 'JS', badge: 'ES6+', color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 text-yellow-400' },
    { name: 'TypeScript', short: 'TS', badge: 'v5+', color: 'from-blue-600/20 to-cyan-600/10 border-blue-500/30 text-blue-300' },
    { name: 'React.js', short: 'React', badge: 'v19', color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300' },
    { name: 'Next.js', short: 'Next', badge: 'App Router', color: 'from-purple-600/20 to-indigo-600/10 border-purple-500/30 text-purple-300' },
    { name: 'Node.js', short: 'Node', badge: 'LTS', color: 'from-emerald-500/20 to-green-600/10 border-emerald-500/30 text-emerald-300' },
    { name: 'Express.js', short: 'Express', badge: 'APIs', color: 'from-blue-500/20 to-violet-600/10 border-blue-500/30 text-blue-400' },
    { name: 'MongoDB', short: 'Mongo', badge: 'Atlas', color: 'from-green-500/20 to-emerald-600/10 border-green-500/30 text-green-400' },
    { name: 'Docker / AWS', short: 'Cloud', badge: 'EC2', color: 'from-amber-500/20 to-orange-600/10 border-amber-500/30 text-amber-300' },
    { name: 'Tailwind CSS', short: 'CSS', badge: 'v4', color: 'from-sky-500/20 to-teal-500/10 border-sky-500/30 text-sky-300' },
    { name: 'Claude & AI', short: 'AI', badge: 'Assisted', color: 'from-purple-500/20 to-pink-600/10 border-purple-500/30 text-purple-300' },
  ],
  ecosystemCategories: [
    { label: 'Language', items: 'JavaScript (ES6+), TypeScript' },
    { label: 'Frontend', items: 'React.js, Next.js (App Router, SSR/SSG/ISR), Redux Toolkit, Tailwind CSS, Material-UI (MUI), HTML5/CSS3' },
    { label: 'Backend', items: 'Node.js, Express.js, REST & GraphQL APIs, Microservices Architecture' },
    { label: 'Database', items: 'MongoDB, SQL Server' },
    { label: 'Cloud & DevOps', items: 'AWS EC2, Nginx, Docker, DuckDNS, PM2' },
    { label: 'Testing', items: 'Jest, React Testing Library, Unit & Integration Testing' },
    { label: 'AI Tools', items: 'Claude (AI-assisted development), Google AI Studio, Antigravity' },
  ],
};

export const ABOUT_DATA = {
  heading: "Building scalable production FinTech & enterprise SaaS systems",
  text: 'Full Stack Web Developer with 2.8+ years of experience building production platforms at Celestiq DataTech, including UniGold Finances (FinTech lending) and FluxT (enterprise HR analytics). Experienced across the full SDLC in Agile/Scrum environments.',
  sdlcPillars: [
    {
      title: 'FinTech & KYC Architecture',
      desc: 'Developing automated KYC onboarding flows with Aadhaar, PAN, and penny-drop verification via SurePass REST API, adhering strictly to AML compliance.',
    },
    {
      title: 'Frontend Performance & UI Systems',
      desc: 'Achieved 40% reduction in page-load times via lazy loading, code splitting, and React memoisation for complex ApexCharts dashboards.',
    },
    {
      title: 'State & Microservices Engineering',
      desc: 'Building predictable data layers using Redux Toolkit, custom middleware, and Axios for decoupled Node.js microservices.',
    },
    {
      title: 'AWS Cloud & Production Deployment',
      desc: 'Managing containerized deployments on AWS EC2 (t3.micro), Nginx reverse proxy routing, SSL termination, Docker, and PM2 process monitoring.',
    },
  ],
};

export const STATS_DATA: StatItem[] = [
  {
    value: currentExperience.displayPlus,
    label: 'Experience',
    description: 'Production FinTech & enterprise MERN engineering',
  },
  {
    value: '3 Platforms',
    label: 'Delivered',
    description: 'UniGold Finances, FluxT & DualBeats',
  },
  {
    value: '40% Boost',
    label: 'Page Performance',
    description: 'Page-load reduction via lazy loading & memoisation',
  },
  {
    value: '30+ Issues',
    label: 'Resolved',
    description: 'Complex rendering, Redux state & API integrations',
  },
];

export const SKILLS_CATEGORIES_DATA: SkillCategoryGroup[] = [
  {
    category: 'Language',
    title: 'Languages',
    iconName: 'Code2',
    color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-300',
    items: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Frontend',
    title: 'Frontend Development',
    iconName: 'Layout',
    color: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-300',
    items: [
      'React.js',
      'Next.js (App Router, SSR/SSG/ISR)',
      'Redux Toolkit',
      'Tailwind CSS',
      'Material-UI (MUI)',
      'HTML5/CSS3',
    ],
  },
  {
    category: 'Backend',
    title: 'Backend & APIs',
    iconName: 'Server',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-300',
    items: [
      'Node.js',
      'Express.js',
      'REST & GraphQL APIs',
      'Microservices Architecture',
    ],
  },
  {
    category: 'Database',
    title: 'Databases & Storage',
    iconName: 'Database',
    color: 'from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-300',
    items: ['MongoDB', 'SQL Server'],
  },
  {
    category: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-300',
    items: ['AWS EC2', 'Nginx', 'Docker', 'DuckDNS', 'PM2'],
  },
  {
    category: 'Testing',
    title: 'Testing & Quality Assurance',
    iconName: 'ShieldCheck',
    color: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-300',
    items: ['Jest', 'React Testing Library', 'Unit & Integration Testing'],
  },
  {
    category: 'AI Tools',
    title: 'AI Engineering & Tools',
    iconName: 'Sparkles',
    color: 'from-purple-500/20 to-violet-500/10 border-purple-500/30 text-purple-300',
    items: [
      'Claude (AI-assisted development)',
      'Google AI Studio',
      'Antigravity',
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'JavaScript (ES6+)', level: 90, category: 'Language', color: 'from-yellow-400 to-amber-600' },
  { name: 'TypeScript', level: 85, category: 'Language', color: 'from-blue-500 to-cyan-500' },
  { name: 'React.js', level: 90, category: 'Frontend', color: 'from-cyan-500 to-blue-600' },
  { name: 'Next.js (App Router, SSR/SSG/ISR)', level: 85, category: 'Frontend', color: 'from-purple-500 to-indigo-600' },
  { name: 'Redux Toolkit', level: 80, category: 'Frontend', color: 'from-purple-500 to-pink-600' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', color: 'from-cyan-400 to-teal-500' },
  { name: 'Material-UI (MUI)', level: 85, category: 'Frontend', color: 'from-blue-400 to-indigo-500' },
  { name: 'HTML5/CSS3', level: 95, category: 'Frontend', color: 'from-orange-400 to-rose-500' },
  { name: 'Node.js', level: 85, category: 'Backend', color: 'from-emerald-500 to-teal-600' },
  { name: 'Express.js', level: 85, category: 'Backend', color: 'from-blue-500 to-violet-600' },
  { name: 'REST & GraphQL APIs', level: 85, category: 'Backend', color: 'from-teal-400 to-cyan-600' },
  { name: 'Microservices Architecture', level: 80, category: 'Backend', color: 'from-indigo-500 to-purple-600' },
  { name: 'MongoDB', level: 85, category: 'Database', color: 'from-green-500 to-emerald-600' },
  { name: 'SQL Server', level: 80, category: 'Database', color: 'from-sky-500 to-blue-700' },
  { name: 'AWS EC2', level: 75, category: 'Cloud & DevOps', color: 'from-amber-500 to-orange-600' },
  { name: 'Nginx', level: 80, category: 'Cloud & DevOps', color: 'from-emerald-400 to-green-600' },
  { name: 'Docker', level: 70, category: 'Cloud & DevOps', color: 'from-sky-500 to-blue-600' },
  { name: 'DuckDNS', level: 85, category: 'Cloud & DevOps', color: 'from-yellow-400 to-amber-500' },
  { name: 'PM2', level: 80, category: 'Cloud & DevOps', color: 'from-violet-400 to-purple-600' },
  { name: 'Jest', level: 80, category: 'Testing', color: 'from-red-400 to-rose-600' },
  { name: 'React Testing Library', level: 80, category: 'Testing', color: 'from-rose-400 to-pink-600' },
  { name: 'Unit & Integration Testing', level: 85, category: 'Testing', color: 'from-emerald-400 to-teal-600' },
  { name: 'Claude (AI-assisted dev)', level: 90, category: 'AI Tools', color: 'from-amber-400 to-purple-500' },
  { name: 'Google AI Studio', level: 90, category: 'AI Tools', color: 'from-blue-400 to-indigo-600' },
  { name: 'Antigravity', level: 85, category: 'AI Tools', color: 'from-purple-400 to-pink-500' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'unigold-finances',
    title: 'UniGold Finances',
    tagline: 'FinTech Lending Platform • Celestiq DataTech (2025–Present)',
    description:
      'Production FinTech platform delivering end-to-end customer onboarding with automated KYC verification (Aadhaar, PAN, and bank account penny-drop via SurePass REST API), customizable carat valuation, 365-day tenures, and auction management.',
    tags: ['React.js', 'Next.js', 'Node.js', 'Redux Toolkit', 'ApexCharts', 'SurePass REST API', 'Microservices'],
    isPrivate: true,
    statusBadge: 'Celestiq DataTech (2025–Present)',
    architectureDetails: [
      'Developed end-to-end customer onboarding workflows with automated KYC verification (Aadhaar, PAN, and bank account penny-drop verification via SurePass REST API), ensuring AML-compliant data validation',
      'Built core lending module: customizable lending programs, automated carat valuation, standard deduction calculations, and hierarchical loan approval workflows',
      'Implemented full loan lifecycle management: loan top-ups, partial gold ornament release, bullet repayments, monthly EMI repayment, and 365-day loan tenures',
      'Designed Auction & Bidder Management module for end-of-term asset liquidation, leveraging Redux Toolkit for real-time state management',
      'Achieved a 40% reduction in page-load time through lazy loading, code splitting, and React memoisation, significantly improving ApexCharts dashboard performance',
      'Integrated API audit logging across critical financial transactions, ensuring regulatory compliance, traceability, and secure coding standards',
      'Resolved 30+ front-end and API integration issues (React rendering, Redux state management, authentication/session handling, API communication)',
    ],
    metrics: '40% Page-Load Reduction • SurePass KYC',
  },
  {
    id: 'fluxt',
    title: 'FluxT',
    tagline: 'Enterprise HR Analytics Platform • Celestiq DataTech (2024–08/2025)',
    description:
      'Four-module enterprise platform including Employee Feedback System, 40-question Onboarding Portal, RBAC-enabled Analytics Dashboard, and Question Management Panel.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Material-UI (MUI)', 'ApexCharts', 'Docker'],
    isPrivate: true,
    statusBadge: 'Celestiq DataTech (2024–2025)',
    architectureDetails: [
      'Architected complete frontend infrastructure from inception, building a modular, scalable codebase integrated with Node.js and MongoDB for real-time data exchange',
      'Engineered a robust state management layer using Redux Toolkit, custom middleware, and Axios, enabling predictable data flow and efficient REST API communication',
      'Built a scalable, reusable React component architecture adopted across multiple production projects, reducing feature development time',
      'Developed dynamic, fully responsive user interfaces using Material-UI (MUI), following responsive design, accessibility (a11y), and consistent design system principles',
      'Delivered four-module enterprise platform: Employee Feedback System, 40-question Onboarding Portal, RBAC-enabled Analytics Dashboard, and Question Management Panel',
      'Built interactive ApexCharts dashboards enabling leadership teams to analyse aggregated employee feedback, comparative branch performance, and trend reporting',
      'Maintained Docker-containerised deployments integrated with GitHub, ensuring environment consistency and reliable production delivery',
    ],
    metrics: '4-Module Platform • RBAC Analytics',
  },
  {
    id: 'dualbeats',
    title: 'DualBeats',
    tagline: 'Real-Time Synchronized Music Platform • Personal Project',
    description:
      'Independently developed and deployed real-time synchronized music platform enabling multi-user playback synchronization on AWS cloud infrastructure.',
    tags: ['React.js', 'Node.js', 'Socket.io', 'YouTube IFrame API', 'AWS EC2', 'Nginx', 'MongoDB Atlas', 'PM2'],
    link: 'https://dualbeats.duckdns.org',
    isPrivate: false,
    statusBadge: 'Live (dualbeats.duckdns.org)',
    architectureDetails: [
      'Built real-time dual music player with synchronized play, pause, seek, and playback events across multiple concurrent users using Socket.io and YouTube IFrame API',
      'Designed WebSocket-based event architecture with Socket.io: room management, live event broadcasting, user synchronization, and real-time player state management',
      'Deployed application on AWS EC2 (t3.micro) with Nginx as reverse proxy, enabling production-grade routing, SSL termination, and high availability',
      'Configured custom domain (dualbeats.duckdns.org) with HTTPS/SSL using Nginx and DuckDNS, ensuring secure public access and reliable connectivity',
      'Independently managed complete cloud infrastructure: AWS EC2 provisioning, Linux server administration, PM2 process management, and production monitoring',
    ],
    metrics: 'Sub-50ms sync latency • Live on AWS EC2',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Suresh Verma',
    role: 'Engineering Director',
    company: 'Fintech Solutions Group',
    avatarText: 'SV',
    content:
      'Bhargav demonstrates exceptional full-stack depth. His implementation of UniGold Finances automated KYC verification and loan approval workflows was compliant, robust, and delivered with a 40% performance gain.',
    rating: 5,
    relation: 'Managed Bhargav on production fintech systems',
  },
  {
    id: 't2',
    name: 'Priya Nair',
    role: 'Lead Architect',
    company: 'Celestiq DataTech',
    avatarText: 'PN',
    content:
      'Architecting FluxT with Bhargav was seamless. His reusable React architecture, robust Redux Toolkit state flow, and interactive ApexCharts dashboards set the benchmark for our enterprise products.',
    rating: 5,
    relation: 'Collaborated on enterprise analytics platforms',
  },
  {
    id: 't3',
    name: 'Aditya Mehta',
    role: 'Product Lead',
    company: 'NextGen Digital Labs',
    avatarText: 'AM',
    content:
      'DualBeats is a testament to Bhargav’s engineering ingenuity. Achieving smooth WebSocket audio synchronization across AWS EC2 with bulletproof Nginx SSL setup showcases his production-ready mindset.',
    rating: 5,
    relation: 'Technical peer & project reviewer',
  },
];
