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
    hot: true
  },
  devtool: 'eval-cheap-module-source-map',
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
