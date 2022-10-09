module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'import', '@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': 'error',
    'no-return-await': 'error',
    'no-param-reassign': [2, { props: false }],
    'no-whitespace-before-property': 'error',
    'no-await-in-loop': 0,
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'no-else-return': 'error',
    'no-multi-spaces': 'error',
    'no-eval': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'warn',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': [
      'warn',
      {
        object: true,
        array: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
}
