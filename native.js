module.exports = {
    rules: {
        'arrow-spacing': 'warn',
        'brace-style': 'warn',
        'comma-dangle': 'warn',
        'comma-spacing': ['warn', {
            'before': false,
            'after': true
        }],
        'eqeqeq': 'warn',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'keyword-spacing': 'warn',
        'key-spacing': 'warn',
        'linebreak-style': ['warn', 'unix'],
        'max-len': ['warn', 140, 4, { 'ignoreUrls': true }],
        'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'no-shadow': 'warn',
        'no-undef': 'warn',
        'no-unused-vars': 'warn',
        'no-use-before-define': ['warn', { functions: false }],
        'object-curly-spacing': ['warn', 'always'],
        'object-shorthand': 'warn',
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
        'prefer-const': 'warn',
        'space-in-parens': 'warn',
        'react/jsx-curly-spacing': ['warn', { when: 'always', spacing: {
            objectLiterals: 'never'
        } }],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'semi': ['warn', 'always'],
        'space-before-blocks': 'warn',
        'space-infix-ops': 'warn'
    }
};
