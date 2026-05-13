'use client'

import type { ReactElement } from 'react'
import Link from 'next/link'
import { ErrorDisplay } from '~/components/admin/error-display'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function SessionDetailError(props: Props): ReactElement {
  const { reset } = props

  return (
    <ErrorDisplay
      message="No se pudo cargar la conversación"
      subtext="Puede que la sesión no exista o haya un error de conexión."
      onReset={reset}
    >
      <Link
        href="/admin"
        className="text-sm text-ink-secondary hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
      >
        Volver a conversaciones
      </Link>
    </ErrorDisplay>
  )
}
