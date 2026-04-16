'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { ReactElement, KeyboardEvent } from 'react'
import Link from 'next/link'
import { cn } from '~/utils/cn'
import { SUGGESTED_QUESTIONS } from '~/constants/chat-responses'

// ─── Types ───────────────────────────────────────────────────────────────────

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

// ─── Markdown renderer ───────────────────────────────────────────────────────

function parseInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-inherit">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      return (
        <Link
          key={i}
          href={linkMatch[2]}
          className="underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
        >
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
                  <span
                    className={cn(
                      'shrink-0 mt-[3px] text-[10px]',
                      isUser ? 'opacity-70' : 'text-accent',
                    )}
                  >
                    ●
                  </span>
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

              // Standalone bold line → section label
              if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
                return (
                  <p
                    key={lIdx}
                    className={cn(
                      'font-semibold text-[0.8125rem] tracking-wide',
                      isUser ? 'opacity-80' : 'text-ink',
                      lIdx > 0 && 'mt-2',
                    )}
                  >
                    {trimmed.slice(2, -2)}
                  </p>
                )
              }

              // Bullet on its own line
              if (/^[•\-]/.test(trimmed)) {
                return (
                  <div key={lIdx} className="flex gap-2 items-start">
                    <span
                      className={cn(
                        'shrink-0 mt-[3px] text-[10px]',
                        isUser ? 'opacity-70' : 'text-accent',
                      )}
                    >
                      ●
                    </span>
                    <span>{parseInline(trimmed.replace(/^[•\-]\s*/, ''))}</span>
                  </div>
                )
              }

              // Italic block quote
              if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
                return (
                  <p key={lIdx} className={cn('italic', isUser ? 'opacity-80' : 'text-ink-secondary')}>
                    {parseInline(trimmed.slice(1, -1))}
                  </p>
                )
              }

              return <p key={lIdx}>{parseInline(trimmed)}</p>
            })}
          </div>
        )
      })}
    </div>
  )
}

// ─── Avatar ──────────────────────────────────────────────────────────────────

function AssistantAvatar(): ReactElement {
  return (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-sm">
      <span className="text-white text-xs font-semibold tracking-wide select-none">PB</span>
    </div>
  )
}

// ─── Typing indicator ────────────────────────────────────────────────────────

function TypingIndicator(): ReactElement {
  return (
    <div className="flex items-end gap-3">
      <AssistantAvatar />
      <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-ink-tertiary animate-bounce"
              style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Message bubble ──────────────────────────────────────────────────────────

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

// ─── Suggested questions ─────────────────────────────────────────────────────

function SuggestedQuestions({ onSelect }: { onSelect: (q: string) => void }): ReactElement {
  return (
    <div className="pt-2 pb-1">
      <p className="text-2xs font-medium tracking-widest uppercase text-ink-tertiary mb-3 ml-11">
        Suggested questions
      </p>
      <div className="flex flex-wrap gap-2 ml-11">
        {SUGGESTED_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-xs px-3 py-1.5 rounded-full border border-border bg-white text-ink-secondary hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200 text-left"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Welcome message ─────────────────────────────────────────────────────────

const WELCOME: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `Hi! I'm Patricia's portfolio assistant.

You can ask me anything about her work — her case studies, her approach to product and UX, her experience at LINK Mobility and Alqua, or why she might be a great fit for your team.

What would you like to know?`,
}

// ─── Main component ──────────────────────────────────────────────────────────

export function ChatInterface(): ReactElement {
  const [messages, setMessages] = useState<Message[]>([WELCOME])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const sessionId = useRef<string>('')

  useEffect(() => {
    const stored = localStorage.getItem('pati-chat-session')
    if (stored) {
      sessionId.current = stored
    } else {
      const id = crypto.randomUUID()
      localStorage.setItem('pati-chat-session', id)
      sessionId.current = id
    }
  }, [])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isTyping) return

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: trimmed,
      }

      setMessages((prev) => [...prev, userMessage])
      setInput('')
      setIsTyping(true)
      setShowSuggestions(false)

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: trimmed, sessionId: sessionId.current }),
        })

        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const data = await res.json()
        const content: string = data.text ?? data.answer ?? 'No response received.'

        setMessages((prev) => [
          ...prev,
          { id: `assistant-${Date.now()}`, role: 'assistant', content },
        ])
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `error-${Date.now()}`,
            role: 'assistant',
            content: 'Sorry, something went wrong. Please try again.',
          },
        ])
      } finally {
        setIsTyping(false)
      }
    },
    [isTyping],
  )

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  const handleSuggestion = (q: string) => {
    sendMessage(q)
  }

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  return (
    <div className="flex flex-col h-dvh bg-paper">
      {/* Header */}
      <header className="shrink-0 bg-white border-b border-border px-4 sm:px-6 py-3 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-ink-tertiary hover:text-ink transition-colors group"
          aria-label="Back to portfolio"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:-translate-x-0.5"
          >
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-medium">Portfolio</span>
        </Link>

        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-sm shrink-0">
            <span className="text-white text-xs font-semibold tracking-wide select-none">PB</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink leading-none">Patricia Bayona</p>
            <p className="text-2xs text-ink-tertiary mt-0.5">Portfolio Assistant · Ask anything</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-2xs text-ink-tertiary hidden sm:block">Online</span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-5">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}

          {showSuggestions && !isTyping && (
            <SuggestedQuestions onSelect={handleSuggestion} />
          )}

          {isTyping && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="shrink-0 bg-white border-t border-border px-4 sm:px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <div
            className={cn(
              'flex items-end gap-3 rounded-2xl border bg-paper px-4 py-3 transition-all duration-200',
              'border-border focus-within:border-accent focus-within:bg-white focus-within:shadow-card-hover',
            )}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Patricia's work, skills, or experience…"
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink-tertiary focus:outline-none leading-relaxed max-h-[120px] scrollbar-none"
              style={{ scrollbarWidth: 'none' }}
              disabled={isTyping}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className={cn(
                'shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200',
                input.trim() && !isTyping
                  ? 'bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-card-hover scale-100'
                  : 'bg-border text-ink-tertiary scale-95 opacity-60',
              )}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 11.5V2.5M7 2.5L3 6.5M7 2.5L11 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-center text-2xs text-ink-tertiary mt-2">
            Press Enter to send · Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  )
}
