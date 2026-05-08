import type { ReactElement, ReactNode } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { StepCarousel } from '~/components/step-carousel.client'

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
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 06</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:200ms]">
              <span className="inline-flex items-center px-2.5 py-1 bg-white/70 border border-border rounded-full text-2xs font-semibold tracking-label uppercase text-ink-secondary">
                CASE STUDY
              </span>
              <span className="w-6 h-px bg-ink/20" aria-hidden />
              <span className="text-[13px] text-ink-secondary">Alqua · 2019 — 2021</span>
            </div>

            {/* Title */}
            <h1
              className="font-serif font-medium leading-[1.02] tracking-[-0.025em] mb-6 animate-fade-up [animation-delay:320ms]"
              style={{ fontSize: 'clamp(2.5rem,5vw,4.25rem)' }}
            >
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
            <p className="text-[1.0625rem] leading-[1.6] text-ink-secondary mb-8 max-w-[52ch] animate-fade-up [animation-delay:440ms]">
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

          {/* Right: ADI tool screenshot */}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cases/06/adi-tool-1.png"
                  alt="Alqua Digital Index — live ranking tool"
                  className="w-full block"
                />
              </BrowserFrame>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <div className="relative z-10 mt-20 border-t border-b border-border bg-white/50" style={{ backdropFilter: 'blur(10px)' }}>
          <div className="max-w-[1200px] mx-auto px-8 py-6 grid gap-5" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            {[
              ['Client', 'Alqua'],
              ['Sector', 'MarTech · SaaS'],
              ['Role', 'Co-Founder & Product Lead'],
              ['Markets', 'Spain · Latin America'],
              ['Timeline', '2019 – 2021'],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="text-2xs font-semibold tracking-label uppercase text-ink-tertiary mb-1">{k}</div>
                <div className="text-sm font-medium text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── THE SITUATION ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">01 — The situation</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
              Alqua had data thousands of brands didn&apos;t know existed.{' '}
              <span className="text-ink-secondary font-normal">We decided to change that.</span>
            </h2>
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
              <StepCarousel images={[
                { src: '/cases/06/PANTALLAZO_16.png', alt: 'Alqua Digital Index — overview screenshot' },
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILT ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-24" id="approach">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-[800px] mx-auto mb-20 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">02 — What we built</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
              A public ranking engineered to generate leads.{' '}
              <span className="text-ink-secondary font-normal">Two phases, deliberate friction.</span>
            </h2>
          </div>

          <div className="divide-y divide-border">

            {/* Step 01 — The algorithm */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">01 — The algorithm</div>
                <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary mb-4">
                  Before the product could work as a lead magnet, it had to be credible as a ranking. That meant the
                  algorithm had to be rigorous. We spent significant time refining the Alqua Digital Index formula —
                  a composite score measuring digital brand impact across multiple dimensions: social KPIs (followers,
                  engagement, post volume), influencer campaign efficiency, media presence, audience perception, and
                  monetary digital brand value.
                </p>
                <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary mb-4">
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
              <div className="lg:sticky lg:top-24">
                <StepCarousel images={[
                  { src: '/cases/06/adi-tool-1.png', alt: 'Alqua Digital Index ranking interface' },
                ]} />
              </div>
            </div>

            {/* Step 02 — Phase 1: automated report */}
            <div className="py-16 reveal">
              <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">02 — Phase 1: the automated report</div>
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

            {/* Step 03 — Phase 2: live tool */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 py-16 items-start reveal">
              <div>
                <div className="text-2xs font-semibold tracking-label uppercase text-accent mb-5">03 — Phase 2: live tool with conversion architecture</div>
                <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary mb-4">
                  The report was a start, but it had a fundamental limitation: it was static. A brand&apos;s position
                  in a quarterly report told you where you were — but not how you were trending, who was overtaking
                  you, or what was happening right now.
                </p>
                <p className="text-[0.9375rem] leading-[1.85] text-ink-secondary mb-6">
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
              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="quote-callout">
                  <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                    Every access limit was designed to create a specific kind of frustration: the productive kind,
                    where you can see the value of what you can&apos;t fully access yet. The wall wasn&apos;t there to
                    block — it was there to motivate.
                  </p>
                </div>
                <div className="border border-border rounded-xl overflow-hidden bg-white">
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-surface border-b border-border">
                    <div className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-ink-secondary truncate">Alqua Digital Index — Full Report</span>
                  </div>
                  <iframe
                    src="/cases/06/Alqua_Digital_Index_ADI.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    title="Alqua Digital Index — Full Report"
                    className="w-full border-0 block"
                    style={{ height: 480 }}
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
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">03 — The product thinking</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
              This wasn&apos;t a marketing initiative.{' '}
              <span className="text-ink-secondary font-normal">It was a product decision with distribution built in.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
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
            </div>
            <div className="reveal lg:sticky lg:top-28">
              <StepCarousel images={[
                { src: '/cases/06/adi-tool-2.png', alt: 'Alqua Digital Index — live tool with conversion layers' },
              ]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24" id="results">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">04 — Results</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
              Prospects came to us already convinced.{' '}
              <span className="text-ink-secondary font-normal">The sales conversation started from a different place.</span>
            </h2>
          </div>

          <div className="border border-border rounded-2xl overflow-hidden reveal">
            <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-border">
              {[
                { value: '2,650+', label: 'Brands analysed', context: 'In the Beauty sector alone — across Spain' },
                { value: '3', label: 'Conversion layers', context: 'Anonymous · registered · consultation — each designed to move users forward' },
                { value: '2', label: 'Phases', context: 'Automated PDF report → live interactive tool with access limits' },
                { value: 'Multi-industry', label: 'Coverage', context: 'Beauty and multiple sectors with category/sub-category/niche taxonomy' },
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
          <div className="max-w-[800px] mx-auto mb-16 text-center reveal">
            <div className="text-xs font-semibold tracking-label uppercase text-accent mb-4">05 — What I learned</div>
            <h2 className="font-serif font-medium leading-[1.1] tracking-[-0.02em] text-ink" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)' }}>
              Data you already have is often more powerful as a public product.{' '}
              <span className="text-ink-secondary font-normal">Keeping it inside a paywall limits who can ever discover your value.</span>
            </h2>
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
            <div className="quote-callout reveal-far mt-12" style={{ transitionDelay: '180ms' }}>
              <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                &ldquo;The most powerful form of marketing is letting people experience a version of what you&apos;ve
                built — and wanting more. The ADI wasn&apos;t a campaign. It was a product decision with a
                distribution strategy built in.&rdquo;
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
