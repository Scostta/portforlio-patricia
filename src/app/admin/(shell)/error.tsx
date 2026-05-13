'use client'

import type { ReactElement } from 'react'
import { ErrorDisplay } from '~/components/admin/error-display'

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function AdminError(props: Props): ReactElement {
  const { reset } = props

  return (
    <ErrorDisplay
      message="Algo ha ido mal"
      subtext="No se pudo cargar esta página."
      onReset={reset}
    />
  )
}
