const jsRules = {
  '@typescript-eslint/no-unused-vars': ['error'],
  'no-console': 'error',
}

module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: jsRules,
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: jsRules,
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // Prettier will be used as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
  ],
}
