# Gold Coast Furniture Assembly

Production landing page for a furniture and flat-pack assembly service in Burleigh Heads and surrounding Gold Coast suburbs.

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Static export
- Lucide React

## Run locally

```powershell
pnpm install
pnpm check
pnpm dev
```

Open http://localhost:3000.

## Production build

```powershell
pnpm check
pnpm build
pnpm start
```

The static deployment output is generated in `dist/`.

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for production. Marketing IDs are optional and intentionally empty by default.

## Assets

The hero images are the supplied project images. Supporting editorial images are crops derived from the supplied horizontal hero image. No external or fabricated customer, review, address, certification, or pricing claims are included.

## GitHub

From PowerShell, inside this folder:

```powershell
git init
git add .
git commit -m "Initial production landing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
