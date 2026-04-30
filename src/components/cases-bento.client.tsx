'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CASES } from '~/constants/cases'
import { cn } from '~/utils/cn'

const FILTERS = [
  { key: 'all', label: 'All cases' },
  { key: 'strategy', label: 'Strategy' },
  { key: 'ux', label: 'UX' },
  { key: 'product', label: 'Product' },
  { key: 'founder', label: 'Founder' },
  { key: 'gtm', label: 'Go-to-Market' },
] as const

const FILTER_MAP: Record<string, string[]> = {
  'mylink-portal': ['strategy', 'ux', 'product'],
  'ux-system': ['ux', 'strategy'],
  'roadmap': ['strategy', 'product'],
  'engage-gtm': ['gtm', 'product', 'strategy'],
  'alqua-pricing': ['founder', 'strategy', 'product'],
  'alqua-digital-index': ['founder', 'product', 'gtm'],
}

const CARD_GRID = [
  'md:min-h-[210px] md:col-span-12 xl:col-span-7 xl:row-span-2',
  'md:min-h-[210px] md:col-span-6 xl:col-span-5',
  'md:min-h-[210px] md:col-span-6 xl:col-span-5',
  'md:min-h-[210px] md:col-span-6 xl:col-span-4',
  'md:min-h-[210px] md:col-span-6 xl:col-span-4',
  'md:min-h-[210px] md:col-span-6 xl:col-span-4',
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CasesBento() {
  const [active, setActive] = useState('all')

  const isFiltered = active !== 'all'
  const visibleCases = isFiltered
    ? CASES.filter(c => (FILTER_MAP[c.slug] ?? []).includes(active))
    : CASES

  return (
    <>
      {/* Filter bar */}
      <div className="px-6 lg:px-10 py-4 max-w-[1400px] mx-auto flex items-center gap-1.5 flex-wrap animate-fade-up [animation-delay:850ms]">
        <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mr-1.5">Filter</span>
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={cn(
              'text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all duration-200',
              active === key
                ? 'bg-accent border-accent text-white shadow-[0_2px_8px_rgba(102,103,171,0.25)]'
                : 'bg-white border-border text-ink-secondary hover:border-accent hover:text-accent hover:bg-accent/[0.07]',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Bento grid */}
      <div className="px-6 lg:px-10 pb-12 max-w-[1400px] mx-auto">
        <div
          key={active}
          className={cn(
            'grid gap-2.5 animate-fade-up',
            isFiltered
              ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
              : 'grid-cols-1 md:grid-cols-12 md:auto-rows-[280px] xl:auto-rows-[260px]',
          )}
        >
          {visibleCases.map((c, i) => {
            const originalIndex = CASES.indexOf(c)
            const isFeatured = !isFiltered && i === 0

            return (
              <Link
                key={c.slug}
                href={`/portfolio/cases/${c.slug}`}
                className={cn(
                  'group relative flex flex-col justify-between p-5 md:p-7 bg-white border border-border rounded-[14px] overflow-hidden',
                  'shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)]',
                  'hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(19,19,16,0.1),0_4px_12px_rgba(102,103,171,0.12)]',
                  'transition-all duration-300',
                  !isFiltered && CARD_GRID[originalIndex],
                  isFiltered && 'min-h-[240px]',
                  isFeatured && 'bg-[linear-gradient(160deg,white_50%,rgba(138,200,231,0.06)_100%)]',
                )}
              >
                {/* Featured: gradient overlay on hover */}
                {isFeatured && (
                  <div aria-hidden className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}

                {/* Featured: animated glow blob */}
                {isFeatured && (
                  <div aria-hidden className="absolute -top-[30%] -right-[10%] w-[65%] h-[80%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(171,107,255,0.12),rgba(138,200,231,0.08)_50%,transparent_75%)] pointer-events-none animate-breathe" />
                )}

                {/* Top: company + card number */}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">{c.company}</span>
                    <span className="text-2xs text-ink/[0.18] tracking-[0.04em]">{c.timeline}</span>
                  </div>
                  <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{c.number}</span>
                </div>

                {/* Body: title + subtitle */}
                <div className="relative z-10 flex-1 flex flex-col justify-end pt-3">
                  <h2 className={cn(
                    'font-serif font-medium leading-snug tracking-tight text-ink mb-2',
                    isFeatured ? 'text-[clamp(1.5rem,2.2vw,2.1rem)]' : 'text-[clamp(1.1rem,1.5vw,1.45rem)]',
                  )}>
                    {c.title}
                  </h2>
                  <p className={cn(
                    'text-sm leading-relaxed text-ink-secondary mb-4',
                    isFeatured ? 'line-clamp-3' : 'line-clamp-2',
                  )}>
                    {c.subtitle}
                  </p>
                </div>

                {/* Footer: tags + read arrow */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.slice(0, isFeatured ? 3 : 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 whitespace-nowrap">
                    Read
                    <span className="inline-flex group-hover:translate-x-0.5 transition-transform duration-200">
                      <ArrowIcon />
                    </span>
                  </div>
                </div>

                {/* Watermark number */}
                <span
                  aria-hidden
                  className="absolute bottom-[-0.08em] right-[-0.02em] font-serif font-extrabold leading-none text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none text-[clamp(6rem,15vw,13rem)]"
                >
                  {c.number}
                </span>

                {/* Bottom accent bar */}
                <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                {/* Left accent bar — featured only */}
                {isFeatured && (
                  <div aria-hidden className="absolute top-0 left-0 w-[3px] h-full bg-gradient-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
