import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import MagneticButton from '../components/MagneticButton';
import { HERO_ROLES, RESUME_URL } from '../data';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-28 pb-16 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: intro */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <Sparkles size={14} className="text-primary-300" />
            Available for new opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-mono text-sm text-slate-400"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            ANNE DORCAS
            <br />
            <span className="text-gradient">NJAMEN</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-5 flex h-9 items-center font-mono text-lg text-slate-300 sm:text-2xl"
          >
            <Typewriter words={HERO_ROLES} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I design and build elegant, performant web experiences — turning
            complex problems into clean, human-centered software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-primary-400"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Download CV
            </MagneticButton>
          </motion.div>
        </div>

        {/* right: floating portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          {/* animated gradient ring */}
          <motion.div
            className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-primary-500/40 via-accent/30 to-transparent blur-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-primary-500 via-accent to-primary-300 opacity-60 blur-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />

          {/* portrait frame */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong shadow-glow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent" />
            <img
              src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Anne Dorcas Njamen"
              loading="eager"
              className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-4 top-6 rounded-xl glass px-3 py-2 text-xs font-medium text-white shadow-soft"
            >
              React · TypeScript
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-6 right-4 rounded-xl glass px-3 py-2 text-xs font-medium text-white shadow-soft"
            >
              Full Stack
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
