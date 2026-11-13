import { ProgramCard } from './ProgramCard'

export function FacultyCard() {
  return (
    <ProgramCard label="FILKOM" tone="dark" className="top-[64px] z-[5] md:col-span-3">
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <img
          src="/anuan.webp"
          alt="Suasana Fakultas Ilmu Komputer Universitas Djuanda"
          width={1280}
          height={724}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </ProgramCard>
  )
}
