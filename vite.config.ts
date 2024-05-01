import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { ConfigEnv, loadEnv, UserConfigExport } from 'vite'
// 引入Svg插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入vue开发工具
import VueDevTools from 'vite-plugin-vue-devtools'
// 引入setup扩展插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 引入mock
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [
      vue(),
      VueDevTools(),

      VueSetupExtend(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // localEnabled: command === 'serve',
        enable: true,
        logger: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
}
