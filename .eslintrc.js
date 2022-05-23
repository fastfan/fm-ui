/*
 * @Author: fastfan
 * @Date: 2022-05-23 20:28:10
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 20:28:10
 * @Description: your description
 */
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'prettier/prettier': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };