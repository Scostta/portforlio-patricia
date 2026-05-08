'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ReactElement } from 'react'

interface StepImage {
  src: string
  alt: string
}

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const el = document.documentElement
    const prev = el.style.overflow
    el.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      el.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return createPortal(
    <div
      className="lightbox-root fixed inset-0 flex items-center justify-center p-4 lg:p-12"
      style={{ zIndex: 9999, background: 'rgba(19,19,16,0.96)', cursor: 'zoom-out' }}
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label={alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        style={{ cursor: 'default' }}
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        aria-label="Close (Esc)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>,
    document.body
  )
}

export function StepCarousel({ images }: { images: StepImage[] }): ReactElement {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const single = images.length === 1

  useEffect(() => {
    if (single || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500)
    return () => clearInterval(id)
  }, [single, paused, images.length])

  return (
    <>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div
          className="relative overflow-hidden rounded-lg cursor-zoom-in"
          style={{ aspectRatio: '4/3' }}
          onClick={() => setZoomed(true)}
          role="button"
          aria-label="Zoom image"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setZoomed(true)}
        >
          {images.map((img, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
              draggable={false}
            />
          ))}
        </div>

        {!single && (
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-ink-tertiary hover:text-accent hover:border-accent/40 transition-colors duration-200"
              aria-label="Previous image"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex items-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Image ${i + 1}`}
                  className={[
                    'rounded-full transition-all duration-300',
                    i === index ? 'w-4 h-1.5 bg-accent' : 'w-1.5 h-1.5 bg-border hover:bg-ink-tertiary',
                  ].join(' ')}
                />
              ))}
            </div>

            <button
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-ink-tertiary hover:text-accent hover:border-accent/40 transition-colors duration-200"
              aria-label="Next image"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {zoomed && <ImageLightbox src={images[index].src} alt={images[index].alt} onClose={() => setZoomed(false)} />}
    </>
  )
}
