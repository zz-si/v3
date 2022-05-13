"use strict";

var path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var _require = require('vue-loader'),
    VueLoaderPlugin = _require.VueLoaderPlugin;

var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var chalk = require('chalk');

module.exports = {
  // 入口文件
  entry: {
    main: './src/main.js'
  },
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    // hash根据内容改变而改变，用于浏览器是否缓存
    filename: 'js/chunk-[contenthash].js',
    clean: true
  },
  plugins: [new HTMLWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
  }), new MiniCssExtractPlugin({
    filename: 'styles/chunk-[contenthash].css',
    ignoreOrder: true
  }), new VueLoaderPlugin(), new ProgressBarPlugin({
    format: "build [:bar] ".concat(chalk.green.bold(':percent'), " (:elapsed seconds)")
  })],
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: [MiniCssExtractPlugin.loader, // 'style-loader',
      'css-loader', 'sass-loader']
    }, {
      test: /\.(png|jpe?g|gif|svg|webp)$/,
      type: 'asset/resource',
      parser: {
        // < 25kb转base64
        dataUrlCpmdition: {
          maxSize: 25 * 1024
        }
      },
      // 打包到dist/images
      generator: {
        filename: 'images/[contenthash][ext][query]'
      }
    }, {
      test: /.js$/,
      exclude: /node-modules/,
      include: path.resolve(__dirname, '../src'),
      use: [// 暂时不适用多线程
      // 'thread-loader',
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          // 编译后缓存
          cacheDirectory: true
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: '~/assets' // ？
      // tools: '~tools'

    },
    extensions: ['.js', '.ts', '.scss', '.vue']
  }
};