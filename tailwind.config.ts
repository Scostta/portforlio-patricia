import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F5F0',
        ink: '#131310',
        'ink-secondary': '#6A6960',
        'ink-tertiary': '#A09E96',
        border: '#E0DFD7',
        accent: '#6667ab',
        'accent-hover': '#7557B8',
        'accent-light': '#F3EFFC',
        'accent-soft': '#E8DFF7',
        'accent-ink': '#4A3780',
        surface: '#EFEDE7',
        dark: '#111110',
        'dark-secondary': '#2A2A27',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        'micro': ['0.5625rem', { lineHeight: '0.875rem' }],
        '2xs':   ['0.625rem',  { lineHeight: '1rem' }],
        // Fixed sizes that fill gaps in the default Tailwind scale
        'fine':  ['0.8125rem', { lineHeight: '1.5'  }],   // 13 px — small labels, context text
        'mid':   ['0.9375rem', { lineHeight: '1.55' }],   // 15 px — medium-small text
        'body':  ['1.0625rem', { lineHeight: '1.65' }],   // 17 px — prose body text
        // Fluid sizes shared across case study pages
        'fluid-xs':  ['clamp(1.1rem,1.8vw,1.35rem)',  { lineHeight: '1.35' }], // case nav card titles
        'fluid-sm':  ['clamp(1.75rem,2.5vw,2.5rem)',  { lineHeight: '1.25' }], // case stat values / small section heads
        'fluid-md':  ['clamp(2rem,3.6vw,3rem)',        { lineHeight: '1.1'  }], // section h2 in case pages
        'fluid-lg':  ['clamp(2.5rem,5vw,4.25rem)',    { lineHeight: '1.02' }], // hero h1
        'fluid-xl':  ['clamp(2rem,6vw,5.5rem)',        { lineHeight: '1.05' }], // large case hero title
        'fluid-2xl': ['clamp(5rem,10vw,10rem)',         { lineHeight: '1'    }], // decorative case numbers
        'fluid-3xl': ['clamp(10rem,28vw,22rem)',        { lineHeight: '1'    }], // super-large bg decoration
      },
      maxWidth: {
        prose: '68ch',
        reading: '74ch',
      },
      letterSpacing: {
        widest: '0.2em',
        label:  '0.13em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'count-in': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'gradient-breathe': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-breathe-dark': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'breathe': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'count-in': 'count-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'gradient-breathe': 'gradient-breathe 12s ease-in-out infinite',
        'gradient-breathe-dark': 'gradient-breathe-dark 16s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      boxShadow: {
        'card-hover': '0 4px 24px -4px rgba(102, 103, 171, 0.18), 0 1px 4px -1px rgba(102, 103, 171, 0.10)',
        'card-hover-strong': '0 8px 40px -8px rgba(102, 103, 171, 0.28), 0 2px 8px -2px rgba(102, 103, 171, 0.14)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #8B6FC9 0%, #7557B8 100%)',
        'gradient-accent-soft': 'linear-gradient(135deg, #F3EFFC 0%, #E8DFF7 100%)',
        'gradient-hero': 'linear-gradient(160deg, #F6F5F0 0%, #F3EFFC 60%, #E8DFF7 100%)',
        'gradient-dark-accent': 'linear-gradient(135deg, #111110 0%, #1a1425 100%)',
        'gradient-primary': 'linear-gradient(180deg, rgba(138, 200, 231, 0.4) 30%, rgba(171, 107, 255, 0.4) 100%)',
        'gradient-secondary': 'linear-gradient(76deg, rgb(138 200 231 / .12) 0%, rgb(171 107 255 / .13) 100%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
