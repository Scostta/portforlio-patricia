'use client'
import { useRef } from 'react'
import type { ReactElement } from 'react'

const LANGUAGES = [
  { lang: 'Spanish', level: 'Native' },
  { lang: 'English', level: 'Proficient — Cambridge CPE (C) · TOEFL 91' },
  { lang: 'French', level: 'Intermediate — DELF B1' },
]

export function LanguagesPersonalGrid(): ReactElement {
  const gradientRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradient = gradientRef.current
    if (!gradient) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    gradient.style.opacity = '1'
    gradient.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(138, 200, 231, 1) 0%, rgba(171, 107, 255, 1) 40%, transparent 100%)`
  }

  const handleMouseLeave = () => {
    const gradient = gradientRef.current
    if (gradient) gradient.style.opacity = '0'
  }

  return (
    <div
      className="relative bg-border border-t border-border"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div className="relative grid lg:grid-cols-2 gap-[2px] bg-transparent">
        <div className="bg-white p-8 lg:p-10 animate-fade-up">
          <p className="section-label mb-5">Languages</p>
          <div className="space-y-3">
            {LANGUAGES.map(({ lang, level }) => (
              <div key={lang} className="flex items-baseline gap-3">
                <span className="text-sm font-medium text-ink w-20">{lang}</span>
                <span className="text-sm text-ink-secondary">{level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 lg:p-10 animate-fade-up [animation-delay:60ms]">
          <p className="section-label mb-5">Personal</p>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Abstract painter with an independent online art business · Startup advisor (Borkenleg.com) · Kitesurfer based in Southern Spain.
          </p>
        </div>
      </div>
    </div>
  )
}
