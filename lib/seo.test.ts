import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  pageHead,
  siteGraph,
} from './seo'

const ROUTES = ['/', '/tentang', '/komisi', '/berita', '/kegiatan', '/aduan']

describe('absoluteUrl', () => {
  it('mempertahankan trailing slash hanya untuk beranda', () => {
    expect(absoluteUrl('/')).toBe(`${SITE_URL}/`)
    expect(absoluteUrl('/komisi')).toBe(`${SITE_URL}/komisi`)
    expect(absoluteUrl('/komisi/')).toBe(`${SITE_URL}/komisi`)
    expect(absoluteUrl('tentang')).toBe(`${SITE_URL}/tentang`)
  })
})

describe('pageHead', () => {
  it('menghasilkan title, deskripsi, dan canonical absolut', () => {
    const head = pageHead({
      title: 'Komisi DPM FILKOM UNIDA',
      description: 'Deskripsi komisi.',
      path: '/komisi',
      breadcrumb: 'Komisi',
    })

    type Tag = { title?: string; name?: string; property?: string; content?: string; rel?: string; href?: string }
    const meta = head.meta as Tag[]
    const links = head.links as Tag[]

    expect(meta).toContainEqual({ title: 'Komisi DPM FILKOM UNIDA' })
    expect(meta).toContainEqual({ name: 'description', content: 'Deskripsi komisi.' })
    expect(meta).toContainEqual({
      property: 'og:url',
      content: `${SITE_URL}/komisi`,
    })
    expect(meta).toContainEqual({ property: 'og:locale', content: 'id_ID' })
    expect(meta).toContainEqual({ property: 'og:image', content: DEFAULT_OG_IMAGE })
    expect(links).toContainEqual({ rel: 'canonical', href: `${SITE_URL}/komisi` })
  })

  it('menyisipkan JSON-LD WebPage dan BreadcrumbList yang valid', () => {
    const head = pageHead({
      title: 'Profil DPM FILKOM UNIDA',
      description: 'Profil organisasi.',
      path: '/tentang',
      breadcrumb: 'Profil',
    })
    const scripts = head.scripts as Array<{ type: string; children: string }>

    expect(scripts).toHaveLength(1)
    expect(scripts[0].type).toBe('application/ld+json')

    const json = JSON.parse(scripts[0].children)
    expect(json['@context']).toBe('https://schema.org')
    const types = json['@graph'].map((node: { '@type': string }) => node['@type'])
    expect(types).toEqual(['WebPage', 'BreadcrumbList'])
    expect(json['@graph'][1].itemListElement).toHaveLength(2)
    expect(json['@graph'][1].itemListElement[0].item).toBe(`${SITE_URL}/`)
  })

  it('tidak menambahkan breadcrumb untuk beranda', () => {
    const head = pageHead({
      title: 'DPM FILKOM UNIDA',
      description: 'Beranda.',
      path: '/',
    })
    const json = JSON.parse(
      (head.scripts as Array<{ children: string }>)[0].children,
    )
    const types = json['@graph'].map((node: { '@type': string }) => node['@type'])
    expect(types).toEqual(['WebPage'])
  })
})

describe('siteGraph', () => {
  it('mendeskripsikan organisasi dan website dengan @id yang terhubung', () => {
    const graph = siteGraph()
    const [org, site] = graph['@graph'] as Array<Record<string, any>>

    expect(org['@type']).toBe('Organization')
    expect(org.name).toContain('Dewan Perwakilan Mahasiswa')
    expect(org.logo.url).toMatch(/^https:\/\//)
    expect(site['@type']).toBe('WebSite')
    expect(site.publisher['@id']).toBe(org['@id'])
    expect(site.url).toBe(`${SITE_URL}/`)
  })
})

describe('file SEO publik', () => {
  it('sitemap hanya memuat rute publik dengan URL absolut', () => {
    const xml = readFileSync(resolve('public/sitemap.xml'), 'utf8')
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

    expect(locs).toHaveLength(ROUTES.length)
    expect(new Set(locs).size).toBe(locs.length)
    for (const loc of locs) {
      expect(loc.startsWith(`${SITE_URL}/`)).toBe(true)
    }
    expect(locs).toEqual(ROUTES.map((r) => absoluteUrl(r)))
  })

  it('robots.txt mengizinkan crawl dan menyebut sitemap', () => {
    const txt = readFileSync(resolve('public/robots.txt'), 'utf8')
    expect(txt).toContain('Allow: /')
    expect(txt).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)
    expect(txt).not.toContain('Disallow: /')
  })
})
