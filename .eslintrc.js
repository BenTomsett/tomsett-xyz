module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2021,
    'sourceType': 'module',
    'project': './tsconfig.json',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'ignorePatterns': [
    '.eslintrc.js',
    '*.config.js',
  ],
  'rules': {
    'react/prefer-es6-class': [
      'off',
      'never',
    ],
    'react/function-component-definition': [
      'off',
      'never',
    ],
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-props-no-spreading': [
      'error', {
        'exceptions': ['Component'],
      }],
  },
};