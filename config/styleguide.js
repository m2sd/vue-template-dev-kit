'use strict';

module.exports = {
  webpackConfig: require('./webpack.base'),
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