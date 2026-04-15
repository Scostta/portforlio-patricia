'use client'
import { useRef } from 'react'
import type { CSSProperties, ReactElement } from 'react'

type SkillEntry = {
  area: string
  items: string
}

export function SkillsGrid({ skills }: { skills: SkillEntry[] }): ReactElement {
  const gradientRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const gradient = gradientRef.current
    if (!gradient) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    gradient.style.opacity = '1'
    gradient.style.background = `radial-gradient(circle 120px at ${x}px ${y}px, rgba(138, 200, 231, 0.9) 0%, rgba(171, 107, 255, 0.8) 50%, transparent 100%)`
  }

  const handleMouseLeave = () => {
    const gradient = gradientRef.current
    if (gradient) gradient.style.opacity = '0'
  }

  return (
    // Outer container: bg-border is the fallback gap color
    <div className="relative bg-border" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Single gradient layer — covers the entire grid, shows through the gaps */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {/* Grid is bg-transparent so gaps reveal whatever is behind (the gradient) */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-transparent">
        {skills.map(({ area, items }, i) => (
          <div
            key={area}
            className="bg-white p-6 lg:p-8 animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` } as CSSProperties}
          >
            <p className="section-label mb-3">{area}</p>
            <p className="text-sm text-ink-secondary leading-relaxed">{items}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
