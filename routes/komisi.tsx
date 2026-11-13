import { createFileRoute } from '@tanstack/react-router'
import CommissionsPage from '../features/commissions/CommissionsPage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/komisi')({
  component: CommissionsPage,
  head: () =>
    pageHead({
      title: 'Komisi DPM FILKOM UNIDA | Pengawasan, Aspirasi dan Legislasi',
      description:
        'Tiga komisi DPM FILKOM UNIDA periode 2026/2027: Komisi I Pengawasan, Komisi II Aspirasi dan Legislasi, serta Komisi III Humas dan Kominfo Fakultas Ilmu Komputer Universitas Djuanda.',
      path: '/komisi',
      breadcrumb: 'Komisi',
    }),
})
