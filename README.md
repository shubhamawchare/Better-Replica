# Better.com Replica – Next.js (App Router)

A 4-page Next.js app replicating the design and basic functionality of:
- Home (`/`)
- About Us (`/about-us`)
- Mortgage Calculator (`/mortgage-calculator`)
- Start (`/start`)

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Tech
- Next.js 14 (App Router)
- React 18
- SCSS Modules
- Styled-Components (optional; enabled in compiler)
- Fully responsive layout
- Mortgage calculator with live inputs and URL presets (e.g., `?homePrice=300000&downPct=20&rate=5&term=30&taxes=265&insurance=100`).

## Pages
- Home (`/`): Modern hero with CTAs and feature highlights.
- About Us (`/about-us`): Company values and KPIs.
- Mortgage Calculator (`/mortgage-calculator`): Interactive calculator that accepts query params.
- Start (`/start`): Simple goal + contact intake.

## Development
- Lint: `npm run lint`
- Type-check: TypeScript enabled with strict settings.

## Deploy
- **Vercel**:
  1. Push to GitHub
  2. Import repo on Vercel
  3. Framework preset: Next.js
  4. Build command: `next build` | Output: `.next`
- **Netlify**:
  - Build: `npm run build`
  - Publish directory: `.next` (use Next on Netlify adapter) or use Netlify Next.js build plugin.

## Notes
- No Copyrighted assets are included. Colors and layout are inspired by better.com.

