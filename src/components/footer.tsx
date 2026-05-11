import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#333330]">
      <div className="px-6 lg:px-10 py-10 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h3 className="font-serif text-2xl font-normal tracking-tight text-white mb-1.5">
            Interested in working together?
          </h3>
          <p className="text-sm text-white/50">
            Open to Product Manager and UX Lead roles — remote or hybrid in Europe.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/portfolio/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-primary text-white tracking-wide transition-colors duration-200"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="/downloads/cv_patricia_bayona_en.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-white/20 text-white/70 hover:border-white/40 hover:text-white tracking-wide transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  )
}
