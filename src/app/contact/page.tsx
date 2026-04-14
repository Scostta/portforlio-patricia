import type { ReactElement } from 'react'

export const metadata = {
  title: 'Contact — Patricia Bayona',
  description: 'Get in touch with Patricia Bayona Bultó — Product Manager & UX Lead.',
}

export default function ContactPage(): ReactElement {
  return (
    <div className="min-h-[80vh] flex items-center px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="max-w-lg animate-fade-up">
          <p className="section-label mb-6">Contact</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-ink mb-6 leading-tight">
            Let&apos;s talk.
          </h1>
          <p className="text-base lg:text-lg text-ink-secondary leading-relaxed mb-14">
            I&apos;m open to Product Manager and UX Lead roles — remote or hybrid in Europe. If you&apos;d
            like to know more about my work or have a conversation, reach out directly.
          </p>

          <div className="space-y-8">
            <a
              href="mailto:patricia.bulto@gmail.com"
              className="group flex items-center gap-5 p-6 bg-surface hover:bg-border/50 transition-colors duration-200 reveal"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-10 h-10 bg-ink flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ink-tertiary tracking-wide mb-1">Email</p>
                <p className="font-medium text-ink text-lg">patricia.bulto@gmail.com</p>
              </div>
              <svg
                className="ml-auto text-ink-tertiary group-hover:text-ink group-hover:translate-x-1 transition-all duration-200"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="tel:+34687983052"
              className="group flex items-center gap-5 p-6 bg-surface hover:bg-border/50 transition-colors duration-200 reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-10 h-10 bg-ink flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="white" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ink-tertiary tracking-wide mb-1">Phone</p>
                <p className="font-medium text-ink text-lg">+34 687 983 052</p>
              </div>
              <svg
                className="ml-auto text-ink-tertiary group-hover:text-ink group-hover:translate-x-1 transition-all duration-200"
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <p className="mt-10 text-xs text-ink-tertiary leading-relaxed">
            Spain · Full Remote · Available for Product Manager and UX Lead positions
          </p>
        </div>
      </div>
    </div>
  )
}
