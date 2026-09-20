export interface SkillItem {
  name: string;
  level: number;
  category: 'Language' | 'Backend' | 'Cloud & DevOps' | 'Testing' | 'Frontend' | 'Database' | 'AI Tools' | string;
  color?: string;
  iconName?: string;
}

export interface SkillCategoryGroup {
  category: string;
  title: string;
  iconName: string;
  color: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  link?: string;
  isPrivate: boolean;
  statusBadge: string;
  architectureDetails: string[];
  metrics?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  rating: number;
  relation: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
