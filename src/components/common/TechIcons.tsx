import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

export function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect fill="#3178c6" width="128" height="128" rx="10" />
      <path
        fill="#fff"
        d="M82.9 93.5c2.1 3.3 5.4 5.8 10.2 7.4 4.8 1.6 10 2 15.2 1.2v-14c-3.4.7-6.3.6-8.5-.2-2.2-.8-3.5-2.4-3.9-4.7-.2-1.1-.3-4.7-.3-10.8V52h13.2V38.6h-13.2V16.2H81.2v22.4H69.4V52h11.8v28.2c0 8.7.5 13.8 1.7 15.3zM56.8 93.5V52H44.2v55.6h36V93.5H56.8z"
      />
    </svg>
  )
}

export function JavaScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect fill="#f7df1e" width="128" height="128" rx="10" />
      <path
        fill="#000"
        d="M34.9 106.6l9.8-5.9c1.9 3.4 3.6 6.2 7.8 6.2 4 0 6.5-1.6 6.5-7.7V64.7h12.1v34.7c0 12.7-7.4 18.4-18.3 18.4-9.8 0-15.5-5.1-18.4-11.2zm43.5-1.2l9.8-5.7c2.6 4.2 5.9 7.4 11.9 7.4 5 0 8.2-2.5 8.2-6 0-4.1-3.3-5.6-8.8-8l-3-1.3c-8.7-3.7-14.5-8.4-14.5-18.2 0-9.1 6.9-16 17.7-16 7.7 0 13.2 2.7 17.2 9.6l-9.4 6c-2.1-3.7-4.3-5.2-7.8-5.2-3.5 0-5.8 2.3-5.8 5.2 0 3.6 2.3 5.1 7.5 7.3l3 1.3c10.3 4.4 16.1 8.9 16.1 19 0 10.9-8.5 16.9-20 16.9-11.2 0-18.4-5.3-21.9-12.3z"
      />
    </svg>
  )
}

export function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="64" fill="#20232a" />
      <circle cx="64" cy="64" r="11.4" fill="#61dafb" />
      <ellipse
        cx="64"
        cy="64"
        rx="47"
        ry="18"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
      />
      <ellipse
        cx="64"
        cy="64"
        rx="47"
        ry="18"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
        transform="rotate(60 64 64)"
      />
      <ellipse
        cx="64"
        cy="64"
        rx="47"
        ry="18"
        fill="none"
        stroke="#61dafb"
        strokeWidth="4"
        transform="rotate(120 64 64)"
      />
    </svg>
  )
}

export function CSSIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect fill="#264de4" width="128" height="128" rx="10" />
      <path fill="#2965f1" d="M19.67 16l8.09 90.68L64 118l36.24-11.32L108.33 16H19.67z" />
      <path fill="#ebebeb" d="M64 100.42l29.32-8.13 5.02-56.21H64v64.34z" />
      <path fill="#fff" d="M64 56.05h14.72l1.01-11.36H64V33.53h27.63l-.26 2.97-2.72 30.46H64v-10.91z" />
      <path fill="#ebebeb" d="M64.08 84.03l-.08.02-12.33-3.33-.79-8.84H39.51l1.55 17.39 22.94 6.37.08-.02v-11.59z" />
      <path fill="#fff" d="M78.57 66.96l-1.33 14.87-13.16 3.56v11.59l23.01-6.38.17-1.9 1.97-22.11.21-2.29.83-9.33H64v10.95h14.72l-.15 1.04z" />
      <text x="64" y="24" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">CSS3</text>
    </svg>
  )
}

export function HTMLIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <rect fill="#e44d26" width="128" height="128" rx="10" />
      <path fill="#f16529" d="M19.67 16l8.09 90.68L64 118l36.24-11.32L108.33 16H19.67z" />
      <path fill="#ebebeb" d="M64 100.42V33.53H40.14l.87 9.77H64v10.06H30.46l2.59 29.06 30.87 8.56.08-.02v-11.59l-.08.02-16.2-4.38-1.04-11.64H57.8l.52 5.82 5.6 1.51.08-.02V66H77.7l-1.46 16.32L64 85.97v14.45z" />
      <path fill="#fff" d="M64 56.05v10.03h24.09L86.63 82.3 64 88.56v11.86l30.95-8.58.23-2.57 3.55-39.78.37-4.09.72-8.06H64v10.11h17.75l-.87 9.77H64v-.27z" />
      <text x="64" y="24" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="Arial">HTML5</text>
    </svg>
  )
}

// Animated tech icons for hero section
export function HeroTechIcons() {
  const icons = [
    { Icon: TypeScriptIcon, delay: '0s', position: 'left-[5%] top-[15%]' },
    { Icon: JavaScriptIcon, delay: '0.5s', position: 'right-[8%] top-[20%]' },
    { Icon: ReactIcon, delay: '1s', position: 'left-[10%] top-[60%]' },
    { Icon: CSSIcon, delay: '1.5s', position: 'right-[5%] top-[55%]' },
    { Icon: HTMLIcon, delay: '2s', position: 'left-[3%] top-[38%]' },
    { Icon: TypeScriptIcon, delay: '2.5s', position: 'right-[12%] top-[75%]' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={cn(
            'absolute w-12 h-12 md:w-16 md:h-16 opacity-20 dark:opacity-15',
            'animate-float drop-shadow-lg',
            position
          )}
          style={{
            animationDelay: delay,
            animationDuration: `${6 + index * 0.7}s`,
          }}
        >
          <Icon className="w-full h-full rounded-lg" />
        </div>
      ))}
    </div>
  )
}
