const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  devServer: {
    open: true
  },
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: 'body',
      title: 'vue3'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/chunk-[contenthash].css',
      ignoreOrder: true,
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
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
          dataUrlCpmdition: {
            maxSize: 25 * 1024,
          }
        },
        generator: {
          filename: 'images/[contenthash][ext][query]'
        }
      },
      {
        test: /.js$/,
        exclude: /node-modules/,
        use: [
          'babel-loader'
        ]
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     exclude: [
        //       /node_modules[\\\/]core-js/,
        //       /node_modules[\\\/]webpack[\\\/]buildin/,
        //     ],
        //     presets: [['@babel/preset-env', {
        //         useBuiltIns: 'usage',
        //         corejs: 3
        //     }]]
        //   }
        // }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': console.log(path.resolve('./src')) || path.resolve('./src'),
      assets: '~/assets',
      tools: '~tools'
    },
    extensions: ['.js', '.ts', '.scss', '.vue']
  }
  // watch: true 
}