import type { ReactElement } from 'react'
import { CasesBento } from '~/components/cases-bento.client'
import { MARQUEE_ITEMS } from '~/constants/site'

export const metadata = {
  title: 'Case Studies',
  description: 'Six detailed case studies spanning product strategy, UX leadership, roadmapping, go-to-market, and business model innovation.',
}

export default function CasesPage(): ReactElement {
  return (
    <>
      {/* Marquee strip */}
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

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="landing-orb-1" />
        <div aria-hidden className="landing-orb-2" />
      <header className="relative z-10 px-6 lg:px-10 pt-20 pb-12 max-w-[1400px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-9 animate-fade-up [animation-delay:100ms]">
          <div className="w-10 h-px bg-gradient-to-r from-accent to-transparent" />
          <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
            Selected work · 2018 – present
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-[clamp(3rem,7vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-8 relative z-10">
          <span className="inline-block animate-fade-up [animation-delay:150ms]">Case</span>
          {' '}
          <span className="inline-block animate-fade-up [animation-delay:250ms]">Studies</span>
          <span className="block mt-[0.15em] animate-fade-up [animation-delay:450ms]">
            <span className="text-[0.52em] font-normal italic font-serif bg-[linear-gradient(120deg,rgb(138_200_231)_0%,#6667AB_50%,rgb(171_107_255)_100%)] [background-size:200%_auto] bg-clip-text text-transparent animate-gradient-breathe tracking-[-0.01em]">
              Six problems. Six solutions.
            </span>
          </span>
        </h1>

        {/* Meta stats */}
        <div className="flex flex-wrap items-center gap-8 mb-10 animate-fade-up [animation-delay:550ms] relative z-10">
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-3xl font-normal leading-none tracking-[-0.03em] text-ink">10+</span>
            <span className="text-2xs font-semibold tracking-[0.1em] uppercase text-ink-tertiary">Years</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-3xl font-normal leading-none tracking-[-0.03em] text-ink">6</span>
            <span className="text-2xs font-semibold tracking-[0.1em] uppercase text-ink-tertiary">Case studies</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-3xl font-normal leading-none tracking-[-0.03em] text-ink">2</span>
            <span className="text-2xs font-semibold tracking-[0.1em] uppercase text-ink-tertiary">Companies</span>
          </div>
          <div className="w-px h-9 bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-3xl font-normal leading-none tracking-[-0.03em] text-ink">0→1</span>
            <span className="text-2xs font-semibold tracking-[0.1em] uppercase text-ink-tertiary">Builder</span>
          </div>
        </div>

        {/* Description */}
        <p className="max-w-[480px] text-base leading-[1.75] text-ink-secondary animate-fade-up [animation-delay:700ms] relative z-10">
          Each case covers a distinct challenge — organisational, strategic, design, commercial. Written to be honest about
          what was hard, what worked, and what I&apos;d do differently.
        </p>
      </header>
      </div>

      {/* Divider */}
      <div className="px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Filter chips + bento grid */}
      <CasesBento />
    </>
  )
}
