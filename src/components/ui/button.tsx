import Link from 'next/link'
import { cn } from '~/utils/cn'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'pill'
type Size = 'sm' | 'md' | 'lg'

const base = 'inline-flex items-center font-medium transition-colors duration-200'

const variants: Record<Variant, string> = {
  primary: 'bg-gradient-primary text-black rounded-lg hover:text-white tracking-wide',
  secondary: 'border border-border text-ink rounded-lg hover:border-accent tracking-wide',
  ghost: 'text-ink-secondary hover:text-ink',
  pill: 'border border-border text-ink rounded-full hover:bg-border',
}

const sizes: Record<Size, string> = {
  sm: 'gap-2 px-4 py-2 text-sm',
  md: 'gap-3 px-6 py-3 text-sm',
  lg: 'gap-3 px-7 py-3.5 text-sm',
}

const ghostSizes: Record<Size, string> = {
  sm: 'gap-1.5 text-xs',
  md: 'gap-2 text-sm',
  lg: 'gap-2 text-sm',
}

const ArrowIcon = ({ left }: { left?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    {left
      ? <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      : <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    }
  </svg>
)

export interface ButtonProps {
  variant?: Variant
  size?: Size
  arrow?: boolean | 'left'
  href?: string
  external?: boolean
  className?: string
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  href,
  external,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const sizeClass = variant === 'ghost' ? ghostSizes[size] : sizes[size]
  const classes = cn(base, variants[variant], sizeClass, className)

  const content = (
    <>
      {arrow === 'left' && <ArrowIcon left />}
      {children}
      {arrow && arrow !== 'left' && <ArrowIcon />}
    </>
  )

  if (href) {
    if (external) {
      const isMailto = href.startsWith('mailto:')
      return (
        <a href={href} target={isMailto ? undefined : '_blank'} rel={isMailto ? undefined : 'noopener noreferrer'} className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
