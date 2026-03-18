// Server component — pure SVG, no hooks needed

interface IslamicPatternProps {
  className?: string
  opacity?: number
  color?: string
  size?: number
}

export default function IslamicPattern({
  className = '',
  opacity = 0.15,
  color = '#c9a84c',
  size = 120,
}: IslamicPatternProps) {
  const id = `islamic-${color.replace('#', '')}-${size}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          {/* Background tile */}
          <rect width={size} height={size} fill="none" />

          {/* 8-pointed star: two overlapping squares rotated 45° */}
          <g
            stroke={color}
            strokeWidth="0.7"
            fill="none"
            opacity={opacity}
            transform={`translate(${size / 2}, ${size / 2})`}
          >
            {/* Outer 8-pointed star via polygon */}
            <polygon
              points={Array.from({ length: 8 }, (_, i) => {
                const angle = (i * Math.PI) / 4 - Math.PI / 8
                const r = i % 2 === 0 ? size * 0.42 : size * 0.18
                return `${r * Math.cos(angle)},${r * Math.sin(angle)}`
              }).join(' ')}
              strokeWidth="0.9"
            />

            {/* Inner square */}
            <rect
              x={-size * 0.18}
              y={-size * 0.18}
              width={size * 0.36}
              height={size * 0.36}
            />
            {/* Inner square rotated 45° */}
            <rect
              x={-size * 0.18}
              y={-size * 0.18}
              width={size * 0.36}
              height={size * 0.36}
              transform="rotate(45)"
            />

            {/* Cardinal lines to edge */}
            <line x1="0" y1={-size * 0.5} x2="0" y2={-size * 0.42} />
            <line x1="0" y1={size * 0.42} x2="0" y2={size * 0.5} />
            <line x1={-size * 0.5} y1="0" x2={-size * 0.42} y2="0" />
            <line x1={size * 0.42} y1="0" x2={size * 0.5} y2="0" />

            {/* Diagonal lines to corners */}
            <line
              x1={-size * 0.36}
              y1={-size * 0.36}
              x2={-size * 0.29}
              y2={-size * 0.29}
            />
            <line
              x1={size * 0.36}
              y1={-size * 0.36}
              x2={size * 0.29}
              y2={-size * 0.29}
            />
            <line
              x1={-size * 0.36}
              y1={size * 0.36}
              x2={-size * 0.29}
              y2={size * 0.29}
            />
            <line
              x1={size * 0.36}
              y1={size * 0.36}
              x2={size * 0.29}
              y2={size * 0.29}
            />

            {/* Corner small diamonds */}
            <polygon
              points={`${-size * 0.5},${-size * 0.5} ${-size * 0.42},${-size * 0.5} ${-size * 0.5},${-size * 0.42}`}
              fill={color}
              fillOpacity={opacity * 0.8}
              strokeWidth="0"
            />
            <polygon
              points={`${size * 0.5},${-size * 0.5} ${size * 0.42},${-size * 0.5} ${size * 0.5},${-size * 0.42}`}
              fill={color}
              fillOpacity={opacity * 0.8}
              strokeWidth="0"
            />
            <polygon
              points={`${-size * 0.5},${size * 0.5} ${-size * 0.42},${size * 0.5} ${-size * 0.5},${size * 0.42}`}
              fill={color}
              fillOpacity={opacity * 0.8}
              strokeWidth="0"
            />
            <polygon
              points={`${size * 0.5},${size * 0.5} ${size * 0.42},${size * 0.5} ${size * 0.5},${size * 0.42}`}
              fill={color}
              fillOpacity={opacity * 0.8}
              strokeWidth="0"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
