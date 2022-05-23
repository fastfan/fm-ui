/*
 * @Author: fastfan
 * @Date: 2022-05-23 19:54:10
 * @LastEditors: fastfan
 * @LastEditTime: 2022-05-23 19:55:30
 * @Description: your description
 */
const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "test/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options;
      });
  }
};