import { cn } from '~/utils/cn'
import type { ReactNode } from 'react'

type Variant = 'default' | 'bordered'

const variants: Record<Variant, string> = {
  default: 'text-2xs tracking-wide px-2.5 py-1 bg-paper text-ink-secondary',
  bordered: 'text-2xs font-medium tracking-[0.04em] text-ink-secondary border border-border bg-white/60 rounded-sm px-3 py-1 transition-colors duration-200 hover:border-accent hover:text-accent',
}

export interface TagProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

export function Tag({ variant = 'default', className, children }: TagProps) {
  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  )
}
