module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  bracketSpacing: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.vue',
      options: {
        pugSingleQuote: false
      }
    }
  ]
}
