import { createFileRoute } from '@tanstack/react-router'
import AspirationsPage from '../features/aspirations/AspirationsPage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/aduan')({
  component: AspirationsPage,
  head: () =>
    pageHead({
      title: 'Aduan Mahasiswa | DPM FILKOM UNIDA 2026/2027',
      description:
        'Sampaikan aspirasi, aduan, atau masukan kepada DPM FILKOM UNIDA. Surat aduan mahasiswa Fakultas Ilmu Komputer Universitas Djuanda diteruskan ke komisi terkait.',
      path: '/aduan',
      breadcrumb: 'Aduan',
    }),
})
