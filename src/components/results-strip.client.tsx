'use client'

import { useRef } from 'react'
import type { ReactElement } from 'react'

export interface ResultItem {
  value: string
  label: string
  context?: string
  hero?: boolean
}

export function ResultsStrip({ results }: { results: ResultItem[] }): ReactElement {
  const topBorderRef = useRef<HTMLDivElement>(null)
  const bottomBorderRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const numberRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const borderGlow = `radial-gradient(circle 160px at ${x}px 0px, rgba(102,103,171,1) 0%, rgba(102,103,171,0.4) 45%, transparent 100%)`

    if (topBorderRef.current) {
      topBorderRef.current.style.opacity = '1'
      topBorderRef.current.style.background = borderGlow
    }
    if (bottomBorderRef.current) {
      bottomBorderRef.current.style.opacity = '1'
      bottomBorderRef.current.style.background = borderGlow
    }

    itemRefs.current.forEach((item, i) => {
      if (!item) return
      const itemRect = item.getBoundingClientRect()
      const hovered = e.clientX >= itemRect.left && e.clientX <= itemRect.right
      const numEl = numberRefs.current[i]
      if (numEl) numEl.style.color = hovered ? '#6667AB' : '#131310'
    })
  }

  const handleMouseLeave = () => {
    if (topBorderRef.current) topBorderRef.current.style.opacity = '0'
    if (bottomBorderRef.current) bottomBorderRef.current.style.opacity = '0'
    numberRefs.current.forEach((el) => {
      if (el) el.style.color = '#131310'
    })
  }

  return (
    <div
      className="relative border-y border-border reveal"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Border glows — manipulados directamente via ref, sin re-render */}
      <div
        ref={topBorderRef}
        className="absolute inset-x-0 top-0 h-[2px] pointer-events-none z-10"
        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        aria-hidden="true"
      />
      <div
        ref={bottomBorderRef}
        className="absolute inset-x-0 bottom-0 h-[2px] pointer-events-none z-10"
        style={{ opacity: 0, transition: 'opacity 0.3s ease' }}
        aria-hidden="true"
      />

      <div className="flex flex-wrap lg:flex-nowrap">
        {results.map((result, i) => (
          <div
            key={result.label}
            ref={(el) => { itemRefs.current[i] = el }}
            className="flex-1 min-w-[150px] px-6 py-8 lg:py-10 flex flex-col gap-2.5"
          >
            <div
              ref={(el) => { numberRefs.current[i] = el }}
              className="font-semibold leading-none"
              style={{
                fontSize: 'clamp(1.75rem,2.3vw,2.5rem)',
                letterSpacing: '-0.03em',
                color: '#131310',
                transition: 'color 0.2s ease',
              }}
            >
              {result.value}
            </div>
            <p className="text-fine text-ink-tertiary leading-snug">
              {result.label}
              {result.context && <><br />{result.context}</>}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
