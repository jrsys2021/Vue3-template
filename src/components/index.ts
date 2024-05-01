// 自定义组件注册插件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'
import * as components from './components'

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
  // element图标安装
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

export default install
export * from './components'
