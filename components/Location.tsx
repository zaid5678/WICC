'use client'

import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section
      id="find-us"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #1a2244 0%, #243060 60%, #1a2244 100%)',
      }}
      aria-labelledby="location-heading"
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none pattern-navy opacity-50"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <span className="block h-px w-12 bg-[#c9a84c]" />
            <span
              className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Find Us
            </span>
            <span className="block h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2
            id="location-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Come &amp;{' '}
            <span className="gradient-gold-bright italic font-semibold">Visit Us</span>
          </h2>
          <p
            className="text-white/55 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Conveniently located in the heart of Westminster, London. All are welcome.
          </p>
        </motion.div>

        {/* Map + Address card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Google Maps iframe */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(201,168,76,0.25)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              minHeight: '380px',
            }}
          >
            <iframe
              title="WICC Location — Lillington Gardens Community Centre"
              src="https://maps.google.com/maps?q=Lillington+Gardens+Community+Centre,+Morgan+House,+57+Vauxhall+Bridge+Road,+London+SW1V+2LF,+UK&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Address card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Address box */}
            <div
              className="rounded-2xl p-8 flex-grow"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.25)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Location icon */}
              <div className="mb-5">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-[#c9a84c]">
                  <path
                    d="M20 4a12 12 0 0 1 12 12c0 8-12 20-12 20S8 24 8 16A12 12 0 0 1 20 4Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              <h3
                className="text-[#e8d5a3] text-2xl mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
              >
                Our Venue
              </h3>
              <p
                className="text-white/40 text-xs tracking-widest uppercase mb-5"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Prayer &amp; Events Location
              </p>

              <div
                className="w-full h-px mb-6"
                style={{
                  background: 'linear-gradient(90deg, #c9a84c, transparent)',
                  opacity: 0.4,
                }}
              />

              <address className="not-italic space-y-2">
                <p
                  className="text-white font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Lillington Gardens Community Centre
                </p>
                <p
                  className="text-white/65"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Morgan House
                </p>
                <p
                  className="text-white/65"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  57 Vauxhall Bridge Road
                </p>
                <p
                  className="text-white/65"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Lillington &amp; Longmoore Gardens
                </p>
                <p
                  className="text-[#e8d5a3] font-semibold"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  London SW1V 2LF
                </p>
              </address>

              {/* Open in maps link */}
              <a
                href="https://maps.app.goo.gl/ZYAtk3mL623NU5MQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-[#c9a84c] hover:text-[#e8d5a3] transition-colors duration-300 group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span>Open in Google Maps</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Transport info */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <h4
                className="text-[#e8d5a3] text-lg mb-4"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
              >
                Getting Here
              </h4>
              <div className="space-y-3">
                {[
                  {
                    icon: '🚇',
                    label: 'Tube',
                    value: 'Pimlico (Victoria Line) — 5 min walk',
                  },
                  {
                    icon: '🚌',
                    label: 'Bus',
                    value: 'Routes 2, 36, 185, 436',
                  },
                  {
                    icon: '🅿️',
                    label: 'Parking',
                    value: 'Limited street parking nearby',
                  },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-base leading-none mt-0.5">{icon}</span>
                    <div>
                      <span
                        className="text-[#c9a84c] text-xs uppercase tracking-wider mr-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {label}:
                      </span>
                      <span
                        className="text-white/55 text-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
