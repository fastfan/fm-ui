/*
 * @Author: fastfan
 * @Date: 2022-06-30 16:43:06
 * @LastEditors: fastfan
 * @LastEditTime: 2022-06-30 17:52:21
 * @Description: your description
 */
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import babel from 'rollup-plugin-babel'
import cjs from '@rollup/plugin-commonjs'
import svg from 'rollup-plugin-svg'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import node from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import url from 'rollup-plugin-url'
import scss from 'rollup-plugin-scss'
import acornJSX from 'acorn-jsx'
import imagePlugin from '@rollup/plugin-image'
export function getConfig(type, min = true) {
  const config = {
    input: './src/index.js',
    acornInjectPlugins: [acornJSX({ allowNamespaces: false })],
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
        file: 'lib/index.js',
        globals: {
          vue: 'vue'
        }
      }],
    plugins: [
      vue({
        css: true,
        compileTemplate: true
      }),
      node({
        extensions: ['.vue', '.mjs', '.js', '.jsx', '.json']
      }),
      cjs(),
      scss(),
      svg(),
      json(),
      globals(),
      builtins(),
      replace({
        preventAssignment: true
      }),
      babel({
        exclude: '/node_modules/**',
        runtimeHelpers: true
      }),
      url({
        include: ['**/*.woff', '**/*.ttf'], // 打包字体为base64
        limit: Infinity
      }),
      imagePlugin()
    ]
  }

  if (min !== false) {
    // config.plugins.push(terser())
  }
  return config
}
export default getConfig('vue')
