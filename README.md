# Manager-FrontEnd

## 项目启动

```sh

pnpm install
```

### 开发模式热加载启动

package.json dev 选项设置--open(pnpm run dev后自动打开浏览器)

```sh
  "scripts": {
    "dev": "vite --open",
  },
```

```sh
pnpm run dev
```

### 生成目标文件

```sh
pnpm run build
```

### 语法检查 [ESLint](https://eslint.org/)

```sh
pnpm run lint
```

## eslint配置

package.json文件

```sh
  "scripts": {
    "lint":"eslint src",
    "fix":"eslint src --fix"
  },
```

```sh
pnpm install eslint -D
```

```sh
npx eslint --init
```

项目更目录创建.eslintrc.cjs配置文件

```sh
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', '@typescript-eslint'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error', // 禁止空余的多行
    'no-useless-escape': 'off', // 禁止不必要的转义字符

    // typeScript (https://typescript-eslint.io/rules)
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/semi': 'off',

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  },
};
```

项目更目录创建.eslintignore配置文件

```sh
dist
node_modules
```

项目更目录创建.prettierignore配置文件

```sh
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

## vue3环境代码校验插件安装

```sh
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser
```

配置prettier

```sh
pnpm install eslint-plugin-prettier prettier eslint-config-prettier -D
```

项目更目录创建.prettierrc.json配置文件

```sh
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

### 配置stylelint

```sh
pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss  -D
```

项目更目录创建.stylelintrc.cjs配置文件

```sh
module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
```

项目更目录创建.stylelintignore配置文件

```sh
/node_modules/*
/dist/*
/html/*
/public/*
```

package.json文件加入下面命令

```sh
  "scripts": {
    "fmt":"prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
  },
```

### husky配置

```sh
先创建git仓库提交后执行下面命令
```

```sh
pnpm install husky

npx husky-init
```

### commiLint配置

```sh
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

## 项目更目录创建commitlint.config.cjs配置文件

```sh
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
  },
}
```

package.json文件加入如下命令

```sh
  "scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V",
  },
```

配置husky

.husky文件夹新建commit-msg文件内容如下

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint
```

### 限制使用的包管理工具

根目录新建scripts文件夹->新建preinstall.js文件内容如下

```sh
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

packge.json文件增加如下命令

```sh
"preinstall": "node ./scripts/preinstall.js",
```

### 安装element-plus

```shs
pnpm install element-plus @element-plus/icons-vue
```

入口文件main.ts全局安装element-plus,默认支持语音英语设置为中文

```sh
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus,{
  locale:zhCn
})
```

### SVG图标配置

```sh
pnpm install vite-plugin-svg-icons -D
```

在vite.config.ts中配置插件

```sh
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default ()=>{
  return {
    plugins:[
      createSvgIconsPlugin({
        iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
        symbolId:'icon-[dir]-[name]'
      }),
    ]
  }
}
```
