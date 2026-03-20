import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bergner.com.ar',
  integrations: [react(), tailwind(), sitemap()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});
