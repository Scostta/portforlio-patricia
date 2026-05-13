import type { ReactElement } from 'react'

/**
 * Bare admin layout — provides no chrome of its own.
 * Login page renders directly here (full-viewport dark bg).
 * Pages that need the sidebar live inside (shell)/layout.tsx.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return <>{children}</>
}
