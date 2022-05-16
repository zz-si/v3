const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const chalk = require('chalk')
module.exports = {
  // 入口文件
  entry: {
    main: './src/main.ts'
  },
  // 输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    // hash根据内容改变而改变，用于浏览器是否缓存
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'vu3'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/chunk-[contenthash].css',
      ignoreOrder: true,
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    })
  ],
  module: {
    rules: [{
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource',
        parser: {
          // < 25kb转base64
          dataUrlCpmdition: {
            maxSize: 25 * 1024,
          }
        },
        // 打包到dist/images
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        test: /.(t|j)s$/,
        exclude: /node-modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          // 暂时不适用多线程
          // 'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage', // 按需引入 polyfill
                    corejs: 3,
                  },
                ],
                [
                  "@babel/preset-typescript",
                  {
                    allExtensions: true, //支持所有文件扩展名
                  },
                ],
              ],
              // 编译后缓存
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      assets: '~/assets',
      // ？
      // tools: '~tools'
    },
    extensions: ['.js', '.ts', '.vue', '.json']
  }
}
