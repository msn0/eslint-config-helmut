module.exports = {
    plugins: ['react'],
    rules: {
        'react/jsx-curly-spacing': ['error', { when: 'always', spacing: { objectLiterals: 'never' } }],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
    }
};
