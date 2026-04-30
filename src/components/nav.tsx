'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '~/utils/cn'
import { Button } from '~/components/ui/button'

const NAV_LINKS = [
  { href: '/portfolio/cases', label: 'Cases' },
  { href: '/portfolio/about', label: 'About' },
  { href: '/portfolio/contact', label: 'Contact' },
]

export function Nav() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  const pathname = usePathname() ?? ''

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

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

  const isActive = (href: string) =>
    mounted && (pathname === href || pathname.startsWith(href + '/'))

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border',
        'transition-transform duration-300',
        visible || menuOpen ? 'translate-y-0' : '-translate-y-full',
      )}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-base text-ink hover:text-accent transition-colors duration-200"
          >
            Patricia Bayona Bultó
          </Link>

          {/* Desktop: links + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'relative text-sm tracking-wide transition-colors duration-200',
                      'after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-accent',
                      'after:w-0 after:transition-[width] after:duration-300',
                      isActive(href)
                        ? 'text-ink font-medium after:!w-full'
                        : 'text-ink-secondary hover:text-ink hover:after:w-full',
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="primary" size="sm" href="mailto:patricia.bulto@gmail.com" external>
              Get in touch
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={cn(
              'block h-[1.5px] bg-ink origin-center transition-all duration-300',
              menuOpen ? 'w-5 translate-y-[6.5px] rotate-45' : 'w-5',
            )} />
            <span className={cn(
              'block h-[1.5px] bg-ink transition-all duration-300',
              menuOpen ? 'opacity-0 w-5' : 'w-3.5',
            )} />
            <span className={cn(
              'block h-[1.5px] bg-ink origin-center transition-all duration-300',
              menuOpen ? 'w-5 -translate-y-[6.5px] -rotate-45' : 'w-5',
            )} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white lg:hidden flex flex-col',
          'transition-opacity duration-250',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
      >
        <div className="pt-16 flex-1 flex flex-col px-6 py-10 overflow-y-auto">

          {/* Nav links */}
          <nav className="flex flex-col mb-8">
            {NAV_LINKS.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'font-serif text-[2.5rem] font-normal tracking-[-0.03em] leading-[1.15] py-5 border-b border-border/50',
                  'transition-colors duration-200',
                  isActive(href) ? 'text-accent' : 'text-ink hover:text-accent',
                )}
                style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Button
            variant="primary"
            size="md"
            href="mailto:patricia.bulto@gmail.com"
            external
            className="self-start"
          >
            Get in touch
          </Button>

          {/* Footer tag */}
          <p className="mt-auto pt-10 text-xs text-ink-tertiary">
            Patricia Bayona Bultó &nbsp;·&nbsp; Product &amp; Design Leader
          </p>
        </div>
      </div>
    </>
  )
}
