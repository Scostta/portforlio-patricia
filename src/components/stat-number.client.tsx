'use client'
import type { ReactElement } from 'react'

import { useCountUp } from '~/hooks/use-count-up'

type StatNumberProps = {
  target: number
  suffix: string
  useLocale?: boolean
  className?: string
}

export function StatNumber({ target, suffix, useLocale = false, className }: StatNumberProps): ReactElement {
  const { count, ref } = useCountUp({ target })

  const formatted = useLocale ? count.toLocaleString('en-US') : String(count)

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={className ?? 'font-serif text-4xl font-normal leading-none tracking-[-0.04em] text-ink'}
    >
      {formatted}{suffix}
    </span>
  )
}
