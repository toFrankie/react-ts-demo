module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['alloy', 'alloy/react'],
  settings: {
    react: {
      version: 'detect'
    }
  }
}
