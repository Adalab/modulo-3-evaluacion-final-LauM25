import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "modulo-3-evaluacion-final-LauM25",
  server: {
    open: true,
    watch: { usePolling: true },
  }
})
