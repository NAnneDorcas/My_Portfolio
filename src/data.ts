import {
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import afribakeImage from './assets/afribake.png';
import medibookImage from './assets/booking.png';
import gasImage from './assets/gas.png';

export type NavItem = { id: string; label: string };
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
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
export const STATS = [
  { value: '4+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '1', label: 'Internship' },
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
    title: 'BSc Software Development & Entrepreneurship',
    org: 'EEK Mainor, Tallinn, Estonia',
    period: '2024 – Present',
    description:
      'Bachelor programme focused on software engineering, web development, databases, entrepreneurship, and modern software development practices.',
    icon: GraduationCap,
  },
  {
    title: 'Software Developer Intern',
    org: 'Ericsson',
    period: 'June 2025 – August 2025',
    description:
      'Completed a software development internship where I collaborated on real-world engineering tasks, strengthened my frontend and backend development skills, and gained experience working within a professional software development environment.',
    icon: Briefcase,
    highlight: true,
  }
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
  image?: string;
};
export const PROJECTS: Project[] = [
  {
    id: 'afribake',
    name: 'AfriBake',
    tagline: 'African bakery e-commerce platform',
    description:
  "AfriBake is a full-stack bakery management platform that streamlines both customer ordering and business operations. The platform includes secure authentication, product management, inventory tracking, recurring orders, pickup scheduling, and a dedicated staff dashboard. It was designed to provide a seamless experience for customers while simplifying daily bakery operations.",
    liveUrl: 'https://afribake-management.vercel.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Node.js'],
    featured: true,
    accent: 'from-amber-400/30 to-primary-500/30',
    image: afribakeImage,
  },
  {
    id: 'medical-booking',
    name: 'Medical Booking',
    tagline: 'Book healthcare services online',
    description:
      'A responsive healthcare appointment booking platform that allows patients to browse available medical services, schedule appointments, and manage bookings through a clean and intuitive interface. The application focuses on accessibility, responsive design, and creating a seamless booking experience for both patients and healthcare providers.',
    liveUrl: 'https://booking-anne.netlify.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'JavaScript', 'CSS', 'Netlify'],
    accent: 'from-cyan-400/30 to-primary-500/30',
    image: medibookImage,
  },
  {
    id: 'gas-trading',
    name: 'Gas Trading Platform',
    tagline: 'Energy commodity trading',
    description:
  "A modern web platform for visualizing and managing gas trading activities. The project demonstrates interactive dashboards, clean data presentation, and responsive frontend development techniques.",
    liveUrl: 'https://gastrading-anne.netlify.app/',
    repoUrl: 'https://github.com/nannedorcas',
    tech: ['React', 'JavaScript', 'Chart.js', 'CSS'],
    accent: 'from-emerald-400/30 to-primary-500/30',
    image: gasImage,
  },
  {
    id: 'portfolio',
    name: 'My first Portfolio',
    tagline: 'First personal portfolio',
    description:
      'My first personal portfolio site — a static showcase of early projects and experiments. The starting point of my journey into web development.',
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
  { label: 'Email', href: 'mailto:njah1anne@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anne-dorcas-nguewouo-njamen-68a80a231/', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/NAnneDorcas', icon: Github },
];

export const RESUME_URL = '#';
