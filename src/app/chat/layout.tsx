import type { ReactElement } from 'react'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return <main className="flex-1">{children}</main>
}
