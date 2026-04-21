# Maison YS

A luxury fragrance brand website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4
- **Routing:** Wouter
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives + Lucide React icons
- **Forms:** React Hook Form + Zod
- **Data Fetching:** TanStack React Query
- **Package Manager:** pnpm (monorepo with pnpm workspaces)

## Project Structure

```
artifacts/maison-ys/   # Main React frontend application
lib/                   # Shared libraries (api-spec, api-client-react, api-zod, db)
attached_assets/       # High-resolution images and media assets
scripts/               # Utility scripts
```

## Development

```bash
pnpm install
PORT=5000 pnpm --filter @workspace/maison-ys run dev
```

The app runs on port 5000 (required for Replit webview).

## Products (9 fragrances)

| Name | Collection | Mood |
|------|-----------|------|
| Moula | Noire | Chic / Chaleureux |
| Kirke | Noire | Fruité / Accrocheur |
| Chronic R | Noire | Frais / Quotidien |
| Rêve | Pierre | Doux / Apaisant |
| Aicha | Pierre | Puissant / Signature |
| Baccarat | Pierre | Élégant / Facile |
| Coco Vanille | Dorée | Gourmand / Cocooning |
| Sucre | Dorée | Sucré / Plaisir Immédiat |
| Rose Vanille | Dorée | Floral / Gourmand |

## Deployment

### Replit Static (current)
- **Build:** `pnpm --filter @workspace/maison-ys run build`
- **Output:** `artifacts/maison-ys/dist`

### GitHub + Vercel
1. Push the **full monorepo** to GitHub (the `@assets` alias resolves `../../attached_assets` at build time — the entire repo structure must be present)
2. In Vercel, create a new project from the GitHub repo with:
   - **Root Directory:** `artifacts/maison-ys`
   - **Framework Preset:** Vite
   - **Build Command:** `cd ../.. && pnpm install && pnpm --filter @workspace/maison-ys run build`
   - **Output Directory:** `dist`
3. `artifacts/maison-ys/vercel.json` handles SPA routing (rewrites all paths to `index.html`)

### SPA Routing
`artifacts/maison-ys/vercel.json` rewrites all non-asset paths to `/index.html` so deep links (`/product/Baccarat`, `/collection`, etc.) work correctly on Vercel.
