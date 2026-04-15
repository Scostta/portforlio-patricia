'use client'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

export function ScrollProgress(): ReactElement {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight <= 0 ? 0 : Math.min(scrollTop / docHeight, 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 100,
        transformOrigin: 'left',
        transform: `scaleX(${progress})`,
        background: 'linear-gradient(90deg, rgba(138, 200, 231, 0.8) 0%, rgba(171, 107, 255, 0.8) 100%)',
        transition: 'transform 0.05s linear',
        willChange: 'transform',
      }}
    />
  )
}
