/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-14 19:52:35
 * @Description: ...
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口
  entry: {
    app: './src/js/index.js',
  },
  // 解析
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    // 别名
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  // 插件
  plugins: [
    new VueLoaderPlugin(),
    // 清理输出dist文件夹
    new CleanWebpackPlugin(),
    // 输出html文件
    new HtmlWebpackPlugin({
      // 使用模板
      template: './src/index.html',
    }),
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
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(htm|html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
          }
        }
      }
    ]
  }
};
