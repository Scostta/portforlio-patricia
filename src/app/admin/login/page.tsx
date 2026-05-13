import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { LoginForm } from '~/components/admin/login-form.client'

export const metadata: Metadata = {
  title: 'Admin — Acceso',
  robots: { index: false, follow: false },
}

export default function LoginPage(): ReactElement {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-5">
      <div className="w-full max-w-[400px] animate-fade-up">
        <div className="bg-paper rounded-2xl border border-border shadow-2xl px-6 py-8 lg:px-8 lg:py-10">
          {/* Eyebrow */}
          <p className="text-xs font-medium tracking-widest uppercase text-ink-tertiary text-center mb-8">
            Patricia Bayona · Admin
          </p>

          {/* Heading */}
          <h1 className="font-serif text-2xl text-ink text-center mb-2">
            Bienvenida
          </h1>

          {/* Subheading */}
          <p className="text-sm text-ink-secondary text-center mb-8">
            Accede para ver las conversaciones del chat.
          </p>

          {/* Form */}
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
