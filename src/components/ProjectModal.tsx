import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Info, X } from 'lucide-react';
import type { Project } from '../data';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink-900/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-strong shadow-glow-lg"
          >
            {/* screenshot area */}
            <div
              className={`relative h-48 w-full bg-gradient-to-br ${project.accent} sm:h-56`}
            >
              <div className="absolute inset-0 bg-grid-faint opacity-30" style={{ backgroundSize: '32px 32px' }} />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-3xl font-bold text-white/90 sm:text-4xl">
                  {project.name}
                </span>
              </div>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass text-white transition-colors hover:bg-white/15"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-medium text-primary-300">{project.tagline}</p>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Tech Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full glass px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Github size={15} />
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ProjectInfoButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
    >
      <Info size={15} />
      Details
    </button>
  );
}
