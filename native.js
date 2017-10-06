module.exports = {
    rules: {
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': 'error',
        'comma-spacing': ['error', {
            'before': false,
            'after': true
        }],
        'eqeqeq': 'error',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'keyword-spacing': 'error',
        'key-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'max-len': ['error', 140, 4, { 'ignoreUrls': true }],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'no-shadow': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': ['error', { functions: false }],
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': 'error',
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'prefer-const': 'error',
        'space-in-parens': 'error',
        'react/jsx-curly-spacing': ['error', { when: 'always', spacing: {
            objectLiterals: 'never'
        } }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'semi': ['error', 'always'],
        'space-before-blocks': 'error',
        'space-infix-ops': 'error'
    }
};
