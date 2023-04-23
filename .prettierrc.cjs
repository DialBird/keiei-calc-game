module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: './src/**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: 'always',
  jsxSingleQuote: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}
