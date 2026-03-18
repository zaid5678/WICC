'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// SVG Crescent Moon
function CrescentMoon() {
  return (
    <div className="crescent-animate" style={{ display: 'inline-block' }}>
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 sm:w-32 sm:h-32"
        aria-hidden="true"
      >
        <defs>
          <mask id="crescent-mask">
            <circle cx="60" cy="60" r="48" fill="white" />
            <circle cx="80" cy="50" r="40" fill="black" />
          </mask>
          <radialGradient id="crescent-fill" cx="35%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f5e4b0" />
            <stop offset="50%" stopColor="#e0b84a" />
            <stop offset="100%" stopColor="#a88535" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="url(#crescent-fill)"
          mask="url(#crescent-mask)"
          filter="url(#glow)"
        />
        {/* Subtle outline */}
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          mask="url(#crescent-mask)"
          stroke="rgba(245, 228, 176, 0.4)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

// Twinkling star SVG
function Star({ size = 6 }: { size?: number }) {
  return (
    <svg viewBox="0 0 12 12" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="6,0 7,4.5 12,6 7,7.5 6,12 5,7.5 0,6 5,4.5"
        fill="#e8d5a3"
      />
    </svg>
  )
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY
        parallaxRef.current.style.transform = `translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollDown = () => {
    const about = document.querySelector('#about')
    if (about) about.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
      style={{
        background: `
          radial-gradient(ellipse at 20% 25%, rgba(200, 220, 255, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 15%, rgba(250, 244, 220, 0.3) 0%, transparent 45%),
          radial-gradient(ellipse at 50% 60%, rgba(100, 140, 200, 0.2) 0%, transparent 55%),
          linear-gradient(185deg, #faf8f3 0%, #d8e4f0 22%, #9eb8d4 45%, #4a6b9a 65%, #1a2244 100%)
        `,
      }}
    >
      {/* Parallax cloud layer */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Soft cloud shapes */}
        <div
          className="absolute"
          style={{
            top: '8%',
            left: '5%',
            width: '35%',
            height: '200px',
            background:
              'radial-gradient(ellipse, rgba(255,252,245,0.5) 0%, rgba(220,235,255,0.25) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(20px)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '4%',
            right: '10%',
            width: '30%',
            height: '160px',
            background:
              'radial-gradient(ellipse, rgba(255,252,245,0.45) 0%, rgba(220,235,255,0.2) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(18px)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '15%',
            left: '40%',
            width: '25%',
            height: '120px',
            background:
              'radial-gradient(ellipse, rgba(255,252,245,0.35) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(15px)',
          }}
        />
      </div>

      {/* Twinkling stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="absolute star-1"><Star size={5} /></span>
        <span className="absolute star-2"><Star size={7} /></span>
        <span className="absolute star-3"><Star size={4} /></span>
        <span className="absolute star-4"><Star size={6} /></span>
        <span className="absolute star-5"><Star size={5} /></span>
      </div>

      {/* Gradient overlay at bottom to blend into content */}
      <div className="hero-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-32 pb-32">
        {/* Crescent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <CrescentMoon />
        </motion.div>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="block w-16 h-px bg-gradient-to-r from-transparent to-[#c9a84c]" />
          <span
            className="text-[#e8d5a3] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Est. Westminster, London
          </span>
          <span className="block w-16 h-px bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </motion.div>

        {/* Logo in hero (centered, large) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(201,168,76,0.15)] bg-white/5"
        >
          <Image
            src="/logo.jpg"
            alt="WICC Logo"
            fill
            sizes="96px"
            className="object-contain p-1"
            priority
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl text-white mb-5 leading-[1.08] tracking-tight"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          Westminster Islamic
          <br />
          <span className="gradient-gold-bright font-semibold italic">
            Community Centre
          </span>
        </motion.h1>

        {/* Ornamental line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-40 h-px mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent, #c9a84c, #e8d5a3, #c9a84c, transparent)',
          }}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-lg sm:text-2xl text-white/80 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic' }}
        >
          Empowering the Community. Rooted in Faith.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 text-[#1a2244] text-sm tracking-widest uppercase font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:scale-105 cursor-pointer"
            style={{
              fontFamily: 'var(--font-body)',
              background: 'linear-gradient(135deg, #e8d5a3 0%, #c9a84c 100%)',
            }}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 text-white text-sm tracking-widest uppercase font-normal rounded-full border border-white/30 hover:border-[#c9a84c] hover:text-[#e8d5a3] transition-all duration-300 cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer"
        onClick={handleScrollDown}
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Scroll
        </span>
        <div className="scroll-bounce">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.button>
    </section>
  )
}
