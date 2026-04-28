'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { ReactElement, KeyboardEvent } from 'react'
import Link from 'next/link'
import { cn } from '~/utils/cn'
import type { ChatSession } from './chat-sidebar.client'

// ─── Types ───────────────────────────────────────────────────────────────────

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

type ChatInterfaceProps = {
  chatId: string | null
  userSessionId: string
  initialMessages: Message[]
  loadingMessages: boolean
  onSessionCreated: (session: ChatSession) => void
  onMessageSent: (chatId: string) => void
  onOpenSidebar: () => void
}

// ─── Topics ──────────────────────────────────────────────────────────────────

const TOPICS = [
  {
    id: 'strategy',
    label: 'Strategy',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    questions: [
      'How do you approach product strategy when building from 0 to 1?',
      'What frameworks do you use for roadmap prioritisation?',
      'How did you align C-level stakeholders at LINK Mobility?',
    ],
  },
  {
    id: 'ux',
    label: 'User Experience',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    questions: [
      'How do you run user research at scale across multiple countries?',
      'How did you build and scale the UX team at LINK Mobility?',
      'How do you balance design quality with fast delivery cycles?',
    ],
  },
  {
    id: 'experience',
    label: 'Previous Experiences',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    questions: [
      'What was your biggest achievement at LINK Mobility?',
      'What did you build at Alqua and what was the business outcome?',
      'What did you learn from being a co-founder for 4 years?',
    ],
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    questions: [
      'What tools and methods do you use day-to-day as a PM and UX Lead?',
      'How do you use AI in your product and UX work?',
      'What makes you different from other PMs or UX Leads?',
    ],
  },
  {
    id: 'cv',
    label: 'Download CV',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    questions: [
      'What is your current availability for new roles?',
      'What type of companies or roles are you targeting?',
      'How can I get in touch with Patricia directly?',
    ],
  },
]

// ─── Shared input box UI ─────────────────────────────────────────────────────

function InputBox({
  value,
  onChange,
  onSend,
  onKeyDown,
  disabled,
  inputRef,
  placeholder,
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSend: () => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  disabled: boolean
  inputRef?: React.RefObject<HTMLTextAreaElement | null>
  placeholder?: string
}): ReactElement {
  return (
    <div className={cn(
      'flex items-end gap-3 rounded-2xl border bg-white px-4 py-3 transition-all duration-200',
      'border-border focus-within:border-accent focus-within:shadow-card-hover',
    )}>
      <textarea
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder ?? "Ask about Patricia's work, skills, or experience…"}
        rows={1}
        className="flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink-tertiary focus:outline-none leading-relaxed max-h-[120px] scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
        disabled={disabled}
      />
      <button
        onClick={onSend}
        disabled={!value.trim() || disabled}
        aria-label="Send message"
        className={cn(
          'shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200',
          value.trim() && !disabled
            ? 'bg-accent text-white hover:bg-accent-hover shadow-sm scale-100'
            : 'bg-border text-ink-tertiary scale-95 opacity-60',
        )}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 11.5V2.5M7 2.5L3 6.5M7 2.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

// ─── Chat Home ────────────────────────────────────────────────────────────────

function ChatHome({
  input,
  onInputChange,
  onSend,
  onKeyDown,
  isTyping,
  leaving,
}: {
  input: string
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSend: () => void
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  isTyping: boolean
  leaving: boolean
}): ReactElement {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeTopic = TOPICS.find((t) => t.id === activeId) ?? null
  const centeredInputRef = useRef<HTMLTextAreaElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  return (
    <div className={cn(
      'flex flex-col items-center justify-center min-h-full px-4 py-10 transition-all duration-300 ease-out',
      leaving && 'opacity-0 -translate-y-4 pointer-events-none',
    )}>
      {/* Title */}
      <div
        className="flex flex-col items-center mb-8 text-center"
        style={{ animation: 'land-up 500ms 80ms both cubic-bezier(.4,0,.2,1)' }}
      >
        <h1 className="font-serif text-2xl lg:text-3xl text-ink mb-2">
          Welcome, to Patricia's Portfolio AI Experience
        </h1>
      </div>

      {/* Centered input */}
      <div
        className="w-full max-w-xl mb-5"
        style={{ animation: 'land-up 500ms 220ms both cubic-bezier(.4,0,.2,1)' }}
      >
        <InputBox
          value={input}
          onChange={handleInputChange}
          onSend={onSend}
          onKeyDown={onKeyDown}
          disabled={isTyping}
          inputRef={centeredInputRef}
          placeholder="Ask me anything…"
        />
      </div>

      {/* Topic chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {TOPICS.map((topic, i) => (
          <button
            key={topic.id}
            onClick={() => setActiveId(activeId === topic.id ? null : topic.id)}
            style={{ animation: `land-up-sm 350ms ${380 + i * 60}ms both cubic-bezier(.4,0,.2,1)` }}
            className={cn(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-150',
              activeId === topic.id
                ? 'bg-accent text-white border-accent shadow-sm'
                : 'bg-white text-ink-secondary border-border hover:border-accent hover:text-ink',
            )}
          >
            <span className={activeId === topic.id ? 'text-white' : 'text-ink-tertiary'}>
              {topic.icon}
            </span>
            {topic.label}
          </button>
        ))}
      </div>

      {/* Questions for active topic */}
      {activeTopic && (
        <div className="w-full max-w-xl space-y-1 animate-fade-in">
          {activeTopic.questions.map((q) => (
            <button
              key={q}
              onClick={() => onSend()}
              onMouseDown={() => onInputChange({ target: { value: q } } as React.ChangeEvent<HTMLTextAreaElement>)}
              className="w-full text-left text-sm text-ink-secondary hover:text-ink bg-white hover:bg-surface rounded-xl px-4 py-2.5 transition-colors duration-150 border border-border flex items-start gap-2.5"
            >
              <span className="text-accent shrink-0 mt-0.5">›</span>
              {q}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Markdown renderer ───────────────────────────────────────────────────────

function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-inherit">{part.slice(2, -2)}</strong>
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <Link key={i} href={linkMatch[2]} className="underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity">
          {linkMatch[1]}
        </Link>
      )
    }
    return <span key={i}>{part}</span>
  })
}

function MarkdownContent({ content, isUser }: { content: string; isUser: boolean }): ReactElement {
  const blocks = content.split(/\n{2,}/)
  return (
    <div className="space-y-2.5">
      {blocks.map((block, bIdx) => {
        const lines = block.split('\n').filter(Boolean)
        if (lines.length === 0) return null
        const isBulletBlock = lines.every((l) => /^[•\-]/.test(l.trim()))
        if (isBulletBlock) {
          return (
            <ul key={bIdx} className="space-y-1.5">
              {lines.map((line, lIdx) => (
                <li key={lIdx} className="flex gap-2 items-start">
                  <span className={cn('shrink-0 mt-[3px] text-[10px]', isUser ? 'opacity-70' : 'text-accent')}>●</span>
                  <span>{parseInline(line.replace(/^[•\-]\s*/, ''))}</span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <div key={bIdx} className="space-y-1">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim()
              if (!trimmed) return null
              if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
                return <p key={lIdx} className={cn('font-semibold text-[0.8125rem] tracking-wide', isUser ? 'opacity-80' : 'text-ink', lIdx > 0 && 'mt-2')}>{trimmed.slice(2, -2)}</p>
              }
              if (/^[•\-]/.test(trimmed)) {
                return (
                  <div key={lIdx} className="flex gap-2 items-start">
                    <span className={cn('shrink-0 mt-[3px] text-[10px]', isUser ? 'opacity-70' : 'text-accent')}>●</span>
                    <span>{parseInline(trimmed.replace(/^[•\-]\s*/, ''))}</span>
                  </div>
                )
              }
              if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
                return <p key={lIdx} className={cn('italic', isUser ? 'opacity-80' : 'text-ink-secondary')}>{parseInline(trimmed.slice(1, -1))}</p>
              }
              return <p key={lIdx}>{parseInline(trimmed)}</p>
            })}
          </div>
        )
      })}
    </div>
  )
}

function AssistantAvatar(): ReactElement {
  return (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-sm">
      <span className="text-white text-xs font-semibold tracking-wide select-none">PB</span>
    </div>
  )
}

function TypingIndicator(): ReactElement {
  return (
    <div className="flex items-end gap-3">
      <AssistantAvatar />
      <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-1.5 h-1.5 rounded-full bg-ink-tertiary animate-bounce" style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }): ReactElement {
  const isUser = message.role === 'user'
  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] sm:max-w-[70%]">
          <div className="bg-accent text-white rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed">
            <MarkdownContent content={message.content} isUser />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex items-end gap-3">
      <AssistantAvatar />
      <div className="max-w-[85%] sm:max-w-[78%]">
        <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed text-ink shadow-sm">
          <MarkdownContent content={message.content} isUser={false} />
        </div>
      </div>
    </div>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export function ChatInterface({
  chatId,
  userSessionId,
  initialMessages,
  loadingMessages,
  onSessionCreated,
  onMessageSent,
  onOpenSidebar,
}: ChatInterfaceProps): ReactElement {
  const [hasStarted, setHasStarted] = useState(initialMessages.length > 0)
  const [leaving, setLeaving] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const bottomInputRef = useRef<HTMLTextAreaElement>(null)
  const activeChatId = useRef<string | null>(chatId)

  useEffect(() => { activeChatId.current = chatId }, [chatId])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => { scrollToBottom() }, [messages, isTyping, scrollToBottom])

  // Focus bottom input after transition
  useEffect(() => {
    if (hasStarted) {
      setTimeout(() => bottomInputRef.current?.focus(), 50)
    }
  }, [hasStarted])

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isTyping) return

      // Trigger home → chat transition on first message
      if (!hasStarted) {
        setLeaving(true)
        setTimeout(() => {
          setHasStarted(true)
          setLeaving(false)
        }, 320)
      }

      const userMessage: Message = { id: `user-${Date.now()}`, role: 'user', content: trimmed }
      setMessages((prev) => [...prev, userMessage])
      setInput('')
      setIsTyping(true)

      let isNewChat = false
      let pendingSession: { id: string; title: string; created_at: string; updated_at: string } | null = null
      if (!activeChatId.current) {
        const newId = crypto.randomUUID()
        const title = trimmed.length > 50 ? trimmed.slice(0, 50) + '…' : trimmed
        activeChatId.current = newId
        isNewChat = true
        pendingSession = { id: newId, title, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
      }

      const assistantId = `assistant-${Date.now()}`
      let placeholderAdded = false

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmed, chatId: activeChatId.current, userSessionId, isNewChat }),
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        if (!res.body) throw new Error('No response body')

        const reader = res.body.getReader()
        const sseDecoder = new TextDecoder()
        let sseBuffer = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          sseBuffer += sseDecoder.decode(value, { stream: true })
          const lines = sseBuffer.split('\n')
          sseBuffer = lines.pop() ?? ''

          for (const line of lines) {
            if (!line.startsWith('data:')) continue
            const raw = line.slice(5).trimStart()

            try {
              const parsed = JSON.parse(raw)
              if (parsed.event === 'end') break
              if (parsed.event !== 'token') continue
              const token: string = typeof parsed.data === 'string' ? parsed.data : ''
              if (token === '') continue

              if (!placeholderAdded) {
                placeholderAdded = true
                setIsTyping(false)
                setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: token }])
              } else {
                setMessages((prev) =>
                  prev.map((m) => m.id === assistantId ? { ...m, content: m.content + token } : m),
                )
              }
            } catch { /* ignore malformed SSE lines */ }
          }
        }

        // Navigate only after session exists in DB to avoid the server redirect on [id]/page.tsx
        if (pendingSession) {
          onSessionCreated(pendingSession)
        } else if (activeChatId.current) {
          onMessageSent(activeChatId.current)
        }
      } catch {
        if (placeholderAdded) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: 'Sorry, something went wrong. Please try again.' } : m,
            ),
          )
        } else {
          setMessages((prev) => [...prev, { id: `error-${Date.now()}`, role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
        }
      } finally {
        setIsTyping(false)
      }
    },
    [isTyping, hasStarted, userSessionId, onSessionCreated, onMessageSent],
  )

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input) }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    const el = e.target
    if (el.style) {
      el.style.height = 'auto'
      el.style.height = Math.min(el.scrollHeight, 120) + 'px'
    }
  }

  return (
    <div className="flex flex-col h-dvh bg-paper">
      {/* Mobile hamburger — only visible when sidebar is closed on small screens */}
      <div className="lg:hidden shrink-0 px-4 pt-3">
        <button
          onClick={onOpenSidebar}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-ink-tertiary hover:text-ink hover:bg-surface transition-colors"
          aria-label="Open sidebar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 min-h-0 relative">

        {/* Loading state */}
        {loadingMessages && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-ink-tertiary animate-bounce" style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }} />
              ))}
            </div>
          </div>
        )}

        {/* Home — centered input + topics */}
        {!hasStarted && !loadingMessages && (
          <div className="h-full overflow-y-auto">
            <ChatHome
              input={input}
              onInputChange={handleInputChange}
              onSend={() => sendMessage(input)}
              onKeyDown={handleKeyDown}
              isTyping={isTyping}
              leaving={leaving}
            />
          </div>
        )}

        {/* Messages — fade in after transition */}
        {hasStarted && !loadingMessages && (
          <div className="h-full overflow-y-auto animate-fade-in">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-5">
              {messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>

      {/* Bottom input — slides up into view during/after transition */}
      <div className={cn(
        'shrink-0 bg-white border-t border-border px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-out',
        hasStarted || leaving ? 'max-h-40 py-4 opacity-100 translate-y-0' : 'max-h-0 py-0 opacity-0 translate-y-4',
      )}>
        <div className="max-w-2xl mx-auto">
          <InputBox
            value={input}
            onChange={handleInputChange}
            onSend={() => sendMessage(input)}
            onKeyDown={handleKeyDown}
            disabled={isTyping || loadingMessages}
            inputRef={bottomInputRef}
          />
          <p className="text-center text-2xs text-ink-tertiary mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  )
}
