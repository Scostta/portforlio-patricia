'use client'

import Script from 'next/script'

export function CalendlyEmbed({ url }: { url: string }) {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full rounded-2xl overflow-hidden border border-border"
        data-url={url}
        style={{ minWidth: '280px', height: '660px' }}
      />
    </>
  )
}
