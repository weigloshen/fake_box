import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import { resolve } from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    include: ["src/assets/*.svg", "src/assets/icon_file_type/*.svg"],
    svgrOptions: {
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
      svgoConfig: {
        floatPrecision: 2,
      },
    },
  })],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
      "@icon": resolve(__dirname, 'src/assets'), // 路径别名
    }
  }
})
