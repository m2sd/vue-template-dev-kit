'use strict';

/** User input */
const projectName = 'Project name';

/** Utilities */
const path = require('path');

/** Common plugins */
const HTMLPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');

/** Variables */
const ENV = process.env.NODE_ENV;
const styleLoader = (ENV === 'development') ? 'vue-style-loader' : require('mini-css-extract-plugin').loader;

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[id].js'
  },
  plugins: [
    new HTMLPlugin({
      title: projectName,
      template: path.resolve(__dirname, '../src/index.ejs')
    }),
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      configFile: path.join(__dirname, 'stylelint.js'),
      files: ['src/**/*.{vue,htm,html,ejs,css,sss,less,scss,sass}']
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.s?css$/,
        use: [
          styleLoader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              styleLoader,
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/assets/images/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'layouts': path.resolve(__dirname, '../src/layouts'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src/'),
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  }
};