import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const SOCIALS = [
  { icon: Mail, href: 'mailto:njah1anne@gmail.com', label: 'Email' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/anne-dorcas-nguewouo-njamen-68a80a231/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Nannedorcas', label: 'GitHub' },
];

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl glass px-6 py-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-accent font-display text-xs font-bold text-white">
                AN
              </span>
              <span className="font-display text-sm font-semibold text-white">
                Anne Dorcas Njamen
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Designed & built with care · {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3 }}
                className="grid h-10 w-10 place-items-center rounded-full glass text-slate-300 transition-colors hover:text-white"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
            <motion.button
              onClick={toTop}
              whileHover={{ y: -3 }}
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-full bg-primary-500 text-white shadow-glow transition-colors hover:bg-primary-400"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
