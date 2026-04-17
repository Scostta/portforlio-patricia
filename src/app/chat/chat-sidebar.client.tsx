'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { ReactElement, KeyboardEvent } from 'react'
import Link from 'next/link'
import { cn } from '~/utils/cn'

export type ChatSession = {
  id: string
  title: string
  created_at: string
  updated_at: string
}

type ChatSidebarProps = {
  sessions: ChatSession[]
  activeSessionId: string | null
  isOpen: boolean
  onClose: () => void
  onNewChat: () => void
  onSelectSession: (id: string) => void
  onRenameSession: (id: string, newTitle: string) => Promise<void>
  onDeleteSession: (id: string) => Promise<void>
}

// ─── Session item ─────────────────────────────────────────────────────────────

function SessionItem({
  session,
  isActive,
  onSelect,
  onRename,
  onDelete,
}: {
  session: ChatSession
  isActive: boolean
  onSelect: () => void
  onRename: (newTitle: string) => Promise<void>
  onDelete: () => Promise<void>
}): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const [renaming, setRenaming] = useState(false)
  const [renameValue, setRenameValue] = useState(session.title)
  const menuRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Focus input when renaming starts
  useEffect(() => {
    if (renaming) inputRef.current?.select()
  }, [renaming])

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMenuOpen((v) => !v)
  }

  const startRename = () => {
    setMenuOpen(false)
    setRenameValue(session.title)
    setRenaming(true)
  }

  const commitRename = async () => {
    const trimmed = renameValue.trim()
    setRenaming(false)
    if (trimmed && trimmed !== session.title) {
      await onRename(trimmed)
    }
  }

  const handleRenameKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') commitRename()
    if (e.key === 'Escape') { setRenaming(false); setRenameValue(session.title) }
  }

  // Long press for mobile
  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => setMenuOpen(true), 500)
  }
  const handleTouchEnd = () => { if (longPressTimer.current) clearTimeout(longPressTimer.current) }

  return (
    <li className="group relative">
      <button
        onClick={renaming ? undefined : onSelect}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className={cn(
          'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 flex items-center gap-1 pr-8',
          isActive
            ? 'bg-accent-light text-accent font-medium'
            : 'text-ink-secondary hover:bg-surface hover:text-ink',
        )}
      >
        {renaming ? (
          <input
            ref={inputRef}
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onKeyDown={handleRenameKey}
            onBlur={commitRename}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 bg-transparent outline-none text-sm text-ink min-w-0"
          />
        ) : (
          <span className="truncate flex-1">{session.title}</span>
        )}
      </button>

      {/* Three dots button */}
      {!renaming && (
        <button
          onClick={handleMenuToggle}
          className={cn(
            'absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center',
            'rounded-md text-ink-tertiary hover:text-ink hover:bg-border transition-all duration-150',
            'opacity-0 group-hover:opacity-100 focus:opacity-100',
            menuOpen && 'opacity-100',
          )}
          aria-label="Chat options"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="2.5" cy="7" r="1.2" fill="currentColor" />
            <circle cx="7" cy="7" r="1.2" fill="currentColor" />
            <circle cx="11.5" cy="7" r="1.2" fill="currentColor" />
          </svg>
        </button>
      )}

      {/* Dropdown menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-1 z-50 w-40 bg-white border border-border rounded-xl shadow-card-hover py-1 animate-fade-in"
        >
          <button
            onClick={startRename}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink hover:bg-surface transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M9.5 1.5a1.414 1.414 0 0 1 2 2L4 11H1.5V8.5L9.5 1.5z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Renombrar
          </button>
          <div className="my-1 border-t border-border" />
          <button
            onClick={async () => { setMenuOpen(false); await onDelete() }}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M1.5 3.5h10M4.5 3.5V2.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1M5.5 6v3.5M7.5 6v3.5M2.5 3.5l.5 7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1l.5-7"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Eliminar
          </button>
        </div>
      )}
    </li>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export function ChatSidebar({
  sessions,
  activeSessionId,
  isOpen,
  onClose,
  onNewChat,
  onSelectSession,
  onRenameSession,
  onDeleteSession,
}: ChatSidebarProps): ReactElement {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-60 bg-white border-r border-border flex flex-col z-40 transition-transform duration-300 ease-out-expo',
          'lg:relative lg:translate-x-0 lg:z-auto lg:shrink-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* New chat */}
        <div className="shrink-0 px-3 pt-4 pb-3">
          <button
            onClick={() => { onNewChat(); onClose() }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-secondary hover:bg-surface hover:text-ink transition-all duration-150"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 2.5v10M2.5 7.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            New chat
          </button>
        </div>

        {/* Sessions */}
        <div className="flex-1 overflow-y-auto px-2">
          {sessions.length > 0 && (
            <>
              <p className="px-2 py-1 text-2xs font-medium tracking-widest uppercase text-ink-tertiary">
                Recent
              </p>
              <ul className="space-y-px">
                {sessions.map((session) => (
                  <SessionItem
                    key={session.id}
                    session={session}
                    isActive={activeSessionId === session.id}
                    onSelect={() => { onSelectSession(session.id); onClose() }}
                    onRename={(title) => onRenameSession(session.id, title)}
                    onDelete={() => onDeleteSession(session.id)}
                  />
                ))}
              </ul>
            </>
          )}
          {sessions.length === 0 && (
            <p className="px-3 py-2 text-2xs text-ink-tertiary italic">No conversations yet</p>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 px-3 pb-5 pt-2 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ink-tertiary hover:text-ink hover:bg-surface transition-all duration-150"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to portfolio
          </Link>
        </div>
      </aside>
    </>
  )
}
