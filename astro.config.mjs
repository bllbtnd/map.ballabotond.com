// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://map.ballabotond.com',
  integrations: [
    tailwind(),
  ],
  server: {
    port: 4323,
    host: true
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild'
    }
  }
});
