import type { ReactElement } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Patricia Bayona — Product Manager & Head of UX',
  description:
    'Portfolio of Patricia Bayona Bultó — Product Manager and Head of UX with 10+ years building digital products. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

const TAGS = ['LINK Mobility', 'Alqua', 'Discovery to Delivery', 'UX Research', 'Roadmapping']

export default function LandingPage(): ReactElement {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-6 py-12">
      {/* Background orbs */}
      <div className="landing-orb-1" aria-hidden="true" />
      <div className="landing-orb-2" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">
        <p
          className="section-label mb-4"
          style={{ animation: 'land-up 500ms 180ms both cubic-bezier(.4,0,.2,1)' }}
        >
          Product Manager · Head of UX
        </p>

        <h1
          className="font-serif text-5xl lg:text-6xl text-ink mb-4 tracking-tight"
          style={{ animation: 'land-up 500ms 280ms both cubic-bezier(.4,0,.2,1)' }}
        >
          Patricia Bayona
        </h1>

        <p
          className="text-base lg:text-lg text-ink-secondary mb-8 max-w-lg"
          style={{ animation: 'land-up 400ms 380ms both cubic-bezier(.4,0,.2,1)' }}
        >
          Turning user insight into product strategy — from MVPs to CPaaS platforms
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TAGS.map((tag, i) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs border border-border rounded-full text-ink-secondary"
              style={{ animation: `land-up-sm 350ms ${520 + i * 60}ms both cubic-bezier(.4,0,.2,1)` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className="text-sm text-ink-tertiary mb-8"
          style={{ animation: 'land-scale 300ms 820ms both cubic-bezier(.4,0,.2,1)' }}
        >
          How would you like to explore my work?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[520px]">
          {/* AI card */}
          <Link
            href="/chat"
            className="group flex-1 text-left border border-border rounded-xl p-6 bg-white hover:border-accent hover:bg-accent/5 hover:-translate-y-[3px] transition-all duration-[220ms] shadow-sm"
            style={{ animation: 'land-left 450ms 1000ms both cubic-bezier(.34,1.56,.64,1)' }}
          >
            <div className="mb-4 w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.41 1.41M11.36 11.36l1.42 1.42M3.22 12.78l1.41-1.41M11.36 4.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-medium text-ink mb-2">AI experience</h3>
            <p className="text-sm text-ink-secondary mb-5 leading-relaxed">
              Chat with a version of me. Ask anything — my work, my process, my decisions.
            </p>
            <span className="text-sm text-accent font-medium opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[180ms] inline-block">
              Open AI chat →
            </span>
          </Link>

          {/* Human card */}
          <Link
            href="/portfolio"
            className="group flex-1 text-left border border-border rounded-xl p-6 bg-white hover:border-accent hover:bg-accent/5 hover:-translate-y-[3px] transition-all duration-[220ms] shadow-sm"
            style={{ animation: 'land-right 450ms 1100ms both cubic-bezier(.34,1.56,.64,1)' }}
          >
            <div className="mb-4 w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 15a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-medium text-ink mb-2">Human experience</h3>
            <p className="text-sm text-ink-secondary mb-5 leading-relaxed">
              Browse my portfolio, case studies, and work at your own pace.
            </p>
            <span className="text-sm text-accent font-medium opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[180ms] inline-block">
              View portfolio →
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
