import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { StepCarousel } from '~/components/step-carousel.client'

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

export default function EngageGtmPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'engage-gtm')
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
          04
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
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 04</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">LINK Mobility</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">Group PM — Global GTM Lead</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">2024 – Present</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">MyLINK Engage — Global GTM</span>
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

      {/* ── THE ASSIGNMENT ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose reveal">
            MyLINK Engage — originally WebSMS — was a messaging platform built and owned by LINK&apos;s German team. It
            worked well in the DACH market: established customer base, local provisioning and billing processes, its own
            Jira space, its own engineering team, its own roadmap. A product that had grown organically in one context
            and had never needed to think beyond it.
          </p>
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose mt-6 reveal">
            The group decided it was the right product to standardise across all markets as the company&apos;s primary
            messaging solution. My assignment was to lead the global go-to-market: take a product built for Germany and
            make it launchable in Norway, Sweden, Denmark — and eventually beyond.
          </p>
          <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary max-w-prose mt-6 reveal">
            This sounds like a product launch. It was much more than that.
          </p>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* ── WHAT MADE IT COMPLEX ─────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What Made It Complex</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-10">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              A product built for one market carries all the assumptions of that market invisibly inside it. Provisioning
              processes designed for German sales teams. Invoice structures that matched German billing systems. Support
              workflows built around German customer expectations. A pricing model calibrated to DACH competition. None
              of this was wrong — it was just local. And local doesn&apos;t scale automatically.
            </p>

            {/* Operational gaps */}
            <div className="reveal">
              <h3 className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-6">
                The operational gaps
              </h3>
              <ul className="space-y-4">
                {[
                  'Provisioning: the German process was manual and market-specific. Nordic markets needed a process aligned with group standards — the same unified provisioning that every other product in the portal used. This required coordination between the German team, the group BSS team, and Nordic operations.',
                  'Billing: Engage ran on a separate invoicing system from the rest of the group. Integrating it meant either building a new process or adapting the existing one — with legal, finance and tech all having a view on how it should work.',
                  'Support: the Nordic support teams had no knowledge of the product. They needed training, documentation, escalation paths, and a clear understanding of what they could resolve versus what required the German team.',
                  "Features: some capabilities that existed in the German product were not available or not relevant for Nordic customers. Others that Nordic markets needed didn't exist yet. Understanding which was which required deep collaboration with the German PM.",
                  'Sales: the Nordic sales teams needed to understand not just what the product did, but how to sell it, how it compared to what customers were already using, and what the migration path looked like for existing accounts.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.6em] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-[1.8] text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accountability gap */}
            <div className="pt-8 border-t border-border space-y-4 reveal">
              <h3 className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-6">
                The accountability gap
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I was accountable for the group GTM — sell, provisioning, billing, support, monitoring, security, legal,
                marketing — but I wasn&apos;t the product owner. The product belonged to the German PM. She had her own
                roadmap, her own engineering team, her own priorities, and her own customers to serve. I needed her
                collaboration without her feeling that the group was taking over her product.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                That dynamic — being responsible for an outcome without authority over the product — is one of the
                harder positions to operate from. It requires a different kind of influence than product ownership. And
                it requires trust that has to be earned, not assumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE COLLABORATION THAT CHANGED EVERYTHING ────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Collaboration That Changed Everything</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The relationship with the German PM started carefully. We had clear roles on paper, but in practice the
              boundary was blurry. I was asking questions about her product, requesting changes to her processes,
              involving her team in planning conversations that affected her roadmap. From the outside it could have
              looked like the group PM moving in on local territory.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              I was aware of that risk from the beginning. I was deliberate about how I showed up in our interactions —
              asking rather than telling, framing every request as a shared problem, making sure her priorities were
              visible in the group roadmap. But it was still formal. Productive, but guarded.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The shift happened when I stopped treating our calls as coordination sessions and started being honest
              about my own challenges. I told her what was hard on my side — the provisioning complexity, the
              stakeholder pressure, the things I didn&apos;t understand about how the product worked. I asked how she
              dealt with similar problems in the German market. I shared my frustrations about the organisation in the
              same way she was sharing hers.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The calls changed. They became conversations between two people trying to solve the same problem from
              different angles, rather than a group PM and a local PM managing their boundary. We started sharing
              information that wasn&apos;t strictly required for the GTM — context, history, the political dynamics in
              each market. That informal knowledge made the formal work significantly better.
            </p>
            <div className="quote-callout reveal">
              <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                The best collaboration I had on this project happened when I stopped being &ldquo;the group PM&rdquo;
                and started being a colleague with the same problems. Vulnerability opened a door that professionalism
                had kept politely closed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE EXECUTED THE GTM ──────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">How We Executed the GTM</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="divide-y divide-border">

            {/* Step 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — Discovery first</div>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  Before planning the launch, I ran a structured discovery across three dimensions: commercial (customer
                  lists, pricing, migration paths from legacy platforms), technical (provisioning process, integration
                  architecture with the MyLINK Portal, API dependencies, monitoring setup), and operational (support
                  requirements, security assessment, legal compliance across markets).
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  This discovery revealed that several legacy platforms — Turnpike, Fenix, Intouch, Silver Bullet among
                  others — had customers that would need to migrate to Engage. Each had its own pricing history, feature
                  usage, and contract status. The migration team didn&apos;t have complete visibility on all of them.
                  Building that picture took weeks.
                </p>
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
              <div className="max-w-prose">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Defining group-ready</div>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  One of my most important contributions was defining the criteria a product had to meet before it could
                  enter the group portal. For Engage, this meant: unified provisioning through Salesforce following
                  group standards, invoice structure aligned with group billing, support documentation and training
                  completed for all target markets, and a feature parity assessment completed for each launch market.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  This wasn&apos;t just operational hygiene. It was the same gate I had established for every product
                  entering MyLINK Portal — the principle that complexity stops at the portal door. Engage had to meet
                  the same bar as everything else.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Phased launch by market</div>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  We launched in phases: Norway, Sweden and Denmark first, with each market requiring its own readiness
                  check — sales training, support onboarding, provisioning setup, and a validation with the local
                  account managers who knew the customer base. I joined Nordic sales meetings to present the product
                  directly for the first five minutes, then handed to the local team. A month later I ran full sales
                  training.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  The phased approach meant we could learn from the first market before scaling. Issues that appeared in
                  Norway could be fixed before Sweden and Denmark launched. It also meant we weren&apos;t trying to
                  solve every market&apos;s edge cases simultaneously — a coordination problem that would have been
                  unmanageable.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  The 2024 roadmap focused on the core migration and operational readiness: mapping the customer base,
                  migrating from Turnpike and other legacy platforms, handling specific enterprise requirements like
                  DNB&apos;s security audit, SSO and reporting needs. The product ran independently — not yet connected
                  to MyLINK Portal.
                </p>
              </div>
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[
                  { src: '/cases/04/01_engage_roadmap_2024_2027.jpg', alt: 'MyLINK Engage roadmap 2024–2027' },
                ]} />
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">04 — Portal integration</div>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
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
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">Results</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="border border-border rounded-2xl overflow-hidden reveal">
            <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-border">
              {[
                { value: '3+', label: 'Years active', context: 'Q1 2024 through 2027 and beyond' },
                { value: '3', label: 'Markets launched', context: 'Norway, Sweden, Denmark — with phased approach' },
                { value: '7+', label: 'Legacy platforms', context: 'Assessed for migration — Turnpike, Fenix, Intouch, Silver Bullet and others' },
                { value: '8', label: 'Workstreams owned', context: 'Sell · Provisioning · Billing · Support · Monitoring · Security · Legal · Marketing' },
                { value: '4', label: 'Roadmap phases', context: 'GTM as-is · migrations · portal integration · self-service expansion' },
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
              The GTM I led in 2024 was the foundation, not the finish line. The roadmap that followed — NEXT migration,
              portal integration in 2026, SSU and self-service in 2027, expansion to Volvofinans and other enterprise
              clients — was only possible because the initial launch established the operational standards and the
              cross-team relationships needed to keep building. A GTM that leaves no foundation isn&apos;t a
              launch — it&apos;s a one-off.
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
              The technical complexity of this GTM was real but manageable. The organisational complexity was harder.
              Being accountable for an outcome without owning the product requires a very specific kind of influence —
              one built on trust and shared interest rather than authority.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The lesson I carry from this project is about where collaboration actually starts. It doesn&apos;t start
              when two people agree on a plan. It starts when they&apos;re willing to be honest about what&apos;s
              difficult. The moment I stopped performing confidence and started sharing my actual problems, the
              collaboration became real. That shift produced better outcomes than any process or framework would have.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              I also learned that a good GTM is really a good discovery. Most launch failures happen because someone
              assumed they understood the operational requirements of a new market. The investment in understanding the
              as-is — the existing customers, the pricing history, the support workflows, the legacy platforms — is
              never wasted. It surfaces the problems before they become launch failures.
            </p>
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
