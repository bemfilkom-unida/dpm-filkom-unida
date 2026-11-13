import { ProgramCard } from './ProgramCard'

const photos = [
  { src: '/komisi-1.webp', alt: 'Kegiatan komisi DPM FILKOM UNIDA' },
  { src: '/komisi-2.webp', alt: 'Musyawarah komisi DPM FILKOM UNIDA' },
  { src: '/komisi-3.webp', alt: 'Dokumentasi kegiatan DPM FILKOM UNIDA' },
]

export function GalleryCard() {
  return (
    <ProgramCard label="GALERI" className="top-[52px] z-[4] md:col-span-3">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col gap-[2px]">
          <div className="flex flex-1 gap-[2px]">
            {photos.slice(0, 2).map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-1/2 flex-1 object-cover"
              />
            ))}
          </div>
        </div>
        <img
          src={photos[2].src}
          alt={photos[2].alt}
          width={720}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-[33%] object-cover"
        />
      </div>
    </ProgramCard>
  )
}
