import { Button } from '~/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-paper px-6 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <span className="text-sm font-semibold text-accent tracking-wide">PB</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-ink">Patricia Bayona Bultó</p>
              <p className="text-xs text-ink/60 leading-relaxed mt-0.5">
                VP of UX &amp; Product Manager at LINK Mobility · Co-founder of Alqua · Based in Southern Spain, working remote across Europe.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="pill" size="sm" href="https://www.linkedin.com/in/patriciabayona" external>
              LinkedIn
            </Button>
            <Button variant="pill" size="sm" href="/cv">
              CV
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
