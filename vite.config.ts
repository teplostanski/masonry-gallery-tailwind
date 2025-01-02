import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const imageOptimizerConfig = {
  jpg: {
    quality: 80,
    progressive: true
  },
  jpeg: {
    quality: 80,
    progressive: true
  },
  webp: {
    quality: 80,
    lossless: false
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(imageOptimizerConfig)
  ],
})
