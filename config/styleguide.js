'use strict';

module.exports = {
  sections: [
    {
      name: "UI Components",
      components: [
        'src/components/**/*.vue'
      ],
      webpackConfig: require('./webpack.prod')
    }
  ]
};