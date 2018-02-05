'use strict';

module.exports = {
    extends: ['./native.js'],
    env: {
        'es6': true,
        'node': true,
        'browser': true
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    }
};
