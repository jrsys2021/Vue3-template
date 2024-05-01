import App from '@/App.vue'
import { createApp } from 'vue'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// SVG配置代码
import ComponentRegister from '@/components/index'
import 'virtual:svg-icons-register'
// 全局样式导入
import '@/styles/index.scss'
// 路由注册
import router from './router'
// element-plus导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(router)
  .use(ComponentRegister)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
