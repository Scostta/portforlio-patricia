import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createSupabaseServer } from '~/lib/supabase'
import type { AdminChatSession } from '~/app/api/admin/chats/route'
import type { AdminChatMessage } from '~/app/api/admin/chats/[sessionId]/route'
import { cn } from '~/utils/cn'
import { formatRelativeDate, formatTime, formatFullDate } from '~/utils/format-date'

export const metadata: Metadata = {
  title: 'Conversación — Admin',
  robots: { index: false, follow: false },
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronLeftIcon(): ReactElement {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M8 2.5L4 6.5L8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Message bubble ───────────────────────────────────────────────────────────

type MessageBubbleProps = {
  message: AdminChatMessage
}

function MessageBubble(props: MessageBubbleProps): ReactElement {
  const { message } = props
  const isUser = message.role === 'user'

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%]">
          <div className="bg-accent text-white px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </div>
          <p className="text-right text-2xs text-ink-tertiary mt-1">
            {formatTime(message.created_at)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3">
      <div
        className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <span className="text-white text-xs font-semibold select-none">PB</span>
      </div>
      <div className="max-w-[80%]">
        <div className="text-sm leading-relaxed text-ink-secondary whitespace-pre-wrap">
          {message.content}
        </div>
        <p className="text-2xs text-ink-tertiary mt-1">
          {formatTime(message.created_at)}
        </p>
      </div>
    </div>
  )
}

// ─── Empty transcript state ───────────────────────────────────────────────────

function EmptyTranscript(): ReactElement {
  return (
    <div className="py-16 text-center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        className="text-ink-tertiary mx-auto mb-3"
        aria-hidden="true"
      >
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm text-ink-tertiary">Esta sesión no tiene mensajes.</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type Props = {
  params: Promise<{ sessionId: string }>
}

export default async function SessionDetailPage(props: Props): Promise<ReactElement> {
  const { sessionId } = await props.params

  const supabase = createSupabaseServer()

  // Fetch session and messages in parallel
  const [sessionResult, messagesResult] = await Promise.all([
    supabase
      .from('chat_sessions')
      .select('id, session_id, title, created_at, updated_at')
      .eq('id', sessionId)
      .single(),
    supabase
      .from('chat_messages')
      .select('id, chat_id, role, content, created_at')
      .eq('chat_id', sessionId)
      .order('created_at', { ascending: true }),
  ])

  if (sessionResult.error || !sessionResult.data) {
    notFound()
  }

  const session = sessionResult.data as Pick<
    AdminChatSession,
    'id' | 'session_id' | 'title' | 'created_at' | 'updated_at'
  >
  const messages: AdminChatMessage[] = messagesResult.error
    ? []
    : (messagesResult.data as AdminChatMessage[])

  const shortId = session.id.slice(0, 8) + '…'

  return (
    <div>
      {/* Back button */}
      <Link
        href="/admin"
        className={cn(
          'inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors duration-150 mb-3',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded',
        )}
      >
        <ChevronLeftIcon />
        Conversaciones
      </Link>

      {/* Breadcrumb */}
      <p className="section-label mb-2">
        <span className="text-ink-secondary">Chats</span>
        <span className="text-ink-tertiary mx-1.5">/</span>
        <span className="text-ink-secondary">{session.title}</span>
      </p>

      {/* Title */}
      <h1 className="text-xl font-semibold text-ink mt-2 mb-8">
        {session.title}
      </h1>

      {/* Metadata block */}
      <div className="bg-surface rounded-2xl border border-border px-5 py-4 mb-8">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <dl>
            <dt className="text-xs text-ink-tertiary uppercase tracking-wide">ID de sesión</dt>
            <dd className="text-sm text-ink-secondary font-medium font-mono mt-0.5" title={session.id}>
              {shortId}
            </dd>
          </dl>

          <div className="hidden lg:block w-px h-8 bg-border self-center" aria-hidden="true" />

          <dl>
            <dt className="text-xs text-ink-tertiary uppercase tracking-wide">Creada</dt>
            <dd
              className="text-sm text-ink-secondary font-medium mt-0.5"
              title={formatFullDate(session.created_at)}
            >
              {formatRelativeDate(session.created_at)}
            </dd>
          </dl>

          <div className="hidden lg:block w-px h-8 bg-border self-center" aria-hidden="true" />

          <dl>
            <dt className="text-xs text-ink-tertiary uppercase tracking-wide">Actualizada</dt>
            <dd
              className="text-sm text-ink-secondary font-medium mt-0.5"
              title={formatFullDate(session.updated_at)}
            >
              {formatRelativeDate(session.updated_at)}
            </dd>
          </dl>

          <div className="hidden lg:block w-px h-8 bg-border self-center" aria-hidden="true" />

          <dl>
            <dt className="text-xs text-ink-tertiary uppercase tracking-wide">Mensajes</dt>
            <dd className="text-sm text-ink-secondary font-medium mt-0.5">{messages.length}</dd>
          </dl>
        </div>
      </div>

      {/* Transcript */}
      <div className="max-w-2xl" aria-readonly="true">
        {messages.length === 0 ? (
          <EmptyTranscript />
        ) : (
          <>
            {/* Read-only notice */}
            <p className="text-2xs text-ink-tertiary italic text-center py-2 mb-4">
              Vista de solo lectura — esta conversación no puede modificarse.
            </p>

            <div className="space-y-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
