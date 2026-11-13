/**
 * SEO helpers: one source of truth for absolute URLs, per-page metadata,
 * canonical links, and JSON-LD. Used by the route `head()` functions so the
 * tags are rendered in the SSR HTML, not injected client-side.
 */

export const SITE_URL = 'https://dmp-filkom-unida.vercel.app'
export const SITE_NAME = 'DPM FILKOM UNIDA'
export const ORG_NAME =
  'Dewan Perwakilan Mahasiswa Fakultas Ilmu Komputer Universitas Djuanda'
export const PERIOD = '2026/2027'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-img-dpm.webp`
export const ORG_LOGO = `${SITE_URL}/logo-dpm.webp`
/** Ukuran asli public/og-img-dpm.webp. */
export const OG_IMAGE_WIDTH = 1839
export const OG_IMAGE_HEIGHT = 845

export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

/** Build an absolute URL for a route path; the homepage keeps its trailing slash. */
export function absoluteUrl(path = '/') {
  if (path === '/' || path === '') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/+$/, '')
}

/** Organization + WebSite graph, rendered once in the root document. */
export function siteGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: ORG_NAME,
        alternateName: [SITE_NAME, 'DPM FILKOM', 'Parlemen Aksara'],
        url: `${SITE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          url: ORG_LOGO,
        },
        description: `Organisasi perwakilan mahasiswa Fakultas Ilmu Komputer Universitas Djuanda, Bogor, untuk periode kepengurusan ${PERIOD} (Parlemen Aksara).`,
        parentOrganization: {
          '@type': 'CollegeOrUniversity',
          name: 'Universitas Djuanda',
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'id-ID',
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  }
}

type PageHeadOptions = {
  title: string
  description: string
  /** Route path, e.g. `/komisi`. */
  path: string
  /** Label for this page in the breadcrumb. Omit on the homepage. */
  breadcrumb?: string
  type?: 'website' | 'article'
}

/** Metadata for one route: title, description, canonical, social tags, JSON-LD. */
export function pageHead({
  title,
  description,
  path,
  breadcrumb,
  type = 'website',
}: PageHeadOptions) {
  const url = absoluteUrl(path)
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'id-ID',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORGANIZATION_ID },
    },
  ]

  if (breadcrumb && path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: breadcrumb,
          item: url,
        },
      ],
    })
  }

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:locale', content: 'id_ID' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: DEFAULT_OG_IMAGE },
      { property: 'og:image:type', content: 'image/webp' },
      { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
      { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
      { property: 'og:image:alt', content: `${SITE_NAME} — Parlemen Aksara ${PERIOD}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      },
    ],
  }
}
