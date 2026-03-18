'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Find Us', href: '/find-us' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a2244] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="WICC Home">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
            <Image
              src="/logo.jpg"
              alt="WICC Logo"
              fill
              sizes="64px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <div
              className="text-white font-semibold tracking-wider text-sm leading-tight"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              WICC
            </div>
            <div
              className="text-[#e8d5a3] text-[10px] tracking-widest leading-tight opacity-80"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Westminster Islamic Cultural Centre
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 group inline-block ${
                    active ? 'text-[#e8d5a3]' : 'text-white/85 hover:text-[#e8d5a3]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-px bg-[#c9a84c] transition-transform duration-300 origin-left ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="block w-6 relative h-5">
            <span className={`absolute block h-px w-full bg-white transition-all duration-300 ${menuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute block h-px w-full bg-white top-2 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute block h-px w-full bg-white transition-all duration-300 ${menuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } border-t border-[#c9a84c]/20`}
        style={{ background: '#1a2244' }}
      >
        <ul className="py-2" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-8 py-3.5 text-base tracking-wide transition-all duration-200 ${
                  pathname === href ? 'text-[#e8d5a3]' : 'text-white/85 hover:text-[#e8d5a3] hover:bg-white/5'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
