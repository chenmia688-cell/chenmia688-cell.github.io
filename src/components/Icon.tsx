import type { CSSProperties } from 'react'

export type IconName =
  | 'terminal'
  | 'pulse'
  | 'tree'
  | 'robot'
  | 'chart'
  | 'bolt'
  | 'search'
  | 'check'
  | 'layers'
  | 'analytics'
  | 'menu'
  | 'close'

const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' as const }

export function Icon({
  name,
  className,
  style,
}: {
  name: IconName
  className?: string
  style?: CSSProperties
}) {
  const stroke = 'currentColor'
  const sw = 1.6

  switch (name) {
    case 'terminal':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path
            d="M4 6h16M4 12h10M4 18h7"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      )
    case 'pulse':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path
            d="M4 12h3l2-6 4 12 3-8h6"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'tree':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path
            d="M12 3v18M8 7h8M9 12h6M10 17h4"
            stroke={stroke}
            strokeWidth={sw}
            strokeLinecap="round"
          />
        </svg>
      )
    case 'robot':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <rect x="7" y="8" width="10" height="10" rx="2" stroke={stroke} strokeWidth={sw} />
          <path d="M12 5v3M9 12h.01M15 12h.01" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M5 19V5M9 19v-7M13 19V9M17 19v-4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <circle cx="11" cy="11" r="6" stroke={stroke} strokeWidth={sw} />
          <path d="m20 20-3.2-3.2" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M5 12l4 4L19 6" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M12 4 4 8l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    case 'analytics':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M4 19h16M7 15l3-4 3 2 4-6" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M5 7h14M5 12h14M5 17h14" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common} className={className} style={style} aria-hidden>
          <path d="M7 7l10 10M17 7 7 17" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
