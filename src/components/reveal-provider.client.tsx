'use client'
import type { ReactNode } from 'react'
import { useRevealOnScroll } from '~/hooks/use-reveal-on-scroll'

export function RevealProvider({ children }: { children: ReactNode }) {
  useRevealOnScroll()
  return <>{children}</>
}
