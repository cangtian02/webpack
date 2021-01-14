/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-11 14:42:32
 * @Description: ...
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // 入口
  entry: {
    app: './src/index.js'
  },
  // 插件
  plugins: [
    // 清理输出dist文件夹
    new CleanWebpackPlugin(),
    // 输出html文件
    new HtmlWebpackPlugin({
      title: 'webpack demo1'
    }),
    // Shimming 预置依赖
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // })
  ],
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [

    ]
  }
};
