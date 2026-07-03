import {
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { id: string; label: string };
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_ROLES = [
  'Software Engineer',
  'Frontend Developer',
  'Full Stack Developer',
  'Problem Solver',
];

export type Stat = { value: string; label: string };
export const STATS: Stat[] = [
  { value: '4+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '3', label: 'Internships' },
  { value: '∞', label: 'Curiosity' },
];

export type Education = {
  title: string;
  org: string;
  period: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
};
export const EDUCATION: Education[] = [
  {
    title: 'Software Development & Entrepreneurship',
    org: 'EEK Mainor',
    period: '2022 — 2025',
    description:
      'Comprehensive program covering full-stack software engineering, systems design, and building products from idea to market.',
    icon: GraduationCap,
  },
  {
    title: 'Software Engineering Internship',
    org: 'Ericsson',
    period: '2024',
    description:
      'Hands-on experience with telecom-grade systems, collaborative engineering workflows, and real-world production code.',
    icon: Briefcase,
    highlight: true,
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  tech: string[];
  featured?: boolean;
  accent: string;
};
export const PROJECTS: Project[] = [
  {
    id: 'afribake',
    name: 'AfriBake',
    tagline: 'African bakery e-commerce platform',
    description:
      'A full-featured African bakery e-commerce platform with customer ordering, authentication, a merchant dashboard, inventory management, and pickup scheduling. Built to bring local bakeries online with a delightful ordering experience.',
    liveUrl: 'https://afribake-management.vercel.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Node.js'],
    featured: true,
    accent: 'from-amber-400/30 to-primary-500/30',
  },
  {
    id: 'hotel-booking',
    name: 'Hotel Booking System',
    tagline: 'Search, book & manage stays',
    description:
      'A hotel booking system with room search, availability calendars, reservation management, and a clean booking flow. Designed for both guests and hotel staff.',
    liveUrl: 'https://booking-anne.netlify.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'JavaScript', 'CSS', 'Netlify'],
    accent: 'from-cyan-400/30 to-primary-500/30',
  },
  {
    id: 'gas-trading',
    name: 'Gas Trading Platform',
    tagline: 'Energy commodity trading',
    description:
      'A gas trading platform for energy commodity exchange with live pricing, order placement, and portfolio tracking. Focused on clarity and real-time data.',
    liveUrl: 'https://gastrading-anne.netlify.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'JavaScript', 'Chart.js', 'CSS'],
    accent: 'from-emerald-400/30 to-primary-500/30',
  },
  {
    id: 'portfolio',
    name: 'Portfolio v1',
    tagline: 'First personal portfolio',
    description:
      'My first personal portfolio site — a static showcase of early projects and experiments. The starting point of my journey into building for the web.',
    liveUrl: 'https://nannedorcas.github.io/AnneNjamen.github.io/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    accent: 'from-rose-400/30 to-primary-500/30',
  },
];

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  skills: string[];
};
export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: Github,
    skills: ['React', 'TypeScript', 'Angular', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: Github,
    skills: ['C#', 'Python', 'Java'],
  },
  {
    category: 'Database',
    icon: Github,
    skills: ['SQL'],
  },
  {
    category: 'Tools',
    icon: Github,
    skills: ['Git', 'Linux', 'Windows'],
  },
];

export type Social = { label: string; href: string; icon: LucideIcon };
export const SOCIALS: Social[] = [
  { label: 'Email', href: 'mailto:anne.njamen@example.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/nannedorcas', icon: Github },
];

export const RESUME_URL = '#';
