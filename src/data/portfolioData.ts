import { SkillItem, SkillCategoryGroup, ProjectItem, StatItem, TestimonialItem } from '../types';
import { currentExperience } from '../utils/experience';

export const HERO_DATA = {
  tag: 'FULL STACK DEVELOPER',
  name: 'Bhargav',
  headingPrefix: "Hi, I'm ",
  subtext: 'I build full-stack web applications with the MERN stack.',
  description:
    `Full Stack Developer with ~${currentExperience.formattedDecimal} years of experience building production-grade fintech and enterprise applications using React, Next.js, Node.js, Express, MongoDB, and TypeScript.`,
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
    { label: 'Frontend', items: 'React.js, Next.js, Redux Toolkit, Tailwind CSS, MUI, HTML5/CSS3' },
    { label: 'Backend', items: 'Node.js, Express.js, REST & GraphQL, Microservices' },
    { label: 'Database', items: 'MongoDB, SQL Server' },
    { label: 'Cloud & DevOps', items: 'AWS EC2, Nginx, Docker, DuckDNS, PM2' },
    { label: 'Testing', items: 'Jest, RTL, Unit & Integration' },
    { label: 'AI Tools', items: 'Claude, Google AI Studio, Antigravity' },
  ],
};

export const ABOUT_DATA = {
  heading: "I'm passionate about building scalable full-stack products",
  text: 'I work across the full SDLC — from requirement estimation and technical design to development, testing, deployment, and production support. Currently building fintech and enterprise HR platforms in production.',
  sdlcPillars: [
    {
      title: 'Requirement & Technical Design',
      desc: 'Translating product specs into robust system architectures, API contracts, and scalable data models.',
    },
    {
      title: 'Full Stack Engineering',
      desc: 'Developing high-throughput microservices and responsive web apps using React, Next.js, Express & TypeScript.',
    },
    {
      title: 'Deployment & Cloud DevOps',
      desc: 'Orchestrating containerized workloads on AWS EC2, Nginx reverse proxies, Docker, and CI/CD pipelines.',
    },
    {
      title: 'Reliability & Production Support',
      desc: 'Ensuring 99.9% uptime, latency monitoring, real-time logging, and swift SLA-driven production resolution.',
    },
  ],
};

export const STATS_DATA: StatItem[] = [
  {
    value: currentExperience.displayPlus,
    label: 'Experience',
    description: 'Specializing in MERN & modern enterprise systems',
  },
  {
    value: 'Multiple',
    label: 'Production Projects',
    description: 'Fintech, HR platforms & real-time sync systems',
  },
  {
    value: 'Full SDLC',
    label: 'Ownership',
    description: 'From system architecture to production support',
  },
  {
    value: 'MERN Stack',
    label: 'Expert',
    description: 'React, Next.js, Node.js, Express & MongoDB',
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
    id: 'dualbeats',
    title: 'DualBeats',
    tagline: 'Real-time Synchronized Dual Music Player',
    description:
      "Real-time synchronized dual music player built with React, Socket.io, MongoDB Atlas, and AWS EC2 + Nginx. Live sync between two users using WebSockets, deployed with SSL via Let's Encrypt.",
    tags: ['React', 'Socket.io', 'MongoDB Atlas', 'AWS EC2', 'Nginx', "Let's Encrypt"],
    link: 'https://dualbeats.duckdns.org',
    isPrivate: false,
    statusBadge: 'Live System',
    architectureDetails: [
      'Bi-directional WebSocket streaming with sub-50ms sync latency',
      'Production AWS EC2 deployment behind Nginx reverse proxy with TLS/SSL',
      'Dynamic session pairing with automatic reconnect and state recovery',
    ],
    metrics: 'Sub-50ms sync latency',
  },
  {
    id: 'unigold-finances',
    title: 'UniGold Finances',
    tagline: 'Fintech KYC/AML & Gold Lending Platform',
    description:
      'Production fintech platform for KYC/AML onboarding and gold lending, with Aadhaar-based DigiLocker verification flow and secure client-side data persistence.',
    tags: ['React', 'Next.js', 'Node.js', 'DigiLocker API', 'Aadhaar eKYC', 'Fintech Security'],
    isPrivate: true,
    statusBadge: 'Private / Production',
    architectureDetails: [
      'Seamless Aadhaar-based identity verification via Government DigiLocker gateway',
      'Automated KYC risk classification engine and multi-step gold loan assessment',
      'Hardened client-side session encryption ensuring zero plaintext sensitive data leakage',
    ],
    metrics: 'Compliant KYC onboarding',
  },
  {
    id: 'los-lms',
    title: 'LOS-LMS',
    tagline: 'Loan Origination & Management Microservices',
    description:
      'Angular frontend over a NestJS microservices backend for a loan origination and lending system, including custom MCP server integration for database tooling.',
    tags: ['Angular', 'NestJS', 'Microservices', 'MCP Server', 'PostgreSQL', 'Enterprise'],
    isPrivate: true,
    statusBadge: 'Private / Production',
    architectureDetails: [
      'Decoupled microservice architecture handling multi-tier loan approval flows',
      'Custom Model Context Protocol (MCP) server tooling for secure DB operations & AI assistance',
      'High-throughput asynchronous message queues for loan lifecycle state machines',
    ],
    metrics: 'Enterprise microservices',
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
      'Bhargav demonstrates rare full-stack depth. His implementation of the KYC DigiLocker integration was clean, secure, and delivered well ahead of schedule. Highly recommended for critical fintech applications.',
    rating: 5,
    relation: 'Managed Bhargav on production fintech systems',
  },
  {
    id: 't2',
    name: 'Priya Nair',
    role: 'Lead Architect',
    company: 'Enterprise Cloud Platforms',
    avatarText: 'PN',
    content:
      'Working with Bhargav on the LOS-LMS microservices was a fantastic experience. His technical grasp of NestJS, custom MCP servers, and full SDLC ownership made our releases exceptionally smooth.',
    rating: 5,
    relation: 'Collaborated on distributed microservices',
  },
  {
    id: 't3',
    name: 'Aditya Mehta',
    role: 'Product Lead',
    company: 'NextGen Digital Labs',
    avatarText: 'AM',
    content:
      'DualBeats is a testament to Bhargav’s engineering ingenuity. Achieving smooth WebSocket audio synchronization across AWS EC2 with bulletproof SSL setup showcases his production-ready mindset.',
    rating: 5,
    relation: 'Technical peer & project reviewer',
  },
];
