import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-serif text-sm text-ink-secondary">
          Patricia Bayona Bultó · Product & Design Leader
        </p>
        <nav className="flex items-center gap-6">
          <Link href="/cases" className="text-xs text-ink-secondary hover:text-ink transition-colors tracking-wide">
            Cases
          </Link>
          <Link href="/about" className="text-xs text-ink-secondary hover:text-ink transition-colors tracking-wide">
            About
          </Link>
          <Link href="/contact" className="text-xs text-ink-secondary hover:text-ink transition-colors tracking-wide">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
