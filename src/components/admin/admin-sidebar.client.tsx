'use client'

import { useState, useEffect } from 'react'
import type { ReactElement } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '~/utils/cn'

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChatIcon(): ReactElement {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function LogoutIcon(): ReactElement {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M5 2H2.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1H5M8.5 9.5l3-3-3-3M11.5 6.5H5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HamburgerIcon(): ReactElement {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon(): ReactElement {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Nav item ─────────────────────────────────────────────────────────────────

type NavItemProps = {
  href: string
  label: string
  icon: ReactElement
  isActive: boolean
  onClick?: () => void
}

function NavItem(props: NavItemProps): ReactElement {
  const { href, label, icon, isActive, onClick } = props

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'flex items-center gap-2.5 text-sm rounded-xl px-3 py-2 w-full transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        isActive
          ? 'bg-accent/10 text-accent font-medium'
          : 'text-ink-secondary hover:bg-border/60',
      )}
    >
      {icon}
      {label}
    </Link>
  )
}

// ─── Sidebar content (shared between desktop & mobile drawer) ─────────────────

type SidebarContentProps = {
  pathname: string
  onNavClick?: () => void
}

function SidebarContent(props: SidebarContentProps): ReactElement {
  const { pathname, onNavClick } = props
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout(): Promise<void> {
    setLoggingOut(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
    } finally {
      router.push('/admin/login')
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Identity header */}
      <div className="shrink-0 border-b border-border px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-semibold select-none">PB</span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-ink truncate">Patricia Bayona</p>
            <p className="text-xs text-ink-tertiary truncate">Panel de admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-3 pt-4 space-y-0.5 flex-1" aria-label="Admin navigation">
        <p className="section-label px-2 mb-2">Secciones</p>
        <NavItem
          href="/admin"
          label="Conversaciones"
          icon={<ChatIcon />}
          isActive={pathname === '/admin' || pathname.startsWith('/admin/chats')}
          onClick={onNavClick}
        />
      </nav>

      {/* Footer */}
      <div className="shrink-0 border-t border-border px-5 py-4 mt-auto">
        <p className="text-xs text-ink-tertiary truncate">panel.admin</p>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className={cn(
            'w-full flex items-center gap-2 text-sm rounded-xl px-3 py-2 mt-2',
            'text-ink-secondary hover:text-red-500 hover:bg-red-50 transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          <LogoutIcon />
          {loggingOut ? 'Cerrando sesión…' : 'Cerrar sesión'}
        </button>
      </div>
    </div>
  )
}

// ─── Admin sidebar ────────────────────────────────────────────────────────────

export function AdminSidebar(): ReactElement {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close drawer on Escape key
  useEffect(() => {
    if (!mobileOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden h-12 bg-paper border-b border-border flex items-center px-4 gap-3 shrink-0">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          className={cn(
            'w-8 h-8 flex items-center justify-center rounded-lg text-ink-secondary',
            'hover:bg-surface transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          )}
        >
          <HamburgerIcon />
        </button>
        <span className="text-sm font-medium text-ink flex-1 text-center">Admin</span>
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0" aria-hidden="true">
          <span className="text-white text-xs font-semibold select-none">PB</span>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-ink/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed top-0 left-0 h-full w-60 bg-surface border-r border-border z-50 lg:hidden',
          'transition-transform duration-300 ease-out-expo',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Admin navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border lg:hidden">
          <span className="text-sm font-medium text-ink">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
            className={cn(
              'w-8 h-8 flex items-center justify-center rounded-lg text-ink-secondary',
              'hover:bg-border/60 transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            )}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="h-[calc(100%-3rem)]">
          <SidebarContent
            pathname={pathname}
            onNavClick={() => setMobileOpen(false)}
          />
        </div>
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 flex-shrink-0 bg-surface border-r border-border h-screen sticky top-0 flex-col">
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  )
}
