import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 指定打包後的輸出目錄
    rollupOptions: {
      // 自定義 Rollup 設置
    },
  },
});
