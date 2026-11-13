import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from '../../components/ui/icons'

export function CtaSection() {
  return (
    <section className="reveal px-4 md:px-8 pb-8 pt-0">
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#164653] px-12 py-[72px] text-center">
        <span className="font-mono text-[10px] tracking-[1.2px] text-[#a0b0b6]">
          ADUAN MAHASISWA
        </span>
        <h2 className="max-w-[760px] text-[32px] font-medium leading-[1.1] tracking-[-1.2px] text-white md:text-[52px] md:tracking-[-1.8px]">
          Sampaikan aspirasi Anda.
        </h2>
        <p className="max-w-[560px] text-[14px] leading-[1.6] text-[#a0b0b6]">
          Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda
        </p>
        <Link
          to="/aduan"
          className="flex items-center gap-2 rounded-full bg-[#E78E3F] px-[22px] py-[13px] text-[13px] font-medium text-[#0B2E36]"
        >
          Buat Surat Aduan
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  )
}
