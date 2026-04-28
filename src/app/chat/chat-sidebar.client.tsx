'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { ReactElement, KeyboardEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
              <path d="M9.5 1.5a1.414 1.414 0 0 1 2 2L4 11H1.5V8.5L9.5 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Renombrar
          </button>
          <div className="my-1 border-t border-border" />
          <button
            onClick={async () => { setMenuOpen(false); await onDelete() }}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 3.5h10M4.5 3.5V2.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1M5.5 6v3.5M7.5 6v3.5M2.5 3.5l.5 7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1l.5-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
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
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 h-full bg-white border-r border-border flex flex-col z-40',
          'transition-[width,transform] duration-300 ease-out-expo',
          'lg:relative lg:translate-x-0 lg:z-auto lg:shrink-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          isCollapsed ? 'w-14' : 'w-60',
        )}
      >
        {/* AI Portfolio Assistant identity + collapse toggle */}
        <div className={cn(
          'shrink-0 border-b border-border',
          isCollapsed ? 'px-2 py-4 flex flex-col items-center gap-3' : 'px-4 pt-4 pb-3',
        )}>
          {isCollapsed ? (
            <>
              <button
                onClick={() => setIsCollapsed(false)}
                title="Expandir barra lateral"
                className="w-7 h-7 flex items-center justify-center rounded-md text-ink-tertiary hover:text-ink hover:bg-surface transition-colors"
              >
                <CollapseIcon expanded={false} />
              </button>
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-sm shrink-0">
                <span className="text-white text-xs font-semibold tracking-wide select-none">PB</span>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-sm shrink-0">
                  <span className="text-white text-xs font-semibold tracking-wide select-none">PB</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink leading-none">AI Portfolio Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-2xs text-ink-tertiary">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsCollapsed(true)}
                title="Colapsar barra lateral"
                className="shrink-0 ml-2 w-7 h-7 flex items-center justify-center rounded-md text-ink-tertiary hover:text-ink hover:bg-surface transition-colors"
              >
                <CollapseIcon expanded={true} />
              </button>
            </div>
          )}
        </div>

        {/* Nav items */}
        <div className={cn('shrink-0 pt-3 pb-2', isCollapsed ? 'px-2 space-y-1' : 'px-3 space-y-0.5')}>
          {/* New conversation */}
          <button
            onClick={() => { onNewChat(); onClose() }}
            title={isCollapsed ? 'New conversation' : undefined}
            className={cn(
              'w-full flex items-center rounded-lg text-sm text-ink-secondary hover:bg-surface hover:text-ink transition-all duration-150',
              isCollapsed ? 'justify-center p-2' : 'gap-2.5 px-3 py-2',
            )}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
              <path d="M7.5 2.5v10M2.5 7.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {!isCollapsed && 'New conversation'}
          </button>

          {/* Chats */}
          <Link
            href="/chat/recents"
            onClick={onClose}
            title={isCollapsed ? 'Chats' : undefined}
            className={cn(
              'flex items-center rounded-lg text-sm transition-all duration-150',
              pathname === '/chat/recents'
                ? 'bg-surface text-ink font-medium'
                : 'text-ink-secondary hover:bg-surface hover:text-ink',
              isCollapsed ? 'justify-center p-2' : 'gap-2.5 px-3 py-2',
            )}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            {!isCollapsed && 'Chats'}
          </Link>
        </div>

        {/* Sessions — hidden when collapsed */}
        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto px-2 pt-2">
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
              <p className="px-3 py-2 text-2xs text-ink-tertiary italic">Sin conversaciones aún</p>
            )}
          </div>
        )}

        {/* Spacer when collapsed so footer stays at bottom */}
        {isCollapsed && <div className="flex-1" />}

        {/* Footer */}
        <div className={cn('shrink-0 pb-5 pt-2 border-t border-border', isCollapsed ? 'px-2' : 'px-3')}>
          <Link
            href="/"
            title={isCollapsed ? 'Back' : undefined}
            className={cn(
              'flex items-center rounded-lg text-sm text-ink-tertiary hover:text-ink hover:bg-surface transition-all duration-150',
              isCollapsed ? 'justify-center p-2' : 'gap-2 px-3 py-2',
            )}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {!isCollapsed && 'Back'}
          </Link>
        </div>
      </aside>
    </>
  )
}

// ─── Collapse icon ────────────────────────────────────────────────────────────

function CollapseIcon({ expanded: _ }: { expanded: boolean }): ReactElement {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM7 15h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6V5z" />
    </svg>
  )
}
