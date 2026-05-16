import '@/styles/app.css'

import { BootScreen } from '@/components/BootScreen'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { sectionIds } from '@/content/site'
import { useActiveSection, useBootPhase, usePrefersReducedMotion } from '@/hooks/useSiteChrome'
import { AboutSection } from '@/sections/AboutSection'
import { ContactSection } from '@/sections/ContactSection'
import { HeroSection } from '@/sections/HeroSection'
import { SystemSection } from '@/sections/SystemSection'
import { WorkSection } from '@/sections/WorkSection'

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const bootPhase = useBootPhase(reducedMotion)
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="app">
      <div className="app__surface">
        <BootScreen phase={bootPhase} />
        <Header activeId={activeId} />
        <main className="shell">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <SystemSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
