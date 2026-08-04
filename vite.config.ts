import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * ⚠️ Required even though this library is never `vite build`-ed itself.
 * @storybook/vue3-vite does NOT apply the Vue plugin without a root
 * vite.config.ts declaring it — `build-storybook` then fails with
 * "Expression expected" on the first .vue file, because rollup receives the raw
 * SFC. Vécu FDC 2026-07-07. Storybook merges this config; vitest keeps its own.
 */
export default defineConfig({
  plugins: [vue()],
})
