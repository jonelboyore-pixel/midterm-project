
# Midterm Project — Portfolio

This is a personal portfolio built with Vite, React, TypeScript, Tailwind CSS and Framer Motion.

Live repository: https://github.com/jonelboyore-pixel/midterm-project

## Quick status
- Local path: `D:\JonelPort\portfolio`
- Remote: `https://github.com/jonelboyore-pixel/midterm-project`
- Build output: `dist/`
- Vercel config: `vercel.json` (outputDirectory = `dist`)
- Type declarations for images: `src/types/images.d.ts`

## Local development
1. Install dependencies:

```powershell
Set-Location -Path "D:\JonelPort\portfolio"
npm install
```

2. Start dev server:

```powershell
npm run dev
```

Open http://localhost:5173 (or the URL printed by Vite).

## Build (production)

```powershell
npm run build
```

Built files are produced in `dist/`.

To preview the built site locally you can serve `dist` with a static server, for example:

```powershell
npx serve dist
```

## Deploy to Vercel (recommended)

You can deploy via the Vercel web UI or CLI.

Web UI (recommended):
1. Sign in at https://vercel.com with GitHub.
2. Click "Add New" → "Project" and select `jonelboyore-pixel/midterm-project`.
3. Vercel should auto-detect a Vite project. Ensure build command is `npm run build` and output directory is `dist`.
4. Deploy.

CLI (optional):

```powershell
npm i -g vercel
Set-Location -Path "D:\JonelPort\portfolio"
vercel login
vercel --prod
```

The repo includes `vercel.json` which tells Vercel to serve the `dist` directory.

## Notes & troubleshooting

- TypeScript image import errors
	- If VS Code shows: "Cannot find module '../Image/ProfileF.png' or its corresponding type declarations", ensure `src/types/images.d.ts` exists (this repo includes it). Restart the TS server in VS Code (Command Palette → "TypeScript: Restart TS Server") or reload the window.

- Large profile image
	- The profile image currently bundles to ~900 KB. Consider optimizing (resize/compress) or convert to WebP to speed up load times and reduce bundle size.
	- Tools: Squoosh.app (GUI), `sharp` (Node script), or `imagemin`.

- GitHub Pages workflow
	- This repo previously included a GitHub Pages workflow (`.github/workflows/deploy.yml`). If you prefer Vercel, you can ignore or remove that workflow.

## Useful commands

```powershell
# show git remote
Set-Location -Path "D:\JonelPort\portfolio"
git remote -v

# create a production build
npm run build

# commit + push (example)
git add .
git commit -m "chore: add README and docs"
git push
```

## Next improvements (suggested)
- Optimize images and provide responsive `srcset` / WebP fallbacks.
- Add a contact backend or Netlify Forms if you want a working contact form.
- Add unit tests and a small CI check (lint/build) in GitHub Actions.

---
If you want, I can optimize the profile image now and replace it automatically, or walk you through connecting to Vercel step-by-step via the web UI. Which would you like?
