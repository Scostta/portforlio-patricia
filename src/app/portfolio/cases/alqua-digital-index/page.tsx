import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CaseImages } from '~/components/image-lightbox.client'

const TITLE = 'Alqua Digital Index'
const SUBTITLE = 'Turning internal data into a public ranking — and a public ranking into a lead generation engine'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/alqua-digital-index/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/alqua-digital-index/opengraph-image'],
  },
}

const TAGS = ['Product-Led Growth', 'Lead Generation', 'Data Product', 'Algorithm Design', 'Conversion Architecture']

export default function AlquaDigitalIndexPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'alqua-digital-index')
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
          06
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
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 06</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">Alqua</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">Co-Founder &amp; Product Lead</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">2019 – 2021</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">Alqua Digital Index</span>
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
              ~9 min read
            </span>
          </div>
        </div>
      </header>

      {/* ── THE STARTING POINT ───────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Situation</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl leading-[1.7] text-ink reveal">
                Alqua&apos;s platform held a significant data asset. Thousands of brands across multiple industries and
                countries, analysed continuously across social media performance, influencer campaign efficiency, media
                presence, audience perception, and digital brand value. This data powered our core product — but it lived
                entirely inside the platform, visible only to paying customers.
              </p>
              <p className="text-lg lg:text-xl leading-[1.7] text-ink reveal">
                We noticed something in client demos. When we showed prospects the internal ranking — which brands were
                leading their sector digitally, how they compared to competitors, how positions shifted over time — the
                reaction was consistently strong. People leaned in. They wanted to know where they ranked. They wanted to
                compare. The competitive instinct in marketers is powerful, and we had data that triggered it directly.
              </p>
              <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
                The question we started asking was simple: what if this data didn&apos;t just live inside the product? What
                if it became the product? The Alqua Digital Index was our answer: take the most compelling part of our
                platform and make it publicly visible, with carefully designed access limits that created a natural path
                from curiosity to conversion.
              </p>
            </div>
            <div className="reveal lg:sticky lg:top-28">
              <CaseImages
                images={[
                  { src: '/cases/06/PANTALLAZO_16.png', alt: 'Alqua Digital Index — overview screenshot' },
                ]}
                columns={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILT ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-16">
            <span className="section-label">What We Built</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="space-y-24">

            {/* 01 — The algorithm */}
            <div className="reveal">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-[clamp(3rem,6vw,5rem)] font-bold text-accent/15 leading-none tracking-tight select-none">01</span>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink tracking-tight">
                  The algorithm — making ranking credible
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
                <div className="space-y-4">
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    Before the product could work as a lead magnet, it had to be credible as a ranking. That meant the
                    algorithm had to be rigorous. We spent significant time refining the Alqua Digital Index formula —
                    a composite score measuring digital brand impact across multiple dimensions: social KPIs (followers,
                    engagement, post volume), influencer campaign efficiency, media presence, audience perception, and
                    monetary digital brand value.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    The formula went through multiple iterations. We introduced logarithmic scales to handle the enormous
                    variance between large and small brands without large players dominating purely on volume. We built
                    category, sub-category and niche taxonomies covering industries across Spain and Latin America, so
                    rankings were meaningful at every level of specificity — a brand could see not just where they stood
                    in Beauty broadly, but in Skincare, or in Natural Cosmetics specifically.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    The credibility of the index depended on this rigour. A ranking that felt arbitrary would generate
                    curiosity but not trust. A ranking that felt methodologically sound would generate the kind of
                    engagement that leads to a sales conversation.
                  </p>
                </div>
                <div className="lg:sticky lg:top-28">
                  <CaseImages
                    images={[
                      { src: '/cases/06/Untitled.png', alt: 'Alqua Digital Index ranking interface' },
                    ]}
                    columns={1}
                  />
                </div>
              </div>
            </div>

            {/* 02 — Phase 1 */}
            <div className="reveal">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-[clamp(3rem,6vw,5rem)] font-bold text-accent/15 leading-none tracking-tight select-none">02</span>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink tracking-tight">
                  Phase 1 — The automated report
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                  The first version of the ADI was a downloadable report: a designed, data-rich PDF ranking the top
                  brands in a given industry for a given period. We produced reports by sector — Beauty was one of
                  the first, analysing 2,650 brands and ranking the Top 200.
                </p>
                <div className="border-l-2 border-accent/30 pl-6">
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    The reports were marketed through a landing page with a single conversion wall: to download the full
                    report, you had to provide your contact details. The content was the incentive. The registration was
                    the cost. This gave us a qualified list of people who cared about digital brand performance in a
                    specific industry — exactly the profile of our ideal customer.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — Phase 2 */}
            <div className="reveal">
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-[clamp(3rem,6vw,5rem)] font-bold text-accent/15 leading-none tracking-tight select-none">03</span>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink tracking-tight">
                  Phase 2 — The live tool with conversion architecture
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-start">
                <div className="space-y-4">
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    The report was a start, but it had a fundamental limitation: it was static. A brand&apos;s position
                    in a quarterly report told you where you were — but not how you were trending, who was overtaking
                    you, or what was happening right now.
                  </p>
                  <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary">
                    We built the ADI as a live, interactive tool on the Alqua website. Users could explore rankings by
                    industry, sub-category, niche, time period, and country. They could search for specific brands. They
                    could see how positions changed over time. But not all of it. The conversion architecture was built
                    in layers:
                  </p>
                  <ul className="space-y-3">
                    {[
                      { label: 'Anonymous', text: 'Limited brands per ranking — enough to understand the value and see their own position, not enough for serious competitive analysis.' },
                      { label: 'Registered', text: 'Full ranking access, plus a timed modal promoting the latest sector report as a downloadable PDF.' },
                      { label: 'Consultation', text: 'A direct path to a sales conversation — always visible, for users who had seen enough to want to go further.' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-paper/40">
                        <span className="text-2xs font-bold tracking-widest uppercase text-accent mt-0.5 min-w-[80px]">{item.label}</span>
                        <span className="text-[0.9375rem] leading-[1.75] text-ink-secondary">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6 lg:sticky lg:top-28">
                  <div className="quote-callout">
                    <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                      Every access limit was designed to create a specific kind of frustration: the productive kind,
                      where you can see the value of what you can&apos;t fully access yet. The wall wasn&apos;t there to
                      block — it was there to motivate.
                    </p>
                  </div>
                  <CasePdfViewer
                    href="/cases/06/Alqua_Digital_Index_(ADI)_1cac9efa837f49ecb3c0e4ed6ee049de.pdf"
                    label="Alqua Digital Index — Full Report"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THE PRODUCT THINKING BEHIND IT ───────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Product Thinking Behind It</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              What I find most interesting about this project, in retrospect, is that it wasn&apos;t a marketing
              initiative with a product wrapper. It was a product decision that had marketing consequences.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The distinction matters. A marketing initiative asks: how do we attract more leads? The answer is often
              more content, more ads, more channels. A product initiative asks: what is the most valuable thing our
              product does, and how do we put that value in front of people who don&apos;t yet know we exist? The
              answer, in our case, was to make our data public — with limits that turned curiosity into demand.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              This framing came directly from reading about product-led growth and the concept of using the product as
              a distribution channel. The idea that the most powerful form of marketing is letting people experience a
              version of what you&apos;ve built — and wanting more — shaped every design decision in the ADI.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The ranking itself exploited a specific psychological dynamic: competitive benchmarking. Brands
              don&apos;t just want to know their absolute performance. They want to know how they compare to their
              competitors. The ADI made that comparison visible — and then limited it just enough to make the full
              picture worth paying for.
            </p>
            <div className="reveal">
              <CaseImages
                images={[
                  { src: '/cases/06/Untitled_1.png', alt: 'Alqua Digital Index — live tool with conversion layers' },
                ]}
                columns={1}
              />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { value: '2,650+', label: 'Brands analysed', context: 'In the Beauty sector alone — across Spain' },
              { value: '3', label: 'Conversion layers', context: 'Anonymous · registered · consultation — each designed to move users forward' },
              { value: '2', label: 'Phases', context: 'Automated PDF report → live interactive tool with access limits' },
              { value: 'Multi-industry', label: 'Coverage', context: 'Beauty and multiple sectors with category/sub-category/niche taxonomy' },
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

          <div className="mt-12 max-w-reading">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The ADI changed how we acquired customers. Instead of our sales team going out to find prospects,
              prospects came to us having already experienced the product. The sales conversation started from a
              completely different position — not &ldquo;let me tell you what Alqua does&rdquo; but &ldquo;you&apos;ve
              already seen what Alqua does; let&apos;s talk about what you need next.&rdquo;
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
              The most valuable lesson from the ADI is that data you already have is often more powerful as a public
              product than as a private feature. Keeping data inside a paywall protects revenue in the short term but
              limits the audience who can ever discover your value. Making a version of it public — with the right
              access limits — can generate more qualified leads than any outbound campaign.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              I also learned that conversion architecture is product design. Every decision about what an anonymous
              user can see, what a registered user unlocks, and where the consultation button sits is a UX decision
              with direct revenue consequences. Getting those decisions right required the same user understanding that
              any other product decision does — knowing what your user wants, what they&apos;re willing to do to get
              it, and where the productive friction point is.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The algorithm work was also a lesson in the relationship between credibility and adoption. A tool that
              people don&apos;t trust won&apos;t generate leads regardless of how well the conversion walls are
              designed. The investment in making the ranking methodology rigorous — the logarithms, the category
              taxonomy, the iterative refinement — was an investment in the trustworthiness of the product. Without
              that foundation, nothing else would have worked.
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
