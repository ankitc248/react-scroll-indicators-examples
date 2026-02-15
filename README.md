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

Build output is set to the `docs` folder so you can deploy from a branch:

1. Run **`npm run build`** (writes to `docs/`).
2. Commit and push the **`docs`** folder (it is not in `.gitignore`).
3. In the repo **Settings → Pages**, set **Source** to **Deploy from a branch**, branch **main** (or **master**), folder **/docs**.
4. Save. The site will be at `https://ankitc248.github.io/react-scroll-indicators-examples/`.

After any change, run `npm run build` again and commit the updated `docs` folder.

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
