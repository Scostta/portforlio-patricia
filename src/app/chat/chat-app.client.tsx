'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import type { ReactElement } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChatSidebar } from './chat-sidebar.client'
import type { ChatSession } from './chat-sidebar.client'
import { ChatInterface } from './chat-interface.client'

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

  return (
    <div className="flex h-dvh bg-paper overflow-hidden">
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
      </div>
    </div>
  )
}
