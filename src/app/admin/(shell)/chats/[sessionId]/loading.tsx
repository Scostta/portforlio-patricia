import type { ReactElement } from 'react'

export default function SessionDetailLoading(): ReactElement {
  return (
    <div aria-busy="true" aria-label="Cargando conversación" className="animate-pulse">
      {/* Back + breadcrumb */}
      <div className="h-4 w-28 rounded bg-border/50 mb-3" />
      <div className="h-3 w-40 rounded bg-border/40 mb-2" />
      <div className="h-6 w-64 rounded bg-border mb-8" />

      {/* Metadata block skeleton */}
      <div className="bg-surface rounded-2xl border border-border px-5 py-4 mb-8">
        <div className="flex gap-6">
          <div className="h-8 w-24 rounded bg-border/60" />
          <div className="h-8 w-20 rounded bg-border/60" />
          <div className="h-8 w-20 rounded bg-border/60" />
          <div className="h-8 w-16 rounded bg-border/60" />
        </div>
      </div>

      {/* Transcript skeletons — alternating user/assistant */}
      <div className="max-w-2xl space-y-4">
        {/* User */}
        <div className="flex justify-end">
          <div className="h-10 w-[55%] rounded-2xl bg-border/60" />
        </div>
        {/* Assistant */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-border/60 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3.5 w-[80%] rounded bg-border/50" />
            <div className="h-3.5 w-[65%] rounded bg-border/40" />
            <div className="h-3.5 w-[50%] rounded bg-border/30" />
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="h-10 w-[45%] rounded-2xl bg-border/60" />
        </div>
        {/* Assistant */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-border/60 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3.5 w-[75%] rounded bg-border/50" />
            <div className="h-3.5 w-[60%] rounded bg-border/40" />
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="h-10 w-[60%] rounded-2xl bg-border/60" />
        </div>
        {/* Assistant */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-border/60 shrink-0" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3.5 w-[70%] rounded bg-border/50" />
            <div className="h-3.5 w-[55%] rounded bg-border/40" />
            <div className="h-3.5 w-[40%] rounded bg-border/30" />
          </div>
        </div>
      </div>
    </div>
  )
}
