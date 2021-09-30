module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:react-hooks/recommended'],
  plugins: ['react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-invalid-this': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/explicit-member-accessibility': 0
  }
}
