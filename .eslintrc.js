module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'react/no-string-refs': 0,
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': 0,
    'max-len': 1,
    'no-empty': 1,
    'max-classes-per-file': 1,
    'react/jsx-props-no-spreading': 0
  },
};
