import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
  base: '/http://localhost:5173/timicares_assignmennt2_web_scripting-2.git//', // This should match your GitHub repository name.
  plugins: [react()],
});

