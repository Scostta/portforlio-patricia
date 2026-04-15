'use client'
import { usePathname } from 'next/navigation'
import type { ReactNode, ReactElement } from 'react'

export function PageTransition({ children }: { children: ReactNode }): ReactElement {
  const pathname = usePathname()
  return (
    <div key={pathname} className="animate-fade-in">
      {children}
    </div>
  )
}
