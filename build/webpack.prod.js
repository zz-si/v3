const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
let productionGzipExtensions = /\.(js|css|json|txt|html|ico|png|jpe?g|gif|svg|webp)(\?.*)?$/i
module.exports = merge(base, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
        }
      }      
    }),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      test: productionGzipExtensions,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩js
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        // 不使用多进程压缩
        parallel: false,
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true, // 去除console
          }
        }
      }), 
      // 压缩css
      new CssMinimizerPlugin({
          parallel: false,
      })
    ]
  }
})