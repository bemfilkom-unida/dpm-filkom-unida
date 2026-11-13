import { createFileRoute } from '@tanstack/react-router'
import AboutPage from '../features/about/AboutPage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/tentang')({
  component: AboutPage,
  head: () =>
    pageHead({
      title: 'Profil DPM FILKOM UNIDA | Parlemen Aksara 2026/2027',
      description:
        'Profil Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda Bogor: peran legislatif dan perwakilan mahasiswa pada periode 2026/2027, serta tiga komisi DPM FILKOM UNIDA.',
      path: '/tentang',
      breadcrumb: 'Profil',
    }),
})
