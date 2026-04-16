import type { ReactElement } from 'react'
import { ChatInterface } from './chat-interface.client'

export const metadata = {
  title: 'Chat — Patricia Bayona',
  description: "Ask anything about Patricia Bayona's experience, case studies, and approach to product and UX.",
}

export default function ChatPage(): ReactElement {
  return <ChatInterface />
}
