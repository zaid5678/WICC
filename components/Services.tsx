'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// ─── Spiritual / Community Services ──────────────────────────────────────────

const spiritualServices = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 4C24 4 8 14 8 28a16 16 0 0 0 32 0C40 14 24 4 24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 4v20M16 20l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 28h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="20" y="36" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 36c0-3 4-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Friday Prayers",
    arabic: "صلاة الجمعة",
    subtitle: "Jumu'ah",
    description: "Join us every Friday for Jumu'ah prayers. Khutbah begins at 1:00 PM, followed by the congregational prayer. All are welcome.",
    tag: "Weekly",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M22 8a14 14 0 1 0 0 28 10 10 0 1 1 0-28Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="34,8 35.5,12.5 40,12.5 36.5,15.5 38,20 34,17 30,20 31.5,15.5 28,12.5 32.5,12.5" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.7" />
      </svg>
    ),
    title: "Eid Salah",
    arabic: "صلاة العيد",
    subtitle: "Eid Celebrations",
    description: "Celebrate Eid-ul-Fitr and Eid-ul-Adha with the community. Special congregational prayers, announcements, and festive gatherings.",
    tag: "Twice Yearly",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M24 10v28M24 10C24 10 12 8 8 10v26c4-2 16 0 16 0M24 10c0 0 12-2 16 0v26c-4-2-16 0-16 0" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="12" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="12" y1="26" x2="21" y2="26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="27" y1="18" x2="36" y2="18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="27" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <line x1="27" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: "Islamic Education",
    arabic: "التعليم الإسلامي",
    subtitle: "Quran & Studies",
    description: "Quranic recitation classes, Islamic history lectures, and Arabic language lessons for all ages — from children to adults.",
    tag: "Ongoing",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="26" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 38c0-5.5 4.5-10 10-10M32 28c5.5 0 10 4.5 10 10M14 28c2.5-1.5 6-2 10-2s7.5.5 10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Community Events",
    arabic: "الفعاليات المجتمعية",
    subtitle: "Unity & Outreach",
    description: "Charity drives, iftar gatherings, inter-faith dialogues, and social events that bring Westminster's diverse community together.",
    tag: "Year Round",
  },
]

// ─── Martial Arts & Sports Classes ───────────────────────────────────────────

type AgeGroup = 'junior' | 'youth' | 'adult'
type GenderGroup = 'boys' | 'girls' | 'mixed' | 'male' | 'female'

interface MartialArtsClass {
  sport: 'kickboxing' | 'grappling' | 'wrestling' | 'mma'
  title: string
  ageLabel: string
  ageGroup: AgeGroup
  genderLabel: string
  genderGroup: GenderGroup
  description: string
}

const martialArtsClasses: MartialArtsClass[] = [
  {
    sport: 'kickboxing',
    title: 'Boys Kickboxing',
    ageLabel: 'Ages 11+',
    ageGroup: 'youth',
    genderLabel: 'Boys Only',
    genderGroup: 'boys',
    description: 'Stand-up striking, footwork, pad work and sparring for boys aged 11 and above. Builds discipline, fitness, and confidence.',
  },
  {
    sport: 'kickboxing',
    title: 'Mens Kickboxing',
    ageLabel: 'Adults',
    ageGroup: 'adult',
    genderLabel: 'Male Only',
    genderGroup: 'male',
    description: 'Full adult kickboxing programme for men. Technique drilling, combinations, and competitive sparring in a focused environment.',
  },
  {
    sport: 'grappling',
    title: 'Boys Grappling, Wrestling & BJJ',
    ageLabel: 'Ages 11+',
    ageGroup: 'youth',
    genderLabel: 'Boys Only',
    genderGroup: 'boys',
    description: 'Ground game fundamentals covering wrestling takedowns, positional grappling, and Brazilian Jiu-Jitsu submissions for boys 11+.',
  },
  {
    sport: 'mma',
    title: 'Mens Grappling & MMA',
    ageLabel: 'Adults',
    ageGroup: 'adult',
    genderLabel: 'Male Only',
    genderGroup: 'male',
    description: 'Combined striking and grappling for adult men. Covers wrestling, BJJ, and MMA-specific combinations for well-rounded fighters.',
  },
  {
    sport: 'kickboxing',
    title: 'Teen Girls & Womens Kickboxing',
    ageLabel: 'Teens & Adults',
    ageGroup: 'youth',
    genderLabel: 'Girls & Women',
    genderGroup: 'female',
    description: 'Empowering kickboxing classes in a safe, women-only space. Technique, fitness, and self-defence for teen girls and adult women.',
  },
  {
    sport: 'kickboxing',
    title: 'Boys & Girls Kickboxing',
    ageLabel: 'Ages 6–10',
    ageGroup: 'junior',
    genderLabel: 'Mixed',
    genderGroup: 'mixed',
    description: 'Fun, structured kickboxing for young children. Focus on basic techniques, coordination, listening skills, and respect.',
  },
  {
    sport: 'wrestling',
    title: 'Boys & Girls Wrestling',
    ageLabel: 'Ages 6–10',
    ageGroup: 'junior',
    genderLabel: 'Mixed',
    genderGroup: 'mixed',
    description: 'Introductory wrestling for young children. Games-based learning developing balance, strength, and fundamental movement skills.',
  },
]

// ─── Sport icon components ────────────────────────────────────────────────────

function KickboxingIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Body */}
      <circle cx="18" cy="8" r="4" stroke="currentColor" strokeWidth="1.4" />
      {/* Torso */}
      <path d="M12 14h12l-2 8h-8l-2-8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Kick leg */}
      <path d="M20 22l4 6 5-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Standing leg */}
      <path d="M16 22l-1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Punch arm */}
      <path d="M24 16l5 3-1 2-6-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Guard arm */}
      <path d="M12 16l-3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function GrapplingIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Person 1 head */}
      <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Person 2 head */}
      <circle cx="26" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Clinch / grip */}
      <path d="M10 11.5l3 4 5-3 5 3 3-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bodies */}
      <path d="M7 24l3-8.5M29 24l-3-8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Ground struggle */}
      <path d="M7 24c3-3 9-1 11 0s8-1 11 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 28l-3 4M26 28l3 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function WrestlingIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Two simplified wrestlers in takedown */}
      <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="27" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 10.5L15 18l3-2 3 2 6-7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 18l-2 8M27 18l2 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 26c3 2 7 2 11 0 4 2 8 2 11 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function MMAIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
      {/* Glove/fist shape */}
      <rect x="10" y="14" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="1.4" />
      {/* Fingers */}
      <path d="M12 14v-3a1.5 1.5 0 0 1 3 0v3M16 14v-4a1.5 1.5 0 0 1 3 0v4M20 14v-3a1.5 1.5 0 0 1 3 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Thumb */}
      <path d="M10 18l-3-2a2 2 0 0 0 0 4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Wrist strap */}
      <path d="M10 26h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SportIcon({ sport }: { sport: MartialArtsClass['sport'] }) {
  if (sport === 'kickboxing') return <KickboxingIcon />
  if (sport === 'grappling') return <GrapplingIcon />
  if (sport === 'wrestling') return <WrestlingIcon />
  return <MMAIcon />
}

// Badge colours
const ageBadge: Record<AgeGroup, string> = {
  junior: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  youth:  'bg-blue-500/20 text-blue-300 border-blue-500/30',
  adult:  'bg-purple-500/20 text-purple-300 border-purple-500/30',
}

const genderBadge: Record<GenderGroup, string> = {
  boys:   'bg-sky-500/20 text-sky-300 border-sky-500/30',
  male:   'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  girls:  'bg-rose-500/20 text-rose-300 border-rose-500/30',
  female: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  mixed:  'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
}

const sportAccent: Record<MartialArtsClass['sport'], string> = {
  kickboxing: '#e07b4a',
  grappling:  '#4a9ee0',
  wrestling:  '#e0c44a',
  mma:        '#c44a7a',
}

// ─── Variants ────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a2244 0%, #243060 60%, #1a2244 100%)' }}
      aria-labelledby="services-heading"
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 pointer-events-none pattern-navy opacity-60" aria-hidden="true" />

      {/* Gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* ── SPIRITUAL SERVICES ── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-24 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <span className="block h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              What We Offer
            </span>
            <span className="block h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Services &amp;{' '}
            <span className="gradient-gold-bright italic font-semibold">Programmes</span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Serving the spiritual, educational, and social needs of our community throughout the year.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {spiritualServices.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="card-lift group relative rounded-2xl p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', backdropFilter: 'blur(8px)' }}
            >
              <span
                className="inline-block self-start px-3 py-1 rounded-full text-[10px] tracking-widest uppercase mb-6"
                style={{ fontFamily: 'var(--font-body)', background: 'rgba(201,168,76,0.15)', color: '#e8d5a3', border: '1px solid rgba(201,168,76,0.25)' }}
              >
                {service.tag}
              </span>
              <div className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-white text-2xl mb-1 leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>{service.title}</h3>
              <p className="text-[#c9a84c]/70 text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'var(--font-body)' }}>{service.subtitle}</p>
              <p className="text-[#e8d5a3]/50 text-sm mb-4 leading-loose" style={{ fontFamily: 'var(--font-body)', direction: 'rtl' }}>{service.arabic}</p>
              <div className="w-full h-px mb-4 opacity-30" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
              <p className="text-white/55 text-sm leading-relaxed flex-grow" style={{ fontFamily: 'var(--font-body)' }}>{service.description}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '1px solid rgba(201,168,76,0.45)', boxShadow: 'inset 0 0 30px rgba(201,168,76,0.05)' }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── SECTION DIVIDER ── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center gap-5">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3))' }} />
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#c9a84c]/40" aria-hidden="true">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3" />
          </svg>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />
        </div>
      </div>

      {/* ── MARTIAL ARTS SECTION ── */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center gap-4 justify-center mb-5">
            <span className="block h-px w-12" style={{ background: '#e07b4a' }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ fontFamily: 'var(--font-body)', color: '#e07b4a' }}>
              Sports & Fitness
            </span>
            <span className="block h-px w-12" style={{ background: '#e07b4a' }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
          >
            Martial Arts &amp;{' '}
            <span className="italic font-semibold" style={{ background: 'linear-gradient(135deg, #f0b080, #e07b4a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sports Classes
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            WICC proudly offers high-quality martial arts training for all ages and abilities.
            Classes are run in a disciplined, respectful, and inclusive environment.
          </p>
        </motion.div>

        {/* Classes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {martialArtsClasses.map((cls) => (
            <motion.div
              key={cls.title}
              variants={cardVariants}
              className="group relative rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${sportAccent[cls.sport]}30`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Accent top strip */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${sportAccent[cls.sport]}, transparent)` }}
                aria-hidden="true"
              />

              {/* Sport icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${sportAccent[cls.sport]}18`, color: sportAccent[cls.sport] }}
              >
                <SportIcon sport={cls.sport} />
              </div>

              {/* Title */}
              <h3 className="text-white text-lg leading-tight mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                {cls.title}
              </h3>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-wide uppercase border ${ageBadge[cls.ageGroup]}`} style={{ fontFamily: 'var(--font-body)' }}>
                  {cls.ageLabel}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-[10px] tracking-wide uppercase border ${genderBadge[cls.genderGroup]}`} style={{ fontFamily: 'var(--font-body)' }}>
                  {cls.genderLabel}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed flex-grow" style={{ fontFamily: 'var(--font-body)' }}>
                {cls.description}
              </p>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ border: `1px solid ${sportAccent[cls.sport]}55`, boxShadow: `inset 0 0 20px ${sportAccent[cls.sport]}08` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-white/45 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Enquire about class schedules, fees, and registration via our WhatsApp community
          </p>
          <a
            href="https://chat.whatsapp.com/F69RFvbKGGkDbuNvXLHhsg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_6px_25px_rgba(37,211,102,0.35)] hover:scale-105"
            style={{ fontFamily: 'var(--font-body)', background: 'linear-gradient(135deg, #25D366, #1da851)' }}
          >
            <div className="relative w-4 h-4 flex-shrink-0">
              <Image src="/whatsapp_logo.jpg" alt="" fill sizes="16px" className="object-contain rounded-sm" />
            </div>
            Find Out More on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
