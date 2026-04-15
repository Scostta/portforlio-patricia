'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '~/utils/cn'

const NAV_LINKS = [
  { href: '/cases', label: 'Cases' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    let last = window.scrollY

    const onScroll = () => {
      const current = window.scrollY
      if (current < 80) {
        setVisible(true)
      } else {
        setVisible(current < last)
      }
      last = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pathname = usePathname() ?? ''
  const isActive = (href: string) =>
    mounted && (pathname === href || pathname.startsWith(href + '/'))

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border',
      'transition-transform duration-300',
      visible ? 'translate-y-0' : '-translate-y-full',
    )}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base text-ink hover:text-accent transition-colors duration-200"
        >
          Patricia Bayona Bultó
        </Link>

        <ul className="flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'relative text-sm tracking-wide transition-colors duration-200',
                  'after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-accent',
                  'after:w-0 after:transition-[width] after:duration-300',
                  isActive(href) ? 'text-ink font-medium after:!w-full' : 'text-ink-secondary hover:text-ink hover:after:w-full',
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
