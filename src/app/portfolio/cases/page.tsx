import React from 'react'
import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CasesBento } from '~/components/cases-bento.client'
import { MARQUEE_ITEMS } from '~/constants/site'

export const metadata = {
  title: 'Case Studies',
  description: 'Six detailed case studies spanning product strategy, UX leadership, roadmapping, go-to-market, and business model innovation.',
}

const CASE_IMAGES = [
  { number: '01', src: '/cases/01/portal-architecture.png',          alt: 'MyLINK Portal — product architecture',             pos: 'object-top'    },
  { number: '02', src: '/cases/02/double-diamond.png',               alt: 'UX System — Double Diamond methodology',           pos: 'object-center' },
  { number: '03', src: '/cases/03/02_roadmap_2026_productplan.jpg',  alt: 'Roadmap — Product Plan view',                     pos: 'object-top'    },
  { number: '04', src: '/cases/04/01_engage_roadmap_2024_2027.jpg',  alt: 'Engage GTM — roadmap 2024–2027',                  pos: 'object-top'    },
  { number: '05', src: '/cases/05/01_sticky_ad_format.jpg',          alt: 'Alqua Pricing — sticky ad format',                pos: 'object-center' },
  { number: '06', src: '/cases/06/adi-tool-1.png',                   alt: 'Alqua Digital Index — ranking tool',              pos: 'object-top'    },
]

const Z_OFFSETS = [14, 4, 20, 2, 10, 16]
// delay and duration per card — non-sequential order so they don't arrive as a pack
const CARD_ANIMS = [
  { delay: 360, dur: 920 },   // card 0: third wave
  { delay: 600, dur: 860 },   // card 1: fifth
  { delay: 80,  dur: 1000 },  // card 2: first
  { delay: 740, dur: 880 },   // card 3: sixth
  { delay: 210, dur: 950 },   // card 4: second
  { delay: 490, dur: 900 },   // card 5: fourth
]

export default function CasesPage(): ReactElement {
  return (
    <>
      {/* ── Marquee strip ─────────────────────────────────────────────── */}
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

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <header className="relative pt-8 pb-0 overflow-hidden bg-white isolate">
        {/* Mesh gradient orbs */}
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              top: '-200px', left: '-100px', width: '720px', height: '720px',
              background: 'radial-gradient(circle at 35% 35%, #C3B9EB, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.55,
              animation: 'mesh-drift-1 18s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '-120px', right: '-120px', width: '620px', height: '620px',
              background: 'radial-gradient(circle at 50% 50%, #8AC8E7, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.4,
              animation: 'mesh-drift-2 22s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '200px', left: '30%', width: '480px', height: '480px',
              background: 'radial-gradient(circle at 50% 50%, #E8DFF7, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.7,
              animation: 'mesh-drift-3 16s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: '-200px', right: '20%', width: '540px', height: '540px',
              background: 'radial-gradient(circle at 50% 50%, rgba(171,107,255,0.35), transparent 70%)',
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-4 20s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Two-column layout */}
        <div
          className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 lg:min-h-[540px]"
        >
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:100ms]">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" aria-hidden />
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">
                Selected work · 2018 – present
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg">
              Case Studies<br />
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(120deg, #6667ab 0%, #8AC8E7 50%, #6667ab 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'case-grad-pan 8s ease-in-out infinite',
                }}
              >
                Six problems. Six solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              Each case covers a distinct challenge — organisational, strategic, design, commercial.
              Written to be <strong className="text-ink font-medium">honest about what was hard</strong>,
              what worked, and what I&apos;d do differently.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 mb-10 animate-fade-up [animation-delay:540ms]">
              {[
                { value: '10+', label: 'Years' },
                { value: '6',   label: 'Cases' },
                { value: '2',   label: 'Companies' },
                { value: '0→1', label: 'Builder' },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-serif text-2xl font-normal leading-none tracking-[-0.03em] text-ink">{stat.value}</span>
                    <span className="text-2xs font-semibold tracking-[0.1em] uppercase text-ink-tertiary">{stat.label}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px h-8 bg-border" />}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap animate-fade-up [animation-delay:640ms]">
              <a
                href="#cases"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(102,103,171,0.28)]"
              >
                Browse all cases
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M7 3v8M3 7.5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/portfolio/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-ink bg-white/60 border border-border text-sm font-medium transition-all duration-200 hover:bg-white/90 hover:border-ink/30"
              >
                About Patricia
              </Link>
            </div>
          </div>

          {/* Right: 3D perspective grid */}
          <div
            className="hidden lg:flex items-center justify-center animate-fade-up [animation-delay:300ms]"
            style={{ perspective: '1100px', perspectiveOrigin: '55% 45%' }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 186px)',
                gridTemplateRows: 'repeat(2, 166px)',
                gap: '14px',
                transformStyle: 'preserve-3d',
                animation: 'mosaic-float 10s ease-in-out infinite',
              }}
            >
              {CASE_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className="mosaic-card relative overflow-hidden rounded-xl border-[3px] border-white shadow-[0_8px_28px_rgba(20,14,40,0.20),0_2px_8px_rgba(20,14,40,0.10)]"
                  style={{
                    '--tz': `${Z_OFFSETS[i]}px`,
                    animation: `mosaic-card-in ${CARD_ANIMS[i].dur}ms cubic-bezier(0.16,1,0.3,1) ${CARD_ANIMS[i].delay}ms backwards`,
                  } as React.CSSProperties}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`object-cover ${img.pos}`}
                    quality={90}
                    sizes="186px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              ['Discipline', 'Product · UX · GTM'],
              ['Industries', 'MarTech · SaaS · Telco'],
              ['Scope', 'Strategy to delivery'],
              ['Team scale', 'Solo to 25+ stakeholders'],
              ['Geography', 'Spain · Nordics · LatAm'],
            ].map(([k, v], i) => (
              <div key={k} className="animate-fade-up" style={{ animationDelay: `${720 + i * 80}ms` }}>
                <div className="text-2xs font-semibold tracking-label uppercase text-ink-tertiary mb-1">{k}</div>
                <div className="text-sm font-medium text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Cases grid ────────────────────────────────────────────────── */}
      <div id="cases">
        <CasesBento />
      </div>

      {/* ── AI Portfolio Assistant ────────────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-16 lg:py-20">
        <div className="max-w-[860px] mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-5">
            AI Portfolio Assistant
          </p>
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.03em] text-white mb-4">
            Ask AI about the cases
          </h2>
          <p className="text-sm text-white/45 leading-[1.65] mb-8 max-w-[44ch] mx-auto">
            Ask the AI Portfolio&apos;s Assistant about the cases, process, decisions and background.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white text-sm font-medium border border-white/15 transition-all duration-300 hover:bg-white/15 hover:border-white/25 hover:-translate-y-0.5"
          >
            Start chatting
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
