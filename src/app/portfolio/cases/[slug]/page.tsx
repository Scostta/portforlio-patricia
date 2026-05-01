import type { ReactElement } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CASES } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CaseImages } from '~/components/image-lightbox.client'
import { cn } from '~/utils/cn'

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
  return {
    title: c.title,
    description: c.subtitle,
    openGraph: {
      title: `${c.title} — Patricia Bayona`,
      description: c.subtitle,
      type: 'article',
      images: [{ url: `/portfolio/cases/${slug}/opengraph-image`, width: 1200, height: 630, alt: c.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.subtitle,
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

  const situationWords = c.situation.join(' ').split(' ').length
  const approachWords = c.approach.flatMap((a) => a.content).join(' ').split(' ').length
  const learnedWords = c.learned.join(' ').split(' ').length
  const readTimeMin = Math.ceil((situationWords + approachWords + learnedWords) / 200)

  return (
    <>
      {/* SECTION A — HERO HEADER */}
      <header className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden border-b border-border">
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 font-serif font-black leading-none text-ink pointer-events-none select-none"
          style={{ fontSize: 'clamp(10rem,28vw,22rem)', opacity: 0.045, letterSpacing: '-0.04em' }}
        >
          {c.number}
        </span>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          {/* Breadcrumb eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:100ms]">
            <div className="w-10 h-px bg-gradient-to-r from-accent to-transparent" aria-hidden="true" />
            <Link
              href="/portfolio/cases"
              className="group flex items-center gap-2 text-2xs font-semibold tracking-widest uppercase text-ink-tertiary hover:text-accent transition-colors duration-200"
            >
              <svg
                className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0"
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All cases
            </Link>
            <span className="text-ink-tertiary opacity-30 text-2xs" aria-hidden="true">/</span>
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
              Case {c.number}
            </span>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">{c.company}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">{c.role}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">{c.timeline}</span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">{c.title}</span>
            <span className="block mt-[0.12em] animate-fade-up [animation-delay:560ms]">
              <span className="text-[0.48em] font-normal italic font-serif bg-[linear-gradient(120deg,rgb(138_200_231)_0%,#6667AB_50%,rgb(171_107_255)_100%)] [background-size:200%_auto] bg-clip-text text-transparent animate-gradient-breathe tracking-[-0.01em]">
                {c.subtitle}
              </span>
            </span>
          </h1>

          {/* Tags + read time */}
          <div className="flex flex-wrap items-center gap-2 animate-fade-up [animation-delay:700ms]">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-secondary border border-border bg-paper px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            <span className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper/60 px-2.5 py-1 rounded">
              ~{readTimeMin} min read
            </span>
          </div>
        </div>
      </header>

      {/* SECTION B — INTRO */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose reveal">
            {c.intro}
          </p>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* ROLE & SCOPE — only if present */}
      {c.roleScope && c.roleScope.length > 0 && (
        <section className="bg-surface border-b border-border py-14 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">Role & Scope</span>
              <div className="flex-1 h-px bg-border reveal-expand" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.roleScope.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 lg:p-5 bg-white border border-border rounded-xl reveal"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.45em] flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-ink-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION C — THE SITUATION */}
      <section className="bg-paper border-b border-border py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Situation</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto">
            {c.situation.map((paragraph, i) => (
              <p
                key={i}
                className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-6 last:mb-0 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — HOW I APPROACHED IT */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">How I Approached It</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto space-y-14 lg:space-y-20">
            {c.approach.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-[2.5rem_1fr] lg:grid-cols-[3.5rem_1fr] gap-4 lg:gap-6 items-start reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-accent opacity-20 leading-none pt-[0.1em] tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="approach-step-line pl-4 lg:pl-5">
                  <h2 className="font-serif text-lg lg:text-[1.25rem] font-semibold text-ink mb-3 tracking-tight leading-snug">
                    {step.title}
                  </h2>
                  {step.content.map((paragraph, j) => (
                    <p key={j} className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                  {step.quote && (
                    <div className="quote-callout reveal mt-5">
                      <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                        &ldquo;{step.quote}&rdquo;
                      </p>
                    </div>
                  )}
                  {step.images && step.images.length > 0 && (
                    <CaseImages
                      images={step.images}
                      columns={step.images.length > 1 ? 2 : 1}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E — RESULTS */}
      <section className="hero-gradient-bg border-b border-border py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Results</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-0">
            {c.results.map((result, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden bg-white border border-border rounded-[14px] p-5 lg:p-8 min-h-[160px] lg:min-h-[200px] shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] hover:border-accent/35 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <p className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold leading-none tracking-tight bg-gradient-primary bg-clip-text text-transparent mb-3">
                  {result.value}
                </p>
                <p className="text-[0.9375rem] font-semibold text-ink leading-snug mb-1.5">
                  {result.label}
                </p>
                <p className="text-xs text-ink-tertiary leading-relaxed">
                  {result.context}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(4rem,8vw,8rem)] text-ink opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none select-none"
                >
                  {String(i + 1)}
                </span>
                <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F — WHAT I LEARNED */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What I Learned</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto">
            {c.learned.map((paragraph, i) => (
              <p
                key={i}
                className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {paragraph}
              </p>
            ))}
            {c.learnedQuote && (
              <div className="quote-callout reveal-far mt-12" style={{ transitionDelay: '180ms' }}>
                <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                  &ldquo;{c.learnedQuote}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SUPPORTING DOCUMENTS — only if present */}
      {c.documents && c.documents.length > 0 && (
        <section className="bg-paper border-b border-border py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">Supporting Documents</span>
              <div className="flex-1 h-px bg-border reveal-expand" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-reading mx-auto">
              {c.documents.map((doc, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <CasePdfViewer href={doc.href} label={doc.label} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION G — PREV/NEXT NAV */}
      <nav className="bg-white border-t border-border py-16 lg:py-20" aria-label="Case navigation">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
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
                    <svg
                      className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Previous
                  </span>
                  <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">
                    {prevCase.number}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end pt-3">
                  <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.1rem,1.8vw,1.35rem)] mb-1.5">
                    {prevCase.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {prevCase.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(5rem,10vw,10rem)] text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none"
                >
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
                    <svg
                      className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    All Cases
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end pt-3">
                  <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.1rem,1.8vw,1.35rem)] mb-1.5">
                    All Case Studies
                  </h3>
                  <p className="text-sm text-ink-secondary leading-snug">
                    Six problems. Six solutions.
                  </p>
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
                  <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">
                    {nextCase.number}
                  </span>
                  <span className="flex items-center gap-2 text-2xs font-bold tracking-label uppercase text-ink-tertiary">
                    Next
                    <svg
                      className="transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end pt-3">
                  <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.1rem,1.8vw,1.35rem)] mb-1.5">
                    {nextCase.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {nextCase.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(5rem,10vw,10rem)] text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none"
                >
                  {nextCase.number}
                </span>
                <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
