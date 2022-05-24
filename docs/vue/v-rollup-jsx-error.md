---
title: 解决rollup打包vue2.x组件库JSX无法识别的问题
date: 2022-05-23
sidebar: 'auto'
categories:
 - vue
tags:
 - rollup
publish: true
---

## 问题描述

在以roullup作为打包的vue项目中，我们可能会遇到这样的问题，如下：

```js
[!] Error: Unexpected token
src/Hello.vue?rollup-plugin-vue=script.js (4:11)
2: export default {
3:   render (h) {
4:     return <div>Hello</div>
              ^
5:   }
6: }
Error: Unexpected token

```
碰到了jsx语法运行时没有报错，正常显示页面，但是打包时报错了。

## 问题定位
jsx语法打包报错，刚开始以为是没有安装上转化jsx的插件，后来发现是配置的，而且运行是正常的，所以只有可能是某些规范没有符合rollup的打包规范，

进一步定位到rollup-plugin-vue插件里。然后很有可能是打包时代码压缩问题，然后在网上搜索rollup打包react语法及tsx语法找到了`acorn-jsx`。

`acorn-jsx`是什么了？在它的github上找到了简介：

> Alternative, faster React.js JSX parser 

就是jsx解析器。然后在它的github小找到了如下代码：
```js
acorn.Parser.extend(jsx({ allowNamespaces: false }))
```
官方解释是：由于大多数应用程序使用纯 React 转换器，因此引入了一个允许完全禁止命名空间的新选项，请注意，默认情况下allowNamespaces启用规范合规性。

## 解决方法
在rollup.config.js里引入 `acorn-jsx`

```js
const acornJSX = require( 'acorn-jsx' );

export function getConfig(type, min = true) {
  const config = {
    input: './src/index.js',
    acornInjectPlugins : [acornJSX( { allowNamespaces : false } )],
    external: id => {
      if (/^(vue)$/.test(id)) {
        return true
      }
      if (/@babel\/runtime/.test(id)) {
        return true
      }
      if (/^echarts/.test(id)) {
        return true
      }
      if (/^lodash/.test(id)) {
        return true
      }
      if (/^resize-detector/.test(id)) {
        return true
      }
      if (/^sortablejs/.test(id)) {
        return true
      }
    },
    output: [
      {
        format: 'esm',
        file: 'lib/index.js'
      }],
    plugins: [
      vue({
        css: true,
        compileTemplate: true
      }),
      node({
        browser: true,
        preferBuiltins: false,
        extensions: ['.vue', '.mjs', '.js', '.jsx', '.json']
      }),
      cjs(),
      scss(),
      svg(),
      image(),
      json(),
      globals(),
      builtins(),
      replace({
        preventAssignment: true
      }),
      babel({
        exclude: '/node_modules/**',
        runtimeHelpers: true,
        presets: ["@vue/babel-preset-jsx"]
      }),
      url({
        include: ['**/*.woff', '**/*.ttf'], // 打包字体为base64
        limit: Infinity
      })
    ]
  }

  if (min !== false) {
    config.plugins.push(terser())
  }
  return config
}

```