import type { ReactElement } from 'react'
import Link from 'next/link'
import { cn } from '~/utils/cn'
import { CASES } from '~/constants/cases'

const FEATURED_CASE_SLUGS = ['mylink-portal', 'ux-system', 'alqua-pricing']

const STATS = [
  { value: '12,900+', label: 'Portal users', sub: 'across 6 European markets' },
  { value: '10+', label: 'Legacy products', sub: 'migrated or sunset' },
  { value: '80%', label: 'Customer retention', sub: 'at Alqua over 4 years' },
  { value: '300+', label: 'User interviews', sub: 'conducted across both roles' },
]

export default function HomePage(): ReactElement {
  const featuredCases = CASES.filter((c) => FEATURED_CASE_SLUGS.includes(c.slug))

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto py-20">
        <div className="max-w-4xl">
          <p className="section-label mb-8 animate-fade-up">Product Manager & UX Lead</p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-ink mb-10 animate-fade-up [animation-delay:100ms]">
            Building products
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">people actually use.</span>
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed text-ink-secondary max-w-2xl mb-12 animate-fade-up [animation-delay:200ms]">
            I connect strategy, design and technology into products that ship — with a business
            degree, a founder&apos;s P&amp;L instinct, and a researcher&apos;s understanding of users.
            Formerly VP of UX at{' '}
            <span className="text-accent font-medium">LINK Mobility</span> and Co-Founder at{' '}
            <span className="text-accent font-medium">Alqua</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:300ms]">
            <Link
              href="/cases"
              className="inline-flex items-center gap-3 bg-gradient-primary text-black rounded-lg px-7 py-3.5 text-sm font-medium tracking-wide hover:text-white hover:bg-accent-hover transition-colors duration-200"
            >
              View case studies
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-border rounded-lg text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:border-accent transition-colors duration-200"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gradient-secondary py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map(({ value, label, sub }, index) => (
            <div
              key={label}
              className={cn('lg:px-10 first:lg:pl-0 last:lg:pr-0 reveal')}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <p className="font-serif text-3xl lg:text-4xl font-bold text-black mb-1">{value}</p>
              <p className="text-sm font-medium text-black/80 mb-0.5">{label}</p>
              <p className="text-xs text-black/40">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured cases */}
      <section className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="section-label mb-3">Selected work</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink">Featured cases</h2>
          </div>
          <Link
            href="/cases"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors"
          >
            All 6 cases
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {featuredCases.map((c, index) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group bg-paper p-8 lg:p-10 hover:bg-gradient-secondary transition-all duration-300 flex flex-col reveal"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="section-label">{c.company}</span>
                <span className="font-serif text-5xl font-bold text-border group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent group-hover:scale-110 transition-all duration-500 origin-top-right inline-block">
                  {c.number}
                </span>
              </div>

              <h3 className="font-serif text-xl lg:text-2xl text-ink mb-3 leading-snug">
                {c.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6 flex-1">
                {c.subtitle}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {c.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-2xs tracking-wide px-2.5 py-1 bg-surface text-ink-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-accent font-medium">
                Read case study
                <svg
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors"
          >
            All 6 cases
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Positioning block */}
      <section className="bg-gradient-secondary border-y border-border px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl lg:text-3xl text-ink leading-relaxed italic reveal">
            &ldquo;Building product systems from scratch — with a business degree, a founder&apos;s
            P&amp;L instinct, and a researcher&apos;s understanding of users. I connect strategy,
            design and technology into products that actually ship.&rdquo;
          </p>
          <p className="mt-6 text-sm text-ink-secondary">Patricia Bayona Bultó</p>
        </div>
      </section>

      {/* About teaser */}
      <section className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="section-label mb-4">About</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-6">
              10+ years building from&nbsp;0&nbsp;to&nbsp;1
            </h2>
            <p className="text-base lg:text-lg text-ink-secondary leading-relaxed mb-6">
              I&apos;ve been VP of UX and Product Manager at LINK Mobility — one of Europe&apos;s
              largest CPaaS platforms — and Co-Founder &amp; COO at Alqua, a MarTech SaaS I scaled
              from 2 to 40+ employees and ~1.1M€ revenue.
            </p>
            <p className="text-base lg:text-lg text-ink-secondary leading-relaxed mb-8">
              I hold a Master in International Management from ESSEC (ranked #3 in class) and a
              Business degree from ICADE. I&apos;m Spanish, English-proficient (Cambridge CPE), and
              work fully remote.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
            >
              Full profile
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Product', items: ['Roadmapping', 'Prioritisation', 'Sprint Planning', 'OKRs', 'Go-to-Market'] },
              { label: 'UX & Research', items: ['User Interviews', 'Double Diamond', 'Figma', 'Prototyping', 'Usability Testing'] },
              { label: 'Business', items: ['P&L Management', 'Fundraising', 'Cross-cultural Leadership', 'Agile / Scrum'] },
              { label: 'Tools', items: ['Jira', 'Confluence', 'Hotjar', 'Plausible', 'Notion', 'Miro'] },
            ].map(({ label, items }, i) => (
              <div
                key={label}
                className="bg-surface p-5 reveal hover:bg-gradient-secondary transition-colors duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="section-label mb-3">{label}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-ink-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
