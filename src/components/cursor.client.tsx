'use client'
import { useEffect, useRef } from 'react'
import type { ReactElement } from 'react'

export function Cursor(): ReactElement {
  const dotRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dot = dotRef.current
    if (!dot) return
    dot.style.opacity = '1'

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const loop = () => {
      if (dot) {
        dot.style.transform = `translate(${posRef.current.x - 5}px, ${posRef.current.y - 5}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        dot.style.width = '24px'
        dot.style.height = '24px'
        dot.style.backgroundColor = 'rgba(102, 103, 171, 0.2)'
        dot.style.border = '1.5px solid #6667ab'
      }
    }

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        dot.style.width = '10px'
        dot.style.height = '10px'
        dot.style.backgroundColor = '#6667ab'
        dot.style.border = '0px solid transparent'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#6667ab',
        border: '0px solid transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease, border 0.15s ease',
        willChange: 'transform',
      }}
    />
  )
}
