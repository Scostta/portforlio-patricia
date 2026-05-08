import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CaseImages } from '~/components/image-lightbox.client'

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

export default function AlquaPricingPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'alqua-pricing')
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
          05
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
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 05</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">Alqua</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">Co-Founder &amp; COO / Product Lead</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">2018 – 2021</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">Reinventing the Business Model</span>
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
              ~8 min read
            </span>
          </div>
        </div>
      </header>

      {/* ── THE CONTEXT ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose reveal">
            Alqua was a MarTech SaaS platform — Big Data and Social Media intelligence for marketing and digital teams.
            The original business model was straightforward: three monthly pricing plans, sell to whoever needed the
            product, and grow through subscriptions.
          </p>
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose mt-6 reveal">
            After a prolonged period managing the departure of founding partners — nine months of legal process and
            complex agreements — we emerged with a clearer focus: media companies. Press, digital publishers, news
            organisations. They had the data needs our platform addressed and the marketing challenges our tools could
            solve.
          </p>
          <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary max-w-prose mt-6 reveal">
            The problem was that media companies, particularly in Spain, were not flush with budget. Print media was in
            structural decline. Getting a media company to commit to a monthly SaaS subscription required a procurement
            process, multiple approval layers, competitive tenders, and months of sales effort. We were spending
            enormous energy on deals that either didn&apos;t close or closed too slowly to sustain our growth.
          </p>
          <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary max-w-prose mt-6 reveal">
            The product hadn&apos;t changed. The market hadn&apos;t changed. But the way we were trying to enter it was
            fundamentally wrong for the customer&apos;s reality.
          </p>
          <div className="mt-10 reveal">
            <CasePdfViewer href="/cases/05/AD_TECH_2020__Marzo_(1).pdf" label="Ad Tech 2020 — Presentation" />
          </div>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* ── THE INSIGHT ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Insight</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The insight came from understanding how media companies actually made money — and what they were willing
              to spend on versus what they weren&apos;t.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              A media outlet struggling to justify a SaaS subscription would think differently about a banner placement
              on their own website. Advertising inventory was a familiar concept. It had a direct revenue link. And if
              we could help them monetise that inventory — through partnerships and our own commercial work — the cost
              of the tool effectively paid for itself through what it generated.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              We studied Seedtag — a contextual advertising platform that had built a sophisticated publisher offering
              with multiple banner formats, creative options, and flexible commercial terms. They had solved a version
              of the same problem: how do you build a relationship with a publisher that starts with value and grows
              into dependency?
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The model we designed took that logic and adapted it to our context. Instead of asking media companies
              to pay for a subscription upfront, we would offer to place a banner on their site, monetise it through
              our partner network and direct commercial efforts, and share the revenue. The platform access came with
              the banner. The monthly fee was variable, tied to banner placement and type. Over time, as trust built
              and the platform demonstrated value, we would convert clients toward higher fixed monthly fees and
              additional plan features.
            </p>
            <div className="quote-callout reveal">
              <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                Innovation doesn&apos;t always mean building something new. Sometimes it means changing the
                contract — who pays, when, and for what.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE BUILT AND VALIDATED IT ────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">How We Built and Validated It</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="space-y-16 max-w-reading">

            {/* Step 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr] gap-2 lg:gap-6 items-start reveal">
              <span className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-accent opacity-20 leading-none tracking-tight">
                01
              </span>
              <div className="approach-step-line pl-4 lg:pl-5">
                <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                  Studying the model before building it
                </h3>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-6">
                  Before changing anything in the product, we spent time understanding how Seedtag and similar
                  publishers had structured their offerings. What banner formats drove the most value? How did pricing
                  tiers work for publishers of different sizes? What did the upsell path look like? We weren&apos;t
                  copying — we were learning the logic of a model that worked and adapting it to a different context
                  and customer base.
                </p>
                <CaseImages
                  images={[
                    { src: '/cases/05/01_sticky_ad_format.jpg', alt: 'Sticky ad format example' },
                    { src: '/cases/05/02_inimage_ad_format.jpg', alt: 'In-image ad format example' },
                  ]}
                  columns={2}
                />
              </div>
            </div>

            {/* Step 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr] gap-2 lg:gap-6 items-start reveal">
              <span className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-accent opacity-20 leading-none tracking-tight">
                02
              </span>
              <div className="approach-step-line pl-4 lg:pl-5">
                <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                  Optimising the setup process
                </h3>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  One of our key design decisions was to make the entry point as frictionless as possible. The banner
                  setup process was engineered to be fast and mechanical — something that could be completed quickly
                  without heavy involvement from the client&apos;s technical team. Speed of setup was a competitive
                  advantage: if we could go from signature to live placement faster than anyone else, we reduced the
                  risk of deals dying between contract and activation.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr] gap-2 lg:gap-6 items-start reveal">
              <span className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-accent opacity-20 leading-none tracking-tight">
                03
              </span>
              <div className="approach-step-line pl-4 lg:pl-5">
                <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                  Testing in Spain first
                </h3>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  The hybrid model — banner-based entry with optional monthly plans — worked well in the Spanish market,
                  where media budgets were tightest and SaaS resistance was highest. We validated the model there before
                  considering other markets.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  In Latin America, where media companies had different budget dynamics and less resistance to direct
                  SaaS pricing, we continued selling monthly plans. The same product, two different commercial models,
                  calibrated to market reality.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr] gap-2 lg:gap-6 items-start reveal">
              <span className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-accent opacity-20 leading-none tracking-tight">
                04
              </span>
              <div className="approach-step-line pl-4 lg:pl-5">
                <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight mb-4">
                  Making it tangible — the client demo
                </h3>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  One of the most effective tools in the sales process was something deceptively simple: a personalised
                  demo showing exactly how the banners would look on the client&apos;s own website before they signed
                  anything. We would mock up the Sticky Ad and In-Image Ad formats in the client&apos;s actual site
                  environment so they could see the placement, the visual weight, and — critically — how
                  non-intrusive it was.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary mb-4">
                  This addressed the most common unspoken objection: that advertising would damage their editorial
                  credibility or disrupt their readers. Seeing it rendered on their own pages, in context, removed that
                  fear more effectively than any explanation could. The demo converted hesitation into commitment.
                </p>
                <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                  The entry banner was never the destination — it was the door. Once a media company was live on the
                  platform and seeing value, we introduced the plan structure as an upsell: more features, more data,
                  more capabilities, at a higher fixed monthly fee. The banner remained as the variable component. The
                  goal over time was to shift the revenue mix toward higher fixed income per client, reducing our
                  dependence on advertising performance while increasing the client&apos;s switching cost.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What Happened</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'Weekly', label: 'Deal cadence', context: 'vs monthly before the model change' },
              { value: '80%', label: 'Customer retention', context: 'Across the Alqua client base during this period' },
              { value: '2', label: 'Commercial models', context: 'Spain (hybrid) and Latin America (SaaS) — calibrated to market' },
            ].map((result, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between overflow-hidden bg-white border border-border rounded-[14px] p-5 lg:p-8 min-h-[160px] lg:min-h-[200px] shadow-[0_2px_12px_rgba(19,19,16,0.06),0_1px_3px_rgba(19,19,16,0.04)] hover:border-accent/35 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <p className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold leading-none tracking-tight bg-gradient-primary bg-clip-text text-transparent mb-3">
                  {result.value}
                </p>
                <p className="text-[0.9375rem] font-semibold text-ink leading-snug mb-1.5">{result.label}</p>
                <p className="text-xs text-ink-tertiary leading-relaxed">{result.context}</p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-0.06em] right-[-0.01em] font-serif font-extrabold leading-none text-[clamp(4rem,8vw,8rem)] text-ink opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none select-none"
                >
                  {String(i + 1)}
                </span>
                <div aria-hidden className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-reading space-y-5">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The effect was immediate and visible. Before the model change, we were closing clients roughly once a
              month — each deal the result of weeks or months of sales effort, procurement processes, and price
              negotiations. After the model change, we were closing deals every week.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The barrier to entry had been so high under the old model that most prospects never became clients. Under
              the new model, the barrier was close to zero. Media companies could say yes to a banner placement with
              almost no internal approval process. Once they were in, the platform sold itself.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The 80% customer retention rate we achieved during this period was partly a product story — we had built
              something genuinely useful — but it was equally a model story. Clients who had entered through the banner
              were already integrated into our platform, already seeing value in their data, and already aware of what
              upgrading their plan would unlock. The upsell conversation happened naturally, not as a sales push.
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
              This is the case I think about most when someone talks about product innovation. The instinct in most
              product teams is to solve growth problems by building more — more features, more integrations, more
              capabilities. Here, the growth problem was solved entirely by changing the commercial terms. The product
              didn&apos;t change. The market didn&apos;t change. The contract changed.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The lesson I carry is that pricing is a product decision, not a sales decision. How you charge shapes
              what customers value, how they engage, and what growth path is available to you. In this case, moving
              from pure subscription to a hybrid revenue-share model didn&apos;t just change our conversion rate — it
              changed our relationship with clients. They came in as partners in the revenue, not as buyers of a
              service. That&apos;s a fundamentally different starting point for a customer relationship.
            </p>
            <div className="quote-callout reveal-far mt-12" style={{ transitionDelay: '180ms' }}>
              <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                &ldquo;The fastest way to grow was not to improve the product — it was to remove the reason people
                weren&apos;t buying it. Sometimes the barrier isn&apos;t what you build. It&apos;s what you ask for
                in return.&rdquo;
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
