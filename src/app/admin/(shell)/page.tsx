import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { createSupabaseServer } from '~/lib/supabase'
import type { AdminChatSession } from '~/app/api/admin/chats/route'
import { VisitorAccordion } from '~/components/admin/visitor-accordion.client'

export const metadata: Metadata = {
  title: 'Conversaciones — Admin',
  robots: { index: false, follow: false },
}

// ─── Group sessions by visitor (session_id) ───────────────────────────────────

type VisitorGroup = {
  visitorId: string
  chats: AdminChatSession[]
  lastActivity: string
}

function groupByVisitor(sessions: AdminChatSession[]): VisitorGroup[] {
  const map = new Map<string, AdminChatSession[]>()
  for (const s of sessions) {
    const key = s.session_id ?? s.id
    const existing = map.get(key) ?? []
    existing.push(s)
    map.set(key, existing)
  }
  return Array.from(map.entries())
    .map(([visitorId, chats]) => ({
      visitorId,
      chats: chats.sort((a, b) => b.created_at.localeCompare(a.created_at)),
      lastActivity: chats.reduce((max, c) => (c.created_at > max ? c.created_at : max), ''),
    }))
    .sort((a, b) => b.lastActivity.localeCompare(a.lastActivity))
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState(): ReactElement {
  return (
    <div className="py-20 flex flex-col items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-ink-tertiary" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 9h6M9 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="text-sm font-medium text-ink-secondary">No hay conversaciones todavía</p>
      <p className="text-xs text-ink-tertiary">Las conversaciones del chat aparecerán aquí.</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AdminPage(): Promise<ReactElement> {
  const supabase = createSupabaseServer()
  const { data, error } = await supabase.rpc('get_admin_chat_sessions')

  const sessions: AdminChatSession[] = error ? [] : (data as AdminChatSession[])
  const visitors = groupByVisitor(sessions)

  const totalChats = sessions.length

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <p className="section-label mb-1">Datos del chat</p>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl font-semibold text-ink">Conversaciones</h1>
          <span className="text-sm text-ink-tertiary">
            {visitors.length} {visitors.length === 1 ? 'visitante' : 'visitantes'} · {totalChats} {totalChats === 1 ? 'conversación' : 'conversaciones'}
          </span>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div className="mb-6 flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.3" />
            <path d="M6.5 4v3M6.5 9h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          No se pudieron cargar las sesiones. Comprueba la conexión con la base de datos.
        </div>
      )}

      {/* Visitor list */}
      {visitors.length === 0 && !error ? (
        <EmptyState />
      ) : (
        <div className="space-y-2">
          {visitors.map((visitor) => (
            <VisitorAccordion
              key={visitor.visitorId}
              visitorId={visitor.visitorId}
              chats={visitor.chats}
              lastActivity={visitor.lastActivity}
            />
          ))}
        </div>
      )}
    </div>
  )
}
