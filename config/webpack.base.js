'use strict';

/** User input */
const projectName = 'Project name';

/** Utilities */
const path = require('path');

/** Common plugins */
// Index file generation
const HTMLPlugin = require('html-webpack-plugin');
// Style Linting
const StyleLintPlugin = require('stylelint-webpack-plugin');
// Vue loader
const { VueLoaderPlugin } = require('vue-loader');
/** @todo: implement media-query-plugin */
//const MediaQueryPlugin = require('media-query-plugin');

/** Variables */
const ENV = process.env.NODE_ENV;
const styleLoader = (ENV === 'production') ? require('mini-css-extract-plugin').loader : 'vue-style-loader';
const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    config: {
      path: __dirname
    }
  }
};

const CONFIG = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[id].js'
  },
  plugins: [
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      configFile: path.join(__dirname, 'stylelint.js'),
      files: ['src/**/*.{vue,htm,html,ejs,css,sss,less,scss,sass}']
    }),
    /*new MediaQueryPlugin({
      include: [
        'main'
      ],
      queries: {
        'only screen and (min-width: 75em)': 'xlarge',
        'only screen and (min-width: 64em) and (max-width: 74.9375em)': 'large-only',
        'only screen and (min-width: 64em)': 'large',
        'only screen and (min-width: 40em) and (max-width: 63.9375em)': 'medium-only',
        'only screen and (min-width: 40em)': 'medium',
      }
    })*/
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
          //MediaQueryPlugin.loader,
          postCssLoader,
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
              //MediaQueryPlugin.loader,
              postCssLoader,
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
      'layouts': path.resolve(__dirname, '../src/layouts/'),
      'assets': path.resolve(__dirname, '../src/assets/'),
      'components': path.resolve(__dirname, '../src/components/'),
      'elements': path.resolve(__dirname, '../src/elements/'),
      'styles': path.resolve(__dirname, '../src/styles')
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

Object.keys(CONFIG.entry).forEach((chunk) => {
  CONFIG.plugins.unshift(
    new HTMLPlugin({
      title: projectName,
      template: path.resolve(__dirname, '../src/index.ejs'),
      chunks: [
        'vendor',
        chunk
      ],
      filename: chunk === 'main' ? 'index.html' : chunk + '.html'
    })
  );
});

module.exports = CONFIG;