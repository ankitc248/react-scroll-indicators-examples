# React Scroll Indicators Examples

A demo app showcasing [react-scroll-indicators](https://www.npmjs.com/package/react-scroll-indicators) ([GitHub](https://github.com/ankitc248/react-scroll-indicators)) — scrollable overflow containers with hover-activated gradient indicators. Built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

**Why you see a 404 for `/src/main.tsx`:** GitHub Pages was serving your **source** files. The browser requested `/src/main.tsx` (from your root `index.html`), but that path doesn’t exist in the built site. You must deploy the **built** output (the `dist` folder), not the repo root.

This repo includes a workflow that builds and deploys for you:

1. In **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main` (or `master`). The workflow runs `npm run build` and deploys the `dist` folder.
3. Your site will be at `https://ankitc248.github.io/react-scroll-indicators-examples/`.

If you deploy manually: run `npm run build` and upload only the **contents** of `dist` (e.g. to a `gh-pages` branch or via the [gh-pages](https://www.npmjs.com/package/gh-pages) package). In `vite.config.ts`, keep `repoName` matching your repo name so asset paths use the correct base.

## Examples in this app

| # | Example | Description |
|---|---------|-------------|
| 1 | Horizontal overflow | Default left/right indicators on a horizontal row |
| 2 | Vertical overflow | Top/bottom indicators with `verticalScrollIndicators` |
| 3 | Horizontal and vertical | Grid that scrolls both ways |
| 4 | Custom scroll speed and indicators | `scrollSpeed`, `scrollDistance`, custom indicator classes |
| 5 | Custom + both directions (scrollbars hidden) | Like #4 with vertical indicators and hidden scrollbars |

Each example includes a live demo and copy-pasteable code with imports. Use the **Copy** button on a code block to grab the snippet.

## Tech stack

- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) 6
- [react-scroll-indicators](https://www.npmjs.com/package/react-scroll-indicators) — `OverflowContainer` component

## License

MIT
