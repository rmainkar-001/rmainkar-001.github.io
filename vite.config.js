import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For a project repo named "portfolio", change to base: '/portfolio/'.
  base: '/',
});
