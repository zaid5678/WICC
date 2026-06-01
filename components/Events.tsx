'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function Events() {
  return (
    <section
      id="events"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#faf8f3' }}
      aria-labelledby="events-heading"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none pattern-texture opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(26,34,68,0.04) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <span className="block h-px w-12 bg-[#c9a84c]" />
            <span
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Calendar
            </span>
            <span className="block h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2
            id="events-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-[#1a2244] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Upcoming{' '}
            <span className="gradient-gold italic font-semibold">Events</span>
          </h2>
          <p
            className="text-[#1c1c1e]/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Mark your calendar — join us for prayers, celebrations, and learning together.
          </p>
        </motion.div>

        {/* Empty state */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div
            className="rounded-2xl p-12"
            style={{
              background: '#fff',
              boxShadow: '0 4px 30px rgba(26,34,68,0.08), 0 0 0 1px rgba(26,34,68,0.06)',
            }}
          >
            {/* Crescent icon */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-[#c9a84c]">
                <path
                  d="M24 6a18 18 0 1 0 18 18A14 14 0 0 1 24 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3
              className="text-2xl text-[#1a2244] mb-3"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
            >
              No upcoming events
            </h3>
            <p
              className="text-[#1c1c1e]/55 text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              There are no events listed at the moment. Join our WhatsApp community to be the first
              to hear about upcoming gatherings, talks, and celebrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://chat.whatsapp.com/F69RFvbKGGkDbuNvXLHhsg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:scale-105"
                style={{ fontFamily: 'var(--font-body)', background: 'linear-gradient(135deg, #25D366, #1da851)' }}
              >
                Join WhatsApp Community
              </a>
              <Link
                href="/jummah"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'rgba(26,34,68,0.06)',
                  color: '#1a2244',
                  border: '1px solid rgba(26,34,68,0.1)',
                }}
              >
                View Jumu&apos;ah Times
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
