'use client'

import type { ReactElement } from 'react'
import { StatNumber } from '~/components/stat-number.client'
import { ABOUT_STATS } from '~/constants/about'
import { cn } from '~/utils/cn'

const CELL_BORDERS = [
  'border-b border-r border-border lg:border-b-0',
  'border-b border-border lg:border-b-0 lg:border-r',
  'border-r border-border',
  '',
] as const

export function StatsStrip(): ReactElement {
  return (
    <section className="bg-gradient-secondary">
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {ABOUT_STATS.map(({ target, suffix, useLocale, label, sub }, i) => (
          <div
            key={label}
            className={cn(
              'py-8 lg:py-10 px-4 lg:px-8 reveal',
              CELL_BORDERS[i],
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <StatNumber target={target} suffix={suffix} useLocale={useLocale} />
            <p className="text-xs font-semibold uppercase text-ink-tertiary mt-1.5 mb-0.5">{label}</p>
            <p className="text-xs text-ink-tertiary/70">{sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
