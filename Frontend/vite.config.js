import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import purgecss from "vite-plugin-purgecss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      // "ios >= 11" was too broad and generated unnecessary polyfills.
      // "ios >= 14" covers all iPhones that can actually run React 19.
      targets: ["ios >= 14", "defaults", "not IE 11"],
    }),
    purgecss({
      content: ["./src/**/*.jsx", "./src/**/*.js", "./index.html"],
      keyframes: false,
      safelist: {
        standard: [
          /^aos-/,
          /^fa-/,
          /^fas/,
          /^far/,
          /^fab/,
          /^active/,
          /^show/,
          /^modal/,
          /^nav-/,
          /^dropdown-/,
          /^swiper/,
          /^btn-/,
          /^th-/,
          /^hn-/,
          /^au-/,
          /^pfc-/,
          /^ppop-/,
          /^bm-/,
          "th-track--left",
          "th-track--right"
        ],
        deep: [
          /blog/,
          /content/,
          /rich-text/,
          /th-/,
          /track/
        ]
      }
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 3006,
    host: true,
    allowedHosts: ["brandmingo.in", "www.brandmingo.in", "localhost"],
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    chunkSizeWarningLimit: 1000,
    cssTarget: "safari12",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@tiptap")) {
              return "admin-editor";
            }
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor";
            }
            if (
              id.includes("framer-motion") ||
              id.includes("gsap") ||
              id.includes("aos")
            ) {
              return "animations";
            }
            if (id.includes("@fortawesome") || id.includes("react-icons")) {
              return "icons";
            }
          }
        },
      },
    },
  },
});
