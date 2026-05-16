import path from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** GitHub Pages: https://chenmia688-cell.github.io/Miahello.github.io/ */
const pagesBase = '/Miahello.github.io/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
