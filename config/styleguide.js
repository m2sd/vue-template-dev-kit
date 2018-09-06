'use strict';

const path = require('path');
const wpConfig = require('./webpack.base');

const CleanPlugin = require('clean-webpack-plugin');

wpConfig.plugins.push(
  new CleanPlugin(['styleguide'], {
    root: path.resolve(__dirname, '../')
  }),
);

module.exports = {
  webpackConfig: wpConfig,
  styleguideDir: path.resolve(__dirname, '../styleguide/'),
  sections: [
    {
      name: "UI Components",
      components: [
        '../src/components/*.vue'
      ]
    },
    {
      name: "UI Elements",
      components: [
        '../src/elements/*.vue'
      ]
    }
  ]
};