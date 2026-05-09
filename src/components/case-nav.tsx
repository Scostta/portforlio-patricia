import Link from 'next/link'
import type { ReactElement } from 'react'
import type { CaseMeta } from '~/constants/cases'

export function CaseNav({ prevCase, nextCase }: { prevCase: CaseMeta | null; nextCase: CaseMeta | null }): ReactElement {
  return (
    <nav className="bg-white border-t border-border py-16 lg:py-20" aria-label="Case navigation">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="section-label">More Cases</span>
          <div className="flex-1 h-px bg-border reveal-expand" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prevCase ? (
            <Link
              href={`/portfolio/cases/${prevCase.slug}`}
              aria-label={`Previous case: ${prevCase.title}`}
              className="group relative flex flex-col justify-between overflow-hidden bg-white border border-border rounded-[14px] p-6 lg:p-7 min-h-[140px] shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,19,16,0.08),0_4px_12px_rgba(102,103,171,0.10)] transition-all duration-300 reveal"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-2 text-2xs font-bold tracking-label uppercase text-ink-tertiary">
                  <svg className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Previous
                </span>
                <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{prevCase.number}</span>
              </div>
              <div className="flex-1 flex flex-col justify-end pt-3">
                <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-fluid-xs mb-1.5">
                  {prevCase.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {prevCase.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span aria-hidden className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-fluid-2xl text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none">
                {prevCase.number}
              </span>
              <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ) : (
            <Link
              href="/portfolio/cases"
              aria-label="View all cases"
              className="group relative flex flex-col justify-between overflow-hidden bg-white border border-border rounded-[14px] p-6 lg:p-7 min-h-[140px] shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,19,16,0.08),0_4px_12px_rgba(102,103,171,0.10)] transition-all duration-300 reveal"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-2 text-2xs font-bold tracking-label uppercase text-ink-tertiary">
                  <svg className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  All Cases
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-end pt-3">
                <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-fluid-xs mb-1.5">All Case Studies</h3>
                <p className="text-sm text-ink-secondary leading-snug">Six problems. Six solutions.</p>
              </div>
              <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          )}

          {nextCase && (
            <Link
              href={`/portfolio/cases/${nextCase.slug}`}
              aria-label={`Next case: ${nextCase.title}`}
              className="group relative flex flex-col justify-between overflow-hidden bg-white border border-border rounded-[14px] p-6 lg:p-7 min-h-[140px] shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] hover:border-accent/35 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(19,19,16,0.08),0_4px_12px_rgba(102,103,171,0.10)] transition-all duration-300 reveal [animation-delay:100ms]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{nextCase.number}</span>
                <span className="flex items-center gap-2 text-2xs font-bold tracking-label uppercase text-ink-tertiary">
                  Next
                  <svg className="transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-end pt-3">
                <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-fluid-xs mb-1.5">
                  {nextCase.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {nextCase.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span aria-hidden className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-fluid-2xl text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none">
                {nextCase.number}
              </span>
              <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
