/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-12 15:21:00
 * @Description: ...
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    index: './src/pages/index/index.js',
    list: './src/pages/list/list.js',
  },
  // 解析
  resolve: {
    extensions: ['.js', '.json'],
    // 别名
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'common': path.resolve(__dirname, 'src/common'),
    }
  },
  // 插件
  plugins: [
    // 清理输出dist文件夹
    new CleanWebpackPlugin(),
    // 输出html文件
    new HtmlWebpackPlugin({
      // 使用模板
      title: 'multiple-page-index',
      template:'./src/pages/index/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      // 使用模板
      title: 'multiple-page-list',
      template:'./src/pages/list/list.html',
      filename: 'list.html',
      chunks: ['list']
    })
  ],
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(htm|html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
