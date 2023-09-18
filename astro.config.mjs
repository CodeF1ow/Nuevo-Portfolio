import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://k1ri86.github.io',
  base: '/Nuevo-Portfolio',
  output: 'hybrid',
  adapter: netlify(),
});
