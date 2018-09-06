'use strict';

const CONFIG = require('./webpack.base');
const webpack = require('webpack');

/** Plugins */
// Show bundle sizes in graphical interface
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

CONFIG.mode = 'development';
CONFIG.devtool = '#eval-source-map';
CONFIG.plugins.unshift(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
);
CONFIG.plugins.push(new BundleAnalyzerPlugin());

module.exports = CONFIG;