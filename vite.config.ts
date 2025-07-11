import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true })
  ],
  server: {
    // ブラウザを自動で開く
    open: true,
  },
})