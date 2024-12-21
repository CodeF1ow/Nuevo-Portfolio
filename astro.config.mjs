import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), netlify()], // Asegúrate de incluir `netlify` como integración
  output: 'server', // Cambia 'hybrid' a 'server' o 'static' según lo que necesites
});

