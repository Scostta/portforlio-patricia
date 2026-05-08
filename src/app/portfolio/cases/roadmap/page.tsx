import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CaseImages } from '~/components/image-lightbox.client'

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

export default function RoadmapPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'roadmap')
  const prevCase = caseIndex > 0 ? CASES_META[caseIndex - 1] : null
  const nextCase = caseIndex < CASES_META.length - 1 ? CASES_META[caseIndex + 1] : null

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden border-b border-border">
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 font-serif font-black leading-none text-ink pointer-events-none select-none"
          style={{ fontSize: 'clamp(10rem,28vw,22rem)', opacity: 0.045, letterSpacing: '-0.04em' }}
        >
          03
        </span>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
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
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 03</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">LINK Mobility</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">VP of UX &amp; Product Manager</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">2021 – Present</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">Building the Roadmap</span>
            <span className="block mt-[0.12em] animate-fade-up [animation-delay:560ms]">
              <span className="text-[0.48em] font-normal italic font-serif bg-[linear-gradient(120deg,rgb(138_200_231)_0%,#6667AB_50%,rgb(171_107_255)_100%)] [background-size:200%_auto] bg-clip-text text-transparent animate-gradient-breathe tracking-[-0.01em]">
                {SUBTITLE}
              </span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-2 animate-fade-up [animation-delay:700ms]">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-secondary border border-border bg-paper px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
            <span className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper/60 px-2.5 py-1 rounded">
              ~10 min read
            </span>
          </div>
        </div>
      </header>

      {/* ── INTRO ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose reveal">
            When I joined LINK, the roadmap was a Jira timeline. Items had ticket numbers, technical descriptions, and
            status colours. Engineers understood it. Almost nobody else did.
          </p>
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose mt-6 reveal">
            This wasn&apos;t a tooling problem. It was a communication problem with tooling symptoms. The roadmap served
            one audience — the people who built things — and excluded everyone else who had a stake in what was being
            built: sales teams trying to understand what they could promise customers, support teams preparing for new
            features, market managers tracking progress against strategy, and stakeholders who just needed to know: is
            this on track?
          </p>
          <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary max-w-prose mt-6 reveal">
            The result was predictable. Stakeholder syncs were long and inefficient because people needed context that
            should have been visible in the roadmap. Tech teams made decisions in isolation because there was no shared
            surface for coordination. And when dependencies between different product teams created delays — which they
            did, regularly — nobody saw them coming because nobody was looking at the same picture.
          </p>
          <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary max-w-prose mt-6 reveal">
            My job wasn&apos;t to replace the technical roadmap. It was to build a system that served all the audiences
            simultaneously, without creating more overhead for the people already doing the work.
          </p>

          <div className="mt-10 reveal">
            <CasePdfViewer
              href="/cases/03/Steerco_Program_office_report_wk_19.pdf"
              label="Steerco Program Office Report"
            />
          </div>

          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* ── VERSION 1 — MAKING IT VISIBLE ────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Version 1 — Making It Visible</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              My first move was to introduce Miro. The company didn&apos;t use it — I brought it in, built the first
              roadmap there, and presented it to stakeholders. The response was immediate enough that the company bought
              a licence and adopted it across teams.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The Miro roadmap did something the Jira timeline couldn&apos;t: it told a story. Instead of a list of
              ticket numbers, stakeholders could see initiatives grouped by theme, timelines that showed sequence and
              dependency, and a view that answered the question they actually had — what is being built, when, and in
              what order?
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              But Version 1 had real limitations. It was good for presenting. It was difficult to maintain. As soon as
              technical realities changed — a sprint slipped, a dependency shifted — the Miro roadmap became stale
              within days. Keeping it accurate required manual updates that nobody had time to do reliably. And the
              fundamental problem remained: there were now two roadmaps — the Miro one for stakeholders and the Jira
              one for tech — and they told different stories.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              I also learned something important about stakeholder needs during this period. Sales teams and support
              managers didn&apos;t want a detailed roadmap — they wanted a way to check, quickly, whether a specific
              initiative was on track or delayed. The level of detail that served a product manager was noise to them.
              The roadmap needed different zoom levels for different audiences.
            </p>
            <div className="reveal">
              <CaseImages
                images={[
                  { src: '/cases/03/01_roadmap_2021_miro.jpg', alt: 'Version 1 roadmap in Miro, 2021' },
                ]}
                columns={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE STRUCTURAL PROBLEM ───────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Structural Problem</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The deeper problem wasn&apos;t the tool. It was that the teams working on related products had no shared
              roadmap at all. Each product had its own Jira space, its own sprint cadence, its own planning rhythm.
              When Product A&apos;s delivery depended on something Product B was building, that dependency existed only
              in someone&apos;s head — usually the PM&apos;s — and was managed through individual conversations rather
              than visible in any system.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              Tech teams were also making architectural decisions that affected product timelines without communicating
              them through the roadmap. From their perspective, they were doing their job. From the product side, it
              looked like the roadmap was wrong — when in reality the roadmap had never reflected the full technical
              picture.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              I tried to address this by creating two parallel roadmaps: one for product, one for tech. It was better
              than one, but it created a new problem: two documents that needed to stay in sync, created by different
              people with different incentives. In practice, they diverged. The coordination overhead grew. And when
              something changed in tech, the product roadmap didn&apos;t reflect it until someone remembered to update
              it.
            </p>
            <div className="quote-callout reveal">
              <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                The roadmap isn&apos;t just a planning document. It&apos;s an agreement. If two teams are looking at
                different documents, they&apos;ve made two different agreements — and they don&apos;t know it yet.
              </p>
            </div>
            <div className="reveal">
              <CasePdfViewer
                href="/cases/03/GP-How_Product_Managers_do_roadmaps-080426-124208.pdf"
                label="How Product Managers Do Roadmaps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VERSION 2 — BUILDING THE SYSTEM ─────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Version 2 — Building the System</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-10">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The solution came from asking a different question. Instead of asking &ldquo;what tool should we
              use?&rdquo;, I asked &ldquo;what does each audience actually need from a roadmap, and how do we serve all
              of them with the least duplication?&rdquo; The answer was a two-layer system: Product Plan for stakeholder
              management, connected to Jira for technical execution.
            </p>

            {/* The stakeholder layer */}
            <div className="space-y-5 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                The stakeholder layer — Product Plan
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                Product Plan sits on top of the technical work and translates it into language that stakeholders can
                use. Initiatives are grouped by strategic theme, not by engineering ticket. Progress is visible at a
                glance. Different views are available for different audiences — a quarterly view for sales and support
                checking on a specific initiative, a yearly view for management tracking strategic direction, a detailed
                view for PMs coordinating with UX and tech.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                Crucially, Product Plan connects directly to Jira. When an engineering task moves, the roadmap updates.
                The two documents stopped being two separate truths and became two views of the same truth.
              </p>
              <CaseImages
                images={[
                  { src: '/cases/03/02_roadmap_2026_productplan.jpg', alt: 'Version 2 roadmap in Product Plan, 2026' },
                ]}
                columns={1}
              />
            </div>

            {/* The technical layer */}
            <div className="space-y-5 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                The technical layer — Jira, restructured
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The Jira restructure was equally important. I worked to establish consistent epic structures across all
                product teams — so that dependencies between products became visible in the timeline rather than existing
                only in conversation. Teams that had previously planned in isolation could now see where their work
                intersected with others.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I introduced lanes for Design, Build, and Measure — making it explicit that a roadmap item wasn&apos;t
                complete when it shipped, but when it had been validated against customer behaviour. Tech debt and
                version planning were also formalised: every item had a version number, and debt reduction had dedicated
                sprint allocation rather than being perpetually deferred.
              </p>
            </div>

            {/* Prioritisation */}
            <div className="space-y-5 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                Prioritisation — the Impact Value Matrix
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                One of the persistent problems in roadmap planning was that different PMs prioritised items using
                different criteria — some weighted customer impact, others technical effort, others strategic alignment.
                The result was that negotiation between teams was often based on whoever argued most persuasively, not
                on shared data.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I introduced the Impact Value Matrix — a scoring framework integrated directly into Product Plan — to
                bring a common language to prioritisation. Each roadmap item is scored against impact and value
                dimensions, making trade-offs visible and comparable across products. This shifted the negotiation from
                &ldquo;my initiative is important&rdquo; to &ldquo;here&apos;s how this item scores against the agreed
                criteria&rdquo; — a much faster and less political conversation.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                Other PMs adopted the framework too. It became the standard way to compare and commit to items across
                the whole product organisation during the quarterly roadmap planning cycle.
              </p>
              <CaseImages
                images={[
                  { src: '/cases/03/impact-value-matrix.png', alt: 'Impact Value Matrix scoring framework' },
                ]}
                columns={1}
              />
            </div>

            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              A system is only as good as the process that maintains it. I defined a roadmap planning cycle that starts
              6 weeks before the end of each quarter: global research across product, UX and tech; negotiation between
              teams on priorities and resources; communication to stakeholders; triggering of first sprint tasks; and
              ongoing follow-up through the quarter. This rhythm meant the roadmap was always being prepared for the
              next quarter while the current one was being executed.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What It Looks Like Now</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="border border-border rounded-2xl overflow-hidden reveal">
            <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-border">
              {[
                { value: '4', label: 'Strategic workstreams', context: 'Visible to all stakeholders in real time' },
                { value: '3', label: 'Audiences served', context: 'Engineers, PMs, and stakeholders — with one source of truth' },
                { value: '5', label: 'Planning stages', context: 'Standardised across all product teams — starting 6 weeks before quarter end' },
                { value: '1', label: 'Tool introduced', context: 'Miro — adopted org-wide after the first roadmap presentation' },
              ].map((result, i) => (
                <div key={result.label} className="flex-1 min-w-[140px] px-6 py-6 flex flex-col gap-1" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="font-serif font-medium leading-none tracking-[-0.025em] bg-gradient-primary bg-clip-text text-transparent" style={{ fontSize: 'clamp(1.75rem,2.5vw,2.5rem)' }}>{result.value}</div>
                  <div className="text-[0.8125rem] font-semibold text-ink leading-snug">{result.label}</div>
                  {result.context && <div className="text-[0.75rem] text-ink-tertiary leading-relaxed">{result.context}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-reading">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
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
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What I Learned</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The biggest lesson from this work is that a roadmap is never just a planning document — it&apos;s a
              communication tool. The question isn&apos;t &ldquo;is it accurate?&rdquo; The question is &ldquo;does it
              give each audience the information they need, in a format they can use, without making them dependent on
              someone else to interpret it for them?&rdquo;
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The two-parallel-roadmaps phase was frustrating but necessary. I needed to understand what each audience
              actually used before I could design a system that served both. Skipping straight to the integrated
              solution without going through the messy middle would have meant building something elegant that nobody
              actually needed.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The hardest part was the tech team coordination — not because engineers were unwilling, but because asking
              teams to plan with shared visibility is a cultural change, not just a process change. It requires trust
              that the information won&apos;t be used against them when things slip. Building that trust took longer
              than building the system.
            </p>
            <div className="quote-callout reveal-far mt-12" style={{ transitionDelay: '180ms' }}>
              <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                &ldquo;The moment I knew the system was working was when a sales manager told me they hadn&apos;t
                needed to schedule a roadmap sync in two months. Not because things weren&apos;t changing — but because
                the changes were visible before anyone needed to ask.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────── */}
      <nav className="bg-white border-t border-border py-16 lg:py-20" aria-label="Case navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
                    <svg className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Previous
                  </span>
                  <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{prevCase.number}</span>
                </div>
                <div className="flex-1 flex flex-col justify-end pt-3">
                  <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.1rem,1.8vw,1.35rem)] mb-1.5">
                    {prevCase.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {prevCase.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span aria-hidden className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(5rem,10vw,10rem)] text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none">
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
                    <svg className="transition-transform duration-200 group-hover:-translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    All Cases
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-end pt-3">
                  <h3 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.1rem,1.8vw,1.35rem)] mb-1.5">
                    All Case Studies
                  </h3>
                  <p className="text-sm text-ink-secondary leading-snug">Six problems. Six solutions.</p>
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
                  <span className="font-serif text-sm font-medium text-ink/[0.18] tracking-[0.05em] flex-shrink-0">{nextCase.number}</span>
                  <span className="flex items-center gap-2 text-2xs font-bold tracking-label uppercase text-ink-tertiary">
                    Next
                    <svg className="transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0" width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
                      <span key={tag} className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary border border-border bg-paper px-2 py-0.5 rounded group-hover:text-accent group-hover:border-accent/25 group-hover:bg-accent/[0.07] transition-all duration-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span aria-hidden className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(5rem,10vw,10rem)] text-ink opacity-[0.03] group-hover:opacity-[0.055] transition-opacity duration-300 pointer-events-none select-none">
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
