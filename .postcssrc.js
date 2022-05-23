/*
 * @Author: fastfan
 * @Date: 2022-05-23 20:29:31
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 20:29:32
 * @Description: your description
 */
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
      'postcss-import': {},
      'postcss-url': {},
      // to edit target browsers: use "browserslist" field in package.json
      autoprefixer: { browsers: ['Android >= 4.0', 'iOS >= 7'] },
      'postcss-pxtorem': {
        // vant px 转rem 插件配置
        rootValue: 13,
        propList: ['*'],
      },
    },
  };