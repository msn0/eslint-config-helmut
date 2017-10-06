module.exports = {
    plugins: ['react'],
    rules: {
        'react/jsx-curly-spacing': ['warn', { when: 'always', spacing: { objectLiterals: 'never' } }],
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn'
    }
};
