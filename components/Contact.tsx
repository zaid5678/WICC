'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_URL = 'https://chat.whatsapp.com/F69RFvbKGGkDbuNvXLHhsg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#faf8f3' }}
      aria-labelledby="contact-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none pattern-texture opacity-30"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <span className="block h-px w-12 bg-[#c9a84c]" />
            <span
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Stay Connected
            </span>
            <span className="block h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-[#1a2244] mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Join Our{' '}
            <span className="gradient-gold italic font-semibold">Community</span>
          </h2>
          <p
            className="text-[#1c1c1e]/60 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get instant updates on prayers, events, announcements, and our martial arts &amp;
            sports classes by joining the official WICC WhatsApp community.
          </p>
        </motion.div>

        {/* WhatsApp card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #1a2244 0%, #243060 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            boxShadow: '0 30px 80px rgba(26,34,68,0.2)',
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 pointer-events-none pattern-navy opacity-50" aria-hidden="true" />

          {/* Gold glow top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative p-10 sm:p-14 flex flex-col items-center text-center">
            {/* WhatsApp icon + label */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 drop-shadow-lg">
                <Image
                  src="/whatsapp_logo.jpg"
                  alt="WhatsApp"
                  fill
                  sizes="80px"
                  className="object-contain rounded-2xl"
                />
              </div>
              <div className="flex flex-col items-start">
                <span
                  className="text-[#e8d5a3] text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Official Channel
                </span>
                <span
                  className="text-white text-2xl sm:text-3xl leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
                >
                  WICC Community
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-48 h-px mb-8"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', opacity: 0.5 }}
              aria-hidden="true"
            />

            {/* Description */}
            <p
              className="text-white/65 text-base sm:text-lg leading-relaxed max-w-lg mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Join our WhatsApp community to receive prayer times, event reminders, important
              announcements, and stay connected with the WICC family.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Prayer Reminders', 'Event Notices', 'Martial Arts Classes', 'Community Updates', 'Eid Announcements'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs tracking-wide"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: 'rgba(201,168,76,0.12)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      color: '#e8d5a3',
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_8px_40px_rgba(37,211,102,0.4)] hover:scale-105"
              style={{
                fontFamily: 'var(--font-body)',
                background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
                letterSpacing: '0.06em',
              }}
              aria-label="Join WICC WhatsApp Community"
            >
              <div className="relative w-5 h-5 flex-shrink-0">
                <Image src="/whatsapp_logo.jpg" alt="" fill sizes="20px" className="object-contain rounded-sm" />
              </div>
              Join the Community
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Small note */}
            <p
              className="mt-5 text-white/30 text-xs"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Free to join · All are welcome · Ask about our martial arts classes inside
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
