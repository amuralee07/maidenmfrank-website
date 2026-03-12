import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function FeedbackPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Soft background orbs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-teal-400/25 to-cyan-300/20 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-amber-300/20 to-rose-300/20 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-4">
              Private review link
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-6">
              Help us sharpen this website.
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
              This is an early access page (about 80% done) that you can share with trusted friends or colleagues.
              Please explore the key pages below and share what feels clear, compelling, or confusing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                title: 'Home',
                path: '/',
                summary:
                  'Overall first impression, clarity of who Maiden is and what she offers.',
              },
              {
                title: 'Speaking',
                path: '/speaking',
                summary:
                  'Does the speaking page make you want to book Maiden for a keynote or panel?',
              },
            {
                title: 'Coaching',
                path: '/coaching',
                summary:
                  'Is the “Provoke to Grow” coaching offer clear and differentiated?',
              },
              {
                title: 'Books',
                path: '/books',
                summary:
                  'How does the book and additional resources land? Anything missing or confusing?',
              },
              {
                title: 'Meet Maiden',
                path: '/about',
                summary:
                  'Do you get a strong sense of Maiden’s voice, credibility, and story?',
              },
              {
                title: 'Connect',
                path: '/contact',
                summary:
                  'Is it easy to know how to reach out or book a discovery call?',
              },
            ].map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-full rounded-2xl border border-emerald-500/40 bg-slate-900/70 p-6 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <h2 className="text-xl font-black mb-2 text-emerald-300">
                      {item.title}
                    </h2>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-4 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                    Click to open this page
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-2xl mx-auto text-sm text-slate-300 space-y-3 border border-slate-700/80 rounded-2xl p-6 bg-slate-900/70"
          >
            <h3 className="text-base font-bold text-emerald-300">
              How you can help
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Notice what immediately makes sense — and what doesn&apos;t.</li>
              <li>Call out any places where the wording, layout, or navigation feels confusing.</li>
              <li>
                Share what makes you most curious to work with Maiden (or what feels like it&apos;s missing).
              </li>
            </ul>
            <p>
              You can send feedback by replying directly to Maiden or by using the contact form on the{' '}
              <Link to="/contact" className="underline text-emerald-300">
                Connect
              </Link>{' '}
              page.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

