import type { ReactElement } from 'react'
import Link from 'next/link'
import { CASES } from '~/constants/cases'

export const metadata = {
  title: 'Case Studies — Patricia Bayona',
  description: 'Six detailed case studies spanning product strategy, UX leadership, roadmapping, go-to-market, and business model innovation.',
}

export default function CasesPage(): ReactElement {
  return (
    <div className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-20 animate-fade-up">
        <p className="section-label mb-4">Portfolio</p>
        <h1 className="font-serif text-4xl lg:text-5xl text-ink mb-6 leading-tight">
          Six case studies.<br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">Real problems. Real outcomes.</span>
        </h1>
        <p className="text-base lg:text-lg text-ink-secondary leading-relaxed">
          Each case covers a distinct challenge — organisational, strategic, design, commercial —
          and how I approached it. They are written to be honest about what was hard, what worked,
          and what I&apos;d do differently.
        </p>
      </div>

      {/* Cases list */}
      <div className="divide-y divide-border">
        {CASES.map((c, index) => (
          <Link
            key={c.slug}
            href={`/cases/${c.slug}`}
            className="group flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12 py-10 lg:py-14 hover:bg-gradient-secondary transition-colors duration-200 -mx-6 lg:-mx-12 px-6 lg:px-12 reveal"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            {/* Number */}
            <div className="flex-shrink-0 lg:w-20">
              <span className="font-serif text-6xl lg:text-7xl font-bold text-border group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-500 leading-none">
                {c.number}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="section-label">{c.company}</span>
                <span className="text-border">·</span>
                <span className="text-2xs text-ink-tertiary tracking-wide">{c.timeline}</span>
              </div>

              <h2 className="font-serif text-2xl lg:text-3xl text-ink mb-2 leading-snug">
                {c.title}
              </h2>
              <p className="text-base text-ink-secondary mb-4 leading-relaxed max-w-prose">
                {c.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-2xs tracking-wide px-2.5 py-1 bg-surface text-ink-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 flex items-center lg:pt-3">
              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                <span className="hidden lg:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read
                </span>
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
