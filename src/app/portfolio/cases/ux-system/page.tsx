import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { CASES_META } from '~/constants/cases'
import { CasePdfViewer } from '~/components/case-pdf-viewer.client'
import { CaseImages } from '~/components/image-lightbox.client'

const TITLE = 'Building the UX System'
const SUBTITLE =
  'Designing the process, methodology and feedback loops that made research-led product development real at LINK'

export const metadata: Metadata = {
  title: TITLE,
  description: SUBTITLE,
  openGraph: {
    title: `${TITLE} — Patricia Bayona`,
    description: SUBTITLE,
    type: 'article',
    images: [{ url: '/portfolio/cases/ux-system/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUBTITLE,
    images: ['/portfolio/cases/ux-system/opengraph-image'],
  },
}

const TAGS = ['UX Process Design', 'Research Methodology', 'Team Building', 'Customer Program', 'AI Integration']

export default function UxSystemPage(): ReactElement {
  const caseIndex = CASES_META.findIndex((x) => x.slug === 'ux-system')
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
          02
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
            <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary">Case 02</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-up [animation-delay:300ms]">
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">LINK Mobility</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">VP of UX &amp; Product Manager</span>
            <span className="w-[3px] h-[3px] rounded-full bg-ink-tertiary opacity-40" aria-hidden="true" />
            <span className="text-2xs font-bold tracking-label uppercase text-ink-tertiary">2021 – Present</span>
          </div>

          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-ink mb-5 max-w-[820px]">
            <span className="inline-block animate-fade-up [animation-delay:420ms]">Building the UX System</span>
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
              ~12 min read
            </span>
          </div>
        </div>
      </header>

      {/* ── THE STARTING POINT ───────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose reveal">
            When I joined LINK, there was no UX process. There were designers who produced screens, and there were
            product managers who defined requirements. But the connective tissue between customer insight, product
            decision, and design execution didn&apos;t exist. Research happened informally or not at all. Validation
            was whoever shouted loudest in a meeting. Delivery often meant engineering built something nobody had
            tested with a real user.
          </p>
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose mt-6 reveal">
            This wasn&apos;t unusual for a company that had grown through acquisitions — each product team had its own
            habits, its own tools, its own definition of done. But it meant that building MyLINK Portal on top of that
            foundation was like building on sand. If we were going to create something that customers would actually
            use, we needed a shared system for understanding them first.
          </p>
          <p className="text-lg lg:text-xl leading-[1.7] text-ink max-w-prose mt-6 reveal">
            I built that system from scratch. This case describes how.
          </p>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      </section>

      {/* ── THE REVAMPED DOUBLE DIAMOND ──────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Revamped Double Diamond</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-10">
            {/* Intro */}
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              I chose the Double Diamond as the structural framework — not because it was fashionable, but because it
              addressed the specific failure mode I saw at LINK: teams were jumping to solutions before they understood
              problems. The Double Diamond&apos;s core principle — doing the right things before doing things right —
              was exactly the discipline the organisation needed.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              But the standard Double Diamond wasn&apos;t enough. I adapted it to the specific constraints and context
              of LINK: a technically complex B2B platform, a distributed team across three countries, product managers
              who were new to UX methods, and stakeholders who needed to see tangible outputs at every stage to
              maintain trust.
            </p>

            {/* Inline PDF — UX & Design Methodology */}
            <div className="reveal">
              <CasePdfViewer
                href="/cases/02/GP-UX_and_Design_Methodology-080426-123509.pdf"
                label="UX & Design Methodology"
              />
            </div>

            {/* Step 1 */}
            <div className="border-l-2 border-accent/25 pl-6 space-y-4 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                Step 1 — Start from not-knowing
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The PM defines the topic — a customer problem, a feature hypothesis, a usage pattern that
                doesn&apos;t make sense. The UX researcher then runs primary research: customer interviews, sales and
                support interviews, legacy platform analysis, competitive analysis, and data analytics. The output is
                unstructured research findings — raw material, not conclusions.
              </p>
              <div className="quote-callout mt-2">
                <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                  Key constraint I introduced: no other step can start until this one is complete. No wireframes
                  during research. No feature specs. The pressure to skip ahead was constant. The rule was
                  non-negotiable.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-l-2 border-accent/25 pl-6 space-y-4 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                Step 2 — Converge on the real problem
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The researcher synthesises findings into themes, builds customer opportunity areas using HMW (How
                Might We) questions, and defines the core problems to be solved. This is a converging step — reducing
                the space of possibilities to the most important problems. The output is a research presentation and
                a defined brief for the solution phase.
              </p>
              <div className="quote-callout mt-2">
                <p className="font-serif italic text-[0.9375rem] leading-relaxed text-ink">
                  I introduced the practice of presenting research findings formally to the PM and key stakeholders
                  before moving forward. This step — which most teams skip — created shared understanding that
                  prevented expensive disagreements downstream.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-2 border-accent/25 pl-6 space-y-4 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                Step 3 — Explore many solutions before committing to one
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                With the problem defined, the solution builder begins ideation: wireframes, user flows, brainstorming,
                design vision and hypotheses. This is a diverging step again — exploring many possible solutions
                before narrowing. The output is a set of first ideas, potential solutions, and hypothetical answers.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I created Figma templates for this step to standardise the ideation process across the team and make
                it faster for less experienced team members to produce output at the right level of fidelity.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-l-2 border-accent/25 pl-6 space-y-4 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                Step 4 — Validate before building
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The solution is prototyped, tested with real users, refined, and handed over to engineering with full
                specifications. This step closes the loop between research and delivery — the validated solution
                becomes the source of truth for engineering. Nothing goes to development without passing through
                validation.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I introduced Dovetail as the tool for recording and synthesising validation sessions, creating a
                searchable repository of customer feedback that any team member could access. I also introduced
                Usersnap to capture continuous in-product feedback — making validation an ongoing process rather
                than a pre-launch event.
              </p>
            </div>

            {/* Image after Step 4 */}
            <div className="reveal">
              <CaseImages
                images={[
                  {
                    src: '/cases/02/double-diamond.png',
                    alt: 'Adapted Double Diamond — four-phase UX methodology overview',
                  },
                ]}
                columns={1}
              />
            </div>

            {/* PDFs after Step 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal">
              <CasePdfViewer
                href="/cases/02/GP-Research_Methodology-080426-123554.pdf"
                label="Research Methodology"
              />
              <CasePdfViewer
                href="/cases/02/GP-Solution_Building_and_Validation_Methodology-080426-123922.pdf"
                label="Solution Building & Validation Methodology"
              />
              <CasePdfViewer
                href="/cases/02/GP-Validation_workshops._Building_and_Validation_Methodology-080426-124042.pdf"
                label="Validation Workshops Guide"
              />
            </div>

            {/* Connective tissue */}
            <div className="pt-8 border-t border-border space-y-4 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                The connective tissue: Product Requirements Documentation
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                Each project produced a standardised requirements document that connected all four phases: the initial
                context and research scope, the research findings, the solution design, and the delivery
                specifications for engineering. This document was the single source of truth for the project —
                reducing the back-and-forth between UX and tech that had previously consumed enormous amounts of time.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The connective tissue this created between product, UX and engineering was tangible. Teams stopped
                arguing about solutions and started agreeing on problems first. That shift took months to
                establish — and it held.
              </p>
              <CasePdfViewer
                href="/cases/02/GP-Template._Product_Requirements._Documentation.-080426-122712.pdf"
                label="Product Requirements Template"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE RESEARCH INFRASTRUCTURE ──────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Research Infrastructure</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <p className="max-w-reading text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-12 reveal">
            The methodology was only valuable if the team had the tools and contacts to execute it. I built the
            infrastructure that made research operationally possible at scale.
          </p>

          <div className="max-w-reading space-y-12">
            {/* Qualitative — internal */}
            <div className="reveal">
              <h3 className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-6">
                Qualitative research — internal
              </h3>
              <ul className="space-y-4 mb-6">
                {[
                  'Structured interviews with sales and support teams across Northern Europe, Global Sales, and Group Product Experts — the people closest to customer pain points every day.',
                  "Internal workshops using exercises designed to extract knowledge that doesn't surface in interviews — what people know intuitively but can't easily articulate.",
                  "Legacy platform analysis — a systematic review of existing products to understand what customers were actually using, what they weren't, and why.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.6em] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-[1.8] text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <CasePdfViewer
                href="/cases/02/GP-Support_tickets._Research_Methodology-080426-123740.pdf"
                label="Support Tickets Research Methodology"
              />
            </div>

            {/* Qualitative — external */}
            <div className="reveal">
              <h3 className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-6">
                Qualitative research — external
              </h3>
              <ul className="space-y-4 mb-6">
                {[
                  'Customer interviews following a structured protocol: minimum 5 participants, account manager validation before contacting clients, Think Aloud methodology during usability tests.',
                  'Validation workshops with prototypes at multiple fidelity levels — from rough wireframes to interactive Figma prototypes — with a hypothesis framework to structure what we were testing.',
                  'All sessions recorded, transcribed, and synthesised in Dovetail, creating a growing institutional knowledge base rather than one-off insights.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.6em] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-[1.8] text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
              <CasePdfViewer
                href="/cases/02/GP-Interviews_and_Workshops_guide._Research_Methodology-080426-123655.pdf"
                label="Interviews & Workshops Guide"
              />
            </div>

            {/* Quantitative */}
            <div className="reveal">
              <h3 className="text-2xs font-bold tracking-label uppercase text-ink-tertiary mb-6">
                Quantitative research
              </h3>
              <ul className="space-y-4">
                {[
                  'Data analytics integration: I advocated for and implemented product analytics tracking inside the portal from day one, creating a dashboard to monitor usage, session behaviour, and feature adoption.',
                  "Support ticket analysis: systematic review of Salesforce ticket data to identify patterns in customer problems that individual interviews couldn't surface.",
                  'Competitor and market analysis: structured frameworks for analysing both direct competitors and adjacent software to admire, feeding into roadmap planning.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-[0.6em] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[0.9375rem] leading-[1.8] text-ink-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE CUSTOMER PROGRAM ─────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The Customer Program</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-10">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The research infrastructure gave us methods. The Customer Program gave us relationships.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              I created the Customer Program from scratch — a structured co-creation initiative that brought a small
              group of enterprise clients directly into the product development process. The goal was not to collect
              feedback at scale, but to build deep, ongoing relationships with clients who could tell us things that
              surveys never would.
            </p>

            {/* How I built it */}
            <div className="space-y-5 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                How I built it
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                I started by talking to our sales representatives — the people who had the closest relationships with
                clients and understood which accounts were engaged, forward-thinking, and willing to invest time in
                something that would benefit them. They helped me identify the right candidates: customers who were
                strategic to LINK, technically sophisticated enough to give useful input, and trusted enough by their
                account managers to handle an honest conversation about what wasn&apos;t working.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The program offered participants early access to new features, a direct line to the product team, and
                the knowledge that their input was shaping what got built. In return, they committed to workshops,
                prototype testing sessions, and interviews — roughly 1–2 sessions per person per month.
              </p>
              <CasePdfViewer href="/cases/02/DHL_Customer_Program.pdf" label="DHL Customer Program" />
            </div>

            {/* How it evolved */}
            <div className="space-y-5 reveal">
              <h3 className="font-serif text-base lg:text-[1.0625rem] font-semibold text-ink tracking-tight">
                How it evolved
              </h3>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The program started as direct outreach and manual coordination. Over time, I built it into the portal
                itself: customers can now sign up for the program directly from within MyLINK, submit feedback through
                an integrated Usersnap widget, and participate in research sessions on their own schedule.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                This shift — from a manually curated program to a self-service feedback system embedded in the
                product — was significant. It meant that customer insight stopped being something we had to go and
                find. It started coming to us.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                In parallel, I built a broader contact database of 25+ external users across companies including DHL,
                DNB, Volvofinans Bank, and NAV — tracking which platform they use, which features they rely on, how
                frequently they log in, and what tasks they&apos;re trying to accomplish. This database informs every
                research project and ensures we&apos;re always talking to the right people.
              </p>
              <p className="text-[0.9375rem] leading-[1.8] text-ink-secondary">
                The Customer Program proved its value not in single sessions but over time — in the accumulated
                understanding of how real enterprise users think, what they actually need, and how far the product
                still had to go. That kind of knowledge doesn&apos;t come from surveys. It comes from relationships.
              </p>
            </div>

            {/* Customer program image */}
            <div className="reveal">
              <CaseImages
                images={[
                  {
                    src: '/cases/02/customer-program.png',
                    alt: 'Customer Program — enterprise clients including DHL, DNB, Volvo, Storebrand, Inditex',
                  },
                ]}
                columns={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THE AI LEARNING HUB ──────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">The AI Learning Hub &amp; AI-Augmented Research</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>

          <div className="max-w-reading space-y-6">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              In 2025 I launched an internal AI Learning Hub within the UX team — a structured programme to build
              capability for AI-integrated ways of working across three tracks: AI product design, AI-augmented UX
              practice, and AI-aware product management.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The curriculum was built on the premise that AI changes not just the tools we use but the type of user
              we&apos;re designing for. Customers who use AI daily have different mental models, different
              expectations of speed and intelligence, and different tolerance for friction. Our research methods and
              design patterns needed to evolve accordingly.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              In practice, AI integration has already changed how we work. Research sessions are now recorded and
              synthesised with AI assistance, reducing the time from interview to insight. Requirements documents are
              drafted with AI support and then reviewed for accuracy and completeness. Workshop outputs are processed
              faster. The institutional knowledge in Dovetail is more accessible.
            </p>
            <div className="reveal">
              <CaseImages
                images={[
                  {
                    src: '/cases/02/UX_Learning_HUB_Kickoff_workshop.jpg',
                    alt: 'AI Learning Hub kickoff workshop',
                  },
                ]}
                columns={1}
              />
            </div>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              We also beta-launched an AI-assisted message composer feature within the portal — the first AI-native
              capability in the product — in collaboration with an external AI partner. This gave the team direct
              experience with the challenges of AI product design: managing user expectations, handling failure
              states, and deciding where AI adds value versus where it creates confusion.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESULTS — WHAT THE SYSTEM PRODUCED ───────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What the System Produced</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="border border-border rounded-2xl overflow-hidden reveal">
            <div className="flex flex-wrap lg:flex-nowrap divide-y lg:divide-y-0 lg:divide-x divide-border">
              {[
                { value: '4', label: 'Mandatory phases', context: 'Discover · Define · Develop · Deliver — all mandatory, no skipping' },
                { value: '5+', label: 'Enterprise clients', context: 'In the Customer Program — including DNB and BAS' },
                { value: '25+', label: 'External contacts', context: 'In the research database — DHL, NAV, Volvofinans Bank and others' },
                { value: '1', label: 'Searchable knowledge base', context: 'All research stored in Dovetail, accessible to every PM' },
                { value: '3', label: 'AI tracks', context: 'In the Learning Hub — product design, UX practice, PM awareness' },
              ].map((result, i) => (
                <div key={result.label} className="flex-1 min-w-[140px] px-6 py-6 flex flex-col gap-1" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="font-serif font-medium leading-none tracking-[-0.025em] bg-gradient-primary bg-clip-text text-transparent" style={{ fontSize: 'clamp(1.75rem,2.5vw,2.5rem)' }}>{result.value}</div>
                  <div className="text-[0.8125rem] font-semibold text-ink leading-snug">{result.label}</div>
                  {result.context && <div className="text-[0.75rem] text-ink-tertiary leading-relaxed">{result.context}</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 max-w-reading space-y-5">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              The less quantifiable results are perhaps more significant. Product managers who had never run a user
              interview are now conducting research regularly. Engineering teams that were once skeptical of UX now
              ask for research before starting builds. The conversation between product, design and tech has
              changed — it starts with the problem, not the solution.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary reveal">
              Most importantly: the system runs without me carrying it. New team members can onboard into a documented
              process, access a library of past research, and connect with the customer panel through the portal.
              That&apos;s what a system looks like when it actually works.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT I LEARNED — aside ───────────────────────────────────── */}
      <section className="bg-white border-b border-border py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-label">What I Learned</span>
            <div className="flex-1 h-px bg-border reveal-expand" />
          </div>
          <div className="max-w-reading mx-auto">
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The hardest part of building this system wasn&apos;t the methodology — it was the culture change.
              Getting people to slow down before the first wireframe, to present research before proposing solutions,
              to treat validation as a prerequisite rather than a nice-to-have — that required sustained advocacy
              over a long period.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The thing that worked was making the process feel faster, not slower. I reframed research not as a gate
              that delayed delivery but as an investment that prevented rework. When an engineer avoided two weeks of
              wasted development because a research finding changed the spec, that was the argument. I made those
              moments visible.
            </p>
            <p className="text-base lg:text-[1.0625rem] leading-[1.85] text-ink-secondary mb-5 reveal">
              The area where I&apos;ve grown most is in the quality of research extraction itself — how to run
              workshops and interviews in a way that gets to the real insight rather than the surface answer. This
              has improved significantly with practice: better questions, better framing, better reading of what&apos;s
              not being said. It&apos;s a craft, and the only way to develop it is to do it repeatedly and reflect on
              what worked. I&apos;m still developing it.
            </p>
            <div className="quote-callout reveal-far mt-12" style={{ transitionDelay: '180ms' }}>
              <p className="font-serif italic text-lg lg:text-xl leading-relaxed text-ink">
                &ldquo;What surprised me most after establishing this process wasn&apos;t the business impact —
                though that was real. It was how much better the daily working life of the UX and frontend teams
                became. Less rework, less confusion, less of that exhausting cycle of building something and then
                being told it wasn&apos;t what was needed. People started enjoying their work more. The process gave
                them clarity, and clarity gave them confidence. That&apos;s not something you can put in a metric,
                but it&apos;s the thing I&apos;m most proud of.&rdquo;
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
