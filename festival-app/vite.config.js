import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  /*   base: "/web/dist/",
   */ plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
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
});
