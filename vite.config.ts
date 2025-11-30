import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: "globalThis",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/__tests__/setupTests.test.tsx",
    include: [
      "**/*.{test,spec}.?(c|m)[jt]s?(x)",
      "**/__tests__/**/*.{js,jsx,ts,tsx}",
    ],
  },
});
