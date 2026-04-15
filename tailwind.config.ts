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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        prose: '68ch',
        reading: '74ch',
      },
      letterSpacing: {
        widest: '0.2em',
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
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease-out both',
        'count-in': 'count-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'gradient-breathe': 'gradient-breathe 12s ease-in-out infinite',
        'gradient-breathe-dark': 'gradient-breathe-dark 16s ease-in-out infinite',
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
