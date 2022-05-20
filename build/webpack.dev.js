const path = require('path');
const {
  merge
} = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://cnodejs.org',
        // 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器
        secure: false,
        // 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,
        changeOrigin: true,
      },
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    // css样式规范配置
    new StylelintWebpackPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      files: ['**/*.scss'],
    }),
    new ESLintPlugin({
      extensions: ["js", "ts", "vue", 'jsx'],
      fix: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development'),
        }
      }
    })
  ]
})
