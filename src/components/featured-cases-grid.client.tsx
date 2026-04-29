'use client'
import { useRef } from 'react'
import Link from 'next/link'
import type { CSSProperties, ReactElement } from 'react'
import type { Case } from '~/constants/cases'
import { Tag } from '~/components/ui/tag'

type FeaturedCasesGridProps = {
  cases: Case[]
}

export function FeaturedCasesGrid({ cases }: FeaturedCasesGridProps): ReactElement {
  const gradientRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradient = gradientRef.current
    if (!gradient) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    gradient.style.opacity = '1'
    gradient.style.background = `radial-gradient(circle 280px at ${x}px ${y}px, rgba(138, 200, 231, 1) 0%, rgba(171, 107, 255, 0.95) 45%, transparent 100%)`
  }

  const handleMouseLeave = () => {
    const gradient = gradientRef.current
    if (gradient) gradient.style.opacity = '0'
  }

  return (
    <div className="relative bg-paper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Single spotlight layer behind all cards */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {/* Grid — bg-transparent so gaps show the spotlight */}
      <div className="relative grid lg:grid-cols-3 gap-[2px] bg-transparent">
        {cases.map((c, index) => (
          <Link
            key={c.slug}
            href={`/portfolio/cases/${c.slug}`}
            className="group bg-white p-8 lg:p-10 flex flex-col animate-fade-up"
            style={{ animationDelay: `${index * 120}ms` } as CSSProperties}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="section-label">{c.company}</span>
              <span className="font-serif text-5xl font-bold bg-gradient-primary bg-clip-text   text-transparent group-hover:scale-110 transition-all duration-500 origin-top-right inline-block">
                {c.number}
              </span>
            </div>

            <h3 className="font-serif text-xl lg:text-2xl text-ink mb-3 leading-snug">
              {c.title}
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed mb-6 flex-1">
              {c.subtitle}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {c.tags.slice(0, 3).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-accent font-medium">
              Read case study
              <svg
                className="group-hover:translate-x-1 transition-transform duration-200"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
