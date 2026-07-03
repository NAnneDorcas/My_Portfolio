import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import { SOCIALS } from '../data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const field =
    'w-full rounded-2xl glass px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-400/60 focus:bg-white/[0.07]';

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              Let's build <span className="text-gradient-primary">together</span>
            </>
          }
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass p-7 sm:p-9"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className={field}
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs font-medium text-slate-400">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className={`${field} resize-none`}
              />
            </div>

            <div className="mt-6">
              <MagneticButton
                as="button"
                onClick={() => {}}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-primary-400 sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
              </MagneticButton>
            </div>
          </motion.form>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-3xl glass p-5 transition-colors hover:bg-white/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent/20 text-primary-200">
                  <s.icon size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{s.label}</div>
                  <div className="text-xs text-slate-400">
                    {s.href.replace(/^mailto:/, '')}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
