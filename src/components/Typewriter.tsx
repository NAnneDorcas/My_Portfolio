import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

/**
 * Typewriter that cycles through words with a blinking caret.
 */
export default function Typewriter({
  words,
  className = '',
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}: Props) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && sub === current) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout.current = setTimeout(
        () => {
          setSub((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [sub, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      <motion.span
        className="text-gradient-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {sub}
      </motion.span>
      <motion.span
        className="ml-0.5 inline-block w-[3px] bg-primary-400 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        style={{ height: '1em' }}
      />
    </span>
  );
}
