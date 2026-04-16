import type { ReactElement } from 'react'
import { Nav } from '~/components/nav'
import { Footer } from '~/components/footer'
import { ChatFab } from '~/components/chat-fab'
import { RevealProvider } from '~/components/reveal-provider.client'
import { PageTransition } from '~/components/page-transition.client'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}): ReactElement {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-16">
        <RevealProvider>
          <PageTransition>{children}</PageTransition>
        </RevealProvider>
      </main>
      <Footer />
      <ChatFab />
    </>
  )
}
