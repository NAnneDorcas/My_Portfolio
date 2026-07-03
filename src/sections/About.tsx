import { motion } from 'framer-motion';
import { Code2, Heart, Layers, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { EDUCATION, STATS } from '../data';

const PHILOSOPHY = [
  { icon: Code2, title: 'Clean code', text: 'Readable, maintainable, well-tested.' },
  { icon: Layers, title: 'End-to-end', text: 'From database to pixel-perfect UI.' },
  { icon: Rocket, title: 'Ship fast', text: 'Iterate, learn, and deliver value.' },
  { icon: Heart, title: 'User-first', text: 'Empathy drives every decision.' },
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineering with <span className="text-gradient-primary">intention</span>
            </>
          }
          description="I'm a software engineer who loves crafting thoughtful digital products. I care about the details that make software feel effortless — the architecture, the interface, and everything in between."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* left: bio + philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl glass p-7">
              <p className="text-base leading-relaxed text-slate-300">
                Based in France and trained at{' '}
                <span className="font-semibold text-white">EEK Mainor</span>, I
                specialize in building full-stack web applications with a strong
                focus on frontend craft. My internship at{' '}
                <span className="font-semibold text-white">Ericsson</span> gave
                me a taste of large-scale, production-grade engineering.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                When I'm not shipping features, I'm exploring design systems,
                performance optimization, and the intersection of engineering and
                entrepreneurship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {PHILOSOPHY.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl glass p-5 transition-colors hover:bg-white/[0.07]"
                >
                  <p.icon size={20} className="text-primary-300" />
                  <h4 className="mt-3 text-sm font-semibold text-white">{p.title}</h4>
                  <p className="mt-1 text-xs text-slate-400">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* right: stats + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl glass p-5 text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* education timeline */}
            <div className="rounded-3xl glass p-7">
              <h3 className="font-display text-lg font-semibold text-white">
                Education & Experience
              </h3>
              <div className="mt-6 space-y-6">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="relative pl-8"
                  >
                    {/* line */}
                    <span className="absolute left-0 top-1.5 h-full w-px bg-gradient-to-b from-primary-400/60 to-transparent" />
                    {/* dot */}
                    <span
                      className={`absolute left-0 top-1.5 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full ${
                        edu.highlight
                          ? 'bg-primary-500 shadow-glow'
                          : 'bg-primary-500/40'
                      }`}
                    >
                      <edu.icon size={9} className="text-white" />
                    </span>

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white">{edu.title}</h4>
                      <span className="font-mono text-xs text-slate-500">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-primary-300">
                      {edu.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
