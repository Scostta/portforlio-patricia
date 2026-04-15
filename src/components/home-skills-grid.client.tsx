'use client'
import { useRef } from 'react'
import type { CSSProperties, ReactElement } from 'react'
import type { SkillGroup } from '~/constants/skills'

export function HomeSkillsGrid({ skills }: { skills: SkillGroup[] }): ReactElement {
  const gradientRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradient = gradientRef.current
    if (!gradient) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    gradient.style.opacity = '1'
    gradient.style.background = `radial-gradient(circle 280px at ${x}px ${y}px, rgba(138, 200, 231, 1) 0%, rgba(171, 107, 255, 0.95) 45%, transparent 100%)`
  }

  const handleMouseLeave = () => {
    const gradient = gradientRef.current
    if (gradient) gradient.style.opacity = '0'
  }

  return (
    <div className="relative bg-paper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-2 gap-[2px] bg-transparent">
        {skills.map(({ label, items }, i) => (
          <div
            key={label}
            className="bg-white p-5 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` } as CSSProperties}
          >
            <p className="section-label mb-3">{label}</p>
            <ul className="space-y-2">
              {items.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-2 text-xs text-ink-secondary">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 opacity-60"
                    aria-hidden="true"
                  >
                    <path d={icon} />
                  </svg>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
