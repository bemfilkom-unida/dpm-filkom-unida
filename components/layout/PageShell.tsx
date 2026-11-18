import type { ReactNode } from 'react'
import Nav from './Nav'
import SiteFooter from './SiteFooter'

/**
 * Wraps every route in the shared chrome: page background, navigation,
 * the `#main` landmark used by the skip link, and the footer.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Nav />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  )
}
