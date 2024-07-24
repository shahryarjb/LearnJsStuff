/***
 * Excerpted from "Test-Driven React, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/tbreact2 for more book information.
***/
module.exports = {
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
  },
};
