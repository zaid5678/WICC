// Decorative SVG ornamental divider — server component

interface GoldDividerProps {
  className?: string
  inverted?: boolean // true when on dark background
}

export default function GoldDivider({ className = '', inverted = false }: GoldDividerProps) {
  const stroke = inverted ? '#c9a84c' : '#c9a84c'
  const fill = inverted ? '#c9a84c' : '#c9a84c'
  const opacity = inverted ? 0.7 : 0.5

  return (
    <div className={`flex items-center justify-center py-2 px-6 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 40"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl"
        style={{ height: '40px' }}
      >
        {/* Left arm */}
        <line x1="0" y1="20" x2="310" y2="20" stroke={stroke} strokeWidth="0.8" opacity={opacity} />

        {/* Left decorative elements */}
        <line x1="290" y1="20" x2="305" y2="12" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="290" y1="20" x2="305" y2="28" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="310" y1="20" x2="320" y2="14" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="310" y1="20" x2="320" y2="26" stroke={stroke} strokeWidth="0.8" opacity={opacity} />

        {/* Left small diamond */}
        <polygon
          points="330,20 335,15 340,20 335,25"
          fill={fill}
          fillOpacity={opacity}
          stroke="none"
        />

        {/* Right small diamond */}
        <polygon
          points="460,20 465,15 470,20 465,25"
          fill={fill}
          fillOpacity={opacity}
          stroke="none"
        />

        {/* Central ornament */}
        {/* Outer ring */}
        <circle cx="400" cy="20" r="14" fill="none" stroke={stroke} strokeWidth="0.9" opacity={opacity} />
        {/* Inner 8-pointed star */}
        <polygon
          points={Array.from({ length: 8 }, (_, i) => {
            const a = (i * Math.PI) / 4 - Math.PI / 8
            const r = i % 2 === 0 ? 9 : 4.5
            return `${400 + r * Math.cos(a)},${20 + r * Math.sin(a)}`
          }).join(' ')}
          fill={fill}
          fillOpacity={opacity * 0.85}
          stroke={stroke}
          strokeWidth="0.5"
          strokeOpacity={opacity}
        />
        {/* Center dot */}
        <circle cx="400" cy="20" r="2" fill={fill} fillOpacity={opacity} />

        {/* Right decorative elements */}
        <line x1="490" y1="20" x2="480" y2="14" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="490" y1="20" x2="480" y2="26" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="510" y1="20" x2="495" y2="12" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
        <line x1="510" y1="20" x2="495" y2="28" stroke={stroke} strokeWidth="0.8" opacity={opacity} />

        {/* Right arm */}
        <line x1="490" y1="20" x2="800" y2="20" stroke={stroke} strokeWidth="0.8" opacity={opacity} />
      </svg>
    </div>
  )
}
