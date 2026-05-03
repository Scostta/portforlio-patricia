import type { ReactElement } from 'react'
import Image from 'next/image'
import { EXPERIENCE, ABOUT_SKILLS, EDUCATION, LANGUAGES, PERSONAL_FACTS } from '~/constants/about'
import { StatsStrip } from '~/components/stats-strip.client'
import { cn } from '~/utils/cn'

export const metadata = {
  title: 'About',
  description: 'Product Manager and UX Lead with 10+ years of experience. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary pb-2.5 border-b border-border mb-3">
      {children}
    </p>
  )
}

export default function AboutPage(): ReactElement {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="px-6 lg:px-10 pt-14 pb-14 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

            {/* Left: text content */}
            <div>
              {/* Eyebrow */}
              <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary mb-6 animate-fade-up [animation-delay:50ms]">
                About
              </p>

              {/* Name */}
              <h1 className="font-serif text-[clamp(2.75rem,5.5vw,5.5rem)] font-normal leading-[0.93] tracking-[-0.04em] text-ink mb-4 animate-fade-up [animation-delay:120ms]">
                Patricia<br />Bayona Bultó
              </h1>

              {/* Role */}
              <p className="text-sm font-light italic tracking-[0.04em] text-accent mb-7 animate-fade-up [animation-delay:200ms]">
                VP of UX &amp; Product Manager &nbsp;·&nbsp; Head of UX
              </p>

              {/* Bio */}
              <p className="text-sm leading-relaxed font-light text-ink-secondary max-w-[560px] mb-7 animate-fade-up [animation-delay:280ms]">
                I'm a Product & Design Leader who builds systems, not just features. Over the past nine years I've worked at the intersection of product strategy, UX, and business — first as co-founder and COO of Alqua, a MarTech startup I helped grow from two people to 40, and since 2021 as VP of UX and Product Manager at LINK Mobility, one of Europe's largest CPaaS platforms.
                I came to product through business, not design school. My background is in finance and management — which means I've always thought about product decisions in terms of what they cost, what they generate, and what they make possible. That lens shapes everything I do: from a roadmap to a research session to a conversation with a stakeholder who doesn't yet see the value of what we're building.
                What I enjoy most is the moment when a complex, chaotic situation starts to have a shape. When the team understands the problem they're actually solving. When the process stops feeling like overhead and starts feeling like clarity. That's what I try to create — and it's what the work in this portfolio is really about.
              </p>

              {/* Contact pills */}
              <div className="flex flex-wrap gap-2 animate-fade-up [animation-delay:360ms]">
                <a
                  href="mailto:patricia.bulto@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary border border-border rounded-full px-3.5 py-1.5 hover:text-ink hover:border-ink/30 transition-colors duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                  </svg>
                  patricia.bulto@gmail.com
                </a>
                <a
                  href="tel:+34687983052"
                  className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary border border-border rounded-full px-3.5 py-1.5 hover:text-ink hover:border-ink/30 transition-colors duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor" />
                  </svg>
                  +34 687 983 052
                </a>
                <a
                  href="https://linkedin.com/in/patriciabayonabulto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary border border-border rounded-full px-3.5 py-1.5 hover:text-ink hover:border-ink/30 transition-colors duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
                  </svg>
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary border border-border rounded-full px-3.5 py-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                  </svg>
                  Spain · Full Remote
                </span>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="hidden lg:block animate-fade-in [animation-delay:400ms]">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/pati.png"
                  alt="Patricia Bayona Bultó"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────────── */}
      <StatsStrip />

      {/* ── Skills + Experience ─────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">

          {/* ── Sidebar ─────────────────── */}
          <aside className="flex flex-col gap-2.5">

            <SectionLabel>Skills &amp; Tools</SectionLabel>

            {ABOUT_SKILLS.map((skill, i) => (
              <div
                key={skill.area}
                className="bg-white border border-border rounded-[10px] px-4 py-3.5 hover:border-accent/25 hover:shadow-card-hover transition-all duration-200 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="text-micro font-semibold tracking-widest uppercase text-accent mb-2.5">{skill.area}</p>
                <div className="flex flex-wrap gap-1">
                  {skill.items.split(' · ').map((tag) => (
                    <span key={tag} className="text-2xs font-medium text-ink-tertiary border border-border px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-3">
              <SectionLabel>Education</SectionLabel>
            </div>
            <div className="bg-white border border-border rounded-[10px] overflow-hidden reveal">
              {EDUCATION.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={cn('px-4 py-3.5', i > 0 && 'border-t border-border')}
                >
                  <p className="text-xs font-light text-ink leading-[1.35] mb-1">{edu.degree}</p>
                  <p className="text-2xs text-ink-tertiary mb-0.5">{edu.school}</p>
                  <p className="text-2xs text-ink-tertiary/70">{edu.period}{edu.note ? ` · ${edu.note}` : ''}</p>
                </div>
              ))}
            </div>

          </aside>

          {/* ── Experience column ─────────── */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary flex-shrink-0">
                Experience
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="flex flex-col gap-12">
              {EXPERIENCE.map((exp, index) => {
                const isEarlyCareer = exp.highlights.length === 0
                return (
                  <div
                    key={exp.company}
                    className={cn('reveal', isEarlyCareer && 'opacity-80')}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Company + period */}
                    <div className="flex items-start justify-between gap-6 mb-1">
                      <div className="flex items-center gap-3">
                        <p className="font-serif text-lg font-medium tracking-[-0.02em] text-ink">
                          {exp.company}
                        </p>
                        {isEarlyCareer && (
                          <span className="text-2xs font-semibold tracking-[0.06em] uppercase text-ink-tertiary/60 border border-border bg-surface px-2 py-0.5 rounded-full">
                            Early career
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold tracking-[0.06em] text-ink-tertiary flex-shrink-0 mt-0.5 border border-border px-2.5 py-0.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <p className="text-xs font-light italic text-accent tracking-[0.02em] mb-2">
                      {exp.role}
                    </p>

                    {/* Context */}
                    {exp.context && (
                      <p className="text-xs text-ink-secondary leading-[1.5] border-l-2 border-accent bg-accent/[0.07] px-3 py-2 rounded-r-lg mb-4">
                        {exp.context}
                      </p>
                    )}

                    {/* Promotion note */}
                    {exp.note && (
                      <p className="text-xs italic text-ink-tertiary mb-4">
                        <span className="text-accent not-italic">↑ </span>{exp.note}
                      </p>
                    )}

                    {/* Highlights */}
                    {exp.highlights.length > 0 && (
                      <div className="flex flex-col gap-6">
                        {exp.highlights.map((section, hi) => (
                          <div key={hi}>
                            {hi > 0 && <div className="h-px bg-border mb-6" />}
                            {section.subrole && (
                              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase text-ink-secondary mb-3">
                                <span className="w-4 h-px bg-accent flex-shrink-0" />
                                {section.subrole}
                              </p>
                            )}
                            <ul className="flex flex-col gap-2.5">
                              {section.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-3 text-sm leading-[1.6] text-ink-secondary font-light">
                                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-[0.52rem]" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Personal ────────────────────────────────────────────── */}
      <section className="border-t border-border px-6 lg:px-10 py-14 max-w-[1400px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary flex-shrink-0">
            Personal
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Languages */}
          <div className="reveal">
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary pb-2.5 border-b border-border mb-5">
              Languages
            </p>
            <div className="flex flex-col">
              {LANGUAGES.map(({ name, level }, i) => (
                <div
                  key={name}
                  className={cn(
                    'flex items-center justify-between py-4',
                    i < LANGUAGES.length - 1 && 'border-b border-border/60',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                    <span className="font-serif text-base font-medium tracking-[-0.01em] text-ink">{name}</span>
                  </div>
                  <span className="text-xs font-medium tracking-[0.04em] text-ink-tertiary">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Background & facts */}
          <div className="reveal [transition-delay:100ms]">
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary pb-2.5 border-b border-border mb-5">
              Background &amp; facts
            </p>
            <div className="flex flex-col gap-4">
              {PERSONAL_FACTS.map(({ label, value, detail }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-micro font-semibold tracking-widest uppercase text-accent w-[96px] flex-shrink-0 pt-0.5">{label}</span>
                  <div>
                    <p className="text-sm font-light text-ink leading-snug">{value}</p>
                    {detail && <p className="text-xs text-ink-tertiary mt-0.5">{detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Beyond work: text + kite photo */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center mt-14 pt-14 border-t border-border">
          <div className="reveal">
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary pb-2.5 border-b border-border mb-6">
              Beyond work
            </p>
            <p className="font-serif text-[clamp(1.15rem,1.9vw,1.4rem)] font-light leading-[1.55] tracking-[-0.02em] text-ink mb-5">
              When I&apos;m not thinking about product, I&apos;m usually in the water.
            </p>
            <p className="text-sm leading-[1.8] font-light text-ink-secondary">
              I&apos;m a kitesurfer based in Tarifa, in the south of Spain — one of the windiest places in
              Europe, which suits me fine. I also paint, abstract work that I sell through my own small
              online business. And occasionally I advise early-stage startups through{' '}
              <span className="font-medium text-ink">Borkenleg</span>.
            </p>
          </div>
          <div className="reveal [transition-delay:150ms]">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/pati-kite.png"
                alt="Patricia kitesurfing in Tarifa, Spain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </section>

    </>
  )
}
