import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin voor Vite
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // automatische update van de service worker
      devOptions: {
        enabled: true, // Zorg ervoor dat de PWA ook in de development omgeving geactiveerd wordt
      },
      manifest: {
        name: "❤️U Festival",
        short_name: "❤️U",
        description: "We ❤️ Festival",
        theme_color: "#247BA0",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        background_color: "#ffffff",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  extend: {
    fontFamily: {
      custom: ["roboto", "sans-serif"],
    },
  },
  content: ["./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}"],
});
