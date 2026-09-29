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
          /^btn-/
        ],
        deep: [
          /blog/,
          /content/,
          /rich-text/
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
  build: {
    cssTarget: "safari12",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
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
          }
        },
      },
    },
  },
});
