module.exports = {
   env: {
      browser: true,
      node: true,
      es2021: true,
   },
   extends: ['eslint:recommended', 'plugin:react/recommended'],
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react'],
   rules: {
      indent: ['error', 3],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
      'no-unused-vars': 'warn'
   },
}
