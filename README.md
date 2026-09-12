# TikTok Shop Solutions

Marketing site for TikTok Shop Solutions, a TikTok Shop growth and management agency. Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app` — routes, layout, global styles
- `src/components/sections` — one file per homepage section
- `src/components/ui` — shared primitives (buttons, reveal animations, mockup frames)
- `src/lib/assets.ts` — reads proof screenshots/videos from `public/images/<category>` and `public/videos/<category>` at render time
- `src/data` — structured copy sourced from the agency's real proof screenshots (violation cases, ads results, case studies)
- `asset-manifest.json` — record of how the original client-provided screenshots map to organized files under `public/`

## Production build

```bash
npm run build
npm run start
```
