import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Im Production-Build alle console-Aufrufe entfernen, damit keine
  // Nutzerdaten oder Tokens in der Browser-Konsole landen.
  esbuild: command === 'build' ? { drop: ['console', 'debugger'] } : {},
}))
