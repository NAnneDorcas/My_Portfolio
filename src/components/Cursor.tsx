import { useEffect, useState } from 'react';

/**
 * Custom cursor with a soft glow that follows the pointer.
 * Only active on fine-pointer devices; falls back to native cursor on touch.
 */
export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, textarea'),
      );
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div
        className="absolute h-2 w-2 rounded-full bg-primary-500 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px) scale(${hovering ? 0 : 1})`,
        }}
      />
      <div
        className="absolute h-9 w-9 rounded-full border border-primary-300/60 transition-all duration-200 ease-out"
        style={{
          transform: `translate(${pos.x - 18}px, ${pos.y - 18}px) scale(${hovering ? 1.8 : 1})`,
          boxShadow: '0 0 24px -4px rgba(108,99,255,0.6)',
        }}
      />
    </div>
  );
}
