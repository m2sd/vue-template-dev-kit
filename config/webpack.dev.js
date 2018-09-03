'use strict';

const CONFIG = require('./webpack.base');
const webpack = require('webpack');

CONFIG.mode = 'development';
CONFIG.devtool = '#eval-source-map';
CONFIG.plugins = (CONFIG.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
]);

module.exports = CONFIG;