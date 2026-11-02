import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.chironapp.com",
  // base: '/chiron-website/', // Removed for custom domain
  integrations: [tailwind(), sitemap()],
  output: "static",
  redirects: {
    // TestFlight beta guide retired at App Store launch
    "/support-center/beta-guide": "/support-center/getting-started/",
  },
  server: { host: true },
  vite: {
    server: { allowedHosts: true },
  },
});
