import type { ReactElement } from 'react'
import { Button } from '~/components/ui/button'
import { LOOKING_FOR, AVAIL_TAGS, CALL_PERKS } from '~/constants/contact'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Patricia Bayona Bultó — Product Manager & UX Lead.',
}

function ArrowIcon() {
  return (
    <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ContactPage(): ReactElement {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Subtle radial accent glow */}
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_80%_60%_at_80%_-10%,rgba(102,103,171,0.1)_0%,transparent_65%)] pointer-events-none"
        />

        <div className="relative px-6 lg:px-10 pt-10 pb-12 lg:pt-14 lg:pb-16 max-w-[1400px] mx-auto flex flex-col gap-5 lg:gap-8">

          {/* Eyebrow */}
          <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary animate-fade-up">
            Contact
          </p>

          {/* Two-column grid: headline vs box */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-20 items-center">

            {/* Left: headline + description */}
            <div>
              <h1 className="font-serif text-[clamp(2.4rem,6vw,4.2rem)] font-normal tracking-[-0.035em] leading-[1.05] text-ink mb-6 animate-fade-up [animation-delay:80ms]">
                Good work starts with
                <br />
                good{' '}
                <em className="not-italic bg-[linear-gradient(135deg,#9899cc_0%,#6667ab_60%)] bg-clip-text text-transparent">
                  people.
                </em>
              </h1>
              <p className="text-[1.05rem] text-ink-secondary leading-[1.65] max-w-[400px] animate-fade-up [animation-delay:160ms]">
                I&rsquo;m open to Product Manager and UX Lead roles &mdash; remote or hybrid across
                Europe. If you&rsquo;d like to talk, I&rsquo;d love to hear from you.
              </p>
            </div>

            {/* Right: what I'm looking for */}
            <div className="bg-gradient-secondary border border-border rounded-2xl px-6 py-6 animate-fade-up [animation-delay:240ms]">
              <p className="text-2xs font-semibold tracking-widest uppercase text-ink-tertiary mb-5">
                What I&rsquo;m looking for
              </p>
              <ul className="flex flex-col gap-3.5">
                {LOOKING_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Availability strip ──────────────────────────────────── */}
      <div className="border-b border-border py-6 lg:py-9 reveal">
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          {/* Pulsing dot + status text */}
          <div className="flex items-center gap-3">
            <span className="relative flex-shrink-0 w-2.5 h-2.5">
              <span className="block w-full h-full rounded-full bg-[#3ecf8e]" />
              <span className="absolute inset-0 rounded-full bg-[#3ecf8e]/30 animate-ping" />
            </span>
            <p className="text-sm text-ink-secondary">
              <strong className="text-ink font-medium">Currently open to opportunities</strong>
              {' '}— typical reply within 24 h
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:ml-auto">
            {AVAIL_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-2xs font-medium tracking-[0.07em] text-ink-tertiary border border-border px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Channels + Book a call ──────────────────────────────── */}
      <section className="border-b border-border py-16 lg:py-20">
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-20 items-start">

          {/* Left: direct channels */}
          <div className="reveal">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-normal tracking-[-0.025em] text-ink mb-2">
              Reach out directly
            </h2>
            <p className="text-sm text-ink-tertiary leading-[1.55] mb-8">
              No forms, no gatekeeping. Pick the channel that works best for you —
              I usually reply within 24&thinsp;h.
            </p>

            <div className="flex flex-col gap-2.5 sm:max-w-[460px]">
              <a
                href="mailto:patricia.bulto@gmail.com"
                className="group flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-accent/35 sm:hover:-translate-y-0.5 sm:hover:shadow-[0_4px_16px_rgba(102,103,171,0.1)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#6667AB" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-micro font-semibold tracking-widest uppercase text-ink-tertiary mb-0.5">Email</p>
                  <p className="text-sm font-light text-ink-secondary truncate group-hover:text-ink transition-colors duration-200">
                    patricia.bulto@gmail.com
                  </p>
                </div>
                <span className="text-ink/20 group-hover:text-accent sm:group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="tel:+34687983052"
                className="group w-full flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-accent/35 sm:hover:-translate-y-0.5 sm:hover:shadow-[0_4px_16px_rgba(102,103,171,0.1)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-[10px] bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#6667AB" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-micro font-semibold tracking-widest uppercase text-ink-tertiary mb-0.5">Phone</p>
                  <p className="text-sm font-light text-ink-secondary group-hover:text-ink transition-colors duration-200">
                    +34 687 983 052
                  </p>
                </div>
                <span className="text-ink/20 group-hover:text-accent sm:group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="https://linkedin.com/in/patriciabayonabulto"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center gap-4 p-4 bg-white border border-border rounded-xl hover:border-accent/35 sm:hover:-translate-y-0.5 sm:hover:shadow-[0_4px_16px_rgba(102,103,171,0.1)] transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0A66C2" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-micro font-semibold tracking-widest uppercase text-ink-tertiary mb-0.5">LinkedIn</p>
                  <p className="text-sm font-light text-ink-secondary group-hover:text-ink transition-colors duration-200 truncate w-0 min-w-full">
                    linkedin.com/in/patriciabayonabulto
                  </p>
                </div>
                <span className="text-ink/20 group-hover:text-accent sm:group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          {/* Right: book a call panel */}
          <div className="bg-gradient-secondary border border-border rounded-2xl px-8 py-8 flex flex-col gap-6 reveal [transition-delay:100ms]">
            <p className="text-2xs font-semibold tracking-widest uppercase text-accent">
              Book a call
            </p>
            <div>
              <h2 className="font-serif text-3xl font-normal tracking-[-0.025em] text-ink leading-[1.15] mb-2">
                Prefer to talk?
              </h2>
              <p className="text-sm text-ink-tertiary leading-[1.55]">
                If you prefer a conversation, book a 45-minute call — just bring your questions.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {CALL_PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-ink-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="md"
              href="https://calendly.com/patricia-bulto/know-me"
              external
              arrow
              className="self-start"
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </section>

    </>
  )
}
