import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

// Configuration entry point
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: "/static/",
  build: {
    manifest: "manifest.json",
    outDir: "./static",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: "./src/js/index.js",
        styles: "./src/css/styles.css"
      }
    },
  },
});