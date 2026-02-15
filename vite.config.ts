import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/guide/static-deploy.html#github-pages
// Repo name = path on GitHub Pages. Change if your repo name is different.
const repoName = 'react-scroll-indicators-examples'

export default defineConfig({
  base: `/${repoName}/`,
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
