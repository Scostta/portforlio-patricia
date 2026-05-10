import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { ResultItem } from '~/components/results-strip.client'

const TITLE = 'Reinventing the Business Model'
const SUBTITLE = 'How changing how we charged — not what we built — unlocked a new growth curve at Alqua'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/alqua-pricing/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/alqua-pricing/opengraph-image'],
  },
}

const TAGS = ['Business Model Innovation', 'Pricing Strategy', 'Revenue Growth', 'Market Entry', 'Upselling']

const RESULTS: ResultItem[] = [
  { value: 'Weekly', label: 'Deal cadence', context: 'vs monthly before the model change', hero: true },
  { value: '80%', label: 'Customer retention', context: 'Across the Alqua client base during this period', hero: false },
  { value: '2', label: 'Commercial models', context: 'Spain (hybrid) and Latin America (SaaS) — calibrated to market', hero: false },
]

const LESSONS = [
  {
    body: 'This is the case I think about most when someone talks about product innovation. The instinct in most product teams is to solve growth problems by building more — more features, more integrations, more capabilities. Here, the growth problem was solved entirely by changing the commercial terms.',
    bold: 'The product didn\'t change. The market didn\'t change. The contract changed.',
  },
  {
    body: 'Pricing is a product decision, not a sales decision. How you charge shapes what customers value, how they engage, and what growth path is available to you. Moving from pure subscription to a hybrid revenue-share model didn\'t just change our conversion rate — it changed our relationship with clients. They came in as partners in the revenue, not as buyers of a service.',
  },
  {
    body: 'The entry banner was never the destination — it was the door. Once a media company was live on the platform and seeing value, the plan structure became an obvious upsell. The goal over time was to shift the revenue mix toward higher fixed income per client, reducing our dependence on advertising performance while increasing the client\'s switching cost.',
  },
]

export default function AlquaPricingPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'alqua-pricing')
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
              filter: 'blur(80px)', opacity: 0.5,
              animation: 'mesh-drift-1 18s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '-120px', right: '-120px', width: '620px', height: '620px',
              background: 'radial-gradient(circle at 50% 50%, rgba(171,107,255,0.45), transparent 70%)',
              filter: 'blur(80px)', opacity: 0.45,
              animation: 'mesh-drift-2 22s ease-in-out infinite alternate',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              top: '200px', left: '30%', width: '480px', height: '480px',
              background: 'radial-gradient(circle at 50% 50%, #8AC8E7, transparent 70%)',
              filter: 'blur(80px)', opacity: 0.55,
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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 05</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-accent-ink">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-fine text-ink-secondary">Alqua · 2018 — 2021</span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg">
              Changing how we charged,<br />
              not what we built —<br />
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(120deg, #6667ab 0%, rgba(171,107,255,1) 50%, #6667ab 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'case-grad-pan 8s ease-in-out infinite',
                }}
              >
                unlocked a new growth curve.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How we stopped asking media companies to pay for a SaaS subscription upfront — and started{' '}
              <strong className="text-ink font-medium">making it easy for them to say yes</strong> — turning a stalled pipeline
              into a deal every week.
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

          {/* Right: ad format images stacked */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div
              style={{
                transform: 'rotate(-1.5deg)',
                filter: 'drop-shadow(0 30px 60px rgba(20,14,40,0.18)) drop-shadow(0 12px 24px rgba(20,14,40,0.10))',
                transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)',
              }}
              className="hover:[transform:rotate(0deg)_translateY(-4px)]"
            >
              <div className="rounded-xl overflow-hidden border border-border bg-white">
                <div className="px-4 py-2.5 bg-[#FAFAF7] border-b border-[#E0DFD7] flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#6667ab" strokeWidth="1.5"/>
                      <path d="M3 9h18" stroke="#6667ab" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span className="text-[9px] font-semibold text-[#6A6960] tracking-wide uppercase">Alqua — Ad Formats for Media</span>
                </div>
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image
                    src="/cases/05/01_sticky_ad_format.jpg"
                    alt="Sticky ad format — Alqua media monetisation"
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
              ['Client', 'Alqua'],
              ['Sector', 'MarTech · SaaS'],
              ['Role', 'Co-Founder & COO / Product Lead'],
              ['Markets', 'Spain · Latin America'],
              ['Timeline', '2018 – 2021'],
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
              The product hadn&apos;t changed. The market hadn&apos;t changed.{' '}
              <span className="text-ink-secondary font-normal">But the way we were trying to enter it was fundamentally wrong.</span>
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            <p className="text-lg leading-[1.7] text-ink reveal">
              Alqua was a MarTech SaaS platform — Big Data and Social Media intelligence for marketing and digital teams.
              The original business model was straightforward: three monthly pricing plans, sell to whoever needed the
              product, and grow through subscriptions.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              After a prolonged period managing the departure of founding partners — nine months of legal process and
              complex agreements — we emerged with a clearer focus: media companies. Press, digital publishers, news
              organisations. They had the data needs our platform addressed and the marketing challenges our tools could
              solve.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The problem was that media companies, particularly in Spain, were not flush with budget. Print media was in
              structural decline. Getting a media company to commit to a monthly SaaS subscription required a procurement
              process, multiple approval layers, competitive tenders, and months of sales effort. We were spending
              enormous energy on deals that either didn&apos;t close or closed too slowly to sustain our growth.
            </p>

            <div className="mt-8 reveal">
              <CasePdfViewer href="/cases/05/AD_TECH_2020__Marzo_(1).pdf" label="Ad Tech 2020 — Presentation" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CALLOUT ──────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            Innovation doesn&apos;t always mean building something new. Sometimes it means changing the contract —{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>who pays, when, and for what.</em>
          </p>
        </div>
      </section>

      {/* ── HOW WE BUILT AND VALIDATED IT ────────────────────────────── */}
      <section className="bg-white border-t border-border py-24" id="approach">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — How we built and validated it</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              A media company that couldn&apos;t afford a subscription{' '}
              <span className="text-ink-secondary font-normal">could say yes to a banner. The banner was the door.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — Studying the model</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    The insight came from understanding how media companies actually made money — and what they were
                    willing to spend on versus what they weren&apos;t. A media outlet struggling to justify a SaaS
                    subscription would think differently about a banner placement on their own website. Advertising
                    inventory was a familiar concept. It had a direct revenue link.
                  </p>
                  <p>
                    We studied Seedtag — a contextual advertising platform that had built a sophisticated publisher
                    offering with multiple banner formats, creative options, and flexible commercial terms. We
                    weren&apos;t copying — we were learning the logic of a model that worked and adapting it to a
                    different context and customer base.
                  </p>
                  <p>
                    The model we designed: instead of asking media companies to pay for a subscription upfront, we
                    would offer to place a banner on their site, monetise it through our partner network and direct
                    commercial efforts, and share the revenue. The platform access came with the banner. The monthly fee
                    was variable, tied to banner placement and type.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/05/01_sticky_ad_format.jpg"
                    alt="Sticky ad format example"
                    width={640}
                    height={300}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/05/02_inimage_ad_format.jpg"
                    alt="In-image ad format example"
                    width={640}
                    height={300}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="py-16 reveal">
              <div className="max-w-[800px] mx-auto">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Optimising the setup</div>
                <p className="text-mid leading-[1.85] text-ink-secondary">
                  One of our key design decisions was to make the entry point as frictionless as possible. The banner
                  setup process was engineered to be fast and mechanical — something that could be completed quickly
                  without heavy involvement from the client&apos;s technical team. Speed of setup was a competitive
                  advantage: if we could go from signature to live placement faster than anyone else, we reduced the
                  risk of deals dying between contract and activation.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="py-16 reveal">
              <div className="max-w-[800px] mx-auto">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Testing in Spain first</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    The hybrid model — banner-based entry with optional monthly plans — worked well in the Spanish
                    market, where media budgets were tightest and SaaS resistance was highest. We validated the model
                    there before considering other markets.
                  </p>
                  <p>
                    In Latin America, where media companies had different budget dynamics and less resistance to direct
                    SaaS pricing, we continued selling monthly plans. The same product, two different commercial models,
                    calibrated to market reality.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="py-16 reveal">
              <div className="max-w-[800px] mx-auto">
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">04 — Making it tangible</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    One of the most effective tools in the sales process was something deceptively simple: a
                    personalised demo showing exactly how the banners would look on the client&apos;s own website before
                    they signed anything. We would mock up the Sticky Ad and In-Image Ad formats in the client&apos;s
                    actual site environment so they could see the placement, the visual weight, and — critically — how
                    non-intrusive it was.
                  </p>
                  <p>
                    This addressed the most common unspoken objection: that advertising would damage their editorial
                    credibility or disrupt their readers. Seeing it rendered on their own pages, in context, removed
                    that fear more effectively than any explanation could. The demo converted hesitation into commitment.
                  </p>
                </div>
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
              A deal every week instead of every month.{' '}
              <span className="text-ink-secondary font-normal">The barrier to entry had been the product all along.</span>
            </h2>
          </div>
        </div>

        <ResultsStrip results={RESULTS} />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              Before the model change, we were closing clients roughly once a month — each deal the result of weeks or
              months of sales effort, procurement processes, and price negotiations. After the model change, we were
              closing deals every week. The barrier to entry had been so high under the old model that most prospects
              never became clients. Under the new model, the barrier was close to zero.
            </p>
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              The 80% customer retention rate we achieved during this period was partly a product story — we had built
              something genuinely useful — but it was equally a model story. Clients who had entered through the banner
              were already integrated into our platform, already seeing value in their data, and already aware of what
              upgrading their plan would unlock. The upsell conversation happened naturally, not as a sales push.
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
              Pricing is a product decision.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>How you charge shapes what customers value, how they engage, and what growth is possible.</span>
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
              The idea that stuck
            </div>
            <p className="font-serif italic text-body leading-[1.6]" style={{ color: 'rgba(246,245,240,0.9)' }}>
              &ldquo;The fastest way to grow was not to improve the product — it was to remove the reason people
              weren&apos;t buying it. Sometimes the barrier isn&apos;t what you build. It&apos;s what you ask for
              in return.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
