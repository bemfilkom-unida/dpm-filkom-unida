import { useEffect, useRef } from 'react'
import { team, type TeamMember } from '../../data/team'
import { ArrowUpRight } from '../../components/ui/icons'

const CARD_GAP = 16

/** Advances the mobile-only carousel and seamlessly wraps around. */
function useAutoCarousel(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let loopWidth = 0
    const measure = () => {
      let width = 0
      for (let i = 0; i < team.length; i++) {
        width += (el.children[i] as HTMLElement).offsetWidth + CARD_GAP
      }
      loopWidth = width
    }
    measure()

    const interval = setInterval(() => {
      const card = el.firstElementChild as HTMLElement | null
      if (!card) return
      el.scrollBy({ left: card.offsetWidth + CARD_GAP, behavior: 'smooth' })
      setTimeout(() => {
        if (loopWidth && el.scrollLeft >= loopWidth) el.scrollLeft -= loopWidth
      }, 360)
    }, 2800)

    return () => clearInterval(interval)
  }, [ref])
}

function MemberCaption({ member }: { member: TeamMember }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[14px] text-[#164653]">{member.name}</span>
      <span className="font-mono text-[9px] tracking-[0.9px] text-[#4a5a60]">{member.role}</span>
    </div>
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="overflow-hidden rounded-xl border border-[#c5cdd1] bg-[#DCE2E6]">
        <img
          src={member.photo}
          alt={`${member.name} — ${member.role}`}
          width={720}
          height={900}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      <MemberCaption member={member} />
    </div>
  )
}

export function TeamSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  useAutoCarousel(carouselRef)

  return (
    <section className="reveal flex flex-col gap-7 px-4 md:px-8 py-8">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[14px]">
          <span className="font-mono text-[10px] tracking-[1.2px] text-[#4a5a60]">STRUKTUR</span>
          <h2 className="max-w-[620px] text-[32px] font-medium leading-[1.12] tracking-[-1.2px] text-[#164653] md:text-[44px] md:tracking-[-1.6px]">
            Badan Pengurus Harian.
          </h2>
        </div>
        <div className="flex items-center gap-[6px] pb-1">
          <span className="font-mono text-[10px] tracking-[0.9px] text-[#4a5a60]">
            PERIODE 2026/2027
          </span>
          <ArrowUpRight size={13} stroke="#4a5a60" />
        </div>
      </div>

      <div
        ref={carouselRef}
        className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-[14vw] scrollbar-hide"
      >
        {[...team, ...team].map((member, index) => (
          <div key={index} className="snap-center shrink-0 w-[72vw] flex flex-col gap-[10px]">
            <div className="overflow-hidden rounded-xl border border-[#c5cdd1] bg-[#DCE2E6]">
              <img
                src={member.photo}
                alt={`${member.name} — ${member.role}`}
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <MemberCaption member={member} />
          </div>
        ))}
      </div>

      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {team.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  )
}
