import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sourcier.thierrypoitras.com',
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  build: {
    assets: 'assets',
  },
});
