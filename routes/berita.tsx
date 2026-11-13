import { createFileRoute } from '@tanstack/react-router'
import NewsPage from '../features/news/NewsPage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/berita')({
  component: NewsPage,
  head: () =>
    pageHead({
      title: 'Berita DPM FILKOM UNIDA | Informasi dan Pengumuman 2026/2027',
      description:
        'Informasi, pengumuman, dan kabar terbaru dari Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda Bogor periode 2026/2027.',
      path: '/berita',
      breadcrumb: 'Berita',
    }),
})
