import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CASES_META } from '~/constants/cases'
import { ResultsStrip } from '~/components/results-strip.client'
import { CaseNav } from '~/components/case-nav'
import type { ResultItem } from '~/components/results-strip.client'

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

const RESULTS: ResultItem[] = [
  { value: '2,650+', label: 'Brands analysed', context: 'In the Beauty sector alone — Spain & Latin America', hero: true },
  { value: 'Top 200', label: 'Ranking per report', context: 'Specific enough to feel exclusive, broad enough to be relevant', hero: false },
  { value: '3', label: 'Conversion layers', context: 'Anonymous → registered → consultation — each moving users forward', hero: false },
  { value: '2', label: 'Phases to market', context: 'Automated PDF report first, live interactive tool second', hero: false },
  { value: '1', label: 'Registration gate', context: 'A single friction point calibrated to maximise conversion', hero: false },
  { value: '0', label: 'Outbound required', context: 'Qualified prospects came to us having already experienced the product', hero: false },
]

const LESSONS = [
  {
    body: 'Data you already have is often more powerful as a public product than as a private feature. Keeping data inside a paywall protects revenue in the short term but limits the audience who can ever discover your value. Making a version of it public — with the right access limits — generates more qualified leads than any outbound campaign.',
  },
  {
    body: 'Conversion architecture is product design. Every decision about what an anonymous user can see, what a registered user unlocks, and where the consultation button sits is a UX decision with direct revenue consequences.',
    bold: 'Getting those decisions right required the same user understanding as any other product decision.',
  },
  {
    body: 'The algorithm work was a lesson in the relationship between credibility and adoption. A tool people don\'t trust won\'t generate leads regardless of how well the conversion walls are designed. The investment in rigour — the logarithms, the category taxonomy, the iterative refinement — was an investment in trustworthiness.',
    bold: 'Without that foundation, nothing else would have worked.',
  },
]

function BrowserFrame({ children }: { children: ReactNode }) {
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
          alqua.io/digital-index
        </div>
        <div />
      </div>
      {children}
    </div>
  )
}

export default function AlquaDigitalIndexPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'alqua-digital-index')
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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 06</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-accent-ink">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-fine text-ink-secondary">Alqua · 2019 — 2021</span>
            </div>

            {/* Title */}
            <h1 className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms] text-fluid-lg">
              Turning private data<br />
              into a public ranking —<br />
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
                and a growth engine.
              </span>
            </h1>

            {/* Deck */}
            <p className="text-body leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
              How we took Alqua&apos;s most compelling internal asset — a digital brand ranking across thousands of companies — and turned it into a <strong className="text-ink font-medium">product-led acquisition engine</strong> that brought the right prospects to us before the first sales call.
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

          {/* Right: ADI tool screenshot — constrained height to avoid pixelation */}
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
                <div className="relative overflow-hidden" style={{ height: 300 }}>
                  <Image
                    src="/cases/06/adi-tool-1.png"
                    alt="Alqua Digital Index — live ranking tool"
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
              ['Client', 'Alqua'],
              ['Sector', 'MarTech · SaaS'],
              ['Role', 'Co-Founder & Product Lead'],
              ['Markets', 'Spain · Latin America'],
              ['Timeline', '2019 – 2021'],
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
              Alqua had data thousands of brands didn&apos;t know existed.{' '}
              <span className="text-ink-secondary font-normal">We decided to change that.</span>
            </h2>
          </div>

          {/* Single-column with image inline between paragraphs */}
          <div className="max-w-[800px] mx-auto space-y-6">
            <p className="text-lg leading-[1.7] text-ink reveal">
              Alqua&apos;s platform held a significant data asset. Thousands of brands across multiple industries and
              countries, analysed continuously across social media performance, influencer campaign efficiency, media
              presence, audience perception, and digital brand value. This data powered our core product — but it lived
              entirely inside the platform, visible only to paying customers.
            </p>
            <p className="text-lg leading-[1.7] text-ink reveal">
              We noticed something in client demos. When we showed prospects the internal ranking — which brands were
              leading their sector digitally, how they compared to competitors, how positions shifted over time — the
              reaction was consistently strong. People leaned in. They wanted to know where they ranked. They wanted to
              compare. The competitive instinct in marketers is powerful, and we had data that triggered it directly.
            </p>

            {/* Image inline between paragraphs */}
            <figure className="my-8 reveal">
              <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.12)]">
                <Image
                  src="/cases/06/PANTALLAZO_16.png"
                  alt="Alqua Digital Index — overview screenshot"
                  width={800}
                  height={480}
                  className="w-full h-auto block"
                  quality={100}
                />
              </div>
            </figure>

            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The question we started asking was simple: what if this data didn&apos;t just live inside the product? What
              if it became the product? The Alqua Digital Index was our answer — take the most compelling part of our
              platform and make it publicly visible, with carefully designed access limits that created a natural path
              from curiosity to conversion.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILT ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border py-24" id="approach">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — What we built</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              A public ranking engineered to generate leads.{' '}
              <span className="text-ink-secondary font-normal">Two phases, deliberate friction.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 01 — The algorithm */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — The algorithm</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary">
                  <p>
                    Before the product could work as a lead magnet, it had to be credible as a ranking. That meant the
                    algorithm had to be rigorous. We spent significant time refining the Alqua Digital Index formula —
                    a composite score measuring digital brand impact across multiple dimensions: social KPIs (followers,
                    engagement, post volume), influencer campaign efficiency, media presence, audience perception, and
                    monetary digital brand value.
                  </p>
                  <p>
                    The formula went through multiple iterations. We introduced logarithmic scales to handle the enormous
                    variance between large and small brands without large players dominating purely on volume. We built
                    category, sub-category and niche taxonomies covering industries across Spain and Latin America, so
                    rankings were meaningful at every level of specificity — a brand could see not just where they stood
                    in Beauty broadly, but in Skincare, or in Natural Cosmetics specifically.
                  </p>
                  <p>
                    The credibility of the index depended on this rigour. A ranking that felt arbitrary would generate
                    curiosity but not trust. A ranking that felt methodologically sound would generate the kind of
                    engagement that leads to a sales conversation.
                  </p>
                </div>
              </div>
              <div className="lg:sticky lg:top-24">
                <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <Image
                    src="/cases/06/adi-tool-1.png"
                    alt="Alqua Digital Index ranking interface"
                    width={640}
                    height={400}
                    className="w-full h-auto block"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Step 02 — Phase 1: automated report */}
            <div className="py-16 reveal">
              <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Phase 1: the automated report</div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                <p className="text-mid leading-[1.85] text-ink-secondary">
                  The first version of the ADI was a downloadable report: a designed, data-rich PDF ranking the top
                  brands in a given industry for a given period. We produced reports by sector — Beauty was one of
                  the first, analysing 2,650 brands and ranking the Top 200.
                </p>
                <div className="border-l-2 border-accent/30 pl-6">
                  <p className="text-mid leading-[1.85] text-ink-secondary">
                    The reports were marketed through a landing page with a single conversion wall: to download the full
                    report, you had to provide your contact details. The content was the incentive. The registration was
                    the cost. This gave us a qualified list of people who cared about digital brand performance in a
                    specific industry — exactly the profile of our ideal customer.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 — Phase 2: live tool */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Phase 2: live tool with conversion architecture</div>
                <div className="space-y-4 text-mid leading-[1.85] text-ink-secondary mb-6">
                  <p>
                    The report was a start, but it had a fundamental limitation: it was static. A brand&apos;s position
                    in a quarterly report told you where you were — but not how you were trending, who was overtaking
                    you, or what was happening right now.
                  </p>
                  <p>
                    We built the ADI as a live, interactive tool on the Alqua website. Users could explore rankings by
                    industry, sub-category, niche, time period, and country. They could search for specific brands. They
                    could see how positions changed over time. But not all of it. The conversion architecture was built
                    in layers:
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    { label: 'Anonymous', text: 'Limited brands per ranking — enough to understand the value and see their own position, not enough for serious competitive analysis.' },
                    { label: 'Registered', text: 'Full ranking access, plus a timed modal promoting the latest sector report as a downloadable PDF.' },
                    { label: 'Consultation', text: 'A direct path to a sales conversation — always visible, for users who had seen enough to want to go further.' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-paper/40">
                      <span className="text-2xs font-bold tracking-widest uppercase text-accent mt-0.5 min-w-[80px]">{item.label}</span>
                      <span className="text-mid leading-[1.75] text-ink-secondary">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: full-page PDF */}
              <div className="lg:sticky lg:top-24">
                <div className="border border-border rounded-xl overflow-hidden bg-white shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-accent-light border-b border-[#E8DFF7]">
                    <div className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-accent-ink truncate">Alqua Digital Index — Full Report</span>
                  </div>
                  {/* A4 portrait aspect ratio: 1 : √2 ≈ 1 : 1.414 */}
                  <div className="relative w-full" style={{ paddingTop: '141.4%' }}>
                    <iframe
                      src="/cases/06/Alqua_Digital_Index_ADI.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1"
                      title="Alqua Digital Index — Full Report"
                      className="absolute inset-0 w-full h-full border-0 block"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CALLOUT — phase 2 key insight ────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <p className="font-serif text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.35] text-paper">
            Every access limit was designed to create a specific kind of frustration: the productive kind,
            where you can see the value of what you can&apos;t fully access yet.{' '}
            <em style={{ color: 'rgba(246,245,240,0.5)' }}>The wall wasn&apos;t there to block — it was there to motivate.</em>
          </p>
        </div>
      </section>

      {/* ── THE PRODUCT THINKING BEHIND IT ───────────────────────────── */}
      <section className="bg-white border-t border-border py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">03 — The product thinking</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              This wasn&apos;t a marketing initiative.{' '}
              <span className="text-ink-secondary font-normal">It was a product decision with distribution built in.</span>
            </h2>
          </div>

          {/* Single-column with image inline */}
          <div className="max-w-[800px] mx-auto space-y-6">
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              What I find most interesting about this project, in retrospect, is that it wasn&apos;t a marketing
              initiative with a product wrapper. It was a product decision that had marketing consequences.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The distinction matters. A marketing initiative asks: how do we attract more leads? The answer is often
              more content, more ads, more channels. A product initiative asks: what is the most valuable thing our
              product does, and how do we put that value in front of people who don&apos;t yet know we exist? The
              answer, in our case, was to make our data public — with limits that turned curiosity into demand.
            </p>

            {/* Image inline between paragraphs */}
            <figure className="my-8 reveal">
              <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_32px_-8px_rgba(19,19,16,0.12)]">
                <Image
                  src="/cases/06/adi-tool-2.png"
                  alt="Alqua Digital Index — live tool with conversion layers"
                  width={800}
                  height={480}
                  className="w-full h-auto block"
                  quality={100}
                />
              </div>
            </figure>

            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              This framing came directly from reading about product-led growth and the concept of using the product as
              a distribution channel. The idea that the most powerful form of marketing is letting people experience a
              version of what you&apos;ve built — and wanting more — shaped every design decision in the ADI.
            </p>
            <p className="text-body leading-[1.85] text-ink-secondary reveal">
              The ranking itself exploited a specific psychological dynamic: competitive benchmarking. Brands
              don&apos;t just want to know their absolute performance. They want to know how they compare to their
              competitors. The ADI made that comparison visible — and then limited it just enough to make the full
              picture worth paying for.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-border" id="results">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-[800px] mx-auto text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">04 — Results</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink text-fluid-md">
              Prospects came to us already convinced.{' '}
              <span className="text-ink-secondary font-normal">The sales conversation started from a different place.</span>
            </h2>
          </div>
        </div>

        <ResultsStrip results={RESULTS} />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[800px] mx-auto mt-16 space-y-5">
            <p className="text-body leading-[1.65] text-ink-secondary reveal">
              The ADI changed how we acquired customers. Instead of our sales team going out to find prospects,
              prospects came to us having already experienced the product. The sales conversation started from a
              completely different position — not &ldquo;let me tell you what Alqua does&rdquo; but &ldquo;you&apos;ve
              already seen what Alqua does; let&apos;s talk about what you need next.&rdquo;
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
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">05 — What I learned</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-fluid-md" style={{ color: '#F6F5F0' }}>
              Data you already have is often more powerful as a public product.{' '}
              <span style={{ color: 'rgba(246,245,240,0.55)', fontWeight: 400 }}>Keeping it inside a paywall limits who can ever discover your value.</span>
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
              &ldquo;The most powerful form of marketing is letting people experience a version of what you&apos;ve
              built — and wanting more. The ADI wasn&apos;t a campaign. It was a product decision with a
              distribution strategy built in.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT NAV ──────────────────────────────────────────── */}
      <CaseNav prevCase={prevCase} nextCase={nextCase} />
    </>
  )
}
