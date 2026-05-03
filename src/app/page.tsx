import type { ReactElement } from 'react'
import Link from 'next/link'

export const metadata = {
  title: { absolute: 'Patricia Bayona — Product Manager & UX Lead' },
  description:
    'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

export default function LandingPage(): ReactElement {
  return (
    <div className="min-h-screen md:h-screen md:overflow-hidden flex flex-col">
      {/* ── Split panels ─────────────────────────────────────────── */}
      <div className="split-container flex-1 min-h-0">

        {/* Left — dark / AI */}
        <div className="split-panel split-panel-left" style={{ backgroundColor: '#0f0f0f' }}>
          <div className="flex flex-col items-center text-center w-full max-w-[288px] px-6">

            {/* Icon */}
            <div className="split-icon-dark w-11 h-11 rounded-full flex items-center justify-center mb-7">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.41 1.41M11.36 11.36l1.42 1.42M3.22 12.78l1.41-1.41M11.36 4.64l1.42-1.42"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Label */}
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5 text-white/35">
              Ask anything
            </p>

            {/* Title */}
            <h2 className="font-serif text-[2.25rem] font-bold text-white leading-tight mb-4">
              AI experience
            </h2>

            {/* Description */}
            <p className="text-[13px] leading-[1.65] mb-8 text-white/40">
              Chat with a version of me. Ask about my work, process or decisions.
            </p>

            {/* CTA */}
            <Link href="/chat" className="split-btn-dark inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium rounded-full">
              Start chatting →
            </Link>

            {/* Badge */}
            <p className="split-badge-dark mt-5 text-[11px] rounded-full px-3 py-1">
              Powered by ChatGPT
            </p>
          </div>
        </div>

        {/* Right — light / portfolio */}
        <div className="split-panel split-panel-right bg-white" style={{ borderLeft: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="flex flex-col items-center text-center w-full max-w-[288px] px-6">

            {/* Icon */}
            <div className="split-icon-light w-11 h-11 rounded-full flex items-center justify-center mb-7">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 15a6 6 0 0 1 12 0"
                  stroke="rgba(0,0,0,0.38)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Label */}
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5 text-black/30">
              Browse at your pace
            </p>

            {/* Title */}
            <h2 className="font-serif text-[2.25rem] font-bold leading-tight mb-4" style={{ color: '#131310' }}>
              Human experience
            </h2>

            {/* Description */}
            <p className="text-[13px] leading-[1.65] mb-8 text-black/40">
              Case studies, process and decisions — structured the traditional way.
            </p>

            {/* CTA */}
            <Link href="/portfolio" className="split-btn-light inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium rounded-full">
              View portfolio →
            </Link>

            {/* Badge */}
            <p className="split-badge-light mt-5 text-[11px] rounded-full px-3 py-1">
              6 case studies
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
