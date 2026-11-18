import { Link } from '@tanstack/react-router'
import { news } from '../../data/news'
import { ArrowUpRight } from '../../components/ui/icons'
import { SectionBar } from '../../components/ui/SectionBar'

export function NewsSection() {
  return (
    <section className="reveal flex flex-col px-4 md:px-8 pb-8 pt-0">
      <SectionBar
        label="KABAR TERBARU"
        className="mb-2"
        meta={
          <Link to="/berita" className="text-[11px] text-muted hover:text-heading">
            Semua berita ↗
          </Link>
        }
      />
      {news.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-between border-b border-border py-[22px]"
        >
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] tracking-[0.8px] text-muted">
              {item.date}
            </span>
            <span className="text-[16px] font-medium tracking-[-0.4px] text-heading md:text-[20px]">
              {item.title}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] tracking-[0.9px] text-muted">
              {item.tag}
            </span>
            <ArrowUpRight size={15} stroke="var(--color-heading)" />
          </div>
        </div>
      ))}
    </section>
  )
}
