'use client'

import Image from 'next/image'
import Link from 'next/link'
import IslamicPattern from './IslamicPattern'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
]

const WHATSAPP_URL = 'https://chat.whatsapp.com/F69RFvbKGGkDbuNvXLHhsg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#0e1630' }}
      aria-label="Site footer"
    >
      {/* Islamic pattern overlay */}
      <IslamicPattern opacity={0.08} color="#c9a84c" size={100} />

      {/* Top gold rule */}
      <div
        className="relative w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8d5a3 50%, #c9a84c 70%, transparent 100%)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-4 mb-6 group"
              aria-label="WICC Home"
            >
              <div
                className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/5"
              >
                <Image
                  src="/logo.jpg"
                  alt="WICC Logo"
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div
                  className="text-white font-semibold tracking-wider text-lg leading-tight"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
                >
                  WICC
                </div>
                <div
                  className="text-[#c9a84c]/60 text-xs tracking-widest leading-tight"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Westminster Islamic Community Centre
                </div>
              </div>
            </Link>

            <p
              className="text-white/45 text-sm leading-relaxed max-w-xs mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Empowering the Community. Rooted in Faith.
              <br />A welcoming home for all in the heart of Westminster.
            </p>

            {/* WhatsApp community link */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-105"
              style={{
                fontFamily: 'var(--font-body)',
                background: 'linear-gradient(135deg, #25D366 0%, #1da851 100%)',
              }}
              aria-label="Join WICC WhatsApp Community"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image src="/hd_whatsapp-Photoroom.png" alt="" fill sizes="16px" className="object-contain" />
              </div>
              Join our Community
            </a>
          </div>

          {/* Navigation column */}
          <div>
            <h3
              className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-[#e8d5a3] text-sm transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <div
              className="mt-5 p-4 rounded-xl"
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.12)',
              }}
            >
              <Link
                href="/jummah"
                className="text-[#e8d5a3]/60 text-xs hover:text-[#e8d5a3] transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                Jumu&apos;ah prayers every Friday — view times →
              </Link>
            </div>

            {/* Contact links */}
            <div className="mt-5 space-y-2.5">
              <a
                href="mailto:wislamiccc@gmail.com"
                className="flex items-center gap-2.5 text-white/45 hover:text-[#e8d5a3] text-sm transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 text-[#c9a84c]">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                wislamiccc@gmail.com
              </a>
              <a
                href="https://www.instagram.com/westminsterislamiccc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/45 hover:text-[#e8d5a3] text-sm transition-colors duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0 text-[#c9a84c]">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.3" />
                  <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" />
                </svg>
                @westminsterislamiccc
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}
        >
          <p
            className="text-white/30 text-sm text-center sm:text-left"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &copy; {year} Westminster Islamic Community Centre. All rights reserved.
          </p>
          <p
            className="text-white/20 text-xs text-center sm:text-right"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Built with care for the WICC community
          </p>
        </div>
      </div>
    </footer>
  )
}
