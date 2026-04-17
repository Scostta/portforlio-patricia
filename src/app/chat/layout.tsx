import type { ReactElement } from 'react'
import { ChatApp } from './chat-app.client'

export default function ChatLayout({ children }: { children: React.ReactNode }): ReactElement {
  return (
    <>
      <ChatApp />
      {/* pages return null — rendered here only so Next.js can pick up metadata */}
      <div hidden aria-hidden>
        {children}
      </div>
    </>
  )
}
