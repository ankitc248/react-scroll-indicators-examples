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

1. In `vite.config.ts`, set `repoName` to your repository name (the path in the URL, e.g. `https://user.github.io/react-scroll-indicators-examples/` → `react-scroll-indicators-examples`).
2. Build: `npm run build`
3. Deploy the `dist` folder (e.g. with the [gh-pages](https://www.npmjs.com/package/gh-pages) package or GitHub Actions). If using the default **GitHub Pages** source, push the contents of `dist` to a branch named `gh-pages`, or use a workflow that builds and deploys from `dist`.

Without the correct `base` in Vite, the app will load as a blank page on GitHub Pages because assets are requested from the wrong path.

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
