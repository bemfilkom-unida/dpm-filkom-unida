import { createFileRoute } from '@tanstack/react-router'
import ActivitiesPage from '../features/activities/ActivitiesPage'
import { pageHead } from '../lib/seo'

export const Route = createFileRoute('/kegiatan')({
  component: ActivitiesPage,
  head: () =>
    pageHead({
      title: 'Kegiatan DPM FILKOM UNIDA | MUKER dan MUBES 2026/2027',
      description:
        'Agenda kegiatan DPM FILKOM UNIDA periode 2026/2027: Musyawarah Kerja (MUKER) dan Musyawarah Besar (MUBES) sebagai kegiatan utama perwakilan mahasiswa FILKOM UNIDA.',
      path: '/kegiatan',
      breadcrumb: 'Kegiatan',
    }),
})
