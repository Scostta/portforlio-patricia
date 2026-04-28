import type { ReactElement } from 'react'
import { cn } from '~/utils/cn'
import { CASES } from '~/constants/cases'
import { FEATURED_CASE_SLUGS } from '~/constants/home'
import { SKILLS } from '~/constants/skills'
import { STATS } from '~/constants/stats'
import { StatNumber } from '~/components/stat-number.client'
import { FeaturedCasesGrid } from '~/components/featured-cases-grid.client'
import { HomeSkillsGrid } from '~/components/home-skills-grid.client'
import { Button } from '~/components/ui/button'

export const metadata = {
  title: 'Portfolio — Patricia Bayona',
  description:
    'Portfolio of Patricia Bayona Bultó — Product Manager and UX Lead with 10+ years building digital products from 0 to 1. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

export default function PortfolioPage(): ReactElement {
  const featuredCases = CASES.filter((c) => FEATURED_CASE_SLUGS.includes(c.slug))

  return (
    <>
      {/* Hero */}
      <section>
        <div className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 max-w-7xl mx-auto py-20">
          <div className="max-w-4xl">
            <p className="section-label mb-8 animate-fade-up">Product & Design Leader</p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-ink mb-10 animate-fade-up [animation-delay:100ms]">
              Building product systems from scratch
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">with a founder's instinct.</span>
            </h1>

            <p className="text-xl lg:text-2xl leading-relaxed text-ink max-w-2xl mb-12 animate-fade-up [animation-delay:400ms]">
              I connect strategy, design and technology into products that ship — with a business
              degree, a founder&apos;s P&amp;L instinct, and a researcher&apos;s understanding of users.
              Formerly VP of UX at{' '}
              <span className="text-accent font-medium">LINK Mobility</span> and Co-Founder at{' '}
              <span className="text-accent font-medium">Alqua</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:300ms]">
              <Button variant="primary" size="lg" href="/cases" arrow>
                View case studies
              </Button>
              <Button variant="secondary" size="lg" href="/about">
                About me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gradient-secondary py-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {STATS.map(({ target, suffix, useLocale, label, sub }, index) => (
            <div
              key={label}
              className={cn('lg:px-10 first:lg:pl-0 last:lg:pr-0 reveal')}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-1">
                <StatNumber target={target} suffix={suffix} useLocale={useLocale} />
              </div>
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
          <Button variant="ghost" size="md" href="/cases" arrow className="hidden sm:inline-flex">
            All 6 cases
          </Button>
        </div>

        <FeaturedCasesGrid cases={featuredCases} />

        <div className="mt-6 sm:hidden">
          <Button variant="ghost" size="md" href="/cases" arrow>
            All 6 cases
          </Button>
        </div>
      </section>

      {/* Positioning block */}
      <section className="bg-gradient-secondary border-y border-border px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl lg:text-3xl text-ink leading-relaxed reveal-far">
            &ldquo;Building product systems from scratch — with a business degree, a founder&apos;s
            P&amp;L instinct, and a researcher&apos;s understanding of users. I connect strategy,
            design and technology into products that actually ship.&rdquo;
          </p>
          <p className="mt-6 text-sm text-ink-secondary reveal-far [transition-delay:150ms]">Patricia Bayona Bultó</p>
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
            <Button variant="ghost" size="md" href="/about" arrow className="text-ink font-medium border-b border-ink pb-0.5 hover:text-accent hover:border-accent">
              Full profile
            </Button>
          </div>

          <HomeSkillsGrid skills={SKILLS} />
        </div>
      </section>
    </>
  )
}
