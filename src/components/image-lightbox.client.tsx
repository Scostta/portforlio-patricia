'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '~/utils/cn'

type Image = {
  src: string
  alt: string
  caption?: string
}

type LightboxProps = {
  images: Image[]
  initialIndex?: number
  onClose: () => void
}

function useLockScroll() {
  useEffect(() => {
    const el = document.documentElement
    const prevOverflow = el.style.overflow
    const prevPr = el.style.paddingRight
    const scrollbarW = window.innerWidth - el.clientWidth
    el.style.overflow = 'hidden'
    el.style.paddingRight = `${scrollbarW}px`
    return () => {
      el.style.overflow = prevOverflow
      el.style.paddingRight = prevPr
    }
  }, [])
}

function Lightbox({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null)
  const isDragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useLockScroll()

  const current = images[index]

  const resetZoom = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  const goTo = useCallback((i: number) => {
    setIndex(i)
    resetZoom()
  }, [resetZoom])

  const prev = useCallback(() => goTo((index - 1 + images.length) % images.length), [index, images.length, goTo])
  const next = useCallback(() => goTo((index + 1) % images.length), [index, images.length, goTo])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === '+' || e.key === '=') setScale(s => Math.min(s + 0.5, 5))
      if (e.key === '-') setScale(s => {
        const n = Math.max(s - 0.5, 1)
        if (n === 1) setOffset({ x: 0, y: 0 })
        return n
      })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  function onWheel(e: React.WheelEvent) {
    e.preventDefault()
    const delta = e.deltaY < 0 ? 0.3 : -0.3
    setScale(s => {
      const n = Math.min(Math.max(s + delta, 1), 5)
      if (n === 1) setOffset({ x: 0, y: 0 })
      return n
    })
  }

  function onMouseDown(e: React.MouseEvent) {
    if (scale === 1) return
    e.preventDefault()
    isDragging.current = false
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y }
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragStart.current) return
    isDragging.current = true
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y),
    })
  }

  function onMouseUp() {
    dragStart.current = null
  }

  function onBackdropClick(e: React.MouseEvent) {
    if (isDragging.current) { isDragging.current = false; return }
    if (e.target === containerRef.current) onClose()
  }

  const zoomOut = () => setScale(s => { const n = Math.max(s - 0.5, 1); if (n === 1) setOffset({ x: 0, y: 0 }); return n })
  const zoomIn = () => setScale(s => Math.min(s + 0.5, 5))

  return createPortal(
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ zIndex: 9999, background: 'rgba(19,19,16,0.97)' }}
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-white/[0.07]">
        <div className="flex items-center gap-1">
          <button onClick={zoomOut} className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors" aria-label="Zoom out">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
          <button onClick={zoomIn} className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors" aria-label="Zoom in">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
          <button
            onClick={resetZoom}
            className={cn('px-2 h-8 text-xs font-mono rounded-lg transition-colors hover:bg-white/10', scale !== 1 ? 'text-white/80 hover:text-white' : 'text-white/30')}
            aria-label="Reset zoom"
          >
            {Math.round(scale * 100)}%
          </button>
        </div>

        {images.length > 1 && (
          <span className="text-xs font-mono text-white/30 tabular-nums">
            {index + 1} / {images.length}
          </span>
        )}

        <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors" aria-label="Close (Esc)">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Image area */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden relative"
        onClick={onBackdropClick}
        onWheel={onWheel}
      >
        {images.length > 1 && (
          <button onClick={prev} className="absolute left-3 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}

        <img
          src={current.src}
          alt={current.alt}
          draggable={false}
          className="max-w-full max-h-full object-contain select-none"
          style={{
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            cursor: scale > 1 ? 'grab' : 'default',
            transition: dragStart.current ? 'none' : 'transform 0.15s ease',
            userSelect: 'none',
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        />

        {images.length > 1 && (
          <button onClick={next} className="absolute right-3 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        )}
      </div>

      {/* Bottom bar */}
      {(current.caption || images.length > 1) && (
        <div className="flex-shrink-0 border-t border-white/[0.07]">
          {current.caption && (
            <p className="text-xs text-white/40 italic text-center pt-3 px-6">{current.caption}</p>
          )}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 px-4 py-3 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    'flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all duration-150',
                    i === index ? 'border-accent opacity-100' : 'border-transparent opacity-30 hover:opacity-60'
                  )}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" draggable={false} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>,
    document.body
  )
}

type CaseImagesProps = {
  images: Image[]
  columns?: 1 | 2
}

export function CaseImages({ images, columns = 1 }: CaseImagesProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className={cn(
        'mt-6 gap-3',
        columns > 1 && images.length > 1 ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col',
      )}>
        {images.map((img, idx) => (
          <figure key={idx} className="reveal m-0 group">
            <button
              onClick={() => setLightboxIndex(idx)}
              className="relative w-full block rounded-xl overflow-hidden border border-border focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label={`View: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-ink/25">
                <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#131310" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </button>
            {img.caption && (
              <figcaption className="mt-2 text-xs text-ink-tertiary text-center italic">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
