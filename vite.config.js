import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Site kök dizinde (ör. https://alanadi.com/) yayınlanacaksa '/' bırakın.
  // Alt dizinde (ör. https://kullanici.github.io/portfolio/) yayınlanacaksa './' yapın.
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
