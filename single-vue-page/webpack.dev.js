/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-14 18:00:23
 * @Description: ...
 */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  target: 'web',
  // 开发服务、热更新、proxy代理解决开发环境跨域
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    // open: true, // 是否自动浏览器打开页面
    port: 8087,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});
