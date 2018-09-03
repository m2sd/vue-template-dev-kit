'use strict';

const OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'prettier/prettier': [ERROR, {
      'singleQuote': true,
      'parser': 'vue'
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : OFF,
    'no-new': OFF,
    'no-undef': OFF,
    'semi': OFF,
    'no-extra-semi': OFF,
    'no-mixed-spaces-and-tabs': OFF,
    'no-unexpected-multiline': OFF
  }
};
