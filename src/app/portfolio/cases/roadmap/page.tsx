import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { ResultItem } from '~/components/results-strip.client'

const TITLE = 'Building the Roadmap'
const SUBTITLE =
  'From a technical Jira timeline nobody could read to a system that serves engineers, product teams and stakeholders — simultaneously'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/roadmap/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/roadmap/opengraph-image'],
  },
}

const TAGS = ['Roadmap Strategy', 'Stakeholder Management', 'Cross-team Coordination', 'Tooling', 'Process Design']

const RESULTS: ResultItem[] = [
  { value: '4', label: 'Strategic workstreams', context: 'Visible to all stakeholders in real time', hero: true },
  { value: '3', label: 'Audiences served', context: 'Engineers, PMs, and stakeholders — one source of truth', hero: false },
  { value: '5', label: 'Planning stages', context: 'Standardised across all product teams from 6 weeks out', hero: false },
  { value: '1', label: 'Tool introduced', context: 'Miro — adopted org-wide after the first roadmap presentation', hero: false },
]

const LESSONS = [
  {
    body: 'A roadmap is never just a planning document — it is a communication tool. The question is not "is it accurate?" The question is "does it give each audience the information they need, in a format they can use, without making them dependent on someone else to interpret it?"',
  },
  {
    body: 'The two-parallel-roadmaps phase was frustrating but necessary. I needed to understand what each audience actually used before I could design a system that served both.',
    bold: 'Skipping straight to the integrated solution without going through the messy middle would have meant building something elegant that nobody actually needed.',
  },
  {
    body: 'The hardest part was the tech team coordination — not because engineers were unwilling, but because asking teams to plan with shared visibility is a cultural change, not just a process change.',
    bold: 'Building that trust took longer than building the system.',
  },
]

function BrowserFrame({ children, url }: { children: ReactNode; url: string }) {
  return (
    <div className="bg-white border border-[#E0DFD7] rounded-xl overflow-hidden">
      <div
        className="grid items-center gap-3 px-3.5 py-2.5 bg-[#FAFAF7] border-b border-[#E0DFD7]"
        style={{ gridTemplateColumns: 'auto 1fr auto' }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] opacity-70" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] opacity-70" />
        </div>
        <div className="flex items-center gap-1.5 justify-self-center bg-white border border-[#E0DFD7] rounded px-3 py-1 text-[9px] text-[#6A6960] max-w-[220px] w-full">
          <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
            <path d="M9 5V4a3 3 0 10-6 0v1M3 5h6v5H3V5z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
          {url}
        </div>
        <div />
      </div>
      {children}
    </div>
  )
}

export default function RoadmapPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'roadmap')
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
              background: 'radial-gradient(circle at 50% 50%, rgba(138,200,231,0.4), transparent 70%)',
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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 03</span>
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
              From a Jira timeline<br />
              nobody could read<br />
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
                to a system everyone used.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How I built a roadmap system that served engineers, product teams, and stakeholders{' '}
              <strong className="text-ink font-medium">simultaneously</strong> — without creating more overhead for the people already doing the work.
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

          {/* Right: Product Plan roadmap screenshot */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div
              style={{
                transform: 'rotate(-1.5deg)',
                filter: 'drop-shadow(0 30px 60px rgba(20,14,40,0.18)) drop-shadow(0 12px 24px rgba(20,14,40,0.10))',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="hover:[transform:rotate(0deg)_translateY(-4px)]"
            >
              <BrowserFrame url="productplan.io/roadmap">
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image
                    src="/cases/03/02_roadmap_2026_productplan.jpg"
                    alt="MyLINK Portal roadmap in Product Plan"
                    fill
                    className="object-cover object-top"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 640px"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              ['Client', 'LINK Mobility'],
              ['Product', 'MyLINK Portal'],
              ['Role', 'VP of UX & Product Manager'],
              ['Teams', 'Product · Tech · UX'],
              ['Timeline', '2021 – Present'],
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
              The roadmap was a Jira timeline.{' '}
              <span className="text-ink-secondary font-normal">Engineers understood it. Almost nobody else did.</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            <p className="text-lg leading-[1.7] text-ink reveal">
              When I joined LINK, the roadmap was a Jira timeline. Items had ticket numbers, technical descriptions, and
              status colours. Engineers understood it. Almost nobody else did.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              This wasn&apos;t a tooling problem. It was a communication problem with tooling symptoms. The roadmap served
              one audience — the people who built things — and excluded everyone else who had a stake in what was being
              built: sales teams trying to understand what they could promise customers, support teams preparing for new
              features, market managers tracking progress against strategy, and stakeholders who just needed to know: is
              this on track?
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The result was predictable. Stakeholder syncs were long and inefficient because people needed context that
              should have been visible in the roadmap. Tech teams made decisions in isolation. And when dependencies
              between different product teams created delays — which they did, regularly — nobody saw them coming because
              nobody was looking at the same picture.
            </p>

            <div className="mt-8 reveal">
              <CasePdfViewer
                href="/cases/03/Steerco_Program_office_report_wk_19.pdf"
                label="Steerco Program Office Report"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ──────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            The roadmap isn&apos;t just a planning document. It&apos;s an agreement.{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>If two teams are looking at different documents, they&apos;ve made two different agreements — and they don&apos;t know it yet.</em>
          </p>
        </div>
      </section>

      {/* ── HOW I REBUILT IT ─────────────────────────────────────────── */}
      <section className="bg-white border-t border-border py-24" id="approach">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — How I rebuilt it</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Three iterations. Each one taught me what the next needed to be.{' '}
              <span className="text-ink-secondary font-normal">The solution only made sense after living through what didn&apos;t work.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Version 1 — Miro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — Making it visible (Miro)</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    My first move was to introduce Miro. The company didn&apos;t use it — I brought it in, built the
                    first roadmap there, and presented it to stakeholders. The response was immediate enough that the
                    company bought a licence and adopted it across teams.
                  </p>
                  <p>
                    The Miro roadmap did something the Jira timeline couldn&apos;t: it told a story. Instead of a list
                    of ticket numbers, stakeholders could see initiatives grouped by theme, timelines that showed
                    sequence and dependency, and a view that answered the question they actually had — what is being
                    built, when, and in what order?
                  </p>
                  <p>
                    But Version 1 had real limitations. It was good for presenting. It was difficult to maintain. As
                    soon as technical realities changed — a sprint slipped, a dependency shifted — the Miro roadmap
                    became stale within days. The fundamental problem remained: two roadmaps, two different stories.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/03/01_roadmap_2021_miro.jpg"
                    alt="Version 1 roadmap in Miro, 2021"
                    width={640}
                    height={400}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Version 2 — Product Plan */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Building the system (Product Plan)</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    The solution came from asking a different question. Instead of &ldquo;what tool should we use?&rdquo;,
                    I asked &ldquo;what does each audience actually need from a roadmap, and how do we serve all of them
                    with the least duplication?&rdquo;
                  </p>
                  <p>
                    The answer was a two-layer system: Product Plan for stakeholder management, connected to Jira for
                    technical execution. Product Plan sits on top of the technical work and translates it into language
                    that stakeholders can use — initiatives grouped by strategic theme, progress visible at a glance,
                    different views for different audiences.
                  </p>
                  <p>
                    Crucially, Product Plan connects directly to Jira. When an engineering task moves, the roadmap
                    updates. The two documents stopped being two separate truths and became two views of the same truth.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/03/02_roadmap_2026_productplan.jpg"
                    alt="Version 2 roadmap in Product Plan, 2026"
                    width={640}
                    height={400}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Impact Value Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Prioritisation (Impact Value Matrix)</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    One persistent problem in roadmap planning was that different PMs prioritised items using different
                    criteria. The result was that negotiation between teams was often based on whoever argued most
                    persuasively, not on shared data.
                  </p>
                  <p>
                    I introduced the Impact Value Matrix — a scoring framework integrated directly into Product Plan —
                    to bring a common language to prioritisation. Each roadmap item is scored against impact and value
                    dimensions, making trade-offs visible and comparable across products.
                  </p>
                  <p>
                    This shifted the negotiation from &ldquo;my initiative is important&rdquo; to &ldquo;here&apos;s
                    how this item scores against the agreed criteria&rdquo; — a much faster and less political
                    conversation. Other PMs adopted the framework too. It became the standard across the whole product
                    organisation.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/03/impact-value-matrix.png"
                    alt="Impact Value Matrix scoring framework"
                    width={640}
                    height={400}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Planning cycle PDF */}
            <div className="py-16 reveal">
              <div className="max-w-[800px] mx-auto">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">The planning cycle</div>
                <p className="text-mid leading-[1.85] text-ink-secondary mb-8">
                  A system is only as good as the process that maintains it. I defined a roadmap planning cycle that
                  starts 6 weeks before the end of each quarter: global research across product, UX and tech;
                  negotiation between teams on priorities and resources; communication to stakeholders; triggering of
                  first sprint tasks; and ongoing follow-up. This rhythm meant the roadmap was always being prepared
                  for the next quarter while the current one was being executed.
                </p>
                <CasePdfViewer
                  href="/cases/03/GP-How_Product_Managers_do_roadmaps-080426-124208.pdf"
                  label="How Product Managers Do Roadmaps"
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
              Four workstreams. Three audiences. One source of truth.{' '}
              <span className="text-ink-secondary font-normal">Sales teams check status without scheduling a sync.</span>
            </h2>
          </div>
        </div>

        <ResultsStrip results={RESULTS} />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              The current roadmap for MyLINK Portal runs quarterly in Product Plan with a full-year view, structured
              across four strategic workstreams: Identity, Access &amp; Enterprise Readiness; Portal Data &amp; Insight
              Evolution; Billing &amp; Invoicing; and Portal Adoption &amp; Onboarding. Each initiative has a clear
              status, owner, and connection to the Jira epics being worked on by the engineering teams. Sales teams can
              check the status of a specific initiative without scheduling a sync. Support teams know what&apos;s coming
              before it arrives.
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
              A roadmap is a communication tool first.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>Accuracy is the floor, not the ceiling.</span>
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
              The moment I knew it was working
            </div>
            <p className="font-serif italic text-body leading-[1.6]" style={{ color: 'rgba(246,245,240,0.9)' }}>
              &ldquo;A sales manager told me they hadn&apos;t needed to schedule a roadmap sync in two months. Not
              because things weren&apos;t changing — but because the changes were visible before anyone needed to ask.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
