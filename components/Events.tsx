'use client'

import { motion } from 'framer-motion'

const events = [
  {
    id: 1,
    category: 'Eid Celebration',
    title: 'Eid-ul-Fitr Salah',
    subtitle: 'عيد الفطر',
    date: 'Thursday 19th or Friday 20th March',
    time: '9:00 AM',
    year: '2025',
    speaker: 'Ustadh Umayir Ahmed',
    location: 'Lillington Gardens Community Centre',
    address: 'Morgan House, 57 Vauxhall Bridge Rd, SW1V 2LF',
    description:
      'Join us for the blessed Eid-ul-Fitr prayer to celebrate the end of Ramadan. Congregational prayer led by Ustadh Umayir Ahmed, followed by the Eid khutbah.',
    featured: true,
    color: '#c9a84c',
  },
  {
    id: 2,
    category: "Jumu'ah",
    title: 'Friday Congregational Prayer',
    subtitle: 'صلاة الجمعة',
    date: 'Every Friday',
    time: '1:00 PM',
    year: 'Weekly',
    speaker: 'WICC Imams',
    location: 'Lillington Gardens Community Centre',
    address: 'Morgan House, 57 Vauxhall Bridge Rd, SW1V 2LF',
    description:
      "Weekly Jumu'ah prayer with khutbah. Brothers and sisters welcome. Khutbah begins promptly at 1:00 PM.",
    featured: false,
    color: '#4a7fbe',
  },
  {
    id: 3,
    category: 'Education',
    title: 'Quran Circle for Beginners',
    subtitle: 'حلقة القرآن الكريم',
    date: 'Saturday 29th March',
    time: '11:00 AM',
    year: '2025',
    speaker: 'Sheikh Ahmed Al-Rashid',
    location: 'Lillington Gardens Community Centre',
    address: 'Morgan House, 57 Vauxhall Bridge Rd, SW1V 2LF',
    description:
      'An introductory Quran circle for adults new to Islamic studies. Learn proper tajweed, recitation, and the meaning of selected surahs in a warm, welcoming environment.',
    featured: false,
    color: '#6b9e6b',
  },
]

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

        {/* Events grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.14 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.article
              key={event.id}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl overflow-hidden group ${
                event.featured ? 'lg:col-span-1' : ''
              }`}
              style={{
                background: event.featured
                  ? 'linear-gradient(145deg, #1a2244 0%, #243060 100%)'
                  : '#fff',
                boxShadow: event.featured
                  ? '0 20px 60px rgba(26,34,68,0.2), 0 0 0 1px rgba(201,168,76,0.2)'
                  : '0 4px 30px rgba(26,34,68,0.08), 0 0 0 1px rgba(26,34,68,0.06)',
              }}
            >
              {/* Featured ribbon */}
              {event.featured && (
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'linear-gradient(135deg, #e8d5a3, #c9a84c)',
                    color: '#1a2244',
                    fontWeight: 700,
                  }}
                >
                  Featured
                </div>
              )}

              {/* Top accent bar */}
              <div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${event.color}, transparent)`,
                }}
              />

              <div className="p-8">
                {/* Category + date badge */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span
                    className="text-xs tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: event.featured
                        ? 'rgba(201,168,76,0.15)'
                        : 'rgba(26,34,68,0.06)',
                      color: event.featured ? '#e8d5a3' : '#1a2244',
                      border: `1px solid ${event.featured ? 'rgba(201,168,76,0.3)' : 'rgba(26,34,68,0.1)'}`,
                    }}
                  >
                    {event.category}
                  </span>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="text-xs tracking-widest uppercase"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: event.featured ? '#e8d5a3/60' : '#1c1c1e/50',
                        opacity: 0.7,
                      }}
                    >
                      {event.year}
                    </div>
                  </div>
                </div>

                {/* Arabic subtitle */}
                <p
                  className="text-base mb-2 leading-loose opacity-60"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: event.featured ? '#e8d5a3' : '#c9a84c',
                    direction: 'rtl',
                  }}
                >
                  {event.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl mb-4 leading-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    color: event.featured ? '#fff' : '#1a2244',
                  }}
                >
                  {event.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-full h-px mb-5 opacity-20"
                  style={{
                    background: `linear-gradient(90deg, ${event.color}, transparent)`,
                  }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: event.featured ? 'rgba(255,255,255,0.6)' : 'rgba(28,28,30,0.65)',
                  }}
                >
                  {event.description}
                </p>

                {/* Details */}
                <div className="space-y-2.5">
                  {[
                    {
                      icon: (
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                          <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.3" />
                          <line x1="6" y1="1" x2="6" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                          <line x1="14" y1="1" x2="14" y2="5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                          <line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      ),
                      value: event.date,
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                          <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      ),
                      value: event.time,
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                          <path d="M10 2a6 6 0 0 1 6 6c0 4-6 10-6 10S4 12 4 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.3" />
                          <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
                        </svg>
                      ),
                      value: event.location,
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 flex-shrink-0">
                          <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M3 18c0-4 3-6 7-6s7 2 7 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      ),
                      value: event.speaker,
                    },
                  ].map(({ icon, value }, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span style={{ color: event.color }}>{icon}</span>
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: 'var(--font-body)',
                          color: event.featured ? 'rgba(255,255,255,0.65)' : 'rgba(28,28,30,0.65)',
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Contact note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12 text-[#1c1c1e]/50 text-sm"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {'For further information, join our '}
          <a href="https://chat.whatsapp.com/F69RFvbKGGkDbuNvXLHhsg" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">{'WhatsApp community'}</a>
          {' for the latest updates.'}
        </motion.p>
      </div>
    </section>
  )
}
