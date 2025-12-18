# Developer Dashboard

Production-ready developer dashboard built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui (Radix primitives)
- **Forms**: React Hook Form + Zod
- **State Management**: TanStack Query
- **Charts**: Recharts
- **Backend**: Cloudflare Workers + D1 + KV + R2
- **Deployment**: SSE-based progress streaming

## Design System

### Spacing Scale
Single spacing scale: `4px / 8px / 12px / 16px / 24px / 32px / 48px`

### Border Radius
- Controls: `8px`
- Cards/Modals: `12px`

### Color Palette
- **Background**: `#0B1020`
- **Surface 1**: `#101A33`
- **Surface 2**: `#0F1730`
- **Primary**: `#22D3EE` (cyan-400) - Used ONLY for key actions, links, active states, and highlights
- **Secondary**: `#A78BFA` (purple-400) - Used sparingly
- **Text**: `#E7ECF5`
- **Muted**: `#AAB3C5`

All colors meet WCAG AA contrast requirements.

## Routes

- `/` - Redirects to `/overview`
- `/overview` - Desktop dashboard with metrics, build history, and right rail
- `/discover` - Tablet-style app discovery with bottom navigation
- `/overview/deploy/new` - Route modal for deployment with live SSE progress

## Features

- **App Shell**: Persistent sidebar navigation with active state indicators
- **Right Rail**: Quick actions and active session monitoring
- **Build History**: Tabbed interface with sortable data table
- **Deploy Modal**: Intercepting route with stepper UI and real-time SSE progress updates
- **Responsive**: Mobile-first with bottom navigation on small screens
- **Dark Theme**: Consistent dark mode with subtle borders and soft shadows

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Cloudflare Workers Setup

```bash
cd worker

# Install wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Create D1 database
wrangler d1 create developer-dashboard

# Run migrations
wrangler d1 execute developer-dashboard --file=schema.sql

# Deploy worker
wrangler deploy
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── overview/          # Overview page with modal
│   ├── discover/          # Discovery page
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Layout components (Sidebar, Header, RightRail)
│   ├── deploy/            # Deployment components (Stepper, Progress)
│   └── ui/                # shadcn/ui components
├── lib/                   # Utilities
├── worker/                # Cloudflare Workers backend
│   ├── src/              # Worker source code
│   ├── schema.sql        # D1 database schema
│   └── wrangler.toml     # Worker configuration
└── public/               # Static assets
```

## API Endpoints

- `POST /api/deployments` - Create new deployment
- `GET /api/deployments/:id` - Get deployment status
- `GET /api/deployments/:id/stream` - SSE progress stream
- `GET /api/projects/:id/builds` - Get project builds
- `GET /api/projects/:id/sessions` - Get active sessions
- `GET /api/projects/:id/metrics` - Get metrics data

## License

ISC
