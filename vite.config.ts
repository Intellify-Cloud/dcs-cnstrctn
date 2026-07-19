import { fileURLToPath, URL } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import yamlPluginRaw from '@rollup/plugin-yaml'

// @rollup/plugin-yaml ships CJS with ESM-style type declarations; unwrap
// the interop so TypeScript sees the callable plugin factory.
const yaml = yamlPluginRaw as unknown as (options?: unknown) => Plugin

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the project site under /ot-nj-demo/; deploy.sh sets
  // DEPLOY_BASE accordingly. Local dev and other hosts keep the root base.
  base: process.env.DEPLOY_BASE ?? "/",
  plugins: [vue(), yaml()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
