import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  assetsInclude: ["**/*.docx"],
  base: "./",
  plugins: [
    react(),
    tailwindcss()
  ],
})
