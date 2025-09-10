import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Aryuv/", // required for GitHub Pages
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:3000", // local API proxy
    },
  },
});
