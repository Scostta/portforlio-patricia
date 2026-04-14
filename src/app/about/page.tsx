import type { ReactElement } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'About — Patricia Bayona',
  description: 'Product Manager and UX Lead with 10+ years of experience. Formerly VP of UX at LINK Mobility and Co-Founder at Alqua.',
}

const EXPERIENCE = [
  {
    company: 'LINK Mobility',
    context: 'Oslo-listed CPaaS · ~700 employees · 18 countries · NOK 7bn revenue · 50,000+ customers · 20bn+ messages/year',
    role: 'VP of UX & Product Manager',
    period: '2021 – Present',
    note: 'Promoted to VP of UX in 2022 · one year after joining · whilst retaining full PM responsibilities',
    highlights: [
      {
        subrole: 'Product Manager — MyLINK Portal',
        items: [
          'Defined the long-term product vision through a founding Blueprint that unified strategy across 50+ legacy products — still the organisation\'s north star reference today.',
          'Launched MyLINK Portal in 6 European markets reaching 12,900+ unique users, 8min 41s average session and 14% bounce rate.',
          'Designed a soft migration strategy that sunset 10+ legacy products with 91–100% completion rates in Nordic markets.',
          'Defined go-to-market playbooks for each market, training sales, support and product teams across countries and time zones.',
          'Managed full roadmap prioritisation, sprint planning and stakeholder communication up to C-1 level.',
        ],
      },
      {
        subrole: 'VP of UX — Group',
        items: [
          'Built and scaled the UX team (up to 5 people across Macedonia, Germany and Norway); managed hiring, performance reviews and offsites.',
          'Designed and maintained the company-wide design system in Figma, adopted across multiple product teams.',
          'Created the UX Operating Model — defining how research, design, validation and delivery work together across PM, Tech and UX.',
          'Led UX research across SMS, WhatsApp, RCS, Email, Viber and Multichannel products; coached PMs on research methods.',
          'Founded and led an internal AI Learning Hub with structured curriculum across three tracks.',
          'Led the beta launch of an AI-assisted message composer feature in collaboration with an external AI partner.',
        ],
      },
    ],
  },
  {
    company: 'Alqua',
    context: 'MarTech & Big Data firm · Alqua Cloud (proprietary Social Media & intelligence SaaS) + Alqua Digital (consulting) · clients incl. Mercedes-Benz, Santander, Danone, Unilever, AVIS, BBC',
    role: 'Co-Founder & COO',
    period: '2017 – 2021',
    highlights: [
      {
        subrole: '',
        items: [
          'Defined and executed the product strategy for Alqua Cloud from MVP through multiple iterations over 4 years.',
          'Scaled the platform database from 5,000 to 7 million property listings, managing the full product, operations and commercial cycle.',
          'Conducted 300+ user interviews across 4 years; translated qualitative insights into iterations that drove 80% customer retention.',
          'Grew the company from 2 to 40+ direct employees across product, engineering, sales and customer success.',
          'Managed full P&L, cashflow and financial reporting across two business divisions.',
          'Raised 2M€+ in capital across multiple rounds including ENISA, ICO and private investors.',
          'Executed a full strategic pivot during COVID-19 — transitioning the tech team to consulting and redesigning the product for new market conditions.',
        ],
      },
    ],
  },
  {
    company: 'Sybilla',
    context: 'National Award of Fashion 2015 · Retail industry',
    role: 'Intern — Strategy & Product Launching',
    period: 'May – Sep 2015',
    highlights: [],
  },
]

const SKILLS = [
  {
    area: 'Product',
    items: 'Roadmapping · Prioritisation · Sprint Planning · OKRs · QBRs · Go-to-Market · Stakeholder Management',
  },
  {
    area: 'UX & Research',
    items: 'User Interviews · Double Diamond · Figma · Prototyping · Usability Testing · Data Analytics',
  },
  {
    area: 'Tools',
    items: 'Jira · Confluence · Hotjar · Plausible · Google Analytics · Notion · Miro',
  },
  {
    area: 'Tech Literacy',
    items: 'HTML · CSS · MySQL · PHP (functional) · API concepts · CPaaS architecture',
  },
  {
    area: 'AI Tools',
    items: 'ChatGPT · Claude · Notion AI · AI-assisted research synthesis · AI for requirements, communication & team development',
  },
  {
    area: 'Business',
    items: 'P&L Management · Fundraising · Agile / Scrum / Kanban · Cross-cultural Team Leadership',
  },
]

const EDUCATION = [
  {
    degree: 'Master in International Management (MIM)',
    school: 'ESSEC Business School + Universidad Pontificia de Comillas',
    period: '2016 – 2017',
    note: 'Ranked #3 in class · Pursued in English',
  },
  {
    degree: 'B.A., Business Administration (E-2)',
    school: 'Comillas — ICADE Business School',
    period: '2012 – 2016',
    note: 'Financial specialisation · Exchange semester at Copenhagen Business School (CBS), 2014',
  },
  {
    degree: 'Bilingual Education',
    school: 'Kensington School',
    period: '1999 – 2012',
    note: '',
  },
]

export default function AboutPage(): ReactElement {
  return (
    <div className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 mb-20 pb-16 border-b border-border animate-fade-up">
        <div className="max-w-2xl">
          <p className="section-label mb-4">About</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-ink mb-6 leading-tight">
            Patricia Bayona Bultó
          </h1>
          <p className="text-base lg:text-lg font-medium text-accent mb-6">
            Product & Design Leader
          </p>
          <p className="text-base lg:text-lg text-ink-secondary leading-relaxed">
            Building product systems from scratch — with a business degree, a founder&apos;s P&amp;L
            instinct, and a researcher&apos;s understanding of users. I connect strategy, design and
            technology into products that actually ship.
          </p>
        </div>

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
      <section className="mb-20 border-t border-border pt-16">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Skills & Tools</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {SKILLS.map(({ area, items }, i) => (
            <div
              key={area}
              className="bg-paper p-6 lg:p-8 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p className="section-label mb-3">{area}</p>
              <p className="text-sm text-ink-secondary leading-relaxed">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-20 border-t border-border pt-16">
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
      <div className="grid lg:grid-cols-2 gap-px bg-border border-t border-border">
        <div className="bg-paper p-8 lg:p-10">
          <p className="section-label mb-5">Languages</p>
          <div className="space-y-3">
            {[
              { lang: 'Spanish', level: 'Native' },
              { lang: 'English', level: 'Proficient — Cambridge CPE (C) · TOEFL 91' },
              { lang: 'French', level: 'Intermediate — DELF B1' },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-ink w-20">{lang}</span>
                <span className="text-sm text-ink-secondary">{level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-8 lg:p-10">
          <p className="section-label mb-5">Personal</p>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Abstract painter with an independent online art business · Startup advisor (Borkenleg.com) · Kitesurfer based in Southern Spain.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 pt-12 border-t border-border text-center">
        <p className="text-base text-ink-secondary mb-6">
          Want to see how I work? Start with the case studies.
        </p>
        <Link
          href="/cases"
          className="inline-flex items-center gap-3 bg-accent text-paper rounded-lg px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-accent-hover transition-colors duration-200"
        >
          View all cases
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
