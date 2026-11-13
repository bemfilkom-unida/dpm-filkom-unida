import { SectionBar } from '../../../components/ui/SectionBar'
import { AgendaCard } from './AgendaCard'
import { AspirationChatCard } from './AspirationChatCard'
import { FacultyCard } from './FacultyCard'
import { GalleryCard } from './GalleryCard'
import { SystemFeedCard } from './SystemFeedCard'

export function ProgramGrid() {
  return (
    <section className="reveal px-4 md:px-8 pb-14 pt-0">
      <SectionBar
        label="PROGRAM & LAYANAN"
        meta={
          <span className="font-mono text-[10px] tracking-[0.6px] text-[#4a5a60]">
            06 inisiatif aktif
          </span>
        }
      />
      <div className="space-y-4 md:grid md:grid-cols-6 md:gap-4 md:space-y-0">
        <AspirationChatCard />
        <SystemFeedCard />
        <AgendaCard />
        <GalleryCard />
        <FacultyCard />
      </div>
    </section>
  )
}
