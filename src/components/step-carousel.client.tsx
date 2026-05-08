'use client'

import { useState } from 'react'
import type { ReactElement } from 'react'

interface StepImage {
  src: string
  alt: string
}

export function StepCarousel({ images }: { images: StepImage[] }): ReactElement {
  const [index, setIndex] = useState(0)
  const single = images.length === 1

  return (
    <div>
      <div className="overflow-hidden">
        <img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          className="w-full object-contain rounded-lg"
          style={{ animation: 'float 7s ease-in-out infinite' }}
          draggable={false}
        />
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
                  i === index
                    ? 'w-4 h-1.5 bg-accent'
                    : 'w-1.5 h-1.5 bg-border hover:bg-ink-tertiary',
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
  )
}
