import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: "3001",
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@routes": resolve(__dirname, "./src/routes"),
    },
  },
});