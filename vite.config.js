import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  port:{
    server:3000,
  },
resolve:{
  alias:{
    '@':path.resolve(__dirname,'./src'),
  },
},
})
