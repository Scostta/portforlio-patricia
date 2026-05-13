'use client'

import { useState } from 'react'
import type { ReactElement, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '~/utils/cn'

function WarningIcon(): ReactElement {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 4v3M6.5 9h.01" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function Spinner(): ReactElement {
  return (
    <span className="flex items-center justify-center gap-1.5" aria-label="Cargando">
      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
    </span>
  )
}

export function LoginForm(): ReactElement {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.currentTarget
    const username = (form.elements.namedItem('username') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      if (res.ok) {
        router.push('/admin')
        return
      }

      if (res.status === 401) {
        setError('Credenciales incorrectas. Inténtalo de nuevo.')
        return
      }

      setError('Error del servidor. Inténtalo de nuevo más tarde.')
    } catch {
      setError('No se pudo conectar. Comprueba tu conexión.')
    } finally {
      setLoading(false)
    }
  }

  const fieldClass = cn(
    'w-full bg-paper border border-border rounded-xl px-4 py-3 text-sm text-ink',
    'placeholder:text-ink-tertiary transition-colors duration-150',
    'focus:outline-none focus:border-accent',
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  )

  const labelClass = 'block text-xs font-medium text-ink-secondary tracking-wide uppercase mb-1.5'

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Admin login"
      className={loading ? 'pointer-events-none' : undefined}
    >
      <div>
        <label htmlFor="username" className={labelClass}>
          Usuario
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          placeholder="tu usuario"
          disabled={loading}
          className={fieldClass}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="password" className={labelClass}>
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
          disabled={loading}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          'w-full mt-6 bg-accent text-white font-semibold text-[15px] py-3 rounded-xl',
          'hover:bg-accent-hover transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
          'disabled:opacity-75 disabled:cursor-not-allowed',
        )}
      >
        {loading ? <Spinner /> : 'Entrar'}
      </button>

      {error !== null && (
        <div
          role="alert"
          className="mt-3 flex items-center gap-2 text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3 animate-fade-in"
        >
          <WarningIcon />
          {error}
        </div>
      )}
    </form>
  )
}
