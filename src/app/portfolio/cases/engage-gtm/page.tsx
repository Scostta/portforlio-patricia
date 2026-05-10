import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { ResultItem } from '~/components/results-strip.client'

const TITLE = 'MyLINK Engage — Global GTM'
const SUBTITLE = 'Taking a German product global — provisioning, politics, and the collaboration that made it work'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/engage-gtm/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/engage-gtm/opengraph-image'],
  },
}

const TAGS = ['Go-to-Market', 'Cross-market Coordination', 'Product Internationalisation', 'Stakeholder Management', 'Operational Readiness']

const RESULTS: ResultItem[] = [
  { value: '3', label: 'Markets launched', context: 'Norway, Sweden, Denmark — phased approach, one at a time', hero: true },
  { value: '8', label: 'Workstreams owned', context: 'Sell · Provisioning · Billing · Support · Monitoring · Security · Legal · Marketing', hero: false },
  { value: '7+', label: 'Legacy platforms', context: 'Assessed for migration — Turnpike, Fenix, Intouch, Silver Bullet and others', hero: false },
  { value: '4', label: 'Roadmap phases', context: 'GTM as-is · migrations · portal integration · self-service expansion', hero: false },
  { value: '3+', label: 'Years active', context: 'Q1 2024 through 2027 and beyond', hero: false },
]

const LESSONS = [
  {
    body: 'The technical complexity of this GTM was real but manageable. The organisational complexity was harder. Being accountable for an outcome without owning the product requires a very specific kind of influence — one built on trust and shared interest rather than authority.',
  },
  {
    body: 'The lesson I carry from this project is about where collaboration actually starts. It doesn\'t start when two people agree on a plan. It starts when they\'re willing to be honest about what\'s difficult.',
    bold: 'The moment I stopped performing confidence and started sharing my actual problems, the collaboration became real.',
  },
  {
    body: 'I also learned that a good GTM is really a good discovery. Most launch failures happen because someone assumed they understood the operational requirements of a new market.',
    bold: 'The investment in understanding the as-is — the existing customers, the pricing history, the legacy platforms — is never wasted. It surfaces the problems before they become launch failures.',
  },
]

export default function EngageGtmPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'engage-gtm')
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
              background: 'radial-gradient(circle at 35% 35%, #8AC8E7, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-1 18s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '-120px', right: '-120px', width: '620px', height: '620px',
              background: 'radial-gradient(circle at 50% 50%, #C3B9EB, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.45,
              animation: 'mesh-drift-2 22s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '200px', left: '30%', width: '480px', height: '480px',
              background: 'radial-gradient(circle at 50% 50%, rgba(171,107,255,0.35), transparent 70%)',
              filter: 'blur(80px)', opacity: 0.65,
              animation: 'mesh-drift-3 16s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              bottom: '-200px', right: '20%', width: '540px', height: '540px',
              background: 'radial-gradient(circle at 50% 50%, #E8DFF7, transparent 70%)',
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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 04</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-accent-ink">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-fine text-ink-secondary">LINK Mobility · 2024 — Present</span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg">
              Taking a German product<br />
              global — provisioning,<br />
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
                politics, and trust.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How I led the global go-to-market for MyLINK Engage — navigating eight workstreams, three Nordic markets,
              and a cross-border collaboration that had to be <strong className="text-ink font-medium">earned, not assumed</strong>.
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
                href="#approach"
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

          {/* Right: Engage roadmap image */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div
              style={{
                transform: 'rotate(1.5deg)',
                filter: 'drop-shadow(0 30px 60px rgba(20,14,40,0.18)) drop-shadow(0 12px 24px rgba(20,14,40,0.10))',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="hover:[transform:rotate(0deg)_translateY(-4px)]"
            >
              <div className="rounded-xl overflow-hidden border border-border bg-white">
                <div className="px-4 py-2.5 bg-[#FAFAF7] border-b border-[#E0DFD7] flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="9" stroke="#6667ab" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 3" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-[9px] font-semibold text-[#6A6960] tracking-wide uppercase">MyLINK Engage — Roadmap 2024–2027</span>
                </div>
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image
                    src="/cases/04/01_engage_roadmap_2024_2027.jpg"
                    alt="MyLINK Engage global roadmap 2024–2027"
                    fill
                    className="object-cover object-top"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              ['Client', 'LINK Mobility'],
              ['Product', 'MyLINK Engage'],
              ['Role', 'Group PM — GTM Lead'],
              ['Markets', 'Norway · Sweden · Denmark'],
              ['Timeline', '2024 – Present'],
            ].map(([k, v], i) => (
              <div key={k} className="animate-fade-up" style={{ animationDelay: `${720 + i * 80}ms` }}>
                <div className="text-2xs font-semibold tracking-label uppercase text-ink-tertiary mb-1">{k}</div>
                <div className="text-sm font-medium text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── THE SITUATION ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">01 — The situation</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              A product built for one market carries all the assumptions of that market{' '}
              <span className="text-ink-secondary font-normal">invisibly inside it.</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            <p className="text-lg leading-[1.7] text-ink reveal">
              MyLINK Engage — originally WebSMS — was a messaging platform built and owned by LINK&apos;s German team.
              It worked well in the DACH market: established customer base, local provisioning and billing processes,
              its own engineering team, its own roadmap. A product that had grown organically in one context and had
              never needed to think beyond it.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The group decided it was the right product to standardise across all markets as the company&apos;s primary
              messaging solution. My assignment was to lead the global go-to-market: take a product built for Germany
              and make it launchable in Norway, Sweden, Denmark — and eventually beyond. This sounds like a product
              launch. It was much more than that.
            </p>

            {/* Operational gaps */}
            <div className="reveal">
              <div className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-5">The operational gaps</div>
              <ul className="space-y-3">
                {[
                  { head: 'Provisioning', body: 'The German process was manual and market-specific. Nordic markets needed a process aligned with group standards — the same unified provisioning every other portal product used.' },
                  { head: 'Billing', body: 'Engage ran on a separate invoicing system from the rest of the group. Integrating it meant building a new process with legal, finance and tech all having a view on how it should work.' },
                  { head: 'Support', body: 'Nordic support teams had no knowledge of the product — they needed training, documentation, escalation paths, and a clear split between what they could resolve vs. what required Germany.' },
                  { head: 'Features', body: 'Some capabilities that existed in the German product were not available or relevant for Nordic customers. Understanding which was which required deep collaboration with the German PM.' },
                ].map((item) => (
                  <li key={item.head} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-paper/40">
                    <span className="text-2xs font-bold tracking-widest uppercase text-accent mt-0.5 min-w-[80px]">{item.head}</span>
                    <span className="text-mid leading-[1.75] text-ink-secondary">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-4">The accountability gap</div>
              <p className="text-body leading-[1.85] text-ink-secondary">
                I was accountable for the group GTM — sell, provisioning, billing, support, monitoring, security,
                legal, marketing — but I wasn&apos;t the product owner. The product belonged to the German PM. She had
                her own roadmap, her own engineering team, her own priorities, and her own customers to serve. I needed
                her collaboration without her feeling that the group was taking over her product. That dynamic — being
                responsible for an outcome without authority over the product — is one of the harder positions to
                operate from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ──────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            The best collaboration I had on this project happened when I stopped being &ldquo;the group PM&rdquo; and
            started being a colleague with the same problems.{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>Vulnerability opened a door that professionalism had kept politely closed.</em>
          </p>
        </div>
      </section>

      {/* ── HOW WE EXECUTED THE GTM ──────────────────────────────────── */}
      <section className="bg-white border-t border-border py-24" id="approach">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — How we executed the GTM</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Four phases. Prove the product works in the market first.{' '}
              <span className="text-ink-secondary font-normal">Then connect it to the platform.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — Discovery first</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    Before planning the launch, I ran a structured discovery across three dimensions: commercial
                    (customer lists, pricing, migration paths from legacy platforms), technical (provisioning process,
                    integration architecture with the MyLINK Portal, API dependencies, monitoring setup), and
                    operational (support requirements, security assessment, legal compliance across markets).
                  </p>
                  <p>
                    This discovery revealed that several legacy platforms — Turnpike, Fenix, Intouch, Silver Bullet
                    among others — had customers that would need to migrate to Engage. Each had its own pricing history,
                    feature usage, and contract status. Building that picture took weeks. But it surfaced the problems
                    before they could become launch failures.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <CasePdfViewer
                  href="/cases/04/GP-myLINK_Engage._WebSMS_as_is._Discovery._Commercial-080426-144855.pdf"
                  label="WebSMS As-Is Discovery — Commercial"
                />
              </div>
            </div>

            {/* Step 02 */}
            <div className="py-16 reveal">
              <div className="max-w-[800px] mx-auto">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Defining group-ready</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    One of my most important contributions was defining the criteria a product had to meet before it
                    could enter the group portal. For Engage, this meant: unified provisioning through Salesforce
                    following group standards, invoice structure aligned with group billing, support documentation and
                    training completed for all target markets, and a feature parity assessment completed for each
                    launch market.
                  </p>
                  <p>
                    This wasn&apos;t just operational hygiene. It was the same gate I had established for every product
                    entering MyLINK Portal — the principle that complexity stops at the portal door. Engage had to meet
                    the same bar as everything else.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Phased launch by market</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    We launched in phases: Norway, Sweden and Denmark first, with each market requiring its own
                    readiness check — sales training, support onboarding, provisioning setup, and a validation with the
                    local account managers who knew the customer base. I joined Nordic sales meetings to present the
                    product directly for the first five minutes, then handed to the local team. A month later I ran full
                    sales training.
                  </p>
                  <p>
                    The phased approach meant we could learn from the first market before scaling. Issues that appeared
                    in Norway could be fixed before Sweden and Denmark launched — a coordination problem that would have
                    been unmanageable if attempted simultaneously.
                  </p>
                  <p>
                    The 2024 roadmap focused on the core migration and operational readiness: mapping the customer base,
                    migrating from Turnpike and other legacy platforms, handling specific enterprise requirements like
                    DNB&apos;s security audit, SSO and reporting needs.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/04/01_engage_roadmap_2024_2027.jpg"
                    alt="MyLINK Engage roadmap 2024–2027"
                    width={640}
                    height={400}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">04 — Portal integration</div>
                <p className="text-mid leading-[1.85] text-ink-secondary">
                  The MyLINK Portal integration — making Engage statistics visible in the portal dashboard, surfacing
                  Engage in the navigation, and enabling upsell prompts for unprovisioned customers — was defined as a
                  separate phase, not part of the initial GTM. This was a deliberate decision: trying to do the portal
                  integration and the market launch simultaneously would have created too many dependencies and too much
                  risk. Prove the product works in the market first. Then connect it to the platform.
                </p>
              </div>
              <div className="lg:sticky lg:top-24">
                <CasePdfViewer
                  href="/cases/04/GP-myLINK_Engage._MyLINK_Portal_Integration-080426-144859.pdf"
                  label="MyLINK Engage Portal Integration"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border" id="results">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-[800px] mx-auto text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">03 — Results</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Three markets live. A foundation that kept building.{' '}
              <span className="text-ink-secondary font-normal">A GTM that leaves no foundation isn&apos;t a launch — it&apos;s a one-off.</span>
            </h2>
          </div>
        </div>

        <ResultsStrip results={RESULTS} />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              The GTM I led in 2024 was the foundation, not the finish line. The roadmap that followed — NEXT migration,
              portal integration in 2026, SSU and self-service in 2027, expansion to Volvofinans and other enterprise
              clients — was only possible because the initial launch established the operational standards and the
              cross-team relationships needed to keep building.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT I LEARNED ───────────────────────────────────────────── */}
      <section
        className="py-24 border-t border-border relative"
        style={{
          background: 'linear-gradient(135deg, #111110 0%, #1a1425 70%, #111110 100%)',
          backgroundSize: '200% 200%',
          animation: 'case-dark-pan 18s ease-in-out infinite',
          color: '#F6F5F0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">04 — What I learned</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-fluid-md" style={{ color: '#F6F5F0' }}>
              Authority is the wrong lever.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>Trust is the only one that actually works across org boundaries.</span>
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
              The shift that changed everything
            </div>
            <p className="font-serif italic text-body leading-[1.6]" style={{ color: 'rgba(246,245,240,0.9)' }}>
              &ldquo;The calls changed. They became conversations between two people trying to solve the same problem
              from different angles, rather than a group PM and a local PM managing their boundary. That informal
              knowledge made the formal work significantly better.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
