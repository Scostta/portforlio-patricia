'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

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

function PdfModal({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  useLockScroll()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ zIndex: 9999, background: 'rgba(19,19,16,0.97)' }}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-white/[0.07]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2v6h6" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm text-white/70 font-medium truncate">{label}</span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={href}
            download
            className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-lg transition-colors duration-200"
            aria-label={`Download ${label}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </a>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close (Esc)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* PDF iframe — fills all remaining space */}
      <div className="flex-1 overflow-hidden">
        <iframe
          src={href}
          title={label}
          className="w-full h-full border-0"
        />
      </div>
    </div>,
    document.body
  )
}

type Props = {
  href: string
  label: string
}

export function CasePdfViewer({ href, label }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="border border-border rounded-xl overflow-hidden bg-white">
        <div className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-ink truncate">{label}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setOpen(true)}
              className="text-xs font-semibold text-accent border border-accent/30 bg-accent/[0.07] hover:bg-accent/15 px-3 py-1.5 rounded-lg transition-colors duration-200"
            >
              View
            </button>
            <a
              href={href}
              download
              className="flex items-center justify-center w-8 h-8 text-ink-secondary border border-border hover:border-ink-secondary rounded-lg transition-colors duration-200"
              aria-label={`Download ${label}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {open && <PdfModal href={href} label={label} onClose={() => setOpen(false)} />}
    </>
  )
}
