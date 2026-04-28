import type { ReactElement } from 'react'
import { SkillsGrid } from '~/components/skills-grid.client'
import { LanguagesPersonalGrid } from '~/components/languages-personal-grid.client'
import { Button } from '~/components/ui/button'
import { EXPERIENCE, ABOUT_SKILLS, EDUCATION } from '~/constants/about'

export const metadata = {
  title: 'About',
  description: 'Product Manager and UX Lead with 10+ years of experience. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

export default function AboutPage(): ReactElement {
  return (
    <div className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <p className="section-label mb-6 animate-fade-up">About</p>
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 mb-20 pb-16 animate-fade-up">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl lg:text-5xl text-ink mb-6 leading-tight">
            Patricia Bayona Bultó
          </h1>
          <p className="text-base lg:text-lg font-medium text-accent mb-6">
            Product & Design Leader
          </p>
          <p className="text-base lg:text-lg text-ink-secondary leading-relaxed">
            I'm a Product & Design Leader who builds systems, not just features. Over the past nine years I've worked at the intersection of product strategy, UX, and business — first as co-founder and COO of Alqua, a MarTech startup I helped grow from two people to 40, and since 2021 as VP of UX and Product Manager at LINK Mobility, one of Europe's largest CPaaS platforms.
            I came to product through business, not design school. My background is in finance and management — which means I've always thought about product decisions in terms of what they cost, what they generate, and what they make possible. That lens shapes everything I do: from a roadmap to a research session to a conversation with a stakeholder who doesn't yet see the value of what we're building.
            What I enjoy most is the moment when a complex, chaotic situation starts to have a shape. When the team understands the problem they're actually solving. When the process stops feeling like overhead and starts feeling like clarity. That's what I try to create — and it's what the work in this portfolio is really about.
          </p>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3 text-ink-secondary">
            <svg className="flex-shrink-0 text-ink-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            <a href="mailto:patricia.bulto@gmail.com" className="hover:text-ink transition-colors">
              patricia.bulto@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-ink-secondary">
            <svg className="flex-shrink-0 text-ink-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor" />
            </svg>
            <a href="tel:+34687983052" className="hover:text-ink transition-colors">
              +34 687 983 052
            </a>
          </div>
          <div className="flex items-center gap-3 text-ink-secondary">
            <svg className="flex-shrink-0 text-ink-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
            </svg>
            <span>Spain · Full Remote</span>
          </div>
          <div className="flex items-center gap-3 text-ink-secondary">
            <svg className="flex-shrink-0 text-ink-tertiary" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
            </svg>
            <a
              href="https://linkedin.com/in/patriciabayonabulto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              linkedin.com/in/patriciabayonabulto
            </a>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Experience</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-16">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.company}
              className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-12 reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Left: meta */}
              <div className="flex-shrink-0">
                <p className="font-medium text-ink mb-1">{exp.company}</p>
                <p className="text-sm text-accent mb-2">{exp.role}</p>
                <p className="text-xs text-ink-tertiary mb-3">{exp.period}</p>
                <p className="text-xs text-ink-secondary leading-relaxed italic">{exp.context}</p>
                {exp.note && (
                  <p className="text-xs text-ink-secondary leading-relaxed mt-2 italic">
                    {exp.note}
                  </p>
                )}
              </div>

              {/* Right: highlights */}
              <div className="space-y-8">
                {exp.highlights.map((section, i) => (
                  <div key={i}>
                    {section.subrole && (
                      <p className="font-medium text-sm text-ink mb-4">{section.subrole}</p>
                    )}
                    <ul className="space-y-2.5">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20 pt-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Skills & Tools</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <SkillsGrid skills={ABOUT_SKILLS} />
      </section>

      {/* Education */}
      <section className="mb-20 pt-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Education</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              className="grid lg:grid-cols-[240px_1fr] gap-4 lg:gap-12 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <p className="text-xs text-ink-tertiary">{edu.period}</p>
              </div>
              <div>
                <p className="font-medium text-ink mb-1">{edu.degree}</p>
                <p className="text-sm text-ink-secondary mb-1">{edu.school}</p>
                {edu.note && <p className="text-xs text-ink-tertiary italic">{edu.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Personal */}
      <LanguagesPersonalGrid />

      {/* CTA */}
      <div className="mt-16 pt-12 text-center">
        <p className="text-base text-ink-secondary mb-6">
          Want to see how I work? Start with the case studies.
        </p>
        <Button variant="primary" size="lg" href="/portfolio/cases" arrow>
          View all cases
        </Button>
      </div>
    </div>
  )
}
