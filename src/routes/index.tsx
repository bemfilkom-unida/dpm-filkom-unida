import { createFileRoute } from '@tanstack/react-router'
import HomePage from '../features/home/HomePage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () =>
    pageHead({
      title: 'DPM FILKOM UNIDA | Dewan Perwakilan Mahasiswa 2026/2027',
      description:
        'Website resmi Dewan Perwakilan Mahasiswa (DPM) Fakultas Ilmu Komputer Universitas Djuanda Bogor periode 2026/2027. Kenali Parlemen Aksara, struktur organisasi, komisi, aspirasi, dan kegiatan DPM FILKOM UNIDA.',
      path: '/',
    }),
})
