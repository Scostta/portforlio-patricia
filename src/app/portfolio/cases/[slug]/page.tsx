import type { ReactElement } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

import { CASES } from '~/constants/cases'
import { Button } from '~/components/ui/button'
import { Tag } from '~/components/ui/tag'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = CASES.find((x) => x.slug === slug)
  if (!c) return {}
  const title = c.title
  const description = c.subtitle
  return {
    title,
    description,
    openGraph: {
      title: `${title} — Patricia Bayona`,
      description,
      type: 'article',
      images: [{ url: `/portfolio/cases/${slug}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/portfolio/cases/${slug}/opengraph-image`],
    },
  }
}

export default async function CasePage({ params }: Props): Promise<ReactElement> {
  const { slug } = await params
  const caseIndex = CASES.findIndex((c) => c.slug === slug)
  if (caseIndex === -1) notFound()

  const c = CASES[caseIndex]
  const prevCase = caseIndex > 0 ? CASES[caseIndex - 1] : null
  const nextCase = caseIndex < CASES.length - 1 ? CASES[caseIndex + 1] : null

  return (
    <>
      {/* Fixed back-link pill */}
      <Link
        href="/portfolio/cases"
        className="fixed top-6 left-6 z-[100] inline-flex items-center gap-2 text-[0.8125rem] font-medium text-ink-secondary bg-white/85 backdrop-blur-sm border border-border rounded-full px-4 py-2 transition-colors duration-200 hover:text-accent hover:border-accent group max-sm:top-4 max-sm:left-4"
      >
        <svg
          className="transition-transform duration-200 group-hover:-translate-x-[3px] flex-shrink-0"
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13 8H3M7 4L3 8l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All cases
      </Link>

      {/* Header — light gradient */}
      <header className="hero-gradient-bg pt-32 pb-20 relative overflow-hidden">
        {/* Watermark case number */}
        <span
          aria-hidden="true"
          className="absolute bottom-[-0.1em] right-[-0.02em] font-serif font-black leading-none text-ink pointer-events-none select-none"
          style={{
            fontSize: 'clamp(8rem, 22vw, 18rem)',
            opacity: 0.04,
            letterSpacing: '-0.04em',
          }}
        >
          {c.number}
        </span>

        {/* Inner content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          {/* Meta row */}
          <div
            className="flex flex-wrap items-center gap-3 mb-8 reveal"
          >
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
              {c.company}
            </span>
            <span
              className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-50"
              aria-hidden="true"
            />
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
              {c.role}
            </span>
            <span
              className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-50"
              aria-hidden="true"
            />
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
              {c.timeline}
            </span>
          </div>

          {/* Eyebrow */}
          <p
            className="text-2xs font-semibold tracking-widest uppercase text-accent mb-4 reveal"
            style={{ transitionDelay: '80ms' }}
          >
            Case {c.number} — {c.title}
          </p>

          {/* Title */}
          <h1
            className="font-serif text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-ink mb-5 max-w-[820px] reveal"
            style={{ transitionDelay: '140ms' }}
          >
            {c.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg lg:text-xl text-ink-secondary leading-snug max-w-[600px] mb-8 reveal"
            style={{ transitionDelay: '200ms' }}
          >
            {c.subtitle}
          </p>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-2 reveal"
            style={{ transitionDelay: '260ms' }}
          >
            {c.tags.map((tag) => (
              <Tag key={tag} variant="bordered">{tag}</Tag>
            ))}
          </div>
        </div>
      </header>

      {/* Intro section */}
      <section className="bg-white border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-relaxed text-ink max-w-prose reveal">
            {c.intro}
          </p>
        </div>
      </section>

      {/* Situation section */}
      <section className="bg-paper border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">The Situation</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto">
            {c.situation.map((paragraph, i) => (
              <p
                key={i}
                className="text-base lg:text-[1.0625rem] leading-[1.8] text-ink-secondary mb-5 last:mb-0 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="bg-white border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">How I Approached It</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading mx-auto space-y-16">
            {c.approach.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-[3.5rem_1fr] gap-6 items-start reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Step number */}
                <span className="font-serif text-4xl font-bold text-accent opacity-25 leading-none pt-[0.15em] tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Step content */}
                <div className="approach-step-line pl-6">
                  <h2 className="font-serif text-xl lg:text-[1.375rem] font-bold text-ink mb-3 tracking-tight leading-snug">
                    {step.title}
                  </h2>

                  {step.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-[0.9375rem] leading-[1.75] text-ink-secondary mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {step.quote && (
                    <div className="bg-accent-light border-l-2 border-accent rounded-r-sm px-5 py-4 mt-4 font-serif italic text-[0.9375rem] leading-relaxed text-ink-secondary">
                      &ldquo;{step.quote}&rdquo;
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results section */}
      <section className="hero-gradient-bg border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">Results</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-12">
            {c.results.map((result, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-lg p-6 lg:p-8 flex flex-col gap-2 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p
                  className="font-serif text-4xl lg:text-5xl font-bold leading-none tracking-tight bg-gradient-primary bg-clip-text text-transparent"
                >
                  {result.value}
                </p>
                <p className="text-[0.9375rem] font-semibold text-ink leading-snug">
                  {result.label}
                </p>
                <p className="text-xs text-ink-tertiary leading-snug">
                  {result.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Learned section */}
      <section className="bg-white border-b border-border py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">What I Learned</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading mx-auto">
            {c.learned.map((paragraph, i) => (
              <p
                key={i}
                className="text-base lg:text-[1.0625rem] leading-[1.75] text-ink-secondary mb-5 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {paragraph}
              </p>
            ))}

            {c.learnedQuote && (
              <div
                className="quote-callout reveal mt-10"
                style={{ transitionDelay: '180ms' }}
              >
                <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                  &ldquo;{c.learnedQuote}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <nav className="bg-paper border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1">
            {prevCase ? (
              <Link
                href={`/portfolio/cases/${prevCase.slug}`}
                className="group border border-border rounded-lg p-6 bg-white flex flex-col gap-2 hover:border-accent hover:shadow-card-hover transition-all duration-200"
              >
                <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary flex items-center gap-2">
                  <span className="transition-transform duration-200 group-hover:-translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13 8H3M7 4L3 8l4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Previous
                </span>
                <span className="font-serif font-bold text-lg text-ink leading-snug">
                  {prevCase.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextCase ? (
              <Link
                href={`/portfolio/cases/${nextCase.slug}`}
                className="group border border-border rounded-lg p-6 bg-white flex flex-col gap-2 items-end text-right hover:border-accent hover:shadow-card-hover transition-all duration-200"
              >
                <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary flex flex-row-reverse items-center gap-2">
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  Next
                </span>
                <span className="font-serif font-bold text-lg text-ink leading-snug">
                  {nextCase.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
