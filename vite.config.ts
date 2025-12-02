import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isCloudBuild = process.env.BUILD_TARGET === 'cloud';

console.log(`[vite.config] BUILD_TARGET=${process.env.BUILD_TARGET}, isCloudBuild=${isCloudBuild}`);

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: isCloudBuild ? 'cloud.html' : 'index.html'
    }
  }
});