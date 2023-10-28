import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Icons from "./public/icons.json";

import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  // includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "ChatUI",
    short_name: "ChatUI",
    description:
      "An app that retrives data from a API and displays it as a chat",
    icons: Icons.icons,
    theme_color: "#FAF9F4",
    background_color: "#FAF9F4",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
