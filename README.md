# TEJAS Platform

**Talent Evaluation & Joint Assessment Series**

Independent frontend for [tejas.dhe.org.in](https://tejas.dhe.org.in) — India's National Talent Development Ecosystem by the Department of Holistic Education (DHE).

## Architecture

TEJAS is engineered as a **standalone product**, separate from the main `dhe.org.in` website. This repository must never import code from the DHE main site.

```
tejas/
├── app/              # Next.js App Router pages
├── components/       # Shared UI components
├── features/         # Feature-specific sections
├── design-system/    # Design tokens
├── data/             # Typed mock data (Phase 0)
├── config/           # SEO, navigation
├── hooks/
├── lib/
└── types/
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- shadcn/ui-style components

## Development

```bash
cd tejas
npm install
npm run dev
```

Runs on [http://localhost:3001](http://localhost:3001) (port 3001 to avoid conflict with DHE main site).

## Build

```bash
npm run build
npm start
```

## Deployment

Deploy as a **separate Vercel project** (`dhe-projects/tejas`) with **Root Directory: `tejas`**.

### Production deploy (monorepo)

From the repository root (not inside `tejas/`):

```bash
# Windows PowerShell
$env:VERCEL_ORG_ID="team_0PYXWQMwAV9fPWOTuxk54H9K"
$env:VERCEL_PROJECT_ID="prj_C8HQBcOrjDqRBN4PL8mOthE8HOM4"
npx vercel deploy --prod --yes
```

Or from `tejas/` before root directory was set on Vercel:

```bash
cd tejas
npx vercel deploy --prod --yes
```

**Live:** https://tejas.dhe.org.in

### Git auto-deploy

Connect the same GitHub repo as the main DHE site (`dheWeb/dhe-orgin.`) in [Vercel → tejas → Settings → Git](https://vercel.com/dhe-projects/tejas/settings/git). Root Directory must be **`tejas`** (already configured). Pushes to `main` that touch `tejas/**` will then deploy automatically.

## Phase 0 Scope

- ✅ 16 pages with mock data
- ✅ Design system & reusable components
- ✅ Responsive, accessible UI
- ✅ SEO metadata
- ❌ No backend, auth, payments, or APIs

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About TEJAS |
| `/olympiads` | Olympiads landing |
| `/olympiads/[slug]` | Olympiad detail |
| `/editions` | Current editions |
| `/editions/previous` | Previous editions |
| `/prepare` | Prepare hub |
| `/prepare/mock-tests` | Mock tests |
| `/resources` | Resources hub |
| `/schools` | Schools |
| `/rankings` | Rankings |
| `/hall-of-fame` | Hall of Fame |
| `/scholarships` | Scholarships |
| `/faq` | FAQ |
| `/contact` | Contact |

## License

© Department of Holistic Education, India
