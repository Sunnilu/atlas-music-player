// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8', // 👈 Use the V8 provider
      reportsDirectory: './coverage', // 👈 Output folder
      reporter: ['text', 'html'], // 👈 CLI + UI
      include: ['src/**/*.{ts,tsx}'], // 👈 Source files to measure
    },
  },
});
