import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CaseImages } from '~/components/image-lightbox.client'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CasePdfModal } from '~/components/case-pdf-modal.client'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { ResultItem } from '~/components/results-strip.client'

const TITLE = 'Building the UX System'
const SUBTITLE =
  'Designing the process, methodology and feedback loops that made research-led product development real at LINK'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/ux-system/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/ux-system/opengraph-image'],
  },
}

const TAGS = ['UX Process Design', 'Research Methodology', 'Team Building', 'Customer Program', 'AI Integration']

const ROLE_CARDS = [
  {
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    title: 'Methodology design',
    body: 'Designed and implemented the four-phase Double Diamond process adapted for a distributed B2B platform team.',
  },
  {
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Research infrastructure',
    body: 'Built the tooling, templates and research contact network — Dovetail, Usersnap, Figma templates — that made research operationally possible at scale.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Customer Program',
    body: 'Created and scaled the co-creation initiative with enterprise clients — including DHL and DNB — turning ad-hoc interviews into a structured ongoing relationship.',
  },
  {
    icon: 'M17 8a5 5 0 11-10 0 5 5 0 0110 0zM3 21v-1a6 6 0 016-6h6a6 6 0 016 6v1',
    title: 'Team development',
    body: 'Fortnightly retrospectives, shared Figma templates, and Confluence documentation that built a common working culture across Spain, Macedonia and Bulgaria.',
  },
  {
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    title: 'AI integration',
    body: 'Launched the internal AI Learning Hub and beta-tested AI-native portal features — building the team\'s capability to design for AI-augmented workflows.',
  },
  {
    icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7v5l3 2',
    title: 'Organisational change',
    body: 'Built research credibility inside an organisation that had never formalised UX — turning scepticism into advocacy, one concrete outcome at a time.',
  },
]

const RESULTS: ResultItem[] = [
  { value: '4', label: 'Mandatory phases', context: 'Discover · Define · Develop · Deliver — no skipping', hero: true },
  { value: '5+', label: 'Enterprise co-creation clients', context: 'Including DHL, DNB, Volvofinans Bank and NAV', hero: false },
  { value: '25+', label: 'External research contacts', context: 'In the structured research database', hero: false },
  { value: '3', label: 'AI learning tracks', context: 'Product design, UX practice, PM awareness', hero: false },
  { value: '1', label: 'Searchable knowledge base', context: 'All research archived in Dovetail — accessible to every PM', hero: false },
  { value: '0', label: 'Research phases skipped', context: 'Since the process became mandatory in 2022', hero: false },
]

const LESSONS = [
  {
    body: 'Process change is culture change. The methodology only works when the people using it believe it makes their work better — not more compliant. I spent as much time on the narrative around the process as on the process itself.',
  },
  {
    body: 'The argument that worked was always concrete: this engineer saved two weeks because a research finding changed the spec before build started. I made those moments visible, consistently, and the organisation\'s posture towards research shifted because of them.',
    bold: 'Show the cost of skipping. Not the virtue of not skipping.',
  },
  {
    body: 'The goal was always a system that runs without me. When new team members can onboard into a documented process, access a library of past research, and connect with the customer panel on their own — that\'s when you know you built something real.',
  },
]

// ── Internal server components ────────────────────────────────────────

function MethodologyCard() {
  const phases = [
    {
      num: '01',
      name: 'Discover',
      color: 'bg-[#E8DFF7]',
      items: ['Customer interviews', 'Support ticket analysis', 'Data analytics', 'Competitive research'],
    },
    {
      num: '02',
      name: 'Define',
      color: 'bg-[#DCF0F7]',
      items: ['Research synthesis', 'HMW questions', 'Problem framing', 'Research presentation'],
    },
    {
      num: '03',
      name: 'Develop',
      color: 'bg-[#E8DFF7]',
      items: ['Ideation sessions', 'Wireframes & flows', 'Figma templates', 'Prototype variants'],
    },
    {
      num: '04',
      name: 'Deliver',
      color: 'bg-[#DCF0F7]',
      items: ['Usability testing', 'Dovetail synthesis', 'Engineering specs', 'Validation sign-off'],
    },
  ]
  return (
    <div className="bg-white border border-[#E0DFD7] rounded-xl overflow-hidden">
      {/* Browser chrome */}
      <div className="grid items-center gap-3 px-3.5 py-2.5 bg-[#FAFAF7] border-b border-[#E0DFD7]" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-70" />
        </div>
        <div className="flex items-center gap-1.5 justify-self-center bg-white border border-[#E0DFD7] rounded px-3 py-1 text-[9px] text-[#6A6960] max-w-[220px]">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <path d="M9 5V4a3 3 0 10-6 0v1M3 5h6v5H3V5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          confluence.linkmobility.com / ux-methodology
        </div>
        <div />
      </div>
      {/* Content */}
      <div className="p-5" style={{ minHeight: 280 }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block text-[10px] font-semibold tracking-label uppercase text-accent bg-[#F3EFFC] px-2 py-0.5 rounded">
            UX PROCESS · v3.2
          </span>
          <span className="flex items-center gap-1 text-[9px] text-[#2C8E5C] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C8E5C] animate-pulse" />
            Active
          </span>
        </div>
        <div className="font-serif text-sm font-medium text-[#131310] leading-snug mb-3.5">
          The Revamped Double Diamond
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {phases.map((phase) => (
            <div key={phase.num} className={`${phase.color} rounded-lg p-3`}>
              <div className="text-[9px] font-bold tracking-widest uppercase text-[#6667AB] mb-1.5">
                {phase.num} — {phase.name}
              </div>
              <div className="flex flex-col gap-0.5">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#6667AB] opacity-50 flex-shrink-0" />
                    <span className="text-[9px] text-[#4A3780]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 py-2 bg-[#131310] rounded-lg">
          <p className="text-[9px] text-[#F6F5F0]/80 leading-[1.5]">
            <span className="text-[#C3B9EB] font-semibold">Non-negotiable rule:</span>{' '}
            No phase starts until the previous one is complete. No wireframes during research.
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────

export default function UxSystemPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'ux-system')
  const prevCase = caseIndex > 0 ? CASES_META[caseIndex - 1] : null
  const nextCase = caseIndex < CASES_META.length - 1 ? CASES_META[caseIndex + 1] : null

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <header className="relative pt-20 pb-0 overflow-hidden bg-white isolate">
        {/* Mesh gradient orbs */}
        <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute rounded-full"
            style={{
              top: '-180px', right: '-80px', width: '680px', height: '680px',
              background: 'radial-gradient(circle at 60% 35%, #8AC8E7, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.45,
              animation: 'mesh-drift-2 20s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '-140px', left: '-120px', width: '640px', height: '640px',
              background: 'radial-gradient(circle at 40% 40%, #C3B9EB, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-1 22s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '180px', right: '25%', width: '500px', height: '500px',
              background: 'radial-gradient(circle at 50% 50%, #B5E4D8, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.45,
              animation: 'mesh-drift-3 17s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: '-180px', left: '15%', width: '520px', height: '520px',
              background: 'radial-gradient(circle at 50% 50%, rgba(138,200,231,0.5), transparent 70%)',
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-4 18s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Two-column layout */}
        <div
          className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10 lg:min-h-[540px]"
        >
          {/* Left: text */}
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:100ms]">
              <div className="w-8 h-px bg-gradient-to-r from-accent to-transparent" aria-hidden />
              <Link
                href="/portfolio/cases"
                className="group flex items-center gap-2 text-2xs font-semibold tracking-widest uppercase text-ink-tertiary hover:text-accent transition-colors duration-200"
              >
                <svg className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                All cases
              </Link>
              <span className="text-ink-tertiary opacity-30 text-2xs" aria-hidden>/</span>
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 02</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-accent-ink">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-fine text-ink-secondary">LINK Mobility · 2021 — Present</span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg">
              Building a research system<br />
              inside a company that had<br />
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(120deg, #8AC8E7 0%, #6667ab 50%, #8AC8E7 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'case-grad-pan 8s ease-in-out infinite',
                }}
              >
                never had one.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How I designed the methodology, infrastructure and culture that transformed how LINK built products — and made{' '}
              <strong className="text-ink font-medium">research-led design the default</strong>, not the exception.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up [animation-delay:560ms]">
              {TAGS.map((tag) => (
                <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-secondary border border-border bg-white/70 px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right: methodology card */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div
              style={{
                transform: 'rotate(1.2deg)',
                filter: 'drop-shadow(0 30px 60px rgba(20,14,40,0.16)) drop-shadow(0 12px 24px rgba(20,14,40,0.09))',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="hover:[transform:rotate(0deg)_translateY(-4px)]"
            >
              <MethodologyCard />
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              ['Client', 'LINK Mobility'],
              ['Sector', 'CPaaS · Enterprise messaging'],
              ['Role', 'VP of UX & Product Manager'],
              ['Scope', 'Process · Tools · Team · Culture'],
              ['Timeline', '2021 — Present'],
            ].map(([k, v], i) => (
              <div key={k} className="animate-fade-up" style={{ animationDelay: `${720 + i * 80}ms` }}>
                <div className="text-2xs font-semibold tracking-label uppercase text-ink-tertiary mb-1">{k}</div>
                <div className="text-sm font-medium text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── THE SITUATION ─────────────────────────────────────────────── */}
      <section id="story" className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">01 — The situation</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              There was no shortage of opinions about what customers wanted.{' '}
              <span className="text-ink-secondary font-normal">There was a shortage of evidence.</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-5">
            <p className="text-body leading-[1.7] text-ink-secondary reveal">
              When I joined LINK, there was no UX process. There were designers who produced screens, and there were product managers who defined requirements. But the connective tissue between customer insight, product decision, and design execution didn&apos;t exist. Research happened informally or not at all. Validation was whoever shouted loudest in a meeting. Delivery often meant engineering built something nobody had tested with a real user.
            </p>
            <p className="text-body leading-[1.7] text-ink-secondary reveal">
              This wasn&apos;t unusual for a company that had grown through acquisitions — each product team had its own habits, its own tools, its own definition of done. But it meant that building MyLINK Portal on top of that foundation was like building on sand. If we were going to create something that customers would actually use, we needed a shared system for understanding them first.
            </p>
            <p className="text-body leading-[1.7] text-ink-secondary reveal">
              I built that system from scratch. This case describes how.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ───────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            The design team produced screens. The engineering team built features.{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>Nobody had spoken to a customer first. That was the problem I was there to solve.</em>
          </p>
        </div>
      </section>

      {/* ── MY ROLE & SCOPE ───────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — My role &amp; scope</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              I owned the whole system.{' '}
              <span className="text-ink-secondary font-normal">Not just the methodology — the tools, the team, the culture, and the buy-in.</span>
            </h2>
          </div>
          <div className="grid gap-4 max-w-[1100px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ROLE_CARDS.map((card, i) => (
              <div
                key={card.title}
                className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_8px_24px_-8px_rgba(102,103,171,0.18)] reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <svg className="text-accent mb-3.5" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d={card.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-mid font-semibold text-ink mb-1.5">{card.title}</div>
                <div className="text-fine text-ink-secondary leading-[1.5]">{card.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I BUILT IT ────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">03 — How I built it</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Four interlocking pieces.{' '}
              <span className="text-ink-secondary font-normal">Each one making the next one possible.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 1: The Double Diamond */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">The methodology</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    I chose the Double Diamond as the structural framework — not because it was fashionable, but because it addressed the specific failure mode I saw at LINK: teams were jumping to solutions before they understood problems. The Double Diamond&apos;s core principle — doing the right things before doing things right — was exactly the discipline the organisation needed.
                  </p>
                  <p>
                    But the standard Double Diamond wasn&apos;t enough. I adapted it to the specific constraints of a distributed team across three countries, product managers new to UX methods, and stakeholders who needed tangible outputs at every stage to maintain trust.
                  </p>
                  <p>
                    The non-negotiable rule: no phase starts until the previous one is complete. No wireframes during research. The pressure to skip ahead was constant. The rule never moved.
                  </p>
                </div>
                <div className="mt-8 space-y-2.5">
                  <CasePdfModal
                    href="/cases/02/GP-Solution_Building_and_Validation_Methodology-080426-123922.pdf"
                    label="Solution Building & Validation"
                  />
                  <CasePdfModal
                    href="/cases/02/GP-Template._Product_Requirements._Documentation.-080426-122712.pdf"
                    label="Product Requirements Template"
                  />
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <CasePdfViewer
                  href="/cases/02/GP-UX_and_Design_Methodology-080426-123509.pdf"
                  label="UX & Design Methodology"
                />
              </div>
            </div>

            {/* Step 2: Research Infrastructure */}
            <div className="py-16 reveal">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div>
                  <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">The infrastructure</div>
                  <div className="space-y-4 text-base leading-[1.65] text-ink-secondary mb-8">
                    <p>
                      The methodology was only valuable if the team had the tools and contacts to execute it. I built the infrastructure that made research operationally possible at scale.
                    </p>
                    <p>
                      For qualitative internal research: structured interviews with sales and support teams across Northern Europe, internal workshops to surface tacit knowledge, and legacy platform analysis to understand what customers actually used.
                    </p>
                    <p>
                      For qualitative external research: customer interviews using Think Aloud methodology, validation workshops at multiple fidelity levels, and all sessions recorded, transcribed, and synthesised in <strong className="text-ink font-medium">Dovetail</strong> — creating a growing institutional knowledge base rather than one-off insights.
                    </p>
                    <p>
                      For quantitative research: product analytics tracking in the portal from day one (something that required sustained internal advocacy), and systematic Salesforce ticket analysis to surface patterns that individual interviews couldn&apos;t reach.
                    </p>
                  </div>
                  <div className="space-y-2.5">
                    <CasePdfModal
                      href="/cases/02/GP-Interviews_and_Workshops_guide._Research_Methodology-080426-123655.pdf"
                      label="Interviews & Workshop Guides"
                    />
                    <CasePdfModal
                      href="/cases/02/GP-Support_tickets._Research_Methodology-080426-123740.pdf"
                      label="Support Tickets Research Methodology"
                    />
                    <CasePdfModal
                      href="/cases/02/GP-Validation_workshops._Building_and_Validation_Methodology-080426-124042.pdf"
                      label="Validation Workshop Guide"
                    />
                  </div>
                </div>
                <div className="lg:sticky lg:top-24">
                  <CasePdfViewer
                    href="/cases/02/GP-Research_Methodology-080426-123554.pdf"
                    label="Research Methodology"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Customer Program */}
            <div className="py-16 reveal">
              <CaseImages images={[{ src: '/cases/02/customer-program.png', alt: 'Customer Program — enterprise clients including DHL, DNB, Volvo, Storebrand, Inditex' }]} />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12 items-start">
                <div>
                  <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">The customer program</div>
                  <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                    <p>
                      The research infrastructure gave us methods. The Customer Program gave us relationships.
                    </p>
                    <p>
                      I created the Customer Program from scratch — a structured co-creation initiative that brought a small group of enterprise clients directly into the product development process. The goal was not to collect feedback at scale, but to build deep, ongoing relationships with clients who could tell us things that surveys never would.
                    </p>
                    <p>
                      I started by working with sales representatives to identify the right candidates: clients who were strategic to LINK, technically sophisticated, and trusted enough by their account managers to have an honest conversation about what wasn&apos;t working. The program offered early access to new features and a direct line to the product team. In return: workshops, prototype testing, and interviews.
                    </p>
                    <p>
                      The program eventually became self-service — customers could sign up from within MyLINK, submit feedback through an integrated Usersnap widget, and participate on their own schedule. That shift — from manually curated to embedded in the product — meant customer insight stopped being something we had to go and find.{' '}
                      <strong className="text-ink font-medium">It started coming to us.</strong>
                    </p>
                  </div>
                </div>
                <div className="lg:sticky lg:top-24">
                  <CasePdfViewer href="/cases/02/DHL_Customer_Program.pdf" label="DHL Customer Program" />
                </div>
              </div>
            </div>

            {/* Step 4: AI Learning Hub */}
            <div className="py-16 reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">The AI learning hub</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary mb-8">
                  <p>
                    In 2025 I launched an internal AI Learning Hub within the UX team — a structured programme to build capability for AI-integrated ways of working across three tracks: AI product design, AI-augmented UX practice, and AI-aware product management.
                  </p>
                  <p>
                    The curriculum was built on the premise that AI changes not just the tools we use but the type of user we&apos;re designing for. Customers who use AI daily have different mental models, different expectations of speed and intelligence, and different tolerance for friction. Our research methods and design patterns needed to evolve accordingly.
                  </p>
                  <p>
                    In practice, AI integration has already changed how we work. Research sessions are recorded and synthesised with AI assistance — reducing the time from interview to insight. Requirements documents are drafted with AI support. Workshop outputs are processed faster. We also beta-launched an AI-assisted message composer — the first AI-native capability in the portal — giving the team direct experience with the challenges of AI product design: managing user expectations, handling failure states, deciding where AI adds value versus where it creates confusion.
                  </p>
                </div>
                <CaseImages images={[{ src: '/cases/02/UX_Learning_HUB_Kickoff_workshop.jpg', alt: 'AI Learning Hub kickoff workshop' }]} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border" id="results">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-[800px] mx-auto text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">05 — Results</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              The numbers are a proxy.{' '}
              <span className="text-ink-secondary font-normal">The real result is what changed in the room.</span>
            </h2>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ResultsStrip results={RESULTS} />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              Product managers who had never run a user interview now conduct research regularly. Engineering teams that were once sceptical of UX now ask for research before starting builds. The conversation between product, design and tech has changed — it starts with the problem, not the solution.
            </p>
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              Most importantly: the system runs without me carrying it. New team members onboard into a documented process, access a library of past research, and connect with the customer panel through the portal.{' '}
              <em>That&apos;s what a system looks like when it actually works.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT I LEARNED ────────────────────────────────────────────── */}
      <section
        className="py-24 border-t border-border relative"
        style={{
          background: 'linear-gradient(135deg, #111110 0%, #0f1a1f 70%, #111110 100%)',
          backgroundSize: '200% 200%',
          animation: 'case-dark-pan 18s ease-in-out infinite',
          color: '#F6F5F0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">06 — What I learned</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-fluid-md" style={{ color: '#F6F5F0' }}>
              Process change is culture change.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>The methodology is the easy part.</span>
            </h2>
          </div>

          <div className="max-w-[760px] mx-auto space-y-6 mb-16">
            {LESSONS.map((lesson, i) => (
              <p key={i} className="text-body leading-[1.7] reveal" style={{ color: 'rgba(246,245,240,0.82)', transitionDelay: `${i * 60}ms` }}>
                {lesson.body}{lesson.bold && <> <strong style={{ color: '#F6F5F0', fontWeight: 500 }}>{lesson.bold}</strong></>}
              </p>
            ))}
          </div>

          <div className="max-w-[760px] mx-auto reveal">
            <div className="text-2xs font-semibold tracking-label uppercase mb-4" style={{ color: '#8AC8E7' }}>
              In their words
            </div>
            <p className="font-serif italic text-body leading-[1.6]" style={{ color: 'rgba(246,245,240,0.9)' }}>
              &ldquo;What surprised me most after establishing this process wasn&apos;t the business impact — though that was real. It was how much better the daily working life of the UX and frontend teams became. Less rework, less confusion, less of that exhausting cycle of building something and then being told it wasn&apos;t what was needed. People started enjoying their work more. The process gave them clarity, and clarity gave them confidence. That&apos;s not something you can put in a metric, but it&apos;s the thing I&apos;m most proud of.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ───────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
