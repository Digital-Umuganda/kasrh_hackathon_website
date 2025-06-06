import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/kasr_hackathon",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
