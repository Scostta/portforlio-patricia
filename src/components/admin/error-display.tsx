import type { ReactElement, ReactNode } from 'react'
import { cn } from '~/utils/cn'

type Props = {
  message: string
  subtext: string
  onReset: () => void
  children?: ReactNode
}

export function ErrorDisplay(props: Props): ReactElement {
  const { message, subtext, onReset, children } = props

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="text-red-400 mb-4"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="text-sm font-medium text-ink-secondary mb-1">{message}</p>
      <p className="text-xs text-ink-tertiary mb-4">{subtext}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={onReset}
          className={cn(
            'text-sm text-accent underline hover:text-accent-hover transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded',
          )}
        >
          Intentar de nuevo
        </button>
        {children}
      </div>
    </div>
  )
}
