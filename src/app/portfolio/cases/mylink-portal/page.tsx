import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { SituationAccordion } from '~/components/situation-accordion.client'
import { StepCarousel } from '~/components/step-carousel.client'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { SituationPanel } from '~/components/situation-accordion.client'

const TITLE = 'MyLINK Portal'
const SUBTITLE = 'Unifying 50+ legacy products into one platform — from the inside out'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/mylink-portal/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/mylink-portal/opengraph-image'],
  },
}

const TAGS = ['Product Strategy', 'UX Leadership', 'Organisational Change', 'Go-to-Market', 'Platform Design']

const SITUATION_PANELS: SituationPanel[] = [
  {
    tag: 'What customers experienced',
    dotColor: 'bg-red-400',
    items: [
      {
        title: 'Frozen products',
        body: 'Many had lost their original engineering teams when companies were acquired, leaving no one to build new features or fix bugs. Clients were effectively paying for stagnation.',
        icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
      },
      {
        title: 'Multiple logins, no coherent experience',
        body: 'When a customer needed functionality available in a different LINK product, the solution was to give them access to that product too — resulting in multiple logins, multiple interfaces, no coherent experience.',
        icon: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
      },
      {
        title: 'No developer experience',
        body: 'There were no clear personas, no documentation designed for technical users, and the value delivered rarely matched the price paid.',
        icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
      },
      {
        title: 'Negligible uptake',
        body: 'Use cases that could genuinely transform how clients communicate with their end users either didn\'t exist or were so hard to adopt that uptake was negligible.',
        icon: 'M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z',
      },
      {
        title: 'Low revenue per customer',
        body: 'Revenue per customer was low. Upselling was structurally impossible — there was no unified surface to show clients what else existed, or to make them want it.',
        icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
      },
    ],
  },
  {
    tag: 'What was broken internally',
    dotColor: 'bg-amber-400',
    items: [
      {
        title: 'Single-client risk',
        body: 'Many products depended on a single large client to sustain their entire P&L. One contract loss could make a product financially unviable overnight.',
        icon: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
      },
      {
        title: 'Parallel work, no alignment',
        body: 'Multiple engineering teams across the company were independently building the same features in their own products. The same problems were being solved in parallel, with no knowledge sharing and no strategic alignment.',
        icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
      },
      {
        title: 'Billing chaos',
        body: 'With every product running on a different provisioning system, invoices frequently didn\'t match — and some simply went unpaid. Finance teams were managing exceptions, not processes.',
        icon: 'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
      },
      {
        title: 'Tribal knowledge, expensive tickets',
        body: 'Every support ticket had an enormous cost. Teams had to learn multiple legacy systems, often depending on a single person who remembered how a product worked. Many tickets were never resolved.',
        icon: 'M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
      },
      {
        title: 'Political resistance',
        body: 'A group of managers had been pushing for change for years, but local market managers resisted — each protecting their product, their team, their slice of the organisation. Change had been promised before. Nobody believed it would happen this time either.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.68L5.68 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.68l11.22-11.22C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z',
      },
      {
        title: 'Engineering skepticism',
        body: 'The engineering organisation, based primarily in Bulgaria, operated with significant autonomy. Focused on APIs and technical delivery, they were resistant to product management involvement and openly skeptical of UX as a discipline.',
        icon: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
      },
    ],
  },
]

const ROLE_CARDS = [
  { icon: 'M5 3h14v18l-7-3-7 3V3z', title: 'Product strategy', body: 'Vision and roadmap for the portal across 6 European markets.' },
  { icon: 'M12 2a10 10 0 100 20A10 10 0 0012 2zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20', title: 'Go-to-market', body: 'Execution and rollout across NO, DK, FI, SE, ES, and Global Sales.' },
  { icon: 'M16 11a4 4 0 10-8 0 4 4 0 008 0zM3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2', title: 'UX team leadership', body: 'Leading the UX team across Spain, Macedonia, and Bulgaria.' },
  { icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z', title: 'Design system', body: 'End-to-end ownership of the portal\'s component library and design standards.' },
  { icon: 'M17 8a5 5 0 11-10 0 5 5 0 0110 0zM3 21v-1a6 6 0 016-6h6a6 6 0 016 6v1', title: 'Stakeholder management', body: 'From local market teams to C-1 leadership across the group.' },
  { icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7v5l3 2', title: 'Organisational change', body: 'Making it happen in an environment where it had been tried — and failed — before.' },
]

const RESULTS = [
  { value: '12,900+', label: 'Unique users', context: 'Across 6 European markets', hero: true },
  { value: '8m 41s', label: 'Avg. session duration', context: '14% bounce rate — strong for B2B enterprise', hero: false },
  { value: '10+', label: 'Legacy products', context: 'Migrated or sunset — 91–100% completion in Nordics', hero: false },
  { value: '6', label: 'Markets launched', context: 'Norway, Denmark, Finland, Sweden, Spain, Global Sales', hero: false },
  { value: '1', label: 'Team departure', context: 'In 4 years — the Macedonia team has since grown', hero: false },
  { value: '0', label: 'Open billing exceptions', context: 'Provisioning unification ended the daily financial fires', hero: false },
]

const LESSONS = [
  {
    num: 'i.',
    body: 'The hardest part was never the product. It was the organisation. I had to manage in three directions simultaneously — building confidence in a team that had been under-resourced, bringing along stakeholders who had been disappointed before, and maintaining credibility with leadership who needed to trust that the investment was worth it.',
  },
  {
    num: 'ii.',
    body: 'The thing that worked, consistently, was arriving prepared. Not just with a plan, but with something to show. And when showing something wasn\'t right, with questions that changed the direction of the conversation. Political rooms don\'t respond well to arguments. They respond to momentum.',
    bold: 'I learned to create it.',
  },
  {
    num: 'iii.',
    body: 'The Blueprint wasn\'t just a product document — it was a political tool. A written, agreed-upon north star made every difficult conversation easier.',
    bold: 'The debate was with the document, not with me.',
  },
]

// ── Internal server components ────────────────────────────────────────

function PortalSidebar() {
  const navItems = ['Overview', 'Messaging', 'Conversations', 'Numbers', 'Contacts', 'Reports', 'Billing']
  return (
    <div className="w-[130px] flex-shrink-0 bg-[#FAFAF7] border-r border-[#E0DFD7] p-3">
      <div className="flex items-center gap-1.5 px-1.5 pb-3 mb-2.5 border-b border-[#E0DFD7]">
        <span className="w-4 h-4 rounded bg-gradient-to-br from-[#6667ab] to-[#7557B8] flex-shrink-0" />
        <span className="text-[10px] font-semibold text-[#131310]">MyLINK</span>
      </div>
      <div className="flex flex-col gap-0.5">
        {navItems.map((item, i) => (
          <div
            key={item}
            className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[9px] ${i === 0 ? 'bg-[#F3EFFC] text-[#4A3780] font-medium' : 'text-[#6A6960]'}`}
          >
            <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${i === 0 ? 'bg-[#6667ab] opacity-80' : 'bg-current opacity-30'}`} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function PortalMain() {
  const statsData = [
    ['Messages sent', '2.41M', '+12%'],
    ['Delivered', '99.2%', '+0.4'],
    ['Active campaigns', '24', '+3'],
    ['Avg. cost', '€0.043', '−2%'],
  ]
  const tableRows = [
    ['Black Friday — DK', 'SMS', '180,420', 'Delivered'],
    ['Booking reminder', 'WhatsApp', '12,094', 'Active'],
    ['Auth OTP', 'SMS', '892,430', 'Delivered'],
    ['Newsletter — NO', 'Email', '24,180', 'Scheduled'],
  ]
  return (
    <div className="flex-1 min-w-0 flex flex-col">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#E0DFD7]">
        <span className="text-[9px] text-[#6A6960]">Overview · Norway</span>
        <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#C3B9EB] to-[#8AC8E7]" />
      </div>
      <div className="p-3 flex-1">
        <div className="text-2xs font-semibold text-[#131310] mb-2.5" style={{ fontFamily: 'Georgia, serif' }}>
          Good morning, Anders
        </div>
        <div className="grid grid-cols-4 gap-1.5 mb-2.5">
          {statsData.map(([label, value, change]) => (
            <div key={label} className="bg-[#FAFAF7] border border-[#E0DFD7] rounded p-1.5">
              <div className="text-[7px] uppercase tracking-wide text-[#A09E96] mb-0.5">{label}</div>
              <div className="text-2xs font-semibold text-[#131310]">{value}</div>
              <div className="text-[8px] text-[#2C8E5C]">{change}</div>
            </div>
          ))}
        </div>
        <div className="h-10 mb-2.5 border border-[#E0DFD7] rounded p-1 bg-white">
          <svg viewBox="0 0 300 32" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6667ab" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6667ab" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,28 C30,24 60,18 90,20 C120,22 150,12 180,8 C210,4 240,10 270,6 L300,6 L300,32 L0,32 Z" fill="url(#cg)" />
            <path d="M0,28 C30,24 60,18 90,20 C120,22 150,12 180,8 C210,4 240,10 270,6 L300,6" fill="none" stroke="#6667ab" strokeWidth="1" />
          </svg>
        </div>
        <div className="border border-[#E0DFD7] rounded overflow-hidden">
          <div className="grid grid-cols-4 gap-1 px-2 py-1 bg-[#FAFAF7] border-b border-[#E0DFD7]">
            {['Campaign', 'Channel', 'Sent', 'Status'].map((h) => (
              <span key={h} className="text-[7px] uppercase tracking-wide text-[#A09E96] font-semibold">{h}</span>
            ))}
          </div>
          {tableRows.map(([name, ch, sent, status], i) => (
            <div key={i} className="grid grid-cols-4 gap-1 px-2 py-1 border-t border-[#E0DFD7] first:border-0">
              <span className="text-[8px] text-[#131310] truncate">{name}</span>
              <span className="text-[8px] text-[#6A6960]">{ch}</span>
              <span className="text-[8px] text-[#131310] font-medium">{sent}</span>
              <span className={`text-[7px] font-medium px-1 py-0.5 rounded-full justify-self-start ${status === 'Delivered' ? 'bg-[#E5F4EC] text-[#2C8E5C]' : status === 'Active' ? 'bg-[#FCF3DF] text-[#A37514]' : 'bg-[#F0EFEA] text-[#6A6960]'}`}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PortalMock() {
  return (
    <div className="flex overflow-hidden" style={{ minHeight: 300 }}>
      <PortalSidebar />
      <PortalMain />
    </div>
  )
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#E0DFD7] rounded-xl overflow-hidden">
      <div className="grid items-center gap-3 px-3.5 py-2.5 bg-[#FAFAF7] border-b border-[#E0DFD7]" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-70" />
        </div>
        <div className="flex items-center gap-1.5 justify-self-center bg-white border border-[#E0DFD7] rounded px-3 py-1 text-[9px] text-[#6A6960] max-w-[200px]">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <path d="M9 5V4a3 3 0 10-6 0v1M3 5h6v5H3V5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          portal.linkmobility.com
        </div>
        <div />
      </div>
      {children}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────

export default function MylinkPortalPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'mylink-portal')
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
              background: 'radial-gradient(circle at 50% 50%, rgba(171,107,255,0.4), transparent 70%)',
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-4 20s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Two-column layout */}
        <div
          className="relative z-10 mx-auto px-8 grid items-center gap-10"
          style={{ maxWidth: 1280, gridTemplateColumns: '1fr 1fr', minHeight: 540 }}
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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 01</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-accent-ink">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-fine text-ink-secondary">LINK Mobility · 2021 — Ongoing</span>
            </div>

            {/* Title */}
            <h1
              className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg"
            >
              Unifying a fragmented<br />
              CPaaS into a single<br />
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
                product surface.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How I led the product strategy and UX rollout of <strong className="text-ink font-medium">MyLINK Portal</strong> across six European markets — and built the team, processes and political trust required to make organisational change actually happen.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up [animation-delay:560ms]">
              {TAGS.map((tag) => (
                <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-secondary border border-border bg-white/70 px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap animate-fade-up [animation-delay:640ms]">
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-paper text-sm font-medium transition-all duration-300 hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(102,103,171,0.28)]"
              >
                Read the case
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-ink bg-white/60 border border-border text-sm font-medium transition-all duration-200 hover:bg-white/90 hover:border-ink/30"
              >
                Skip to results
              </a>
            </div>
          </div>

          {/* Right: portal mockup */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div
              style={{
                transform: 'rotate(-1.5deg)',
                filter: 'drop-shadow(0 30px 60px rgba(20,14,40,0.18)) drop-shadow(0 12px 24px rgba(20,14,40,0.10))',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="hover:[transform:rotate(0deg)_translateY(-4px)]"
            >
              <BrowserFrame>
                <PortalMock />
              </BrowserFrame>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-8 py-6 grid gap-5" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            {[
              ['Client', 'LINK Mobility'],
              ['Sector', 'CPaaS · Enterprise messaging'],
              ['Role', 'PM → VP of UX'],
              ['Markets', '6 (NO · DK · FI · SE · ES · Global)'],
              ['Team', '3 countries · 1 departure in 4y'],
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
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">01 — The situation</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              A decade of acquisitions left LINK with dozens of products,{' '}
              <span className="text-ink-secondary font-normal">no shared infrastructure, and no shared experience.</span>
            </h2>
          </div>

          <SituationAccordion panels={SITUATION_PANELS} />
        </div>
      </section>

      {/* ── CALLOUT ───────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            The people who most needed this change were the most exhausted by the fact that it hadn&apos;t happened yet.{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>That was the environment I walked into.</em>
          </p>
        </div>
      </section>

      {/* ── MY ROLE & SCOPE ───────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — My role &amp; scope</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Hired as PM. Promoted to VP of UX within a year.{' '}
              <span className="text-ink-secondary font-normal">Building product, team, and process simultaneously.</span>
            </h2>
          </div>
          <div className="grid gap-4 max-w-[1100px] mx-auto" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
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

      {/* ── HOW I APPROACHED IT ───────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">03 — How I approached it</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Six moves, in order.{' '}
              <span className="text-ink-secondary font-normal">Each one earned the next.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 1: Copenhagen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">A turning point</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    My first major test came early: a strategy workshop in Copenhagen with the company&apos;s senior managers. I was 30, the only PM in the room, surrounded by men in their 40s who had been debating these problems for years. The conversation was going in circles — arguments about what constituted a product versus a feature, about ownership and priorities.
                  </p>
                  <p>At some point, my manager and the Head of Commercial were stuck. A long silence. I asked one question:</p>
                </div>
                <blockquote className="font-serif italic text-2xl leading-[1.35] text-ink border-l-2 border-accent pl-5 my-6">
                  &ldquo;Would this be upsell or upgrade?&rdquo;
                </blockquote>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    The room changed. That distinction — between selling into an existing plan and moving a client to a new one — had been invisible in the conversation, but it unlocked an entirely different way of thinking about the product offering. We spent the next hour restructuring the map.
                  </p>
                  <p>
                    That workshop taught me something I&apos;ve used ever since: in politically charged rooms, a well-placed question does more than any argument. I came to every subsequent meeting with something prepared to show — a wireframe, a prototype, a framework — and with a set of questions ready for moments when showing something wasn&apos;t the right move. I listened first, always. Then I taught. Then I asked.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[{ src: '/cases/01/Commercial_Product_Structure_-_Frame_10.jpg', alt: 'Commercial product structure mapping workshop' }]} />
              </div>
            </div>

            {/* Step 2: Blueprint */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">North star</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    Before touching any feature or sprint, I worked with the Head of Product to translate executive strategy into something the organisation could actually execute. The output was a product Blueprint — a document that defined what the portal was and was not, which legacy products would be migrated and which would be sunset, what the value proposition was for customers and for LINK internally, and how success would be measured.
                  </p>
                  <p>
                    This Blueprint became the north star for every subsequent decision. When stakeholders pushed for out-of-scope features, I pointed to the Blueprint. When engineering proposed solutions that diverged from the strategy, the Blueprint anchored the conversation. It is still the reference document today.
                  </p>
                  <p>
                    I also ran a naming and principles workshop early on — a deliberate move to give the project a codename and a shared identity. It sounds small. It wasn&apos;t. Teams defend what they helped name.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="grid gap-px bg-border border border-border rounded-xl overflow-hidden shadow-[0_12px_40px_-12px_rgba(20,14,40,0.12)]" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
                  <div className="bg-white p-7">
                    <div className="pb-5 mb-4 border-b border-border">
                      <span className="inline-block text-[10px] font-semibold tracking-label uppercase text-accent bg-[#F3EFFC] px-2 py-1 rounded mb-3">PRD · Confluence</span>
                      <div className="font-serif text-[1.375rem] font-medium text-ink leading-snug tracking-[-0.01em] mb-1">CPaaS Portal &amp; APIs</div>
                      <div className="text-fine text-ink-secondary italic">The ultimate product offering for LINK&apos;s customers</div>
                    </div>
                    <div className="flex flex-col">
                      {['1. Vision & principles','2. In scope · Out of scope','3. Migration & sunset map','4. Value proposition · customer','5. Value proposition · LINK','6. Success metrics','7. Provisioning & invoice rules'].map((item, i) => (
                        <div key={i} className="flex justify-between items-baseline py-2 border-b border-dashed border-border last:border-0">
                          <span className="text-fine text-ink">{item}</span>
                          <span className="text-xs text-ink-tertiary tabular-nums">P{(i + 1) * 3}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#FAFAF7] p-7 flex flex-col gap-5">
                    {[
                      { label: 'Owner', value: 'Patricia · Head of Product' },
                      { label: 'Status', value: 'Live · referenced', live: true },
                      { label: 'Used in', value: 'Every roadmap review since 2022' },
                    ].map((row) => (
                      <div key={row.label} className="flex flex-col gap-1">
                        <span className="text-2xs font-semibold tracking-label uppercase text-ink-tertiary">{row.label}</span>
                        {row.live ? (
                          <span className="text-sm font-medium text-ink inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#2C8E5C] shadow-[0_0_0_3px_rgba(44,142,92,0.18)] animate-pulse flex-shrink-0" />
                            {row.value}
                          </span>
                        ) : (
                          <span className="text-sm font-medium text-ink">{row.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Team */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">Team first</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    I was given a UX and frontend team assembled from a recently acquired company in Macedonia. They were talented but disconnected — from each other, from the product, from the broader organisation. Before we could design anything meaningful, we needed a shared way of working.
                  </p>
                  <p>
                    I started with fortnightly retrospectives — joint sessions with the UX team and the Macedonia tech team together. Not to review deliverables, but to surface the friction in their daily work and systematically reduce it. The frequency of retros tells its own story: we needed them every two weeks at the beginning. We now meet monthly. The problems didn&apos;t disappear — they shrank.
                  </p>
                  <p>
                    I then built a complete UX process from scratch: documented in Confluence, with Figma templates for every project type, with clear definitions of what research meant, how prototypes connected to engineering specs, how feedback loops worked. I invited the more resistant team members to contribute to the process rather than receive it. People defend what they help build.
                  </p>
                  <p>
                    I also requested that HR run a team dynamics workshop — a structured process to surface how we worked together. Some people left after that. The team that remained has been stable ever since. No one has left. That&apos;s a metric too.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[
                  { src: '/cases/01/Team_retrospective_-_Frame_3.jpg', alt: 'Team retrospective session' },
                  { src: '/cases/01/Team_retrospective_-_Frame_1.jpg', alt: 'Team retrospective workshop activities' },
                  { src: '/cases/01/Team_retrospective_-_Frame_2.jpg', alt: 'Team retrospective collaboration' },
                ]} />
              </div>
            </div>

            {/* Step 4: Research */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">Research</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    Before a single wireframe was drawn, we ran an exhaustive discovery process. We interviewed internal support teams across multiple markets. We analysed existing products, mapped customer personas, spoke directly with clients, and ran a full competitive analysis. We mapped the entire portal architecture — coordinating with every product team to understand their use cases and integration requirements.
                  </p>
                  <p>
                    From that research, we defined the core problems the portal needed to solve, built and iterated through multiple versions of the concept, and used rapid prototyping to test ideas with management before committing to development. I introduced tools to record and analyse client feedback from meetings systematically, and fought to add product analytics tracking from day one — something that required sustained advocacy inside a company that historically measured very little at the product level.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[{ src: '/cases/01/Commercial_Product_Structure_-_Frame_11.jpg', alt: 'Portal product architecture diagram' }]} />
              </div>
            </div>

            {/* Step 5: Migration */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">Migration, reframed</div>
                <div className="space-y-4 text-base leading-[1.65] text-ink-secondary">
                  <p>
                    The prevailing assumption was that migrating clients between products caused churn — and that this was unavoidable. I disagreed with the diagnosis. The problem wasn&apos;t migration.{' '}
                    <em className="text-accent-ink">It was forced migration.</em>
                  </p>
                  <p>
                    I proposed a soft migration strategy: first connect client data to the new portal so they could see their existing information there. Once they were logging in regularly and seeing value, introduce the new product capabilities alongside. The migration became a natural next step, not a disruption.{' '}
                    <strong className="text-ink font-medium">Clients began requesting it themselves.</strong>
                  </p>
                </div>
                <div className="mt-8 flex items-stretch gap-3 p-6 bg-white border border-border rounded-xl">
                  {[
                    { label: 'Connect data', sub: 'Existing data visible in portal' },
                    { label: 'Earn the login', sub: 'Daily access · familiar surface' },
                    { label: 'Surface new value', sub: 'New capabilities alongside old' },
                    { label: 'Client-led migration', sub: 'Client requests the move' },
                  ].map((step, i) => (
                    <div key={i} className="flex items-stretch gap-3 flex-1">
                      <div className="flex-1">
                        <div className="text-2xs font-semibold tracking-label text-accent mb-1.5">0{i + 1}</div>
                        <div className="text-fine font-semibold text-ink mb-1">{step.label}</div>
                        <div className="text-2xs text-ink-secondary leading-[1.4]">{step.sub}</div>
                      </div>
                      {i < 3 && (
                        <svg className="text-ink-tertiary flex-none self-center" width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                          <path d="M1 7H18M18 7L13 2M18 7L13 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 p-5 bg-[#F3EFFC] border border-[#E8DFF7] rounded-xl" style={{ gridTemplateColumns: '48px 1fr' }}>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2L3 7v6c0 5 3.5 9 9 11 5.5-2 9-6 9-11V7l-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-1">The non-negotiable</div>
                    <p className="text-sm text-ink leading-[1.55]">
                      No product could enter the portal without following the unified provisioning process and invoice structure. The billing chaos had to stop at the gate, not downstream.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[{ src: '/cases/01/portal-architecture.png', alt: 'MyLINK Portal architecture overview' }]} />
              </div>
            </div>

            {/* Step 6: Trust */}
            <div className="py-16 reveal">
              <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">Trust</div>
              <div className="max-w-prose space-y-4 text-base leading-[1.65] text-ink-secondary">
                <p>With <strong className="text-ink font-medium">local market managers</strong>: always left conversations with a solution and a concrete action plan — never just a diagnosis. Speed of response built credibility that arguments couldn&apos;t.</p>
                <p>With the <strong className="text-ink font-medium">engineering team</strong>: showed them — incrementally, specifically — how structure in the roadmap made their work easier. Found allies inside that team and made those people visible.</p>
                <p>With <strong className="text-ink font-medium">C-level stakeholders</strong>: experimented constantly with format. Presentations, wireframes, metaphors, videos, journeys narrated in the client&apos;s voice. Whatever it took to make the abstract concrete.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border" id="results">
        <div className="max-w-[1200px] mx-auto px-8 mb-16">
          <div className="max-w-[800px] mx-auto text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">05 — Results</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              The numbers tell part of the story.{' '}
              <span className="text-ink-secondary font-normal">The rest is organisational.</span>
            </h2>
          </div>
        </div>

        <ResultsStrip results={RESULTS} />

        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              Support teams now have a single surface to manage client issues — and have become advocates for the portal, not resistors. Product managers across the company have started embedding UX research into their own processes. The provisioning and invoice unification means billing exceptions are an anomaly rather than a daily fire.
            </p>
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              This project is still in progress. There is more to build. But the foundation — the Blueprint, the team, the process, the trust — is solid enough that it can grow without me carrying it alone.{' '}
              <em>That might be the result I&apos;m most proud of.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT I LEARNED ────────────────────────────────────────────── */}
      <section
        className="py-24 border-t border-border relative"
        style={{
          background: 'linear-gradient(135deg, #111110 0%, #1a1425 70%, #111110 100%)',
          backgroundSize: '200% 200%',
          animation: 'case-dark-pan 18s ease-in-out infinite',
          color: '#F6F5F0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">06 — What I learned</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-fluid-md" style={{ color: '#F6F5F0' }}>
              Political rooms don&apos;t respond to arguments.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>They respond to momentum.</span>
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
            <div className="text-2xs font-semibold tracking-label uppercase mb-4" style={{ color: '#C3B9EB' }}>
              What I&apos;d do differently
            </div>
            <p className="font-serif italic text-body leading-[1.6]" style={{ color: 'rgba(246,245,240,0.9)' }}>
              I was perhaps too trusting with certain stakeholders early on. I assumed good faith where there was none, and it cost time. I&apos;ve learned to read the room earlier — to distinguish between genuine resistance and political positioning — and to act on that difference sooner.
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ───────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
