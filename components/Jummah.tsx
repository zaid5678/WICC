'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Jummah() {
  return (
    <section
      className="relative overflow-hidden min-h-screen"
      style={{
        background: 'linear-gradient(160deg, #1a2244 0%, #243060 60%, #1a2244 100%)',
      }}
      aria-labelledby="jummah-heading"
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none pattern-navy opacity-50" aria-hidden="true" />

      {/* Gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 sm:py-28">

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate="visible"
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
              Every Friday
            </span>
            <span className="block h-px w-12 bg-[#c9a84c]" />
          </div>

          <h1
            id="jummah-heading"
            className="text-5xl sm:text-6xl lg:text-7xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Jumu&apos;ah{' '}
            <span className="gradient-gold-bright italic font-semibold">Prayer</span>
          </h1>

          <p
            className="text-[#e8d5a3]/60 text-base sm:text-lg tracking-widest uppercase mt-2"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            صلاة الجمعة
          </p>
        </motion.div>

        {/* Address card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl p-7 mb-8 flex items-start gap-4"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,168,76,0.25)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="text-[#c9a84c] flex-shrink-0 mt-0.5">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <p className="text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              Lillington Gardens Community Centre
            </p>
            <p className="text-white/55 text-sm mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
              Morgan House, 57 Vauxhall Bridge Road, London SW1V 2LF
            </p>
            <a
              href="https://maps.app.goo.gl/ZYAtk3mL623NU5MQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-[#c9a84c] hover:text-[#e8d5a3] transition-colors duration-300 group"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span>Open in Google Maps</span>
              <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Prayer times */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8"
        >
          {/* 1st Jama'ah */}
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.35)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
              aria-hidden="true"
            />
            <p
              className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              1st Jama&apos;ah
            </p>
            <p
              className="text-white text-5xl sm:text-6xl mb-1"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              1:30
              <span className="text-2xl ml-1 text-white/60">pm</span>
            </p>
            <p
              className="text-[#e8d5a3]/50 text-xs mt-3 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Typically very busy — attend 2nd jama&apos;ah where possible
            </p>
          </div>

          {/* 2nd Jama'ah */}
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,168,76,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
              aria-hidden="true"
            />
            <p
              className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              2nd Jama&apos;ah
            </p>
            <p
              className="text-white text-5xl sm:text-6xl mb-1"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
            >
              2:00
              <span className="text-2xl ml-1 text-white/60">pm</span>
            </p>
            <p
              className="text-[#e8d5a3]/50 text-xs mt-3 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Sisters welcome — please arrive by 1:55 pm
            </p>
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl p-7 mb-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,168,76,0.15)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <h2
            className="text-[#e8d5a3] text-xl mb-5"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
          >
            Please Note
          </h2>

          <ul className="space-y-3.5">
            {[
              'Please perform wudhu at home before attending.',
              'Please do not attend if you are unwell.',
              'The 1st jama\'ah at 1:30 pm will be very busy. Where possible, please attend the 2nd jama\'ah at 2:00 pm.',
            ].map((notice, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"
                  aria-hidden="true"
                />
                <span
                  className="text-white/65 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {notice}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sisters notice */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-2xl p-6"
          style={{
            background: 'rgba(180,120,180,0.07)',
            border: '1px solid rgba(200,150,200,0.25)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: '#d4a0d4' }}>
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" />
                <path d="M3 18c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-1.5"
                style={{ fontFamily: 'var(--font-body)', color: '#d4a0d4' }}
              >
                Sisters
              </p>
              <p
                className="text-white/65 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Sisters are welcome to attend the 2nd jama&apos;ah. Please arrive by{' '}
                <span className="text-white/85 font-medium">1:55 pm</span> so that volunteers can
                have the space cleared and ready in time.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
