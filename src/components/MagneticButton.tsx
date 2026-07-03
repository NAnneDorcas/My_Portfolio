import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  download?: boolean;
};

/**
 * Magnetic button — the element drifts toward the cursor on hover.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  as = 'button',
  href,
  onClick,
  download,
}: Props) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * strength, y: y * strength });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: offset.x, y: offset.y },
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 },
  };

  if (as === 'a') {
    return (
      <motion.a
        ref={ref}
        href={href}
        download={download}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
