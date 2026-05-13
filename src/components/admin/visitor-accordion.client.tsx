'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ReactElement } from 'react'
import type { AdminChatSession } from '~/app/api/admin/chats/route'
import { cn } from '~/utils/cn'
import { formatRelativeDate } from '~/utils/format-date'

function parseBrowserName(userAgent: string | null): string | null {
  if (!userAgent) return null
  if (userAgent.includes('Edg/')) return 'Edge'
  if (userAgent.includes('OPR/') || userAgent.includes('Opera')) return 'Opera'
  if (userAgent.includes('Chrome')) return 'Chrome'
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Safari')) return 'Safari'
  return null
}

function getFlagEmoji(countryCode: string): string {
  return String.fromCodePoint(
    ...countryCode.toUpperCase().split('').map((c) => 127397 + c.charCodeAt(0))
  )
}

type Props = {
  visitorId: string
  chats: AdminChatSession[]
  lastActivity: string
}

export function VisitorAccordion({ visitorId, chats, lastActivity }: Props): ReactElement {
  const [open, setOpen] = useState(false)

  const country = chats.find((c) => c.country)?.country ?? null
  const browser = parseBrowserName(chats.find((c) => c.user_agent)?.user_agent ?? null)
  const totalMessages = chats.reduce((sum, c) => sum + Number(c.message_count), 0)
  const shortId = visitorId.slice(0, 8)

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-paper">
      {/* Visitor row — click to expand */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'w-full text-left px-5 py-4 flex items-center gap-4 transition-colors duration-150',
          'hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset',
          open && 'bg-surface',
        )}
        aria-expanded={open}
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-accent">{shortId.slice(0, 2).toUpperCase()}</span>
        </div>

        {/* Main info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-ink font-mono">{shortId}…</span>
            {country && (
              <span className="text-xs text-ink-secondary">
                {getFlagEmoji(country)} {country.toUpperCase()}
              </span>
            )}
            {browser && <span className="text-xs text-ink-tertiary">{browser}</span>}
          </div>
          <div className="flex items-center gap-3 mt-0.5 flex-wrap">
            <span className="text-xs text-ink-tertiary">
              {chats.length} {chats.length === 1 ? 'conversación' : 'conversaciones'}
            </span>
            <span className="text-xs text-ink-tertiary/50">·</span>
            <span className="text-xs text-ink-tertiary">{totalMessages} mensajes en total</span>
          </div>
        </div>

        {/* Right: date + chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs text-ink-tertiary hidden sm:block">{formatRelativeDate(lastActivity)}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={cn('text-ink-tertiary transition-transform duration-200', open && 'rotate-180')}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {/* Expanded chat list */}
      {open && (
        <div className="border-t border-border divide-y divide-border/60">
          {chats.map((chat) => {
            const isAbandoned = chat.message_count === 0
            const isLow = chat.message_count === 1
            return (
              <Link
                key={chat.id}
                href={`/admin/chats/${chat.id}`}
                className="flex items-start gap-4 px-5 py-3.5 hover:bg-accent/[0.04] transition-colors duration-100 group"
              >
                {/* Indent line */}
                <div className="w-px self-stretch bg-border/60 ml-3 mt-1 flex-shrink-0" aria-hidden />

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink truncate group-hover:text-accent transition-colors">
                    {chat.title}
                  </p>
                  {chat.last_user_message && (
                    <p className="text-xs text-ink-tertiary mt-0.5 line-clamp-1">{chat.last_user_message}</p>
                  )}
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className="text-xs text-ink-tertiary">
                      {chat.message_count} {chat.message_count === 1 ? 'mensaje' : 'mensajes'}
                    </span>
                    {isAbandoned && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">Vacía</span>
                    )}
                    {isLow && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700">Sin respuesta</span>
                    )}
                  </div>
                </div>

                <span className="text-xs text-ink-tertiary flex-shrink-0 mt-0.5">{formatRelativeDate(chat.created_at)}</span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
