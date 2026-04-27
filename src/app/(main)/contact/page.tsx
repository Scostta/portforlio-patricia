import type { ReactElement } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Contact — Patricia Bayona',
  description: 'Get in touch with Patricia Bayona Bultó — Product Manager & UX Lead.',
}

export default function ContactPage(): ReactElement {
  return (
    <div className="px-6 lg:px-12 max-w-7xl mx-auto">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="py-20 lg:py-24 border-b border-border grid lg:grid-cols-2 gap-12 lg:gap-20 items-end animate-fade-up">
        <div>
          <p className="section-label mb-6">Contact</p>
          <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.06] tracking-tight text-ink mb-6">
            Let&rsquo;s build<br />
            something{' '}
            <em className="not-italic bg-gradient-primary bg-clip-text text-transparent">great.</em>
          </h1>
          <p className="text-lg lg:text-xl text-ink/60 leading-relaxed max-w-md">
            I&rsquo;m open to Product Manager and UX Lead roles &mdash; remote or hybrid across Europe.
            If you&rsquo;d like to talk, I&rsquo;d love to hear from you.
          </p>
        </div>

        <div>
          {/* What I'm looking for */}
          <div className="bg-gradient-secondary rounded-2xl px-7 py-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-ink/40 mb-5">What I&rsquo;m looking for</p>
            <ul className="space-y-3.5">
              {[
                'Product Manager or UX Lead roles in B2B / SaaS / tech companies',
                'Remote-first or hybrid in Europe (Spain, UK, Netherlands…)',
                'Teams where design, product and engineering collaborate closely',
                'Environments with room to build from 0 to 1',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/60 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-5 border-t border-border text-xs text-ink/40 leading-relaxed">
              Spain · CET timezone · Full Remote preferred · Open to relocation for the right role
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact + Quote ────────────────────────────── */}
      <section className="py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left: channels */}
        <div className="reveal">
          <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-3">Reach out directly</h2>
          <p className="text-base text-ink/60 leading-relaxed mb-10">
            No forms, no gatekeeping. Pick the channel that works best for you —
            I usually reply within 24&thinsp;h.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:patricia.bulto@gmail.com"
              className="group flex items-center gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6667AB" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink/40 mb-0.5">Email</p>
                <p className="text-base font-medium text-ink truncate">patricia.bulto@gmail.com</p>
              </div>
              <svg className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="tel:+34687983052"
              className="group flex items-center gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#6667AB" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink/40 mb-0.5">Phone</p>
                <p className="text-base font-medium text-ink">+34 687 983 052</p>
              </div>
              <svg className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/patriciabayonabulto"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0A66C2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-widest uppercase text-ink/40 mb-0.5">LinkedIn</p>
                <p className="text-base font-medium text-ink truncate">linkedin.com/in/patriciabayonabulto</p>
              </div>
              <svg className="text-ink/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Book a call */}
        <div className="bg-gradient-secondary rounded-2xl px-8 py-10 flex flex-col gap-6 reveal [transition-delay:100ms]">
          <div>
            <p className="section-label mb-4">Book a call</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink mb-3">Prefer to talk?</h2>
            <p className="text-base text-ink/60 leading-relaxed">
              Pick a time that works for you — 30 minutes, no prep needed.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              'Free 30-min intro call',
              'No agenda required',
              'Remote via Google Meet or your preferred tool',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-ink/60">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://calendly.com/patricia-bulto/know-me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-primary text-black rounded-lg px-6 py-3.5 text-sm font-medium tracking-wide hover:text-white hover:bg-accent-hover transition-colors duration-200 self-start"
          >
            Schedule a call
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </section>

    </div>
  )
}
