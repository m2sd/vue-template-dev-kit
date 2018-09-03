'use strict';

const CONFIG = require('./webpack.base');

/** Utilities */
const path = require('path');
const webpack = require('webpack');

/** Plugins */
// Cleanup
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Optimization
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const ImageMinWebpackPlugin = require('imagemin-webpack-plugin').default;
const HTMLCriticalPlugin = require('html-critical-webpack-plugin');

// Static file generation
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

CONFIG.mode = process.env.NODE_ENV;
CONFIG.devtool = '#source-map';
CONFIG.plugins = (CONFIG.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new CleanWebpackPlugin(['dist'], {
    root: path.resolve(__dirname, '../')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new ImageMinWebpackPlugin({
    test: /\.(jpe?g|png|gif|svg)$/i,
    optipng: { optimizationLevel: 3 },
    jpegtran: { progressive: true },
    gifsicle: { optimizationLevel: 1 },
    svgo: {},
  }),
  new MiniCSSExtractPlugin({
    filename: 'css/[name].css',
    chunkFilename: 'css/[name].[id].css'
  }),
  new PrerenderSPAPlugin({
    staticDir: path.resolve(__dirname, '../dist/'),
    routes: ['/'],
    minify: {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      keepClosingSlash: true,
      sortAttributes: true
    },
    renderer: new Renderer({
      renderAfterDocumentEvent: 'render-event'
    })
  }),
  new HTMLCriticalPlugin({
    base: path.resolve(__dirname, '../dist/'),
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: true,
    extract: true,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false
    }
  })
]);

CONFIG.optimization = {
  splitChunks: {
    cacheGroups: {
      common: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all'
      }
    }
  },
  minimizer: [
    new UglifyJSWebpackPlugin({
      cache: true,
      parallel: true
    })
  ]
};

module.exports = CONFIG;