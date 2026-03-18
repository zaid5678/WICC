'use client'

import { motion } from 'framer-motion'
import IslamicPattern from './IslamicPattern'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#faf8f3' }}
      aria-labelledby="about-heading"
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(26,34,68,0.06) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 justify-center mb-16"
        >
          <span className="block h-px w-12 bg-[#c9a84c]" />
          <span
            className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our Story
          </span>
          <span className="block h-px w-12 bg-[#c9a84c]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — decorative pattern panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #1a2244 0%, #243060 60%, #1a2244 100%)',
                aspectRatio: '4/5',
                boxShadow: '0 25px 80px rgba(26,34,68,0.25), 0 0 0 1px rgba(201,168,76,0.15)',
              }}
            >
              {/* Islamic pattern overlay */}
              <IslamicPattern opacity={0.22} color="#c9a84c" size={90} />

              {/* Inner content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                {/* Crescent + star emblem */}
                <svg viewBox="0 0 160 160" className="w-32 h-32 mb-6" aria-hidden="true">
                  <defs>
                    <mask id="about-crescent-mask">
                      <circle cx="72" cy="72" r="55" fill="white" />
                      <circle cx="94" cy="62" r="44" fill="black" />
                    </mask>
                    <radialGradient id="about-crescent-grad" cx="30%" cy="35%" r="60%">
                      <stop offset="0%" stopColor="#f5e4b0" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#a88535" stopOpacity="0.8" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="72"
                    cy="72"
                    r="55"
                    fill="url(#about-crescent-grad)"
                    mask="url(#about-crescent-mask)"
                  />
                  {/* 6-pointed star upper right */}
                  <polygon
                    points="120,30 124,42 137,42 127,50 131,62 120,54 109,62 113,50 103,42 116,42"
                    fill="#e8d5a3"
                    fillOpacity="0.7"
                  />
                </svg>

                {/* Arabic-inspired decorative divider */}
                <div
                  className="w-24 h-px mb-6"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
                  }}
                />

                <p
                  className="text-[#e8d5a3]/80 text-sm leading-loose tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Westminster<br />Islamic<br />Community Centre
                </p>

                <div
                  className="w-24 h-px mt-6"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
                  }}
                />
              </div>

              {/* Gold corner flourishes */}
              {[
                'top-0 left-0',
                'top-0 right-0 rotate-90',
                'bottom-0 left-0 -rotate-90',
                'bottom-0 right-0 rotate-180',
              ].map((pos, i) => (
                <svg
                  key={i}
                  viewBox="0 0 40 40"
                  width="40"
                  height="40"
                  className={`absolute ${pos} opacity-50`}
                  aria-hidden="true"
                >
                  <path
                    d="M 0,0 L 25,0 L 20,5 L 5,5 L 5,20 L 0,25 Z"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="1"
                  />
                  <circle cx="5" cy="5" r="1.5" fill="#c9a84c" />
                </svg>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
              >
                <span className="text-[#1a2244]">Rooted in </span>
                <span className="gradient-gold font-semibold italic">Faith,</span>
                <br />
                <span className="text-[#1a2244]">Serving our </span>
                <span className="gradient-gold font-semibold italic">Community</span>
              </h2>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[#1c1c1e]/75 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The Westminster Islamic Community Centre is a welcoming home for Muslims and neighbours
              across the heart of London. We are dedicated to nurturing spiritual growth, fostering
              education, and building a vibrant, inclusive community for all who seek belonging.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#1c1c1e]/75 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              From weekly Friday Jumu&apos;ah prayers to Eid celebrations, Quranic study circles,
              and interfaith outreach — WICC is committed to being a beacon of faith, knowledge,
              and compassionate service in Westminster.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative pl-6 my-8"
              style={{
                borderLeft: '3px solid #c9a84c',
              }}
            >
              <p
                className="gradient-gold text-2xl sm:text-3xl leading-snug"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;A place where every soul finds warmth, every question finds wisdom,
                and every heart finds home.&rdquo;
              </p>
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {[
                { number: '500+', label: 'Worshippers' },
                { number: '7', label: 'Days a Week' },
                { number: '10+', label: 'Years Serving' },
              ].map(({ number, label }) => (
                <div key={label} className="text-center">
                  <div
                    className="text-3xl sm:text-4xl gradient-gold mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
                  >
                    {number}
                  </div>
                  <div
                    className="text-[#1c1c1e]/55 text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
