'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useRevealOnScroll(selector = '.reveal, .reveal-expand, .reveal-far') {
  const pathname = usePathname()

  useEffect(() => {
    const setup = () => {
      const els = document.querySelectorAll<HTMLElement>(selector)
      // Reset any previously visible elements (for page transitions)
      els.forEach((el) => el.classList.remove('is-visible'))

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible')
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' },
      )
      els.forEach((el) => io.observe(el))
      return io
    }

    // Small timeout to ensure DOM is updated after navigation
    const t = setTimeout(() => {
      const io = setup()
      return () => io.disconnect()
    }, 30)

    return () => clearTimeout(t)
  }, [pathname, selector])
}
