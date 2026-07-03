import { motion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SKILL_GROUPS } from '../data';

const ICONS = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          align="center"
          title={
            <>
              My <span className="text-gradient-primary">toolkit</span>
            </>
          }
          description="The technologies I reach for to design, build, and ship software."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[group.category as keyof typeof ICONS] ?? Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition-colors hover:bg-white/[0.07]"
              >
                {/* glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent/20 text-primary-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-primary-400/50 hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
