'use client'
import type { ReactElement } from 'react'

const LANGUAGES = [
  { lang: 'Spanish', level: 'Native' },
  { lang: 'English', level: 'Proficient — Cambridge CPE (C) · TOEFL 91' },
  { lang: 'French', level: 'Intermediate — DELF B1' },
]

export function LanguagesPersonalGrid(): ReactElement {
  return (
    <>
      <section className="mb-20 pt-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Languages</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-3 animate-fade-up">
          {LANGUAGES.map(({ lang, level }) => (
            <div key={lang} className="flex items-baseline gap-3">
              <span className="text-sm font-medium text-ink w-20">{lang}</span>
              <span className="text-sm text-ink-secondary">{level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 pt-4">
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">Personal</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <p className="text-sm text-ink-secondary leading-relaxed animate-fade-up">
          Abstract painter with an independent online art business · Startup advisor (Borkenleg.com) · Kitesurfer based in Southern Spain.
        </p>
      </section>
    </>
  )
}
