module.exports = {
  extends: ['plugin:react/recommended', '@juicyarts/eslint-config'],
  rules: {
    'react/display-name': [0],
    'react/prop-types': [0],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    useJSXTextNode: true
  }
};
