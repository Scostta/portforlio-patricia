import type { ReactElement } from 'react'

export interface SituationProblem {
  title: string
  body: string
  icon: string
}

export interface SituationPanel {
  tag: string
  dotColor: string
  items: SituationProblem[]
}

export function SituationAccordion({ panels }: { panels: SituationPanel[] }): ReactElement {
  const maxLen = Math.max(...panels.map((p) => p.items.length))

  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Column headers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 mb-12">
        {panels.map((panel, i) => (
          <div key={i} className="flex items-center gap-3">
            <h2 className="font-serif font-medium leading-snug tracking-tight text-ink text-[clamp(1.5rem,2.2vw,2.1rem)]">
              {panel.tag}
            </h2>
          </div>
        ))}
      </div>

      {/* Items aligned by row across both columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
        {Array.from({ length: maxLen }).flatMap((_, rowIndex) =>
          panels.map((panel, colIndex) => {
            const item = panel.items[rowIndex]
            if (!item) return <div key={`${colIndex}-${rowIndex}-empty`} />
            return (
              <div
                key={`${colIndex}-${rowIndex}`}
                className="reveal"
                style={{ transitionDelay: `${(rowIndex * panels.length + colIndex) * 70}ms` }}
              >
                <div className="w-10 h-10 rounded-lg border border-accent/40 flex items-center justify-center mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                    aria-hidden
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div className="border-l-2 border-accent pl-3 mb-2">
                  <div className="text-[0.9375rem] font-semibold text-ink">{item.title}</div>
                </div>
                <div className="text-sm text-ink-secondary leading-[1.7] pl-3">{item.body}</div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
