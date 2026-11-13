import { Link } from '@tanstack/react-router'
import { Parallax } from '../../components/ScrollEffects'
import { DiaTextReveal } from '../../components/ui/dia-text-reveal'
import { ArrowUpRight } from '../../components/ui/icons'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 px-4 pt-[46px] pb-8 md:px-10">
      <Parallax speed={0.08} className="flex w-full flex-col items-center gap-6">
        <h1 className="flex max-w-[860px] flex-col items-center gap-6 text-center text-[clamp(24px,8vw,40px)] font-medium leading-[1.04] tracking-[-1.6px] md:text-[68px] md:tracking-[-2.6px] text-[#164653]">
          <DiaTextReveal
            text="Parlemen Aksara 2026/2027."
            colors={['#E78E3F', '#f7d3a8', '#E78E3F']}
            textColor="#164653"
            duration={1.8}
            delay={0.2}
            className="font-mono text-[10px] uppercase tracking-[2.4px] md:text-[11px]"
          />
          <span className="hero-line block">
            <span className="hero-line-inner block whitespace-nowrap">
              Merangkai Aspirasi
            </span>
          </span>
          <span className="hero-line block">
            <span className="hero-line-inner hero-line-delay block whitespace-nowrap">
              Mengawal Demokrasi
            </span>
          </span>
        </h1>
        <p className="hero-sub max-w-[600px] text-center text-[15px] leading-[1.55] text-[#4a5a60] md:text-[16px]">
          Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda.
        </p>
        <div className="flex items-center gap-[10px]">
          <Link
            to="/aduan"
            className="flex items-center gap-2 rounded-full bg-[#E78E3F] px-5 py-3 text-[13px] font-medium text-[#0B2E36]"
          >
            Sampaikan Aspirasi
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </Parallax>
    </section>
  )
}
