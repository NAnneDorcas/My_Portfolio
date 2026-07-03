import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Animated background: drifting gradient blobs + a subtle particle field.
 * Purely decorative, pointer-events disabled, fixed behind content.
 */
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 8,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-ink-900" />

      {/* faint grid */}
      <div
        className="absolute inset-0 bg-grid-faint opacity-[0.35]"
        style={{ backgroundSize: '64px 64px' }}
      />

      {/* drifting gradient blobs */}
      <motion.div
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.28), transparent 70%)' }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(157,141,255,0.22), transparent 70%)' }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.18), transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary-300/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.6, 0.15] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900/80" />
    </div>
  );
}
