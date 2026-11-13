<p align="center">
  <img alt="DPM FILKOM UNIDA" src="public/logo-dpm.webp" width="110" height="auto" />
</p>

<h1 align="center">DPM FILKOM UNIDA</h1>

<p align="center">
  <strong>Student Representative Council</strong> · Faculty of Computer Science, Universitas Djuanda<br />
  Student profile site and aspiration channel — monochrome editorial with an orange accent.
</p>

<p align="center">
  <a href="https://github.com/bemfilkom-unida/dpm-filkom-unida">Repository</a> ·
  <a href="https://github.com/bemfilkom-unida/dpm-filkom-unida/issues">Issues</a>
</p>

---

The site covers the council's profile, commissions, activity agenda, news, and the form students use to submit aspirations. It is a full-stack app built with **TanStack Start** (SSR), **React 19**, **Tailwind CSS v4**, and **Motion** animations, bundled into a self-contained Node server through **Nitro**.

## Highlights

- **Six pages** — Home, About, Program (commissions), News, Activities, and Aspirations
- **SSR + per-page SEO** — title, canonical, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- **Fully responsive** — mobile navigation, adaptive grids, 44px tap targets
- **Accessible** — skip link, labelled landmarks, and `prefers-reduced-motion` support
- **Tested** — Vitest + Testing Library

## Tech Stack

| Layer | Stack |
|---|---|
| Framework | TanStack Start + TanStack Router |
| UI | React 19, TypeScript, Tailwind CSS v4, Motion |
| Build | Vite 8, Nitro |
| Test | Vitest, Testing Library (jsdom) |
| Fonts | Inter, Geist Mono |

## Getting Started

```bash
bun install
bun run dev
```

Open <http://localhost:3000>.

## Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Dev server on port 3000 |
| `bun run build` | Production build into `.output/` |
| `bun run start` | Run the built server |
| `bun run test` | Unit tests (Vitest) |
| `bun run typecheck` | Type check |
| `bun run verify` | typecheck + test + build |

## Structure

```text
src/
├── routes/        # index, tentang, komisi, berita, kegiatan, aduan
├── components/    # Nav, SiteFooter, ScrollEffects, ui/
├── lib/           # seo.ts (metadata & JSON-LD), utils.ts
├── test/          # Vitest setup
└── styles.css     # Design tokens + scroll effects
```

## Environment

| Variable | Purpose |
|---|---|
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console token (optional) |

## License

MIT © BEM FILKOM UNIDA
