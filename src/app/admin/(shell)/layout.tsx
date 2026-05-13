import type { ReactElement } from 'react'
import { AdminSidebar } from '~/components/admin/admin-sidebar.client'

export default function AdminShellLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-paper">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 lg:px-8 lg:py-10 max-w-5xl">
          {children}
        </div>
      </main>
    </div>
  )
}
