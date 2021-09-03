module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['alloy', 'alloy/react', 'plugin:react-hooks/recommended'],
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1
  }
}
