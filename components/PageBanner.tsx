// Shared top-of-page banner for inner pages — server component

interface PageBannerProps {
  title: string
  subtitle?: string
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(200,220,255,0.15) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 30%, rgba(250,244,220,0.12) 0%, transparent 45%),
          linear-gradient(160deg, #1a2244 0%, #243060 60%, #1a2244 100%)
        `,
      }}
      aria-hidden="false"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none pattern-navy opacity-40" aria-hidden="true" />

      {/* Gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="flex items-center gap-4 justify-center mb-5">
          <span className="block h-px w-10 bg-[#c9a84c] opacity-60" />
          <span
            className="text-[#c9a84c] text-[10px] tracking-[0.45em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Westminster Islamic Community Centre
          </span>
          <span className="block h-px w-10 bg-[#c9a84c] opacity-60" />
        </div>

        <h1
          className="text-4xl sm:text-6xl text-white"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
        >
          <span className="gradient-gold-bright italic font-semibold">{title}</span>
        </h1>

        {subtitle && (
          <p
            className="mt-4 text-white/50 text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Bottom gold rule */}
        <div
          className="mx-auto mt-8 w-32 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
