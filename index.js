module.exports = {
    extends: ['./native.js', './react.js'],
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
