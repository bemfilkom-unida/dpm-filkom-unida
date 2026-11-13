<p align="center">
  <img alt="DPM FILKOM UNIDA" src="public/logo-dpm.webp" width="110" height="auto" />
</p>

<h1 align="center">DPM FILKOM UNIDA</h1>

<p align="center">
  <strong>Dewan Perwakilan Mahasiswa</strong> · Fakultas Ilmu Komputer, Universitas Djuanda<br />
  Situs profil dan kanal aspirasi mahasiswa — editorial monokrom dengan aksen oranye.
</p>

<p align="center">
  <a href="https://github.com/bemfilkom-unida/dpm-filkom-unida">Repository</a> ·
  <a href="https://github.com/bemfilkom-unida/dpm-filkom-unida/issues">Issues</a>
</p>

---

Situs ini memuat profil DPM, daftar komisi, agenda kegiatan, berita, dan formulir penyampaian aspirasi mahasiswa. Dibangun sebagai aplikasi full-stack dengan **TanStack Start** (SSR), **React 19**, **Tailwind CSS v4**, dan animasi **Motion**, lalu di-build menjadi server Node mandiri lewat **Nitro**.

## Highlights

- **Enam halaman** — Beranda, Tentang, Program (komisi), Berita, Kegiatan, dan Aduan
- **SSR + SEO per halaman** — title, canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- **Responsif penuh** — navigasi mobile, grid adaptif, tap target 44px
- **Aksesibel** — skip link, landmark berlabel, dan `prefers-reduced-motion`
- **Test** — Vitest + Testing Library

## Tech Stack

| Layer | Stack |
|---|---|
| Framework | TanStack Start + TanStack Router |
| UI | React 19, TypeScript, Tailwind CSS v4, Motion |
| Build | Vite 8, Nitro |
| Test | Vitest, Testing Library (jsdom) |
| Font | Inter, Geist Mono |

## Menjalankan Lokal

```bash
bun install
bun run dev
```

Buka <http://localhost:3000>.

## Scripts

| Command | Fungsi |
|---|---|
| `bun run dev` | Dev server di port 3000 |
| `bun run build` | Build produksi ke `.output/` |
| `bun run start` | Jalankan hasil build |
| `bun run test` | Unit test (Vitest) |
| `bun run typecheck` | Cek tipe |
| `bun run verify` | typecheck + test + build |

## Struktur

```text
src/
├── routes/        # index, tentang, komisi, berita, kegiatan, aduan
├── components/    # Nav, SiteFooter, ScrollEffects, ui/
├── lib/           # seo.ts (metadata & JSON-LD), utils.ts
├── test/          # Setup Vitest
└── styles.css     # Token design + efek scroll
```

## Environment

| Variabel | Fungsi |
|---|---|
| `VITE_GOOGLE_SITE_VERIFICATION` | Token Google Search Console (opsional) |

## Lisensi

MIT © BEM FILKOM UNIDA
