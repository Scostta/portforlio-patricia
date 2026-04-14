import type { ReactElement } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CASES } from '~/constants/cases'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = CASES.find((c) => c.slug === slug)
  if (!caseStudy) return {}
  return {
    title: `${caseStudy.title} — Patricia Bayona`,
    description: caseStudy.subtitle,
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
      {/* Case header */}
      <div className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20">
          {/* Back link */}
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs tracking-wide mb-12 transition-colors animate-fade-in"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All cases
          </Link>

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:50ms]">
                <span className="text-2xs font-medium tracking-widest uppercase text-white/40">
                  {c.company}
                </span>
                <span className="text-white/20">·</span>
                <span className="text-2xs text-white/40 tracking-wide">{c.role}</span>
                <span className="text-white/20">·</span>
                <span className="text-2xs text-white/40 tracking-wide">{c.timeline}</span>
              </div>

              <div className="flex items-start gap-6 mb-6">
                <span className="font-serif text-[5rem] lg:text-[8rem] leading-none font-bold text-white/8 flex-shrink-0 -mt-2">
                  {c.number}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-up [animation-delay:150ms]">
                  {c.title}
                </h1>
              </div>

              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-2xl animate-fade-up [animation-delay:250ms]">
                {c.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:flex-col animate-fade-up [animation-delay:350ms]">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-2xs tracking-wide px-3 py-1.5 border border-white/10 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case body */}
      <article className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-reading mx-auto">

          {/* Intro paragraph */}
          <p className="text-lg lg:text-xl leading-relaxed text-ink-secondary mb-16 font-medium reveal">
            {c.intro}
          </p>

          {/* The Situation */}
          <section className="mb-16 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-label">The Situation</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-5">
              {c.situation.map((paragraph, i) => (
                <p key={i} className="text-base lg:text-[1.0625rem] leading-[1.8] text-ink-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-16 reveal">
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">How I Approached It</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-14">
              {c.approach.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className="reveal"
                  style={{ transitionDelay: `${sectionIndex * 80}ms` }}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-serif text-xl font-bold text-accent flex-shrink-0">
                      {String(sectionIndex + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-xl lg:text-2xl text-ink leading-snug">
                      {section.title}
                    </h2>
                  </div>

                  <div className="pl-10 space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-base lg:text-[1.0625rem] leading-[1.8] text-ink-secondary">
                        {paragraph}
                      </p>
                    ))}

                    {section.quote && (
                      <blockquote className="my-8 border-l-2 border-accent pl-6">
                        <p className="font-serif text-lg lg:text-xl leading-relaxed text-ink italic">
                          &ldquo;{section.quote}&rdquo;
                        </p>
                      </blockquote>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Results — full width */}
        <section className="mb-16 bg-dark rounded-none -mx-6 lg:-mx-12 px-6 lg:px-12 py-14">
          <div className="max-w-reading mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-2xs font-medium tracking-widest uppercase text-white/40">
                Results
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {c.results.map((result, i) => (
                <div
                  key={i}
                  className="bg-dark p-6 lg:p-8 reveal animate-count-in"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">
                    {result.value}
                  </p>
                  <p className="text-sm font-medium text-white/70 mb-1">{result.label}</p>
                  <p className="text-xs text-white/35 leading-relaxed">{result.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I learned */}
        <div className="max-w-reading mx-auto">
          <section className="mb-20 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-label">What I Learned</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-5 mb-8">
              {c.learned.map((paragraph, i) => (
                <p key={i} className="text-base lg:text-[1.0625rem] leading-[1.8] text-ink-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            {c.learnedQuote && (
              <div className="bg-accent-light border-l-2 border-accent px-6 py-5">
                <p className="font-serif text-base lg:text-lg leading-relaxed text-ink italic">
                  &ldquo;{c.learnedQuote}&rdquo;
                </p>
              </div>
            )}
          </section>

          {/* Navigation */}
          <div className="border-t border-border pt-12 flex flex-col sm:flex-row justify-between gap-6">
            {prevCase ? (
              <Link
                href={`/cases/${prevCase.slug}`}
                className="group flex items-center gap-3 text-sm text-ink-secondary hover:text-ink transition-colors"
              >
                <svg
                  className="group-hover:-translate-x-1 transition-transform duration-200 flex-shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-2xs text-ink-tertiary tracking-wide mb-0.5">Previous</p>
                  <p className="font-medium text-current">{prevCase.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextCase && (
              <Link
                href={`/cases/${nextCase.slug}`}
                className="group flex items-center gap-3 text-sm text-ink-secondary hover:text-ink transition-colors sm:text-right sm:flex-row-reverse"
              >
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-2xs text-ink-tertiary tracking-wide mb-0.5">Next</p>
                  <p className="font-medium text-current">{nextCase.title}</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
