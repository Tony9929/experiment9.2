import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/experiment9.2/',   // REQUIRED for GitHub Pages
  plugins: [react()],
})
