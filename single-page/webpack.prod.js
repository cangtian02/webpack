/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-13 11:41:01
 * @Description: ...
 */
const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: 'source-map',
  // 抽离公共js
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    // 压缩
    new UglifyJSPlugin({
      sourceMap: true
    }),
    // 抽离css
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  output: {
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
});
