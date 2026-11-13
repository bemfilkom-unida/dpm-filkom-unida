import PageShell from '../../components/layout/PageShell'
import { useRevealGroups } from '../../components/ScrollEffects'
import { AboutSection } from './AboutSection'
import { CtaSection } from './CtaSection'
import { HeroSection } from './HeroSection'
import { NewsSection } from './NewsSection'
import { ProgramGrid } from './programs/ProgramGrid'
import { StatsSection } from './StatsSection'
import { TeamSection } from './TeamSection'

export default function HomePage() {
  useRevealGroups()

  return (
    <PageShell>
      <HeroSection />
      <ProgramGrid />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <NewsSection />
      <CtaSection />
    </PageShell>
  )
}
