module.exports = {
    plugins: ['react'],
    rules: {
        'arrow-spacing': 'warn',
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', {
            'before': false,
            'after': true
        }],
        'eqeqeq': 'warn',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'keyword-spacing': 'warn',
        'linebreak-style': ['warn', 'unix'],
        'max-len': ['warn', 120, 4, { 'ignoreUrls': true }],
        'no-undef': ['warn'],
        'no-unused-vars': ['warn'],
        'no-use-before-define': ['warn', { functions: false }],
        'object-curly-spacing': ['warn', 'always'],
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'semi': ['warn', 'always'],
        'space-before-blocks': 'warn',
        'space-infix-ops': ['warn']
    },
    env: {
        'es6': true,
        'node': true,
        'browser': true
    },
    parser: 'babel-eslint'
};
