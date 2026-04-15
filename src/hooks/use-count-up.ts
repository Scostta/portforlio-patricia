'use client'
import { useEffect, useRef, useState } from 'react'

type UseCountUpOptions = {
  target: number
  duration?: number
  startOnVisible?: boolean
}

export function useCountUp({ target, duration = 1500, startOnVisible = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !startOnVisible) return

    const animate = () => {
      if (hasAnimated.current) return
      hasAnimated.current = true

      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, duration, startOnVisible])

  return { count, ref }
}
