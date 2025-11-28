import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://chironapp.github.io',
  base: '/chiron-website/',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
