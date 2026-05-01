import type { ReactElement } from 'react'
import Link from 'next/link'
import { CASES } from '~/constants/cases'
import { FEATURED_CASE_SLUGS } from '~/constants/home'
import { MARQUEE_ITEMS, SKILLS_BENTO } from '~/constants/site'
import { StatsStrip } from '~/components/stats-strip.client'
import { Button } from '~/components/ui/button'
import { cn } from '~/utils/cn'

export const metadata = {
  title: 'Portfolio',
  description:
    'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
  openGraph: {
    title: 'Patricia Bayona — Product Manager & UX Lead',
    description:
      'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1.',
    images: [{ url: '/portfolio/opengraph-image', width: 1200, height: 630, alt: 'Patricia Bayona — Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Patricia Bayona — Product Manager & UX Lead',
    description:
      'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1.',
    images: ['/portfolio/opengraph-image'],
  },
}

const BENTO_SPANS = [
  'md:min-h-[220px] md:col-span-12 xl:col-span-7 xl:row-span-2',
  'md:min-h-[220px] md:col-span-6 xl:col-span-5',
  'md:min-h-[220px] md:col-span-6 xl:col-span-5',
] as const

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PortfolioPage(): ReactElement {
  const featuredCases = CASES.filter((c) => FEATURED_CASE_SLUGS.includes(c.slug))

  return (
    <>
      {/* ── Marquee ─────────────────────────────────────────────── */}
      <div aria-hidden className="border-b border-border overflow-hidden py-2.5 group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex">
            {MARQUEE_ITEMS.map((text) => (
              <div key={text} className="flex items-center gap-5 px-5 text-2xs font-semibold tracking-widest uppercase text-ink/35 whitespace-nowrap">
                {text}
                <span className="w-[3px] h-[3px] rounded-full bg-accent/60 flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="flex">
            {MARQUEE_ITEMS.map((text) => (
              <div key={`d-${text}`} className="flex items-center gap-5 px-5 text-2xs font-semibold tracking-widest uppercase text-ink/35 whitespace-nowrap">
                {text}
                <span className="w-[3px] h-[3px] rounded-full bg-accent/60 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="landing-orb-1" />
        <div aria-hidden className="landing-orb-2" />
        <header className="relative z-10 px-6 lg:px-10 pt-20 pb-16 max-w-[1400px] mx-auto min-h-[calc(100vh-106px)] flex flex-col justify-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 sm:mb-10 animate-fade-up [animation-delay:100ms]">
            <div className="w-10 h-px bg-gradient-to-r from-accent to-transparent" />
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
              Product &amp; Design Leader · Available for hire
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[clamp(2.5rem,7vw,8.5rem)] font-normal leading-[0.93] tracking-[-0.04em] text-ink mb-8 sm:mb-10 relative z-10">
            <span className="block animate-fade-up [animation-delay:150ms]">BUILDING</span>
            <span className="block animate-fade-up [animation-delay:220ms]">PRODUCT</span>
            <span className="block animate-fade-up [animation-delay:290ms]">SYSTEMS</span>
            <span className="block animate-fade-up [animation-delay:360ms]">FROM SCRATCH</span>
            <span className="block mt-3 animate-fade-up [animation-delay:500ms] font-light text-[0.57em] italic font-serif tracking-[-0.01em] bg-gradient-primary [background-size:200%_auto] bg-clip-text text-transparent animate-gradient-breathe">
              with a founder&apos;s instinct.
            </span>
          </h1>

          {/* Footer: desc + actions */}
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between animate-fade-up [animation-delay:700ms] relative z-10">
            <p className="max-w-[480px] text-base leading-[1.7] text-ink-secondary font-light">
              I connect strategy, design and technology into products that ship — with a business degree,
              a founder&apos;s P&amp;L instinct, and a researcher&apos;s understanding of users. Formerly VP of UX at{' '}
              <strong className="text-ink font-semibold">LINK Mobility</strong> and Co-Founder at{' '}
              <strong className="text-ink font-semibold">Alqua</strong>.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button variant="primary" size="lg" href="/portfolio/cases" arrow>
                See my work
              </Button>
              <Button variant="secondary" size="lg" href="/downloads/cv_patricia_bayona_en.pdf" download>
                Download CV
              </Button>
            </div>
          </div>
        </header>
      </div>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <StatsStrip />

      {/* ── Featured cases bento ────────────────────────────────── */}
      <section className="px-6 lg:px-10 pt-16 pb-4 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 reveal">
          <div>
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary mb-1.5">
              Selected work
            </p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.03em] text-ink leading-[1.1]">
              Featured cases
            </h2>
          </div>
          <Button variant="ghost" size="md" href="/portfolio/cases" arrow className="hidden sm:inline-flex text-accent">
            All 6 cases
          </Button>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[240px] xl:auto-rows-[240px] gap-2.5">
          {featuredCases.map((c, i) => {
            const isFeatured = i === 0
            return (
              <Link
                key={c.slug}
                href={`/portfolio/cases/${c.slug}`}
                className={cn(
                  'group relative flex flex-col justify-between p-5 md:p-7 bg-white border border-border rounded-[14px] overflow-hidden',
                  'shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)]',
                  'hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(19,19,16,0.1),0_4px_12px_rgba(102,103,171,0.12)]',
                  'transition-all duration-300 reveal',
                  BENTO_SPANS[i],
                  isFeatured && 'bg-[linear-gradient(160deg,white_50%,rgba(138,200,231,0.06)_100%)]',
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {isFeatured && (
                  <div aria-hidden className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}
                {isFeatured && (
                  <div aria-hidden className="absolute -top-[30%] -right-[10%] w-[65%] h-[80%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(171,107,255,0.12),rgba(138,200,231,0.08)_50%,transparent_75%)] pointer-events-none animate-breathe" />
                )}

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">{c.company}</span>
                    <span className="text-2xs text-ink/[0.18] tracking-[0.04em]">{c.timeline}</span>
                  </div>
                  <span className="font-serif text-sm font-semibold text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{c.number}</span>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-end pt-3">
                  <h3 className={cn(
                    'font-serif font-medium leading-snug tracking-tight text-ink mb-2',
                    isFeatured ? 'text-[clamp(1.5rem,2.2vw,2.1rem)]' : 'text-[clamp(1.1rem,1.5vw,1.45rem)]',
                  )}>
                    {c.title}
                  </h3>
                  <p className={cn(
                    'text-sm leading-relaxed text-ink-secondary mb-4',
                    isFeatured ? 'line-clamp-3' : 'line-clamp-2',
                  )}>
                    {c.subtitle}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.slice(0, isFeatured ? 3 : 2).map((tag) => (
                      <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 whitespace-nowrap">
                    Read <ArrowIcon />
                  </div>
                </div>

                <span aria-hidden className="absolute bottom-[-0.08em] right-[-0.02em] font-serif font-extrabold leading-none text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none text-[clamp(6rem,15vw,13rem)]">
                  {c.number}
                </span>
                <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                {isFeatured && (
                  <div aria-hidden className="absolute top-0 left-0 w-[3px] h-full bg-gradient-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                )}
              </Link>
            )
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Button variant="ghost" size="md" href="/portfolio/cases" arrow className="text-accent">
            All 6 cases
          </Button>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────── */}
      <section className="bg-gradient-secondary py-14 sm:py-20 mt-8 sm:mt-12">
        <div className="px-6 max-w-[860px] mx-auto text-center">
          <span aria-hidden className="font-serif text-[5rem] leading-[0.6] text-accent/30 block mb-6">
            &ldquo;
          </span>
          <p className="font-serif text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-[1.45] tracking-[-0.02em] text-ink mb-8 reveal-far">
            Building product systems from scratch — with a business degree, a founder&apos;s
            P&amp;L instinct, and a researcher&apos;s understanding of users. I connect strategy,
            design and technology into products that actually ship.
          </p>
          <p className="text-xs font-semibold tracking-label uppercase text-ink-tertiary reveal-far [transition-delay:200ms]">
            Patricia Bayona Bultó &nbsp;·&nbsp; Product &amp; Design Leader
          </p>
        </div>
      </section>

      {/* ── About teaser ────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: text */}
          <div className="reveal">
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary mb-5">About</p>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] font-normal tracking-[-0.03em] leading-[1.1] text-ink mb-6">
              10+ years building from&nbsp;0&nbsp;to&nbsp;1
            </h2>
            <p className="text-sm leading-[1.75] text-ink-secondary mb-4 font-light">
              I&apos;ve been VP of UX and Product Manager at LINK Mobility — one of Europe&apos;s
              largest CPaaS platforms — and Co-Founder &amp; COO at Alqua, a MarTech SaaS I scaled
              from 2 to 40+ employees and ~1.1M€ revenue.
            </p>
            <p className="text-sm leading-[1.75] text-ink-secondary mb-6 font-light">
              I hold a Master in International Management from ESSEC (ranked #3 in class) and a
              Business degree from ICADE. I&apos;m Spanish, English-proficient (Cambridge CPE), and
              work fully remote.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {['Spain · Full Remote', 'English & Spanish', 'Open to hire'].map((pill) => (
                <span key={pill} className="flex items-center gap-2 text-xs text-ink-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                  {pill}
                </span>
              ))}
            </div>

            <Button variant="ghost" size="md" href="/portfolio/about" arrow className="text-accent text-sm font-medium">
              Full profile
            </Button>
          </div>

          {/* Right: 2×2 skills bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILLS_BENTO.map((card, i) => (
              <div
                key={card.area}
                className="bg-white border border-border rounded-[14px] p-5 hover:border-accent/30 hover:shadow-card-hover transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-micro font-semibold tracking-widest uppercase text-accent mb-3">{card.area}</p>
                <p className="font-serif text-base font-medium tracking-[-0.02em] text-ink mb-3 leading-tight">{card.title}</p>
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-2xs font-medium text-ink-tertiary border border-border px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
