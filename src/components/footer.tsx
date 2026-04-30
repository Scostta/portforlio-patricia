import { Button } from '~/components/ui/button'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="px-6 lg:px-10 py-10 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h3 className="font-serif text-2xl font-normal tracking-tight text-ink mb-1.5">
            Interested in working together?
          </h3>
          <p className="text-sm text-ink-secondary">
            Open to Product Manager and UX Lead roles — remote or hybrid in Europe.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm" href="/portfolio/contact" arrow>
            Get in touch
          </Button>
          <Button variant="secondary" size="sm" href="/downloads/cv_patricia_bayona_en.pdf" download>
            Download CV
          </Button>
        </div>
      </div>
    </footer>
  )
}
