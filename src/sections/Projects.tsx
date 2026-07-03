import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { PROJECTS, type Project } from '../data';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Things I've <span className="text-gradient-primary">built</span>
            </>
          }
          description="A selection of products I've designed and engineered end-to-end — from e-commerce to trading platforms."
        />

        {/* featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="group mt-14 grid gap-6 lg:grid-cols-2"
        >
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${featured.accent}`}
          >
            <div className="absolute inset-0 bg-grid-faint opacity-30" style={{ backgroundSize: '40px 40px' }} />
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={featured.image}
                alt={featured.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            
    
            </motion.div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-white">
              <Star size={12} className="fill-amber-300 text-amber-300" />
              Featured
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-3xl glass p-7 sm:p-9">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
              {featured.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-primary-300">
              {featured.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full glass px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Github size={15} />
                GitHub
              </a>
              <button
                onClick={() => setActive(featured)}
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Details
              </button>
            </div>
          </div>
        </motion.div>

        {/* grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-3xl glass transition-colors hover:bg-white/[0.07]"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-grid-faint opacity-30" style={{ backgroundSize: '32px 32px' }} />
                <div className="absolute inset-0 grid place-items-center">
                  <motion.span
                    className="font-display text-2xl font-bold text-white/90"
                    whileHover={{ scale: 1.06 }}
                  >
                    {p.name}
                  </motion.span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-primary-300">{p.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                      +{p.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary-500/90 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-400"
                  >
                    <ExternalLink size={13} />
                    Demo
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} source`}
                    className="grid h-9 w-9 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10"
                  >
                    <Github size={15} />
                  </a>
                  <button
                    onClick={() => setActive(p)}
                    className="grid h-9 w-9 place-items-center rounded-full glass text-white transition-colors hover:bg-white/10"
                    aria-label={`${p.name} details`}
                  >
                    <span className="text-base leading-none">⋯</span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
