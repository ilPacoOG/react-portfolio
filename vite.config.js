import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use "/" for root deployment. Adjust if deploying to a subdirectory.
});
