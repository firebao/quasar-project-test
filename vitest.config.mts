/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-27 14:59:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-29 15:45:29
 * @Description  : vitest单元测试配置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: 'test/vitest/setup-file.ts',
    include: [
      // Matches vitest tests in any subfolder of 'src' or into 'test/vitest/__tests__'
      // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
      'src/**/*.vitest.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/vitest/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }) as Plugin,
    quasar({
      sassVariables: 'src/quasar-variables.scss',
    }) as Plugin,
    tsconfigPaths() as Plugin,
  ],
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    'process.env': {},
  },
})
