'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function TopBanner() {
  const pathname = usePathname() ?? ''

  const isPortfolio = pathname === '/portfolio' || pathname.startsWith('/portfolio/')
  const isChat = pathname === '/chat' || pathname.startsWith('/chat/')

  if (!isPortfolio && !isChat) return null

  const href = isPortfolio ? '/chat' : '/portfolio'
  const [messageStart, messageEnd] = isPortfolio
    ? ['Chat with Patricia\'s AI Portfolio Assistant', 'now']
    : ['Check Patricia\'s full portfolio', 'here']

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-accent/80 flex items-center justify-center px-4">
      <Link
        href={href}
        className="flex items-center gap-2 text-xs font-semibold text-white/75 hover:text-white/95 tracking-wide transition-colors duration-200"
      >
        {messageStart} <span className="underline underline-offset-2">{messageEnd}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  )
}
