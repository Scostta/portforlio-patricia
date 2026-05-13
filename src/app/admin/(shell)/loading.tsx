import type { ReactElement } from 'react'

function SkeletonCard(): ReactElement {
  return (
    <div className="bg-paper border border-border rounded-2xl px-5 py-4 animate-pulse">
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div>
          <div className="h-4 w-2/5 rounded bg-border" />
          <div className="h-3 w-4/5 rounded bg-border/60 mt-2" />
          <div className="h-3 w-3/5 rounded bg-border/60 mt-1.5" />
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-16 rounded-full bg-border/50" />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <div className="h-3 w-14 rounded bg-border/60" />
          <div className="h-3 w-8 rounded bg-border/50" />
        </div>
      </div>
    </div>
  )
}

export default function AdminLoadingPage(): ReactElement {
  return (
    <div aria-busy="true" aria-label="Cargando conversaciones">
      {/* Header skeleton */}
      <div className="mb-8 animate-pulse">
        <div className="h-2.5 w-24 rounded bg-border/50 mb-2" />
        <div className="h-7 w-48 rounded bg-border" />
      </div>

      {/* Card skeletons */}
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  )
}
