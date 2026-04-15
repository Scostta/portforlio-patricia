'use client'
import type { ReactElement } from 'react'

import { useCountUp } from '~/hooks/use-count-up'

type StatNumberProps = {
  target: number
  suffix: string
  useLocale?: boolean
}

export function StatNumber({ target, suffix, useLocale = false }: StatNumberProps): ReactElement {
  const { count, ref } = useCountUp({ target })

  const formatted = useLocale ? count.toLocaleString('en-US') : String(count)

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-serif text-3xl lg:text-4xl font-bold text-black">
      {formatted}
      {suffix}
    </span>
  )
}
