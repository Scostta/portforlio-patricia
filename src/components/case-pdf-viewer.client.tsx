import type { ReactElement } from 'react'

type Props = {
  href: string
  label: string
}

export function CasePdfViewer({ href, label }: Props): ReactElement {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-white shadow-[0_8px_32px_-8px_rgba(19,19,16,0.10)]">
      {/* Header — light purple, matching Case 6 */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-accent-light border-b border-[#E8DFF7]">
        <div className="w-6 h-6 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 2v6h6M9 13h6M9 17h4" stroke="#6667ab" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="text-xs font-semibold text-accent-ink truncate">{label}</span>
      </div>

      {/* A4 portrait aspect ratio: 1 : √2 ≈ 1 : 1.414 */}
      <div className="relative w-full" style={{ paddingTop: '141.4%' }}>
        <iframe
          src={`${href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&page=1`}
          title={label}
          className="absolute inset-0 w-full h-full border-0 block"
        />
      </div>
    </div>
  )
}
