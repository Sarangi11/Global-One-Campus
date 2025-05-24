import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional: customize if needed
    open: true, // open browser on dev start
  },
  build: {
    outDir: 'dist', // default output folder
  },
});
