'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChatSidebar } from './chat-sidebar.client'
import type { ChatSession } from './chat-sidebar.client'
import { ChatInterface } from './chat-interface.client'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatRelativeTime(dateString: string): string {
  const diffDays = Math.floor((Date.now() - new Date(dateString).getTime()) / 86400000)
  if (diffDays === 0) return 'hoy'
  if (diffDays === 1) return 'hace 1 día'
  return `hace ${diffDays} días`
}

// ─── Chats list view ─────────────────────────────────────────────────────────

function ChatsListView({
  sessions,
  onNewChat,
  onSelectSession,
  onOpenSidebar,
}: {
  sessions: ChatSession[]
  onNewChat: () => void
  onSelectSession: (id: string) => void
  onOpenSidebar: () => void
}): ReactElement {
  const [search, setSearch] = useState('')
  const filtered = search
    ? sessions.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))
    : sessions

  return (
    <div className="flex flex-col h-dvh bg-[#1a1a1a]">
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        <div className="max-w-2xl mx-auto px-6 sm:px-8 py-10">

          {/* Mobile sidebar toggle */}
          <button
            onClick={onOpenSidebar}
            className="lg:hidden mb-6 w-8 h-8 flex items-center justify-center rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.07] transition-colors"
            aria-label="Open sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Title + CTA */}
          <div
            className="flex items-center justify-between mb-6"
            style={{ animation: 'land-up 500ms 80ms both cubic-bezier(.4,0,.2,1)' }}
          >
            <h1 className="font-serif text-3xl text-white/85">Chats</h1>
            <button
              onClick={onNewChat}
              className="flex items-center gap-1.5 bg-white/[0.1] text-white/85 rounded-lg px-4 py-2 text-sm font-medium hover:bg-white/[0.15] transition-colors duration-150"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              New conversation
            </button>
          </div>

          {/* Search */}
          <div
            className="relative mb-6"
            style={{ animation: 'land-up 500ms 200ms both cubic-bezier(.4,0,.2,1)' }}
          >
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar en sus chats..."
              className="w-full bg-[#2a2a2a] border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white/85 placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Sessions */}
          {filtered.length === 0 ? (
            <p
              className="text-sm text-white/30 italic"
              style={{ animation: 'land-up 400ms 320ms both cubic-bezier(.4,0,.2,1)' }}
            >
              {search ? 'No se encontraron conversaciones.' : 'Sin conversaciones aún.'}
            </p>
          ) : (
            <ul className="divide-y divide-white/[0.06]">
              {filtered.map((session, i) => (
                <li
                  key={session.id}
                  style={{ animation: `land-up-sm 400ms ${320 + i * 50}ms both cubic-bezier(.4,0,.2,1)` }}
                >
                  <button
                    onClick={() => onSelectSession(session.id)}
                    className="w-full text-left py-4 hover:bg-white/[0.05] rounded-xl px-3 -mx-3 transition-colors duration-150 group"
                  >
                    <p className="text-sm font-medium text-white/85 group-hover:text-accent transition-colors truncate">
                      {session.title}
                    </p>
                    <p className="text-xs text-white/30 mt-0.5">
                      Último mensaje {formatRelativeTime(session.updated_at)}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}

type Message = { id: string; role: 'user' | 'assistant'; content: string }

export function ChatApp(): ReactElement {
  const pathname = usePathname()
  const router = useRouter()

  const urlChatId = pathname.match(/^\/chat\/([^/]+)$/)?.[1] ?? null

  const [userSessionId, setUserSessionId] = useState<string>('')
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [activeChatId, setActiveChatId] = useState<string | null>(urlChatId)
  const [activeMessages, setActiveMessages] = useState<Message[]>([])
  const [chatKey, setChatKey] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // Start in loading state if URL already has a chat ID — prevents welcome message flash
  const [loadingMessages, setLoadingMessages] = useState(urlChatId !== null)

  const loadedRef = useRef<string | null>(null)

  // Init anonymous user session from localStorage
  useEffect(() => {
    let id = localStorage.getItem('pati-user-session')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('pati-user-session', id)
    }
    setUserSessionId(id)
  }, [])

  const fetchSessions = useCallback(async (sessionId: string) => {
    if (!sessionId) return
    try {
      const res = await fetch(`/api/chat/sessions?userSessionId=${sessionId}`)
      if (res.ok) {
        const data: ChatSession[] = await res.json()
        setSessions(Array.isArray(data) ? data : [])
      }
    } catch { /* ignore */ }
  }, [])

  useEffect(() => {
    if (userSessionId) fetchSessions(userSessionId)
  }, [userSessionId, fetchSessions])

  // Sync with URL
  useEffect(() => {
    if (urlChatId === loadedRef.current) return

    if (urlChatId) {
      loadedRef.current = urlChatId
      setActiveChatId(urlChatId)
      setLoadingMessages(true)

      fetch(`/api/chat/sessions/${urlChatId}/messages`)
        .then((r) => (r.ok ? r.json() : []))
        .then((data: Message[]) => {
          setActiveMessages(Array.isArray(data) ? data : [])
          setChatKey((k) => k + 1)
        })
        .catch(() => {
          setActiveMessages([])
          setChatKey((k) => k + 1)
        })
        .finally(() => setLoadingMessages(false))
    } else {
      loadedRef.current = null
      setActiveChatId(null)
      setActiveMessages([])
      setChatKey((k) => k + 1)
    }
  }, [urlChatId])

  const handleNewChat = useCallback(() => {
    router.push('/chat', { scroll: false })
  }, [router])

  const handleSelectSession = useCallback(
    (id: string) => {
      router.push(`/chat/${id}`, { scroll: false })
    },
    [router],
  )

  const handleSessionCreated = useCallback(
    (session: ChatSession) => {
      loadedRef.current = session.id
      setActiveChatId(session.id)
      setSessions((prev) => [session, ...prev.filter((s) => s.id !== session.id)])
      router.replace(`/chat/${session.id}`, { scroll: false })
    },
    [router],
  )

  const handleMessageSent = useCallback((chatId: string) => {
    setSessions((prev) =>
      prev
        .map((s) => (s.id === chatId ? { ...s, updated_at: new Date().toISOString() } : s))
        .sort((a, b) => b.updated_at.localeCompare(a.updated_at)),
    )
  }, [])

  const handleRenameSession = useCallback(async (id: string, newTitle: string) => {
    setSessions((prev) => prev.map((s) => (s.id === id ? { ...s, title: newTitle } : s)))
    try {
      await fetch(`/api/chat/sessions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle }),
      })
    } catch (err) {
      console.error('[rename]', err)
    }
  }, [])

  const handleDeleteSession = useCallback(async (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id))
    if (activeChatId === id) {
      router.push('/chat', { scroll: false })
    }
    try {
      await fetch(`/api/chat/sessions/${id}`, { method: 'DELETE' })
    } catch (err) {
      console.error('[delete]', err)
    }
  }, [activeChatId, router])

  const isChatsView = pathname === '/chat/recents'

  return (
    <div className="flex h-dvh bg-[#1a1a1a] overflow-hidden">
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeChatId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={handleNewChat}
        onSelectSession={handleSelectSession}
        onRenameSession={handleRenameSession}
        onDeleteSession={handleDeleteSession}
      />
      <div className="flex-1 min-w-0">
        {isChatsView ? (
          <ChatsListView
            sessions={sessions}
            onNewChat={handleNewChat}
            onSelectSession={handleSelectSession}
            onOpenSidebar={() => setSidebarOpen(true)}
          />
        ) : (
          <ChatInterface
            key={chatKey}
            chatId={activeChatId}
            userSessionId={userSessionId}
            initialMessages={activeMessages}
            loadingMessages={loadingMessages}
            onSessionCreated={handleSessionCreated}
            onMessageSent={handleMessageSent}
            onOpenSidebar={() => setSidebarOpen(true)}
          />
        )}
      </div>
    </div>
  )
}
